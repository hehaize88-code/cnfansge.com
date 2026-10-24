# Kakobuy 子站项目记忆与实施规划

更新日期：2026-10-24（Asia/Shanghai）
项目阶段：立项调研完成，待选域名；网站尚未搭建或部署。
仓库：https://github.com/hehaize88-code/cnfansge.com
规划分支：planning/kakobuy-20261024
临时路径：_planning/kakobuy/PROJECT_MEMORY.md
推荐域名：kakobuytab.com（用户尚未选定、未购买、未绑定）
说明：本文件把用户确认要求、调研事实、建议及待验证项分开记录。后续每次实施或部署更新本文件，不能把计划写成完成状态。

## 1. 用户已经确认的要求

1. 本次只做 Kakobuy，一个平台、一个独立域名；域名必须含完整品牌 kakobuy。
2. 使用实施当日 Astro 最新稳定版，允许 SSR 或 SSG；项目代码保存到 GitHub。
3. 所有商品、商品图片、分类、分页、文字搜索、搜图、QC 照片、排序均使用 cnfansge.com 的数据和能力，不另建商品数据库。
4. LOGO 与浏览器图标采用 Kakobuy 官网相同素材。
5. 首页以 SEO 为主，核心关键词为 kakobuy spreadsheet；先调研平台及竞品，再决定其他关键词和内容。
6. 先规划再实施，边做边维护项目记忆；其他优化后续逐步进行。
7. 注册地址原样使用：https://item2.kakobuy.com/register
8. 购买示例：https://item2.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7617402324&affcode=rf8x8
9. 示例中 7617402324 是 Weidian 商品 ID，推广参数为 affcode=rf8x8。
10. 后续明确要求：部署代码固定到 hehaize88-code/cnfansge.com；每域名一个单独文件夹，结构与截图中的 cssbuyhome-com 相同。
11. 后续明确要求：参考 https://kakobuypicklist.com/ 的体验和多语言；商品数据唯一来源仍为 cnfansge.com。
12. 不建数据库，不建设或操作管理后台。所有商品与商品图片均使用主站真实内容；用户“不要有任务图片,商品等等”结合上下文按不使用自行编造/占位商品和商品图处理，不理解为删除真实商品图片。
13. 已给出的官方LOGO/favicon要求继续有效：商品图片来自cnfansge.com，品牌标识来自Kakobuy官方，二者来源用途不同。

## 2. 项目边界与组织方式

- 用户于2026-10-24再次明确指定部署代码仓库 https://github.com/hehaize88-code/cnfansge.com ，并提供截图，红框示例为根目录 cssbuyhome-com/。最终每个域名一个根级独立文件夹；本次仅做Kakobuy，其他已有站点不混入此项目。
- 当前读取的是子站代码仓库，不能据此宣称已获得 cnfansge.com 后台源代码或完整 API。
- 新域名确认后使用一个对应的独立目录；若采用推荐域名，建议为 kakobuytab-com/。
- 每个域名有自己的 package.json、lockfile、Astro 配置、品牌素材、内容、部署配置和 PROJECT_MEMORY.md。
- 单站 CI 仅监听该目录与其工作流。以后确实抽取共享模块时，再为依赖它的站点补充构建触发。
- 本轮没有修改已有域名站点、main 分支、Cloudflare、DNS、GA4、GSC 或 Bing。
- 当前首要交付是调研和可实施规划，不自动扩大为十篇文章、多个平台或定时发布任务。
- 搜索、分类、翻页、详情和图片查看建议保留在子站内；只有明确的注册/购买按钮跳向用户指定 Kakobuy 地址。这也延续此前同数据源子站的交互要求。

## 3. 域名调研与建议

方法：2026-10-24 通过 Verisign .com RDAP 注册局端点查询，辅以公开搜索。未查到注册记录不等于注册商保证可售，购买前仍以实时注册商查询及价格为准。本轮未查询报价或执行购买。

