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
