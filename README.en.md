# Human Out

**Tasks where machines have caught up with—or surpassed—human performance.**

[中文](README.md) · [JSON](data/tasks.json) · [CSV](data/tasks.csv) · [Contribute](CONTRIBUTING.md)

From Deep Blue to AlphaGo, poker to physical drone racing: specific tasks, opponents, outcomes and evidence.

> **Human out of the leaderboard. Human still in the loop.**

A growing, evidence-backed catalog, aiming for broad coverage without claiming exhaustiveness. The title concerns measured task performance, not human worth.

## Reading the evidence

- **🏆 Champion match** — A victory against a champion does not imply invincibility.
- **🎯 Professional / elite evaluation** — Preserve the cohort and sample conditions of professional or elite evaluations.
- **🥇 Tournament scoring** — Higher scores on the same competition tasks.
- **📈 Ladder / league** — Above most ranked players, not necessarily world-best.
- **📊 Human reference** — Above a dataset-specific human reference.
- **🧮 Solved** — An optimal outcome is established; it may only guarantee a draw.
- **🌱 Amateur evaluation** — Evidence only against some amateur opponents.

**Counting: 23 milestone records, not 23 independent domains. Multiple systems or matches can share a task. Atari 57 is one suite containing 57 subtasks. Years identify the cited event, result or publication, not necessarily the first breakthrough.**

## Board games & strategic play