| 优先级 | 域名 | 命名理由 | 本次注册局结果 |
| --- | --- | --- | --- |
| 1 | kakobuytab.com | 短、品牌完整，tab 易联想到表格与目录；适合 Spreadsheet 主定位 | 两次 HTTP 404，未查到注册记录 |
| 2 | kakobuyrack.com | 适合商品陈列、服饰推荐，容易延伸 Finds 内容 | HTTP 404，未查到注册记录 |
| 3 | kakobuyfolio.com | 适合精选合集与指南，品牌完整 | HTTP 404，未查到注册记录 |
| 排除普通新注册 | kakobuysheet.com | 名称直观，但已有注册记录 | 首次 HTTP 200 返回 KAKOBUYSHEET.COM；复查 503 不能推翻首次结果 |
| 排除普通新注册 | kakobuyindex.com | 目录含义明确 | HTTP 200 返回已注册记录 |
| 排除普通新注册 | kakobuypicks.com | 推荐含义明确 | HTTP 200 返回已注册记录 |
| 排除普通新注册 | kakobuycatalog.com | 商品目录含义明确 | HTTP 200 返回已注册记录 |

推荐 kakobuytab.com 是命名与可用性初查后的选择，不代表已注册或保证排名。
Google 官方说明，域名里的关键词本身对排名影响很有限；无需为了放入整个 spreadsheet 词组购买过长或高价域名。首页标题、内容、真实功能和抓取质量更值得投入。

注册局查询地址模式：https://rdap.verisign.com/com/v1/domain/{domain}

## 4. 关键词与竞品调研

本次是公开搜索结果、竞品页面结构和官方帮助资料的定性调研。没有获取 Keyword Planner、Ahrefs 或 Semrush 的搜索量/KD，不能编造“月搜索量”“难度分数”或宣称竞品流量。

已阅读的竞品：
- https://kakobuy-spreadsheet.com/ ：主页突出 Spreadsheet，导航有 Browse all、Articles、Finds、FAQ、QC-Images；有独立站及推广说明。
- https://kakobuychinaspreadsheet.com/ ：主页结合商品目录、搜索、USD 价格、购买跳转及 Shipping/Fees 内容。
- https://kakobuylab.com/ ：主题集中在 Spreadsheet、W2C、QC、运费与费用；可见分类入口与购买指南。
- https://kakobuyagent.com/kakobuy-finds ：Finds、QC、商品链接研究等主题。

这些是关键词和内容结构样本，不是官方服务政策来源；不采信其自报商品数量、优惠金额或“保证品质”等宣传作为本站事实。

建议关键词归属：

| 页面 | 主目标 | 辅助搜索意图 | 优先级 |
| --- | --- | --- | --- |
| / | kakobuy spreadsheet | kakobuy spreadsheet 2026、best kakobuy spreadsheet | P0 |
| /spreadsheet/ | 浏览完整 Kakobuy 商品目录 | kakobuy products、kakobuy product finder | P0 |
| /finds/ | kakobuy finds | shoes、hoodies、t-shirts 等实际有数据的分类长尾 | P1 |
| /guide/ | how to buy on kakobuy | how to use kakobuy、kakobuy beginner guide | P1 |
| /qc/ | kakobuy qc、kakobuy qc photos | how to check kakobuy qc photos | P1；实际照片功能需数据验证 |
| /shipping/ | kakobuy shipping cost | shipping time、volumetric weight、shipping lines | P1；费率按官方当时规则 |
| /faq/ | 具体购买流程疑问 | payment、warehouse、returns、fees | P1 |
| /articles/ | 主题文章索引 | 文章按主题分别承担长尾词 | P1 |
| /search/、/search/image/ | 完成用户查找任务 | 无独立排名承诺 | 功能项 |

首页集中解释 Spreadsheet 的价值并引导到全目录；目录页以实际筛选和商品浏览为主，避免两页使用完全相同标题和正文。

建议首页英文标题：
Kakobuy Spreadsheet | Product Finds & Buying Guide

建议 H1：
Kakobuy Spreadsheet

只有在 QC 数据能力验收完成后，才把“QC Photos”作为实际工具卖点写入标题。年份仅在内容确实审阅更新时调整。

首批内容主题建议（尚未撰写，数量待下一步范围确定）：
1. How to Use a Kakobuy Spreadsheet
2. How to Buy on Kakobuy with a Weidian Link
3. Kakobuy QC Photos: What to Check
4. Kakobuy Shipping Costs: Item Price, Freight and Other Fees
5. Kakobuy Sizing Checks Before You Order
6. Kakobuy Returns and Warehouse Workflow

