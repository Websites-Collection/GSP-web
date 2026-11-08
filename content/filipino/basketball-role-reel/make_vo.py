#!/usr/bin/env python3
"""Generate the Filipino voiceover track and mix it into the captioned video.

    python3 make_vo.py <captioned-input.mp4> [output.mp4]

Requires: torch, transformers, numpy, scipy, and ffmpeg on PATH
(or set FFMPEG to an ffmpeg binary).
Synthesises each line with facebook/mms-tts-tgl, fits it to its cue window,
lays the lines out on a 27.54s track, then mixes it over the original audio
ducked to 16%.
"""
import os
import subprocess
import sys
import tempfile

import numpy as np
import scipy.io.wavfile as wav
import torch
from transformers import AutoTokenizer, VitsModel

# (start, end, line) — windows match the caption cues in script-fil.md
LINES = [
    (0.00, 3.00, "Ayaw makita ng mga coach ang sampung dribbles, tapos step back."),
    (3.00, 6.00, "Gusto nilang makita kung kaya mong punan ang role para sa team nila."),
    (6.00, 9.50, "Kaya kung ikaw ay point guard, ingatan mo ang bola, isali mo ang mga kateam mo."),
    (9.50, 10.80, "Pressure mo ang may bola."),
    (10.80, 14.00, "Pumasok ka sa paint. Kung shooter ka, iputok mo ang shots mo."),
    (14.00, 16.50, "Magtiwala ka sa shot mo, pero siguraduhing tama ang shot."),
    (16.50, 19.20, "Kung big man ka, bantayan ang ring, mag rebound ka."),
    (19.20, 23.20, "Ipakita mong kaya mong igalaw ang paa sa pick and roll, nang may mataas na enerhiya."),
    (23.20, 26.20, "Para sa lahat yan, mataas na enerhiya at malakas na komunikasyon."),
    (26.20, 27.54, "Maging mabuting kateam ka."),
]

MODEL = "facebook/mms-tts-tgl"
SPEAKING_RATE = 1.45
TOTAL = 27.60
MIX_SR = 44100
BG_LEVEL = 0.16  # original audio kept underneath for gym ambience
FFMPEG = os.environ.get("FFMPEG", "ffmpeg")


def trim_silence(w, sr, thr=0.006):
    idx = np.where(np.abs(w) > thr)[0]
    if not len(idx):
        return w
    return w[max(0, idx[0] - int(0.02 * sr)): min(len(w), idx[-1] + int(0.04 * sr))]


def synth(tmp):
    model = VitsModel.from_pretrained(MODEL).eval()
    model.speaking_rate = SPEAKING_RATE
    model.noise_scale = 0.60
    tok = AutoTokenizer.from_pretrained(MODEL)
    sr = model.config.sampling_rate
    torch.manual_seed(7)

    for i, (start, end, text) in enumerate(LINES):
        with torch.no_grad():
            w = model(**tok(text, return_tensors="pt")).waveform[0].numpy()
        w = trim_silence(w, sr)
        w = w / max(1e-6, np.abs(w).max()) * 0.85
        raw = os.path.join(tmp, f"raw_{i:02d}.wav")
        wav.write(raw, sr, (np.clip(w, -1, 1) * 32767).astype(np.int16))

        # Speed up only if the line still overruns its window; never slow down.
        tempo = max(1.0, (len(w) / sr) / (end - start))
        subprocess.run(
            [FFMPEG, "-y", "-v", "error", "-i", raw,
             "-filter:a", f"atempo={tempo:.4f},aresample={MIX_SR}",
             "-ac", "1", os.path.join(tmp, f"fit_{i:02d}.wav")],
            check=True,
        )


def build_track(tmp):
    track = np.zeros(int(TOTAL * MIX_SR), dtype=np.float32)
    fade = int(0.012 * MIX_SR)
    for i, (start, _end, _text) in enumerate(LINES):
        _sr, w = wav.read(os.path.join(tmp, f"fit_{i:02d}.wav"))
        w = w.astype(np.float32) / 32768.0
        w[:fade] *= np.linspace(0, 1, fade)
        w[-fade:] *= np.linspace(1, 0, fade)
        a = int(start * MIX_SR)
        b = min(a + len(w), len(track))
        track[a:b] += w[: b - a]
    track = track / np.abs(track).max() * 0.92
    path = os.path.join(tmp, "vo_track.wav")
    wav.write(path, MIX_SR, (track * 32767).astype(np.int16))
    return path


def mix(src, vo_track, out):
    subprocess.run(
        [FFMPEG, "-y", "-v", "warning", "-i", src, "-i", vo_track,
         "-filter_complex",
         f"[0:a]volume={BG_LEVEL},aformat=sample_fmts=fltp:sample_rates={MIX_SR}:channel_layouts=stereo[bg];"
         f"[1:a]volume=1.0,aformat=sample_fmts=fltp:sample_rates={MIX_SR}:channel_layouts=stereo[vo];"
         "[bg][vo]amix=inputs=2:duration=first:normalize=0,alimiter=limit=0.95[a]",
         "-map", "0:v", "-map", "[a]", "-c:v", "copy",
         "-c:a", "aac", "-b:a", "160k", "-movflags", "+faststart", out],
        check=True,
    )


def main():
    if len(sys.argv) < 2:
        sys.exit("usage: make_vo.py <captioned-input.mp4> [output.mp4]")
    src = sys.argv[1]
    out = sys.argv[2] if len(sys.argv) > 2 else "basketball-role-reel-fil-vo.mp4"
    with tempfile.TemporaryDirectory() as tmp:
        synth(tmp)
        mix(src, build_track(tmp), out)
    print(f"wrote {out}")


if __name__ == "__main__":
    main()
