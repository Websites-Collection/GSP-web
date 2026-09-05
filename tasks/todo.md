# Filipino content version — basketball reel

## Plan
- [x] Inspect the uploaded MP4 (720x1280, 27.54s, H.264 + HE-AAC)
- [x] Recover the burned-in English caption script frame-by-frame
- [x] Translate to natural Filipino/Taglish, keeping basketball terms in English
- [x] Mask the original English captions (blurred + darkened band over y=912..1092)
- [x] Author an ASS caption track matching the original style and timings
- [x] Render and visually verify every second of the output
- [x] Commit deliverable + caption track + render script

## Result
`content/filipino/basketball-role-reel/`
- `basketball-role-reel-fil.mp4` — final 27.5s Filipino version, original audio kept
- `captions-fil.ass`, `script-fil.md`, `render.sh`, `README.md`

Verified by sampling the rendered output at 1 fps across the full duration: no
residual English caption pixels, all 26 Filipino cues render in-band and in-time.

## Follow-up: Filipino voiceover

- [x] Synthesise a Filipino VO with Meta MMS Tagalog TTS (`facebook/mms-tts-tgl`)
- [x] Fit each of the 10 lines to its caption window (atempo 1.00–1.30, no line badly rushed)
- [x] Mix over the original audio ducked to 16%, limited at 0.95
- [x] Verify every line lands inside its window and levels sit at -15..-21 dBFS with no clipping
- [x] Verify `make_vo.py` reproduces the deliverable end-to-end

Added `basketball-role-reel-fil-vo.mp4` alongside the captions-only cut, plus
`voiceover-fil.md` and `make_vo.py`.

Not verified by ear — the voice is synthetic and was checked by timing and level
analysis only.
