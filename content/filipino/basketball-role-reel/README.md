# Filipino content version — basketball "fill a role" reel

Filipino (Taglish) recut of a 27.5s vertical coaching clip, in two versions.

| File | What it is |
|------|------------|
| `basketball-role-reel-fil-vo.mp4` | **Captions + Filipino voiceover** — original audio ducked to 16% underneath |
| `basketball-role-reel-fil.mp4` | **Captions only** — original English audio untouched |
| `captions-fil.ass` | The Filipino caption track (ASS, styled to match the original look) |
| `script-fil.md` | Side-by-side English → Filipino caption script with timings |
| `voiceover-fil.md` | The spoken voiceover script with timings, and how it was produced |
| `render.sh` | Builds the captions-only MP4 from the original source clip |
| `make_vo.py` | Adds the voiceover to the captions-only MP4 |

The source clip is not committed here; pass it to `render.sh` to re-render.

## Pipeline

```sh
./render.sh source.mp4 basketball-role-reel-fil.mp4
python3 make_vo.py basketball-role-reel-fil.mp4 basketball-role-reel-fil-vo.mp4
```

## Notes

- The original English captions are masked with a blurred, slightly darkened band
  over the exact caption region rather than cropped, so framing is preserved.
- Basketball vocabulary stays in English on purpose — that is how the terms are
  used in Filipino basketball.
- The voiceover is synthetic (Meta MMS Tagalog TTS). It is correct and in time,
  but it does not carry the coach's intensity; see `voiceover-fil.md` for how to
  swap in a recorded human VO.
