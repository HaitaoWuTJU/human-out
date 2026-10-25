'use strict';
const repository = 'https://github.com/HaitaoWuTJU/human-out';
const categories = {
  all:['全部任务','All tasks'], board:['棋类与策略','Board & strategy'], cards:['扑克与麻将','Poker & mahjong'],
  videogame:['电子游戏','Video games'], language:['语言与解谜','Language & puzzles'], perception:['视觉与语音','Vision & speech'], robotics:['现实机器人','Physical robots']
};
const evidence = {
 champion:['冠军对决','Champion match','赢过冠军，不意味着永远不输。','A victory against a champion does not imply invincibility.'],
 professional:['职业 / 精英对决','Professional / elite','保留职业或精英对手的层级与样本条件。','Preserve the cohort and sample conditions.'],
 tournament:['同题竞赛','Tournament scoring','同一套题目的成绩超过人类参赛者。','Higher scores on the same competition tasks.'],
 ranked:['天梯 / 联赛','Ladder / league','超过多数排名玩家，不自动等于世界第一。','Above most ranked players, not necessarily world-best.'],
 benchmark:['人类基线','Human reference','仅超过特定数据集的人类参考值。','Above a dataset-specific human reference.'],
 solved:['数学求解','Solved game','确定最优结果，可能只能保证和棋。','An established optimal outcome may only guarantee a draw.'],
 amateur:['业余对决','Amateur evaluation','只证明赢过部分业余选手。','Evidence against some amateur opponents.']
};
const strings = {
 archive:['探索档案','The archive'],intro:['那些人类曾经领先，<br>后来被机器追上或超越的任务。','Tasks where machines have caught up with<br>or surpassed human performance.'],explore:['探索能力边界','Explore the archive'],illustration:['围棋示意 · 非真实棋谱','Go illustration · not a match position'],milestones:['条有据可查的里程碑','documented milestones'],domains:['个探索类别','categories to explore'],years:['档案时间跨度','years in the archive'],statsNote:['一次胜利，是一个坐标。<br>一项任务的边界，需要条件来定义。','Every victory is a data point.<br>Its meaning depends on the conditions.'],catalogTitle:['能力边界档案','The capability archive'],catalogIntro:['每一项突破，都有它的具体语境。<br>从结果出发，沿着证据深入。','Every breakthrough has its context.<br>Follow the outcome. Read the evidence.'],evidenceLabel:['证据类型','Evidence type'],sortLabel:['排序','Sort order'],reset:['重置筛选 ↺','Reset filters ↺'],loading:['正在载入档案…','Loading the archive…'],methodTitle:['“击败人类”，<br>究竟意味着什么？','What does “beating<br>humans” actually mean?'],methodIntro:['结果值得记录，条件同样值得。<br>我们用不同标签，描述不同程度的突破。','The outcome matters. So do the conditions.<br>Different labels describe different kinds of progress.'],criteria:['查看收录原则','Read the inclusion criteria'],contributeTitle:['下一个里程碑，<br>由你补上。','The next milestone.<br>Your contribution.'],contributeText:['这份档案持续生长。欢迎带着原始证据，<br>补充新任务、纠正旧结论，或提供更强的人类基线。','This is a growing record. Bring primary evidence:<br>a new task, a correction, or a stronger human baseline.'],contribute:['贡献一条记录','Contribute a record'],updated:['资料核验','Sources checked']
};
const $ = selector => document.querySelector(selector);
const params = new URLSearchParams(location.search);
let language = params.get('lang') === 'zh' ? 'zh' : 'en';
let category = Object.hasOwn(categories, params.get('category')) ? params.get('category') : 'all';
let tasks = [], loadFailed = false, optionsInitialized = false;
const initialEvidence = Object.hasOwn(evidence, params.get('evidence')) ? params.get('evidence') : '';
const initialSort = params.get('sort') === 'desc' ? 'desc' : 'asc';
$('#search').value = params.get('q') || '';
$('#sort').value = initialSort;
const index = () => language === 'zh' ? 0 : 1;
function element(tag, className, text) {
 const node = document.createElement(tag); if (className) node.className = className;
 if (text !== undefined) node.textContent = text; return node;
}
function setOptions() {
 const value = optionsInitialized ? $('#evidence').value : initialEvidence;
 optionsInitialized = true;
 $('#evidence').replaceChildren(new Option(language === 'zh' ? '所有证据类型' : 'All evidence types',''));
 Object.entries(evidence).forEach(([key,labels]) => $('#evidence').add(new Option(labels[index()],key)));
 $('#evidence').value = value;
 $('#sort').options[0].text = language === 'zh' ? '时间：从早到晚' : 'Year: oldest first';
 $('#sort').options[1].text = language === 'zh' ? '时间：从晚到早' : 'Year: newest first';
}
function syncURL() {
 const p = new URLSearchParams();
 if(language === 'zh') p.set('lang','zh'); if(category !== 'all') p.set('category',category);
 if($('#search').value.trim()) p.set('q',$('#search').value.trim());
 if($('#evidence').value) p.set('evidence',$('#evidence').value);
 if($('#sort').value === 'desc') p.set('sort','desc');
 history.replaceState(null,'',location.pathname + (p.size ? '?' + p.toString() : '') + location.hash);
}
function renderCategories() {
 $('#categories').replaceChildren();
 Object.entries(categories).forEach(([key,labels]) => {
 const button = element('button','',labels[index()]); button.type = 'button'; button.setAttribute('aria-pressed',String(category === key));
 button.addEventListener('click',()=>{category=key;renderCategories();renderRecords();syncURL();}); $('#categories').append(button);
 });
}
function reset() {
 category='all'; $('#search').value=''; $('#evidence').value=''; $('#sort').value='asc';
 renderCategories(); renderRecords(); syncURL();
}
function renderRecords() {
 const query = $('#search').value.trim().toLocaleLowerCase();
 const selected = tasks.filter(task => (category === 'all' || task.category === category) && (!$('#evidence').value || task.evidence === $('#evidence').value) && (!query || [task.task_zh,task.task_en,task.system,task.year,task.result_zh,task.result_en].join(' ').toLocaleLowerCase().includes(query)))
 .sort((a,b) => $('#sort').value === 'desc' ? b.year-a.year : a.year-b.year);
 $('#result-count').textContent = language === 'zh' ? `${String(selected.length).padStart(2,'0')} / ${tasks.length} 条里程碑 · 同一领域可含多条记录` : `${String(selected.length).padStart(2,'0')} / ${tasks.length} milestones · domains can repeat`;
 $('#records').replaceChildren();
 if (!selected.length) {
  const box=element('div','empty'); box.append(element('p','',loadFailed ? (language === 'zh'?'档案暂时无法载入，请刷新或阅读 GitHub README。':'Unable to load the archive. Refresh or read the GitHub README.') : (language === 'zh'?'没有符合条件的记录，试试其他关键词或分类。':'No matching records. Try another search or category.')));
  if (loadFailed) {const link=element('a','text-link','GitHub README ↗');link.href=repository;box.append(link);}
  else {const button=element('button','',language === 'zh'?'显示全部档案':'Show all records');button.addEventListener('click',reset);box.append(button);}
  $('#records').append(box);return;
 }
 selected.forEach(task => {
  const article=element('article','record'); article.id=task.id;
  article.append(element('div','record-year',task.year));
  const body=element('div','record-body'), meta=element('div','record-meta');
  meta.append(element('span','category-label',categories[task.category][index()]));
  const badge=element('span','evidence-badge',evidence[task.evidence][index()]);badge.dataset.kind=task.evidence;meta.append(badge);
  body.append(meta,element('h3','',task['task_'+language]),element('p','record-result',task['result_'+language]));
  const details=element('details',''); details.append(element('summary','',language==='zh'?'比赛条件与结论边界':'Conditions & limitations'),element('p','',task['limitations_'+language]));body.append(details);
  const side=element('div','record-side');side.append(element('span','system-label',task.system));
  const link=element('a','source-link',language==='zh'?'查看原始来源 ↗':'Primary source ↗');link.href=task.source_url;link.target='_blank';link.rel='noopener noreferrer';link.setAttribute('aria-label',task['task_'+language]+(language==='zh'?'：查看原始来源（新窗口）':': primary source (new tab)'));side.append(link);
  article.append(body,side);$('#records').append(article);
 });
}
function renderLanguage() {
 document.documentElement.lang=language==='zh'?'zh-CN':'en';
 document.title=language==='zh'?'Human Out — 人类与机器的能力边界':'Human Out — The capability archive';
 document.querySelectorAll('[data-i18n]').forEach(node=>{node.innerHTML=strings[node.dataset.i18n][index()];});
 $('#language').textContent=language==='zh'?'EN':'中文';$('#language').setAttribute('aria-label',language==='zh'?'Switch to English':'切换到中文');
 $('#search').placeholder=language==='zh'?'搜索任务、系统、年份…':'Search tasks, systems, years…';$('#search').setAttribute('aria-label',$('#search').placeholder);
 $('#categories').setAttribute('aria-label',language==='zh'?'任务类别':'Task categories');
 $('.header nav').setAttribute('aria-label',language==='zh'?'主导航':'Main navigation');
 $('.wordmark').setAttribute('aria-label',language==='zh'?'Human Out 首页':'Human Out home');
 $('.stats').setAttribute('aria-label',language==='zh'?'档案统计':'Archive statistics');
 setOptions();renderCategories();renderRecords();
 $('#legend').replaceChildren();Object.values(evidence).forEach(labels=>{const row=element('div','legend-item');row.append(element('strong','',labels[index()]),element('p','',labels[index()+2]));$('#legend').append(row);});
}
$('#language').addEventListener('click',()=>{language=language==='zh'?'en':'zh';renderLanguage();syncURL();});
$('#search').addEventListener('input',()=>{renderRecords();syncURL();});
['evidence','sort'].forEach(id=>$('#'+id).addEventListener('change',()=>{renderRecords();syncURL();}));
$('#reset').addEventListener('click',reset);
document.addEventListener('keydown',event=>{if(event.key==='/' && !['INPUT','SELECT','TEXTAREA'].includes(document.activeElement.tagName) && !event.metaKey && !event.ctrlKey && !event.altKey){event.preventDefault();$('#search').focus();}});
async function start() {
 try {
  const response=await fetch('data/tasks.json');if(!response.ok) throw new Error('Data unavailable');
  tasks=await response.json();if(!Array.isArray(tasks)||!tasks.length)throw new Error('Invalid catalog');
  $('#total-count').textContent=tasks.length;
  const years=tasks.map(task=>task.year);$('#year-span').textContent=`${Math.min(...years)}—${Math.max(...years)}`;
  const checked=tasks.map(task=>task.checked_on).sort().at(-1);$('#checked-date').textContent=checked;$('#edition-date').textContent=checked.slice(0,7).replace('-','.');
 } catch(error) {loadFailed=true;}
 renderLanguage();
}
start();
