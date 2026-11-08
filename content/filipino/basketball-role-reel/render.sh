#!/usr/bin/env bash
# Render the Filipino caption version of the source reel.
#
#   ./render.sh <source.mp4> [output.mp4]
#
# The source has English captions burned in around y=912..1092, so that band is
# blurred and slightly darkened before the Filipino ASS captions are drawn on top.
set -euo pipefail

SRC="${1:?usage: render.sh <source.mp4> [output.mp4]}"
OUT="${2:-basketball-role-reel-fil.mp4}"
ASS="$(cd "$(dirname "$0")" && pwd)/captions-fil.ass"

ffmpeg -y -i "$SRC" \
  -filter_complex "[0:v]split=2[base][tmp];\
[tmp]crop=720:180:0:912,gblur=sigma=45,eq=brightness=-0.16:saturation=0.45[bl];\
[base][bl]overlay=0:912[bg];\
[bg]ass=${ASS}[v]" \
  -map "[v]" -map 0:a \
  -c:v libx264 -preset slow -crf 23 -pix_fmt yuv420p \
  -c:a copy -movflags +faststart "$OUT"