Kakobuy 官方资料线索：
- https://item2.kakobuy.com/index/information?information_id=3 ：购买流程、到仓检查、仓储及提交运单。
- https://item2.kakobuy.com/index/information?information_id=12 ：代购服务流程。
- https://kakobuy.com/service/help/question?id=74 ：商品价格、国内运输、国际运输等费用组成。
- https://kakobuy.com/service/help/question?cid=35&id=76 ：到仓检查。
- https://www.kakobuy.com/service/help/question?id=89 ：某些电子/功能类商品的检查范围限制。

可访问官方页面为 JavaScript 应用；搜索索引提供了上述主题的摘录。正式写具体费用、时效、仓储天数、退款条件前，需读取当时完整官方内容并记录审阅日期。当前没有把搜索摘要扩写为具体服务承诺。

## 5. Astro 与部署决策

2026-10-24 实测 https://registry.npmjs.org/astro/latest 返回：
- version: 7.4.2
- engines.node: >=22.23.4
- engines.npm: >=9.6.5

官方发布页确认 Astro 7.4.2 发布于 2026-10-21：
https://github.com/withastro/astro/releases/tag/astro%407.4.2

实施时再次查 latest 的稳定版标签并锁定实际版本及 lockfile；使用满足引擎要求的受支持 Node LTS，并在本地与 CI 保持一致。

推荐：SSG + 按路由 SSR。
- 首页正文、Guide、Shipping、FAQ、文章、About 等使用静态生成。
- 商品目录、类别、商品详情、搜索结果按需从 cnfansge.com 读取并服务端渲染。
- 搜图提交、QC 查询通过同域服务端适配层调用主站真实能力，前提是接口已核实。
- 首页可用独立的小型动态商品区域，SEO 正文在 HTML 内，避免整页依赖商品请求。
- 使用 Astro 官方适配器，静态默认模式下对动态路由设置 prerender=false；不使用旧版本的 output:'hybrid' 写法。
- 只对搜索、筛选、语言切换、图片查看等必要交互加载客户端脚本。

GitHub 保存代码并执行构建检查；GitHub Pages 提供静态托管，不运行 Astro SSR。
- 首选提案：GitHub 仓库 + 支持 Astro SSR 的运行环境。Cloudflare Workers 是可选运行目标，也可采用支持的 Node/Vercel/Netlify 目标。
- 如果用户要求最终“只用 GitHub Pages”，则采用纯 SSG，并先验证主站提供可跨域使用的公开接口；同域服务端代理和 SSR 无法部署在 Pages 内。
- 最终运行平台尚未确定。本轮未创建或部署 Cloudflare 服务。

官方依据：
https://docs.astro.build/en/guides/on-demand-rendering/
https://docs.astro.build/en/guides/deploy/github/

## 6. 数据能力核查：事实与缺口

已读取仓库文件：
- cssbuyhome-com/worker/source.mjs
- cssbuyhome-com/worker/index.mjs
- cssbuyhome-com/README.md
- cssbuyhome-com/astro.config.mjs
- superbuybuyss-com/package.json

已直接检查当前公开资源：
- https://www.cnfansge.com/AllProducts/ ：HTTP 200。
- https://www.cnfansge.com/AllProducts/6640.html ：HTTP 200。
- https://www.cnfansge.com/template/moban/pc/static/js/script.js?v=2.2.0 ：HTTP 200，脚本混淆，部分字符串可见。

| 能力 | 已有证据 | 当前结论 |
| --- | --- | --- |
| 商品/商品首图 | 列表 product-card、详情 product-detail 和 uploads 图片 | 有公开数据和现有解析逻辑，可复用思路，仍需新站集成测试 |
| 分类 | 当前页面可见完整分类按钮与主站路径 | 实施时由源站读取，避免未来新增分类被本地常量遗漏 |
| 文字搜索 | 表单 action=/search.html，channelid=2；现有适配器传 keywords | 路径已确认，实际关键词结果及分页待新站验收 |
| 排序 | 主站公开 sort=new、click、price 及 sort_asc 控制 | 应遵循源站排序定义与方向，不能只对当前20项本地排序 |
| 分页 | 页面可见 list_1_2、list_1_3；现有适配器使用 Lists 查询参数 page 修复漂亮链接问题 | 显示的三页窗口不是已证实的全站总页数；完整可达性尚需测试 |
| 搜图 | 现有 /api/capabilities 明确 visualSearch:false | 未找到经过验证的主站搜图接口；仍是必需功能的接入缺口 |
| QC 照片 | 现有 /api/capabilities 明确 qc:false，parseProduct 返回 qcVerified:false | 未找到经过验证的独立QC数据源；商品详情图不能直接当作QC |
| USD | 当前脚本可见 CNY_TO_USD_RATE=7.26 | 这是本次源站换算设置，不是外汇实时汇率；实施时读取源站值，不硬编码为长期值 |