| Year | Task | System | Evidence | Result | Scope & limitations |
|---|---|---|---|---|---|
| 1997 | [Chess](https://www.ibm.com/history/deep-blue) | Deep Blue | 🏆 Champion match | Defeated reigning world champion Garry Kasparov 3.5–2.5. | Six-game match at standard tournament time controls; chess was not solved. |
| 1997 | [Othello](https://skatgame.net/mburo/cv.pdf) | Logistello | 🏆 Champion match | Defeated world champion Takeshi Murakami 6–0. | Six games against one champion; match victory is distinct from solving the game. |
| 2007 | [English draughts / checkers](https://webdocs.cs.ualberta.ca/~chinook/project/) | Chinook | 🧮 Solved | Weakly solved from the standard initial position: perfect play draws. | The 1994 title involved Tinsley withdrawing through illness; it was not a played-out defeat. Other draughts variants are outside this claim. |
| 2016 | [Go: Lee Sedol match](https://deepmind.google/research/alphago/) | AlphaGo | 🏆 Champion match | Defeated 18-time world title winner Lee Sedol 4–1. | 19×19 without handicap; Lee won game four. |
| 2017 | [Go: Ke Jie match](https://www.britgo.org/news/2017/alphago0527) | AlphaGo Master | 🏆 Champion match | Defeated then world number one Ke Jie 3–0 at Wuzhen. | A second Go milestone, not a separate task domain. |
| 2017 | [Shogi](https://www.jstage.jst.go.jp/article/amr/advpub/0/advpub_0180918a/_pdf) | Ponanza | 🏆 Champion match | Won both games against Meijin Amahiko Sato in the second Denou match. | Two official games; not a mathematical solution of shogi. |
| 2022 | [Stratego](https://arxiv.org/abs/2206.15378) | DeepNash | 📈 Ladder / league | Reached yearly and all-time top-three rank on Gravon against human experts. | Platform-specific evaluation; distinct from Chinese military chess; not solved. |
| 2022 | [Diplomacy](https://pubmed.ncbi.nlm.nih.gov/36413172/) | CICERO | 📈 Ladder / league | Over 40 games, scored more than twice the human average and ranked in the top 10% of multi-game participants. | Online blitz format; strong human-level performance, not world-best. |

## Poker & mahjong

| Year | Task | System | Evidence | Result | Scope & limitations |
|---|---|---|---|---|---|
| 2017 | [Heads-up no-limit Texas hold’em: DeepStack](https://arxiv.org/abs/1701.01724) | DeepStack | 🎯 Professional / elite evaluation | Reported a statistically significant win over professionals in a 44,000-hand study. | An aggregate study result, not a win on every hand or against every individual. |
| 2017 | [Heads-up no-limit Texas hold’em: Libratus](https://www.csd.cmu.edu/news/carnegie-mellon-artificial-intelligence-beats-top-poker-pros) | Libratus | 🎯 Professional / elite evaluation | Beat four top professionals over 120,000 hands. | Heads-up no-limit format; match chips are not cash earnings. |
| 2020 | [Japanese riichi mahjong](https://arxiv.org/abs/2003.13590) | Suphx | 📈 Ladder / league | Reported a rating above 99.99% of officially ranked Tenhou players. | Platform experiments in 2019, paper in 2020; specific riichi rules and ranking methodology. |

## Video games & simulators

| Year | Task | System | Evidence | Result | Scope & limitations |
|---|---|---|---|---|---|
| 2019 | [Dota 2 team play](https://openai.com/index/openai-five-defeats-dota-2-world-champions/) | OpenAI Five | 🏆 Champion match | Defeated TI8 champions OG 2–0. | Restricted hero pool and rules, with a programmatic interface; not arbitrary patches or all heroes. |
| 2019 | [StarCraft II](https://deepmind.google/blog/alphastar-grandmaster-level-in-starcraft-ii-using-multi-agent-reinforcement-learning/) | AlphaStar | 📈 Ladder / league | Grandmaster with all three races, ranked above 99.8% of active players. | Specific version, maps, interface and action restrictions; not proof of beating the world champion. |
| 2020 | [Atari 57 benchmark suite](https://proceedings.mlr.press/v119/badia20a.html) | Agent57 | 📊 Human reference | Exceeded the paper’s human reference on all 57 games. | 57 subtasks, not 57 world champions; separate game training, not one zero-shot universal player. |
| 2022 | [Gran Turismo racing](https://www.nature.com/articles/s41586-021-04357-7) | GT Sophy | 🏆 Champion match | Outraced champion drivers under the paper’s car and track conditions. | Published in 2022 with key races in 2021; not real-road autonomous driving. |

## Language, knowledge & puzzles

| Year | Task | System | Evidence | Result | Scope & limitations |
|---|---|---|---|---|---|
| 2011 | [Jeopardy! quiz show](https://www.ibm.com/history/watson-jeopardy) | Watson | 🏆 Champion match | Won the televised challenge against Ken Jennings and Brad Rutter. | A specific quiz and buzzer format, not general language understanding. |
| 2018 | [SQuAD 1.1 extractive QA](https://www.microsoft.com/en-us/research/articles/ai-surpass-human-on-squad-em-score/) | R-NET ensemble | 📊 Human reference | Exact Match 82.650 exceeded the listed human reference of 82.304. | The comparison is for Exact Match; contemporaneous F1 remained below humans. |
| 2021 | [American crossword solving](https://crosswordtournament.com/2021/index.htm) | Berkeley QA + Dr.Fill | 🥇 Tournament scoring | Recorded the top score on puzzles 1–7 at the 2021 ACPT. | Comparison on tournament puzzle scoring, not a claim to the human finals title. |

## Vision & speech

| Year | Task | System | Evidence | Result | Scope & limitations |
|---|---|---|---|---|---|
| 2015 | [ImageNet image classification](https://openaccess.thecvf.com/content_iccv_2015/papers/He_Delving_Deep_into_ICCV_2015_paper.pdf) | PReLU-net ensemble | 📊 Human reference | Reported 4.94% top-5 error, below the human reference used in the paper. | Fixed 1,000-class, top-5 evaluation; the human reference depends on annotator experience. |
| 2017 | [English telephone speech transcription](https://www.microsoft.com/en-us/research/publication/achieving-human-parity-conversational-speech-recognition-2/) | Microsoft ASR ensemble | 📊 Human reference | Revised report: Switchboard WER 5.8% vs 5.9%; CallHome 11.0% vs 11.3%. | Uses the February 2017 revision; stronger multi-transcriber protocols change the human reference. |

## Physical robot competitions

| Year | Task | System | Evidence | Result | Scope & limitations |
|---|---|---|---|---|---|
| 2023 | [Physical drone racing](https://www.nature.com/articles/s41586-023-06419-4) | Swift | 🏆 Champion match | Won races against each of three human champions and set the fastest race time. | Known indoor course and experimental conditions; not all tracks or weather. |
| 2024 | [Table tennis: amateur opponents](https://arxiv.org/abs/2408.03906) | DeepMind robot | 🌱 Amateur evaluation | Won 13/29 matches: 100% vs beginners, 55% vs intermediates, 0% vs advanced players. | Retain the amateur label; this system did not beat advanced players. |
| 2026 | [Table tennis: elite opponents](https://www.nature.com/articles/s41586-026-10338-5) | Sony Ace | 🎯 Professional / elite evaluation | Main evaluation: won 3/5 matches against elite players; lost both matches against professionals. | Golden-point scoring; elite and professional cohorts must remain separate. |

## Inclusion criteria

1. Identify the task, evaluation conditions and human comparison.
2. Prefer papers, organizers, research teams and official records; task names link to sources.
3. Distinguish a match win, aggregate advantage, ladder placement, benchmark score and a mathematical solution.
4. Preserve differences in rules, interfaces, observations, action rates, hardware and training resources. Do not assume parity when it is undocumented.
5. Corrections, later losses, exploits and stronger human baselines are welcome.

## Verification backlog

Backgammon (BKG / TD-Gammon), Xiangqi, full bridge bidding and play, human comparisons in Quake III CTF, competitive programming, mathematical competitions, specific medical tasks, protein structure prediction and weather forecasting.

A gold medal, beating another program or outperforming an old system does not alone establish superiority over the best humans. Some domains also require a defensible human comparator. This backlog does not claim these fields have no superhuman results.

## Maintenance

Source data: [`data/tasks.json`](data/tasks.json). After editing, run:

```sh
python3 scripts/check_data.py
```

Keep both READMEs and CSV in sync. The script checks fields, IDs, enums, dates and CSV consistency; it does not verify facts or remote link availability.

Sources checked for this edition: **2026-10-25**. Historical results retain their original evaluation scope.

## License

Original text, curated data and code: [CC0 1.0](LICENSE). Referenced papers, websites, images and trademarks retain their respective rights.
