# Human Out

[🌐 浏览交互式网站](https://HaitaoWuTJU.github.io/human-out/)

**那些人类曾经领先，后来被机器追上或超越的任务。**

[English](README.en.md) · [结构化数据](data/tasks.json) · [CSV](data/tasks.csv) · [如何贡献](CONTRIBUTING.md)

从 Deep Blue 到 AlphaGo，从扑克到现实无人机竞速：记录具体任务、对手、结果和证据。

> **Human out of the leaderboard. Human still in the loop.**

本仓库希望尽可能完整地整理公开可核验的案例；它是持续补充的目录，不声称穷尽所有任务，也不把“人类被击败”解释为人类失去价值。

## 如何读这份清单

- **🏆 冠军对决** — 赢过冠军，但不等于永远不输。
- **🎯 职业/精英对决** — 赢过职业或精英组；保留对手层级和样本条件。
- **🥇 同题竞赛** — 同一套题目的成绩超过人类参赛者。
- **📈 天梯/联赛** — 超过多数排名玩家；不自动等于世界第一。
- **📊 人类基线** — 仅超过特定数据集的人类参考值。
- **🧮 数学求解** — 用数学或穷举确定最优结果，可能只能保证和棋。
- **🌱 业余对决** — 只证明赢过部分业余选手。

**统计口径：23 条里程碑记录；同一任务的不同系统或比赛分开记载，因此不是 23 个独立领域。Atari 57 作为一个套件收录，其中包含 57 个子任务。年份为所列比赛、成果或论文年份，不声称是该领域最早突破。**

## 棋类与策略博弈

| 年份 | 任务 | 系统 | 证据类型 | 具体结果 | 条件与边界 |
|---|---|---|---|---|---|
| 1997 | [国际象棋](https://www.ibm.com/history/deep-blue) | Deep Blue | 🏆 冠军对决 | 以 3.5–2.5 击败当时的世界冠军卡斯帕罗夫。 | 标准比赛时限下的六局比赛；不等于游戏已被数学求解。 |
| 1997 | [黑白棋](https://skatgame.net/mburo/cv.pdf) | Logistello | 🏆 冠军对决 | 以 6–0 击败世界冠军村上健。 | 特定对手的六局比赛；胜赛与求解是两件事。 |
| 2007 | [英式跳棋](https://webdocs.cs.ualberta.ca/~chinook/project/) | Chinook | 🧮 数学求解 | 标准初始局面已被弱求解，双方完美下法的结果为和棋。 | 1994 年冠军头衔涉及 Tinsley 因病退赛，不能写成击败他；也不是所有跳棋变体都已求解。 |
| 2016 | [围棋：李世石挑战赛](https://deepmind.google/research/alphago/) | AlphaGo | 🏆 冠军对决 | 以 4–1 击败拥有 18 个世界冠军头衔的李世石。 | 19×19 无让子比赛；李世石赢下第四局。 |
| 2017 | [围棋：柯洁挑战赛](https://www.britgo.org/news/2017/alphago0527) | AlphaGo Master | 🏆 冠军对决 | 在乌镇三番棋中以 3–0 击败当时排名世界第一的柯洁。 | 另一场围棋里程碑，不应统计成新的任务领域。 |
| 2017 | [日本将棋](https://www.jstage.jst.go.jp/article/amr/advpub/0/advpub_0180918a/_pdf) | Ponanza | 🏆 冠军对决 | 在第二期电王战中两胜佐藤天彦名人。 | 两局正式对局；不是日本将棋被求解的证明。 |
| 2022 | [Stratego 军棋](https://arxiv.org/abs/2206.15378) | DeepNash | 📈 天梯/联赛 | 与人类专家对局，在 Gravon 平台达到年度及历史前三。 | 限该平台评估；不是中国陆战棋，也不是游戏已求解。 |
| 2022 | [Diplomacy 外交博弈](https://pubmed.ncbi.nlm.nih.gov/36413172/) | CICERO | 📈 天梯/联赛 | 40 局联赛中平均得分超过人类均值两倍，进入多局玩家前 10%。 | 限定在线 blitz 赛制；人类水平强者，不是世界最强。 |

## 扑克与麻将

| 年份 | 任务 | 系统 | 证据类型 | 具体结果 | 条件与边界 |
|---|---|---|---|---|---|
| 2017 | [单挑无限注德州扑克：DeepStack](https://arxiv.org/abs/1701.01724) | DeepStack | 🎯 职业/精英对决 | 论文报告在 44,000 手研究中以统计显著优势击败职业玩家。 | 按研究样本与总体统计解释，不意味着每手或每个对手都赢。 |
| 2017 | [单挑无限注德州扑克：Libratus](https://www.csd.cmu.edu/news/carnegie-mellon-artificial-intelligence-beats-top-poker-pros) | Libratus | 🎯 职业/精英对决 | 在 120,000 手比赛中击败四位顶级职业选手。 | 限定单挑无限注规则；筹码结果不等于现金收益。 |
| 2020 | [日本立直麻将](https://arxiv.org/abs/2003.13590) | Suphx | 📈 天梯/联赛 | 论文报告天凤平台排名高于 99.99% 的正式排名人类玩家。 | 2019 年平台实验、2020 年论文；限定日麻规则、平台及排名口径。 |

## 电子游戏与模拟器

| 年份 | 任务 | 系统 | 证据类型 | 具体结果 | 条件与边界 |
|---|---|---|---|---|---|
| 2019 | [Dota 2 五人团战](https://openai.com/index/openai-five-defeats-dota-2-world-champions/) | OpenAI Five | 🏆 冠军对决 | 以 2–0 击败 TI8 冠军 OG。 | 受限英雄池和游戏规则，使用程序接口；不能外推到任意版本、完整英雄池。 |
| 2019 | [星际争霸 II](https://deepmind.google/blog/alphastar-grandmaster-level-in-starcraft-ii-using-multi-agent-reinforcement-learning/) | AlphaStar | 📈 天梯/联赛 | 三个种族均达到 Grandmaster，排名高于 99.8% 活跃玩家。 | 特定版本、地图、接口与动作限制；不是击败世界冠军的证明。 |
| 2020 | [Atari 57 游戏套件](https://proceedings.mlr.press/v119/badia20a.html) | Agent57 | 📊 人类基线 | 57 个游戏全部超过论文采用的人类基准分数。 | 是 57 个子任务，不是 57 次击败世界冠军；各游戏分别训练，不是一个模型零样本通玩。 |
| 2022 | [Gran Turismo 模拟赛车](https://www.nature.com/articles/s41586-021-04357-7) | GT Sophy | 🏆 冠军对决 | 论文展示在指定赛车与赛道条件下超越冠军级车手。 | 论文于 2022 年发表，关键对局在 2021 年；不是现实道路自动驾驶。 |

## 语言、知识与解谜

| 年份 | 任务 | 系统 | 证据类型 | 具体结果 | 条件与边界 |
|---|---|---|---|---|---|
| 2011 | [Jeopardy! 知识问答](https://www.ibm.com/history/watson-jeopardy) | Watson | 🏆 冠军对决 | 在电视挑战赛中击败 Ken Jennings 和 Brad Rutter。 | 特定问答格式及抢答机制；不代表所有自然语言理解任务。 |
| 2018 | [SQuAD 1.1 抽取式阅读问答](https://www.microsoft.com/en-us/research/articles/ai-surpass-human-on-squad-em-score/) | R-NET ensemble | 📊 人类基线 | EM 为 82.650，高于榜单人类基线 82.304。 | 该比较只针对 EM；同期 F1 仍低于人类，不能概括为阅读能力全面超人。 |
| 2021 | [美式纵横填字](https://crosswordtournament.com/2021/index.htm) | Berkeley QA + Dr.Fill | 🥇 同题竞赛 | 在 2021 ACPT 第 1–7 题中取得最高总分，超过所有人类参赛者。 | 按比赛解题计分比较；不等于获得人类决赛冠军头衔。 |

## 视觉与语音

| 年份 | 任务 | 系统 | 证据类型 | 具体结果 | 条件与边界 |
|---|---|---|---|---|---|
| 2015 | [ImageNet 图像分类](https://openaccess.thecvf.com/content_iccv_2015/papers/He_Delving_Deep_into_ICCV_2015_paper.pdf) | PReLU-net ensemble | 📊 人类基线 | ImageNet 2012 测试集 top-5 错误率为 4.94%，低于论文引用的人类基线。 | 固定 1000 类分类与 top-5 指标；人类基线依赖标注者经验，不等于视觉全面超人。 |
| 2017 | [英语电话对话转写](https://www.microsoft.com/en-us/research/publication/achieving-human-parity-conversational-speech-recognition-2/) | Microsoft ASR ensemble | 📊 人类基线 | 修订报告：Switchboard WER 5.8% 对人类 5.9%；CallHome 11.0% 对 11.3%。 | 采用 2017 年修订数值；换用多名转写员复核等流程，人类基线会变化。 |

## 现实机器人竞赛

| 年份 | 任务 | 系统 | 证据类型 | 具体结果 | 条件与边界 |
|---|---|---|---|---|---|
| 2023 | [现实无人机竞速](https://www.nature.com/articles/s41586-023-06419-4) | Swift | 🏆 冠军对决 | 与三位冠军选手实机竞速，对每位均有胜局，并取得最快比赛时间。 | 已知室内赛道和实验条件；不代表所有户外赛道及天气。 |
| 2024 | [乒乓球：业余水平](https://arxiv.org/abs/2408.03906) | DeepMind robot | 🌱 业余对决 | 29 场赢 13 场：新手胜率 100%，中级 55%，高级 0%。 | 必须保留业余标签；该系统没有击败高级选手。 |
| 2026 | [乒乓球：精英水平](https://www.nature.com/articles/s41586-026-10338-5) | Sony Ace | 🎯 职业/精英对决 | 论文主评估中对精英选手 5 场赢 3 场；对职业选手两场均负。 | 采用 golden point 规则；精英组与职业组分开统计，不能写成赢了职业组。 |

## 收录原则

1. 有明确的任务定义、评测条件和人类对照。
2. 优先引用原论文、比赛主办方、研究团队或官方记录。链接放在每项任务名称上。
3. 区分单场胜利、总体统计优势、天梯排名、基准分数和数学求解。
4. 保留规则、接口、信息、动作频率、硬件与训练资源的差异；缺失时不假定完全公平。
5. 欢迎补充反例、后续失利、漏洞利用和更强的人类基线。每条结果都可以被修正。

## 下一批待核验

双陆棋（BKG / TD-Gammon）、中国象棋、桥牌的完整叫牌与打牌、Quake III CTF 的人类对照、竞赛编程、数学竞赛、特定医学诊断、蛋白质结构预测、天气预测。

这些领域值得继续核验，但不能只凭“达到金牌”“赢过其他软件”“超过旧系统”就写成“击败最强人类”。AlphaFold 等还需要定义合理的人类对照。此处不代表它们尚未达到任何超人指标。

## 维护与复现

数据源：[`data/tasks.json`](data/tasks.json)。修改数据后运行：

```sh
python3 scripts/check_data.py
```

README 是便于阅读的中英文版本；修改记录时请同步两份 README 和 CSV。检查脚本验证数据字段、唯一 ID、枚举、日期和 CSV 一致性，不替代事实核验或链接可用性检查。

本轮资料核验：**2026-10-25**。历史结果以来源中的原始评测为准。

## License

本仓库原创文字、整理数据和代码采用 [CC0 1.0](LICENSE)。引用的论文、网页、图片与商标保留各自权利；不随本仓库重新授权。