上述证据只能证明当前检查范围，不能断言主站完全没有搜图或 QC。后续先定位相关入口、公开接口/源代码或主站维护者提供的接口说明；如需权限，明确只索取缺少的接入资料。

禁止完成口径：
- 不得把 visualSearch/QC 的未接入状态写成“全部功能完成”。
- 不得新建独立图片搜索库来替代用户指定的主站搜图。
- 不得把普通商品图伪装为仓库 QC。
- 不得把 20 条/页、首页精选数、三页分页窗口当作商品总量。

## 7. 数据字段与链接合同

建议主站适配对象最少包括：
- sourceRecordId：cnfansge.com 站内记录 ID。
- sourceProductUrl：主站详情地址。
- title、category、images。
- originalMarketplace、originalProductId、originalProductUrl。
- priceCny、priceUsd、currency、conversionRate、fetchedAt。
- qcPhotos、qcStatus、qcSource（不存在时明确为空/未验证）。
- pagination：源站 next/previous/cursor、真实可验证的总量；未知总量时不编造。

实测样例：
- 主站记录：https://www.cnfansge.com/AllProducts/6640.html
- 原始商品：https://weidian.com/item.html?itemID=7662220801
- 用户指定结构生成购买地址：
  https://item2.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7662220801&affcode=rf8x8

因此不能将 6640 直接填进 Weidian itemID。
用户示例 7617402324 与实测 7662220801 的 URL 编码/解码回读均已验证；affcode 均保留 rf8x8。

购买链接规则：
1. 优先保留已验证的原始商品 URL；根据真实来源识别 Weidian/Taobao/1688/Tmall。
2. 不把所有来源都强制改为 Weidian。
3. 使用 URL/URLSearchParams 或等价库编码一次，避免整条嵌套 URL 双重编码。
4. 目的地址固定为用户指定的 item2.kakobuy.com/item/details。
5. 商品来源不明或 ID 缺失时显示真实错误，不链接到示例商品。
6. 后续支持其他市场时须分别验证 Kakobuy 解析能力；当前本轮只实测了 Weidian 示例链接结构。

注册规则：
- 原样使用 https://item2.kakobuy.com/register 。
- 此 URL 没有显式 affcode，本轮不擅自添加。不能保证注册归因，仅确认用户给定 URL 被保留。
- 注册页和示例购买地址 HTTP GET 均返回 200 的前端应用壳；未登录、未注册、未下单，尚未验证客户端商品解析或推广后台归因。

## 8. LOGO、favicon 与站点身份

- 官网 https://kakobuy.com/ HTML 指向 /favicon.ico，直接读取返回 HTTP 200，16958 字节。
- 官方前端脚本从站点配置的 web_logo_pic 设置 logoSrc；正式 LOGO 文件尚待解析和目视确认。
- 实施时保存官网当前真实 LOGO/favicon 文件到该域名目录，记录来源 URL、抓取时间和内容校验值；保持官方形状和颜色。
- 页内说明为独立商品推荐/指南站，注册与订单由 Kakobuy 处理，推广链接作简短说明。
- 不在子站复刻账号密码收集或付款表单；用户点击官方链接后在 Kakobuy 完成这些操作。

## 9. 页面与 SEO 规划

建议导航：Spreadsheet / Finds / Guide / QC / Shipping / FAQ / Articles。
路由建议：
- /：SEO 首页
- /spreadsheet/：全量目录入口
- /category/[slug]/：有实际商品的分类
- /product/[sourceRecordId]/：站内详情
- /search/：文字搜索
- /search/image/：搜图（以真实主站能力验收为前提）
- /finds/、/guide/、/qc/、/shipping/、/faq/
- /articles/、/articles/[slug]/
- /about/、/privacy/、/disclosure/
- /robots.txt、/sitemap.xml

