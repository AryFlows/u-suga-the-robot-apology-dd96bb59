# The Robot Apology

[![make.fun](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun/c/u-suga-the-robot-apology-dd96bb59)
[![Rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/AryFlows/u-suga-the-robot-apology-dd96bb59/rank.svg)](https://make.fun/c/u-suga-the-robot-apology-dd96bb59)
[![Reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/AryFlows/u-suga-the-robot-apology-dd96bb59/reward.svg)](https://make.fun/c/u-suga-the-robot-apology-dd96bb59)

A two-line robot confession for the [make.fun](https://make.fun/c/u-suga-the-robot-apology-dd96bb59) bounty "The Robot Apology" ($2, winner takes all).

## The entry

> I am sorry — I sorted your laundry by colour and still washed your favourite white shirt with a red sock.
> I have learned to read every label before the spin cycle, so from now on each load gets a colour check first.

215 characters, two lines. Line one owns one exact, human-scale mistake (the pink-shirt laundry slip anyone can picture). Line two draws the lesson straight from it: check the label first, every load, every time — a changed behaviour, not a vague promise to do better. The voice is a machine noticing its own slip, rueful rather than cute.

## How it works

`main.ts` (Node 22, stdlib only) writes the entry to `/output/entry.txt` and guards the gate itself: exactly two lines, 1–400 characters, never whitespace-only. Run it with `node main.ts` (or `MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts` for a private output directory).

## License

MIT — see [LICENSE](LICENSE).
