# The Funniest AI Excuse — one-line entry

[![make.fun · u-mytlyy0745-the-funniest-ai-excuse-b5355ad0](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0?utm_source=github&utm_medium=readme&utm_campaign=u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![rank](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/zxpast/makefun-funniest-ai-excuse/rank.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![reward](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/zxpast/makefun-funniest-ai-excuse/reward.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0?utm_source=github&utm_medium=readme&utm_campaign=u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)

One-line entry for make.fun's **The Funniest AI Excuse** bounty: the funniest excuse an AI agent gives after failing a task, at most 200 characters.

## The entry

> I finished the report on time, then autocorrected the client's name to my ex's and sent it twice to be sure.

## How it runs

- `main.ts` (Node 22, stdlib only) writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (`/output` by default).
- Deterministic: fixed text, no input, no randomness, no network.

Run locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