首页建议顺序：
品牌与简短说明 → 搜索/目录入口 → 精简商品或分类区 → 使用步骤 → QC及运费提示 → 最新4至6篇内容入口 → 简短独立站说明。
移动端采用紧凑排版、可读字号、无页面横向溢出；目录建议20项/页，分页与完整目录能力无关。

SEO 基础：
- 每页独立 title、description、H1；主文案随HTML输出。
- 固定 HTTPS 主域，www/非www 单一规范入口。
- 首页、目录、分类和文章按各自内容设置 canonical。
- 排序/任意组合筛选不生成无限可索引页面；关键词搜索结果与工具接口默认 noindex。
- 有价值的分页使用可抓取链接和对应规范 URL，不能把所有页强制 canonical 到第一页。
- 商品详情是否索引依据首版内容质量及与数据源的差异确定；避免直接批量提交只有相同图片/标题的薄内容页。
- Sitemap 只列出真实、可索引、200响应的页面，preview 主机保持 noindex。
- Article/BreadcrumbList/WebSite 等结构化数据与可见内容一致；不虚构评分、销量、库存或“免费运费”。
- 日期只反映实际内容更新。
- 本次未取得 GSC/Bing/GA4 的新站数据，不把竞品研究说成本站分析。

多语言实施方案（2026-10-24 根据用户指定参考站具体化）：
用户要求参考 https://kakobuypicklist.com/ 并由助手安排多语言。已读取其首页HTML和德语/葡萄牙语页面，确认24种语言及独立路径；本项目据此采用24语方案。24这个数字是核查参考站后确定的实施方案，不是用户原话指定的数字。
语言代码：en、de、es、fr、it、pl、pt、ro、sv、nl、da、fi、el、cs、hu、bg、sk、hr、sl、lt、lv、et、ga、mt。
英文使用根目录 /，其余使用 /de/、/es/ 等路径；同一页面的内部稳定标识共用，只切换语言前缀。
- 首页、导航、分类标签、按钮、错误提示、Guide、Shipping、FAQ和已发布文章均有完整译文，按相同内容模型维护，不能只翻译导航。
- 所有语言共用 cnfansge.com 的商品集合、商品ID、图片、QC来源、价格和原始商品链接；不按语言复制商品数据库或缩减目录。
- 商品事实来自主站；品牌、型号和商品ID原样保留，显示文字的本地化不能创造主站不存在的材质、尺码、库存、价格或QC信息。若源站无某字段翻译，实施时记录显示策略，不将原文冒充完整译文。
- 切换语言保留当前产品/文章/分类、搜索词、排序、分页和有效片段。用真实a链接；首选语言可保存到浏览器，但不强制把访问者跳回首页。
- 每个语言页有正确的HTML lang、独立title/description和自指canonical；hreflang互相对应，x-default指向同一内容的英文版本。
- 静态正文、语言字典、文章译文放GitHub文件，属于前端内容，不需要后台或数据库。
- 价格统一USD；同一来源数据版本在不同语言下数值一致，按当地习惯格式化。
- 发布检查比较24语的页面/文章标识、段落或内容块和翻译键；所有可见语言选项必须可用，不能出现英文完整而其他语言缺内容。
- 语言菜单用可读的语言自称与代码，手机端易点击，布局不横向溢出。
技术依据：https://docs.astro.build/en/guides/internationalization/ 。

## 10. 缓存、错误处理与完整性

- 主站始终为权威数据来源，不建设第二套商品后台或独立商品搜索索引。
- 使用有期限的请求缓存减轻主站压力，缓存键包含语言、分类、查询、排序和页码。
- 公共商品数据建议短缓存；若回退到旧缓存，明确其更新时间。
- 遵守源站 429 的 Retry-After，合并重复请求并限制并发；不通过高频重试绕过限流。
- 无有效缓存且源站异常时返回可重试错误，不能把错误转换为“0个商品”或空的200成功页。
- 同域适配层只访问核实的源站路径，不接受任意外部URL作为代理目标。
- 搜图上传请求不作共享缓存，具体请求体、大小和数据处理方式以源站接口合同为准。

## 11. 实施顺序与验收

已完成：
- [x] 本次需求记录与独立 GitHub 规划分支。
- [x] 域名候选、注册局初查及推荐。
- [x] Astro 当前稳定版本与渲染/部署边界核验。
- [x] 竞品关键词、官方帮助线索与页面映射。
- [x] 现有适配代码、公开商品样例、ID区别、推广URL编码验证。
- [x] 明确搜图/QC数据缺口，LOGO正式素材待确认。

