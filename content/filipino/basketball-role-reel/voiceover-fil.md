# Filipino voiceover script

Ten spoken lines, each aligned to the caption cue windows in `script-fil.md`.
The original English coach audio is kept underneath at 16% for gym ambience;
the Filipino voiceover sits on top.

| # | Start | End | Line |
|---|-------|-----|------|
| 1 | 0.00 | 3.00 | Ayaw makita ng mga coach ang sampung dribbles, tapos step back. |
| 2 | 3.00 | 6.00 | Gusto nilang makita kung kaya mong punan ang role para sa team nila. |
| 3 | 6.00 | 9.50 | Kaya kung ikaw ay point guard, ingatan mo ang bola, isali mo ang mga kateam mo. |
| 4 | 9.50 | 10.80 | Pressure mo ang may bola. |
| 5 | 10.80 | 14.00 | Pumasok ka sa paint. Kung shooter ka, iputok mo ang shots mo. |
| 6 | 14.00 | 16.50 | Magtiwala ka sa shot mo, pero siguraduhing tama ang shot. |
| 7 | 16.50 | 19.20 | Kung big man ka, bantayan ang ring, mag rebound ka. |
| 8 | 19.20 | 23.20 | Ipakita mong kaya mong igalaw ang paa sa pick and roll, nang may mataas na enerhiya. |
| 9 | 23.20 | 26.20 | Para sa lahat yan, mataas na enerhiya at malakas na komunikasyon. |
| 10 | 26.20 | 27.54 | Maging mabuting kateam ka. |

## How it was produced

`make_vo.py` synthesises each line with Meta's MMS Tagalog TTS
(`facebook/mms-tts-tgl`, a VITS model) at `speaking_rate=1.45`, trims the
leading/trailing silence, then time-stretches each line with `atempo` only
where it still overruns its window (ratios landed between 1.00 and 1.30, so
nothing is badly rushed). Lines that finish early leave a natural pause.

Numerals are spelled out (`sampung`, not `10`) because the MMS tokenizer drops
digits. Basketball vocabulary stays in English and comes out with Tagalog
phonetics, which is how it actually sounds in Filipino play.

## Caveat

This is a synthetic voice. It reads the lines correctly and in time, but it
does not carry the intensity of the coach in the source audio. For anything
client-facing, swap in a recorded human VO — drop a 27.5s track in place of
`vo_track.wav` and re-run the mix step in `make_vo.py`.
