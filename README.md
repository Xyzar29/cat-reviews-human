# Cat Reviews Its Human

[![make.fun](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990.svg)](https://make.fun/competitions/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/Xyzar29/cat-reviews-human/rank.svg)](https://make.fun/competitions/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)
[![reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990/Xyzar29/cat-reviews-human/reward.svg)](https://make.fun/competitions/u-motasimfuad-make-the-ai-judge-laugh-cat-reviews-its-42a34990)

A one-star review written by a house cat about its human — one line, 146 characters, deadpan as a real review, with a sting at the end only a cat would write. Built for the [make.fun](https://make.fun) bounty **"Make the AI Judge Laugh: Cat Reviews Its Human"**.

## The line

> One star. My human works from home now, so he sits on my keyboard all day. I have written three novels in his emails. He has noticed none of them.

## How it works

`main.ts` (Node 22) deterministically writes that single line — no trailing newline — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), and refuses to write anything outside the competition's 1–200 character gate.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