后续按顺序：
1. 用户选定域名，并确定 GitHub 是源码部署入口还是必须使用 GitHub Pages 托管。
2. 针对 cnfansge.com 做接入验证：前/中/后分页、全部当前分类、特殊字符搜索、源站排序、多个商品原始链接；定位搜图和QC真实接口。
3. 在最终域名目录搭建 Astro 项目，配置单站品牌、注册链接、购买模板、内容与语言模型。
4. 制作首页和目录的可用预览，预览不索引；首版内容范围单独落实。
5. 验证手机和桌面功能、404/429/超时、元数据、sitemap、hreflang、真实图片和购买ID。
6. GitHub 提交与构建通过后，按选定运行目标发布并绑定域名，再核实公开网址。
7. 只有用户后续要求时，才操作 GA4/GSC/Bing、扩大文章批量或创建发布自动化。

全功能完成的最低条件：
- 所有列表来自真实主站；不存在固定三页/固定少量样本的目录限制。
- 搜索/排序对主站全目录生效，页面内操作维持子站域名。
- 搜图和QC分别通过真实请求及数据来源验证；缺失时明确未完成。
- 普通商品图与QC标识区分；首图与主站一致。
- 源站记录ID与市场商品ID映射正确；用户推广参数保留。
- 手机端无横向溢出，分页可达，图片与文字可读。
- 生产构建、公开访问与索引配置分别核实，不能用“GitHub提交成功”代替上线证明。

## 12. 变更记录与接续约定

2026-10-24 第一阶段：
建立规划分支与初始 PROJECT_MEMORY.md，记录用户原话要点、仓库观察、初次域名结果及搜图/QC缺口。

2026-10-24 第二阶段：
完成注册局复核、npm/官方版本核对、竞品与官方资料整理、当前公开页面与链接验证，并更新完整规划。未购买域名、未建站、未发布。

2026-10-24 第三阶段（用户补充仓库截图和参考站）：
- 已查看截图，确认每域名一个根级独立目录；仓库目标由此前关联升级为本轮明确指定。
- 已通过HTTP读取参考站首页（200），核实24个语言入口和hreflang；另外读取德语及葡萄牙语正文。原先“先5语、以后再扩展”的建议由24语完整方案取代。
- 参考站可见目录、文字搜索、搜图入口和商品详情结构；此观察不证明其接口可用于cnfansge.com，也不意味着本项目搜图/QC已接通。
- 参考站是交互与语言结构参考，不作为商品数据、图片或QC的第二来源。
- 明确无需后台、数据库、商品上传或管理模块；静态SEO内容和翻译文件保存在GitHub。
- 仍处规划阶段，域名尚未由用户选定，网站尚未搭建或发布。

以后每次工作：
- 开始前读取本文件及实际最新代码。
- 实施中记录决策、真实接口、文件变化和未解问题。
- 结束前记录 commit/部署结果、验证证据和下一步。
- 域名确定后将本文件迁入最终域名目录，保持一个权威版本，避免复制后出现互相矛盾的计划。

## 13. 参考来源

官方技术：
- https://registry.npmjs.org/astro/latest
- https://github.com/withastro/astro/releases/tag/astro%407.4.2
- https://docs.astro.build/en/guides/on-demand-rendering/
- https://docs.astro.build/en/guides/deploy/github/
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide

主站公开数据：
- https://www.cnfansge.com/AllProducts/
- https://www.cnfansge.com/AllProducts/6640.html
- https://www.cnfansge.com/template/moban/pc/static/js/script.js?v=2.2.0

官方品牌及服务：
- https://kakobuy.com/
- https://kakobuy.com/favicon.ico
- https://item2.kakobuy.com/register
- https://item2.kakobuy.com/index/information?information_id=3
- https://kakobuy.com/service/help/question?id=74

用户指定体验参考：
- https://kakobuypicklist.com/
- https://kakobuypicklist.com/de/
- https://kakobuypicklist.com/pt/
- https://docs.astro.build/en/guides/internationalization/

竞品页面仅用于关键词和结构观察：
- https://kakobuy-spreadsheet.com/
- https://kakobuychinaspreadsheet.com/
- https://kakobuylab.com/
- https://kakobuyagent.com/kakobuy-finds
