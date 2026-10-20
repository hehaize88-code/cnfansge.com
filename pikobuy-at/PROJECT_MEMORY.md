# Pikobuy × cnfansge.com — 项目记忆与实施规划

更新：2026-10-20（Asia/Shanghai）  
项目标识：pikobuy-cnfansge  
阶段：域名与仓库已确定；完成参考站调研、主站搜索/排序的浏览器验证以及项目约定。当前目录是开发准备材料，尚无可部署网站。

## 1. 本次用户明确指定的规则

| 项目 | 固定要求 |
| --- | --- |
| 本轮平台 | Pikobuy；每次对话只做一个平台、一个域名 |
| 唯一商品数据源 | https://cnfansge.com |
| 数据范围 | 商品、分类、搜索、搜图、QC 照片、排序等均接入同一主站项目 |
| 框架 | 开工时核验 Astro 最新稳定版，选择适合的 SSG / SSR 组合 |
| 代码与部署流程 | hehaize88-code/cnfansge.com；本域名单独使用 pikobuy-at/，沿用仓库连字符命名 |
| 品牌 | Logo 和浏览器图标采用 Pikobuy 官方实际素材 |
| 首页 | SEO 入口；核心词为 pikobuy spreadsheet |
| 域名 | pikobuy.at，用户已准备；不再查询或购买其他候选 |
| 执行方式 | 先规划、再开发；持续更新项目记忆 |

本项目不混用 cnfanshp.com、cnfanssp.com、findspreadsheet.com 或 cnbuycha.com 的商品记录、接口配置和缓存。本文件中的“已确认”仅指本轮用户指令或本轮可见公开页面证据。

注册链接（用户提供，保留完整参数）：

https://www.pikobuy.com/?mode=register&redirect=/home

购买链接模板（用户提供，Weidian 类型）：

https://www.pikobuy.com/product/detail?productUrl=https://weidian.com/item.html?itemID={productId}

测试商品 ID：7755101935。

## 2. 已核实的源站事实与接入边界

已通过公开页面阅读确认：

- 主站有首页、All Products、商品分类和商品详情。
- 目录页 https://cnfansge.com/AllProducts/ 显示分类、搜索输入框，以及 Latest / Popular / Price 选项。
- 样本 https://cnfansge.com/AllProducts/6681.html 标题为 Sweatshirts-1，明确显示 ID:7755101935，并指向 Weidian 商品。
- 该样本页面列出五张图片链接；图片不能仅凭顺序全部标记为 QC。

关键映射：

| 字段 | 样本 | 用途 |
| --- | --- | --- |
| sourceRecordId | 6681 | cnfansge 详情记录与同步定位 |
| marketplace | weidian | 选择购买链接规则 |
| marketplaceProductId | 7755101935 | Pikobuy 购买链接参数 |
| sourceProductUrl | https://cnfansge.com/AllProducts/6681.html | 来源追溯 |

不得把 6681 作为购买用商品 ID；不得默认所有源站商品都来自 Weidian。遇到其他平台商品，必须先确认原始平台与对应链接规则。

尚未核实：

- 公开 API 地址、分页参数、搜索匹配规则、排序字段与方向。
- 搜图上传接口、文件限制、是否需要会话、结果结构。
- QC 独立接口、图片类型字段、图片是否可跨域展示及有效期。
- 价格原始币种、USD 换算来源及更新时间。样本数字 169 不应直接显示为 USD 169。
- 浏览器跨域支持、接口鉴权、限流规则、合法缓存期限。
- Pikobuy 的实际 Logo / favicon 文件地址；必须从官网真实资源确认，不能凭空绘制替代。

本轮程序直连两个站点返回 403，公开网页阅读可获取正文。这只能说明当前读取途径受限，不能据此断言源站宕机、接口不可用或用户浏览器无法打开。尚未执行浏览器搜图上传、实际排序和跨域联调。

接入实施原则：优先使用主站已有、实际验证的接口；无公开接口时先确认可用的数据输出方式。不得假造 /api/products 等地址并称为已接通，不得用占位商品充当真实同步结果。

## 3. 关键词与竞争页面调研

这是一轮公开搜索结果与页面结构调研，不含真实搜索量、关键词难度或账户点击数据。以下优先级是基于项目转化目的的判断，不是流量测量结果。

| 观察对象 | 本轮观察 | 可用于本项目的判断 |
| --- | --- | --- |
| https://pikobuy.to/ | 首页围绕 spreadsheet，目录、QC、分类、购买入口和指南相互连接 | 搜索用户需要可操作的商品目录，SEO 首页应连接真实工具 |
| https://pikobuy-spreadsheets.com/ | 搜索、分类、商品卡与 QC / 使用指南并列 | 分类页可以覆盖具体商品类型意图 |
| https://pikobuysheet.net/ | 重点覆盖搜索思路、QC 与分类说明 | 指南词与商品词应分配不同页面 |
| https://www.pikobuy.com/guide | 官方说明选品、搜索、付款、入库检查及国际运输流程 | 订单和物流政策类内容以官方资料为事实依据 |

不复用竞争站宣称的商品数量、优惠码、优惠比例或“verified”标记；这些不是本项目数据。

建议关键词分配：

| 优先级 | 关键词簇 | 页面与意图 |
| --- | --- | --- |
| P1 | pikobuy spreadsheet / pikobuy spreadsheets | 首页：定位、使用方式、入口、精选实物数据 |
| P1 | pikobuy finds / pikobuy links / pikobuy product list | /spreadsheet/：完整搜索目录与分类筛选 |
| P1 | pikobuy qc / pikobuy qc photos / pikobuy qc finder | /qc/：真实查询能力与 QC 阅读说明 |
| P2 | how to use pikobuy / pikobuy guide | /guide/：按官方流程编写的新手指南 |
| P2 | pikobuy shipping / pikobuy shipping cost | /shipping/：费用因素与官方估算入口，不虚构报价 |
| P2 | pikobuy shoes / hoodies / jackets / t shirts | /category/{slug}/：以源站实际分类与商品为前提 |
| P2 | pikobuy weidian links / how to buy on pikobuy | 独立教程：原始商品链接如何进入购买流程 |
| P3 | pikobuy image search / pikobuy size guide | 搜图功能说明、尺码与图片阅读教程；搜索量未验证 |

首页建议标题：Pikobuy Spreadsheet – Product Finds & QC Photos。只有确认 QC 能力上线后才使用后半句；否则先用 Product Finds & Buying Guide。

首页 H1：Pikobuy Spreadsheet。

首页和 /spreadsheet/ 不复制同一大段正文：前者负责介绍与导航，后者负责浏览和筛选。暂不增加第二个完全重复的 /finds/ 商品全集；若未来需要该入口，可以先重定向到 /spreadsheet/，或只用于有独立选品价值的集合页。

后续文章题库（仅规划，尚未撰写或发布）：

1. How to Use a Pikobuy Spreadsheet: From Product Link to Order
2. Pikobuy QC Photos: What to Check Before Shipping
3. How to Buy Weidian Products Through Pikobuy
4. Pikobuy Shipping Cost: Weight, Dimensions and Route Choices
5. Pikobuy Product Links: How to Keep the Correct Item ID
6. Choosing Sizes from Product Listings and QC Measurements
7. Browsing Pikobuy Finds by Category and Budget
8. Product Photos vs QC Photos: How to Read the Evidence
9. From Warehouse Inspection to Parcel Submission on Pikobuy
10. Pikobuy Image Search: Uploads, Results and Product Matching

第 10 篇以搜图接入成功为前提。政策、价格、时效等内容均需在撰写时再次查官方，不依赖竞争站承诺。

## 4. 域名决定与历史候选

当前决定：用户选择 **pikobuy.at**。以下候选仅为第一轮调研历史，不再作为待用户选择事项。域名绑定和线上部署尚未执行。


前提：面向多地区用户；所有候选均包含完整 pikobuy。

| 排名 | 候选 | 推荐原因 | 当前状态 |
| --- | --- | --- | --- |
| 1 | pikobuytab.com | 简短；tab 可承接表格和选品目录定位；便于同系列命名 | 未确认可注册 |
| 2 | pikobuypicks.com | 商品精选含义明确；适合推荐站 | 未确认可注册 |
| 3 | pikobuycatalog.com | 商品目录定位直接；可承接较大商品库 | 未确认可注册 |
| 4 | pikobuyfinds.com | 与 finds 搜索意图贴近、容易理解 | 未确认可注册 |

本轮尝试检索候选域名，并读取前三个 .com 的注册局 RDAP；RDAP 读取未成功。搜索未检出不能证明域名未注册。没有核实任何候选的首年价、续费价、溢价或所有权；购买前必须以注册商实时结果为准。

优先考虑 .com 是为了全球定位和使用习惯，不代表其有自动排名加成。Google 说明域名中的词只是相关性因素之一，精确匹配域名不会因此获得过度权重。若目标不是单一国家，.de / .nl 等带国家信号的后缀不作为本项目首选；这不表示已存在的地区站需要改域名。

正式 site origin 固定为 https://pikobuy.at；部署运行环境及 DNS 绑定尚未确定，不提前声称已上线。

## 5. Astro 与 GitHub 架构建议

第一轮读取过 Astro 7.1 发布说明，之后从官方 GitHub 主分支读取到 packages/astro/package.json 的版本为 7.4.1；主分支版本不等于 npm 当前稳定标签，尚未安装或固定实际依赖。正式初始化时重新读取 npm 稳定标签及官方要求，将 Astro、适配器、Node 版本与 lockfile 固定。注意 Astro 单仓库 /releases/latest 可能跳转至某个集成包版本，不能据此把 @astrojs/vue 版本当成 Astro 核心版本。

推荐方案：SEO 页面以 SSG 为主，动态商品功能通过服务端数据适配层接入 cnfansge。确有需要的商品或查询路由使用按需渲染；不让每次首页访问都依赖源站响应。

| 部分 | 推荐方式 | 目的 |
| --- | --- | --- |
| 首页、指南、文章 | Astro 预渲染 HTML | 正文可抓取，首次展示快 |
| 分类及目录首屏 | 请求源站后 SSR，允许短期 HTTP 响应缓存 | 共用主站数据，不生成独立商品库 |
| 关键词搜索、排序、翻页 | 同源服务端适配接口 | 保持 cnfansge 的搜索与排序语义 |
| 搜图 | 经验证的主站上传 / 搜索接口 | 复用主站真实能力，限制上传类型与大小 |
| 商品详情、QC | 按原始平台与商品 ID 查询，分级缓存 | 准确对应商品，不混淆图片类型 |
| sitemap.xml、robots.txt | 构建时独立输出 | 源站短暂故障不应使站点地图不可读 |

GitHub 职责：源码、项目记忆、版本、构建与发布流程。GitHub Pages 仅托管静态预渲染输出，不能运行 Astro 服务端接口或 SSR。推荐方案若需要服务端适配层，需另选兼容运行环境；Cloudflare 或 Node 托管可作为候选，本轮不操作或绑定。

如果用户明确要求只使用 GitHub Pages，则采用纯 SSG，并由 cnfansge 提供可跨域调用的公开接口；跨域或鉴权不允许时，必须补齐源站接口或另设服务端运行环境，不能声称仅靠 GitHub Pages 已完成搜图和服务端代理。

数据适配层建议保留：sourceRecordId、marketplace、marketplaceProductId、sourceProductUrl、sourceTitle、priceAmount、priceCurrency、priceUpdatedAt、mainImage、listingImages、qcImages、sourceCategoryId、sourceUpdatedAt。未知值保留为空，不编造。

缓存与故障策略：

- 列表和可公开商品信息采用有限 TTL、请求合并和合理并发；TTL 在源站规则确认后设置。
- 源站 429 时尊重 Retry-After 并退避，禁止重试风暴。
- 仅允许短期 HTTP 响应缓存，过期与故障策略要明确；无成功响应则显示错误。不将商品固化为本地 JSON、SQL、D1、KV 或另一套商品资料库。
- 搜图上传和个人化响应不进入共享缓存；超时、空结果与接口失败使用不同提示。
- 不执行商品入库同步，不建立镜像商品库。源站读取失败不得伪装为零商品或用占位商品填充。
- sitemap 只包含本站已发布、可索引的规范 URL，不随实时搜索结果变化。

## 6. 站点结构与体验约定

建议预留：首页 /；商品目录 /spreadsheet/；分类 /category/{slug}/；详情 /product/weidian/{productId}/；QC /qc/；指南 /guide/；运费 /shipping/；FAQ /faq/；文章列表 /articles/；文章 /articles/{slug}/。

这些是规划路由，不代表已经上线。FAQ 和文章入口只有在有真实内容后开放；本轮没有承诺已完成 20 条 FAQ 或 10 篇文章。

首页顺序建议：简短定位与搜索 → 分类入口 → 少量真实精选商品 → 使用流程 → QC / 指南入口 → 最新文章。移动端减少装饰留白，商品目录建议每页 20 件，筛选折叠但可达，使用分页避免无限增长；不以删除正文换取页面变短。

语言方案：参照 kakobuypicklist.com 的 24 种语言规划完整版本。英文根路径 /，其他 /de/、/es/ 等；德语入口突出。所有语言共享主站商品 ID、价格、图片与排序，界面和 SEO 内容使用静态翻译词典。切换保留当前路径和查询参数，设置 HTML lang、自引用 canonical、互相对应的 hreflang 和 x-default。未完成完整翻译的语言不得作为已发布版本展示。详见 docs/i18n-plan.md。

品牌素材：核验官网 Logo 与 favicon 后固定来源与文件摘要；以“独立商品推荐站”清楚说明定位，不把本站写成 Pikobuy 官方运营。商品内容来源与品牌素材来源分开管理。

购买跳转：仅根据真实平台与 marketplaceProductId 构造，外层 productUrl 参数使用标准 URL 编码，避免原链接的 & 参数被拆错。用户提供的注册链接不添加、删除或替换推广参数。

## 7. 建议的仓库组织与记忆更新规则

仓库已固定为 https://github.com/hehaize88-code/cnfansge.com ，本项目根目录 pikobuy-at/。仓库树中未发现适用的 AGENTS.md。以下为后续实现组织建议：

- PROJECT_MEMORY.md：最终归档本文件，记录范围、已确认配置、当前状态和下一步。
- docs/research.md：官方与竞争站来源、核验日期、关键词到页面的分配。
- docs/data-contract.md：实际接口、字段、币种、分页、排序和图片类型。
- docs/decisions.md：技术与路由决定、原因、撤销或替换记录。
- src/config/site.ts：品牌、域名、注册 URL、购买映射；不散落在页面。
- src/lib/source/：仅处理 cnfansge 的数据接入。
- src/lib/agents/：Pikobuy 购买链接规则。
- src/content/：指南与文章。
- .github/workflows/：构建、验证、发布与必要的数据刷新任务。

每次实际变更结束更新项目记忆中的日期、变更内容、验证结果、部署 commit、正式 URL 与下一步。未成功的操作明确写失败；“已提交 GitHub”与“线上已部署且验证”分开记录。凭据不写入仓库或记忆文件。

不为每个平台复制一套随意修改的数据抓取逻辑。先在这个 Pikobuy 项目证明数据契约可用；后续新平台再复用稳定模块，并分别维护品牌配置和独立域名。

## 8. 实施顺序与验收门槛

1. 已确定域名 pikobuy.at 与目标仓库 hehaize88-code/cnfansge.com，目录 pikobuy-at/；下一步先验证数据接入。
2. 先完成数据接入验证：列表、分类、关键词搜索、排序、翻页、搜图、详情、QC 各验证一个真实操作，记录请求与响应结构。
3. 以商品 7755101935 做完整链路样本，再选多个不同分类样本交叉检查；不能只看首页展示。
4. 依据接口实测固定 SSG 与服务端运行边界，锁定依赖版本，再做首页和目录模板。
5. 完成移动端、购买与注册链接、真实图片、空结果和故障状态；正式品牌资源确认后加入。
6. 完成 canonical、站点地图、robots、结构化数据和必要的页面内容；查询参数页面不制造大批重复索引。
7. 提交 GitHub、提供可访问预览、完成生产部署后核对线上内容与 commit；再提交实际 sitemap 地址。

验收重点：

- 6681 与 7755101935 映射正确；购买页打开对应的 Weidian 商品。
- 搜索和排序与同条件源站结果一致；翻页不重复、不丢结果。
- 搜图使用真实上传与返回结果；失败时不能假装成功。
- QC 与商品图类型准确；有缺失时明确说明，图片没有被其他商品替换。
- USD 必须有已核实的源币种与换算策略；不能套固定猜测汇率。
- 源站失败时站点地图与 SEO 页面仍可读取；动态目录显示明确错误，不生成伪造结果。
- 手机页面无横向溢出，分页可达，所有已发布独立页可打开。

## 9. 当前状态与下一步

2026-10-20 第二轮更新：

- 用户确认 pikobuy.at；指定 hehaize88-code/cnfansge.com，每域名单独文件夹。
- 明确不建立商品数据库，不操作主站后台，不使用假商品、占位商品图或生成图片。
- 参考站 kakobuypicklist.com 的语言菜单确认 24 种语言，检查首页、德语首页、目录、搜图页。
- Chrome 直接打开 cnfansge.com，确认实际页面可用；此前程序直连 403 不等于源站不可用。
- 实测 Latest 和 Price 排序，读取 Popular 的页面目标；实测关键词 Nike 搜索，得到搜索结果页面。
- 搜索实际地址为 https://www.cnfansge.com/search.html?keywords=Nike&channelid=2 。
- 最新排序实际地址为 https://www.cnfansge.com/index.php?m=home&c=Lists&a=index&tid=1&sort=new&sort_asc=desc&ZXljbXM=1 。
- 原始 HTML / JSON-LD 的数值与浏览器转换后的美元显示不一致：样本原始 169，加载后显示 $23.28。不能把原始数值直接加 USD 标签。
- 商品图片可读，但尚未确认独立 QC 字段或搜图入口；不能将整个图库默认称为 QC。
- 已准备 README.md、PROJECT_MEMORY.md、project.config.json、docs/data-contract.md、docs/i18n-plan.md。

未完成：Astro 实际初始化、网站页面、官方 Logo / favicon 提取、源站程序化读取与跨域验证、搜图/QC 接口联调、公开预览、生产部署、域名绑定。

下一步：继续验证无数据库的源站读取方式与价格转换规则；实现可验证的商品目录及详情，再接通其余动态功能。无需用户提供主站仓库、后台账号或另建数据库。当前没有定时任务或自动文章发布计划。

## 10. 来源索引（2026-10-20 阅读）

- cnfansge 首页：https://cnfansge.com/
- cnfansge 商品目录：https://cnfansge.com/AllProducts/
- 样本商品：https://cnfansge.com/AllProducts/6681.html
- Pikobuy 官方首页：https://www.pikobuy.com/home
- Pikobuy 官方购物流程：https://www.pikobuy.com/guide
- 竞争页面：https://pikobuy.to/
- 竞争页面：https://pikobuy-spreadsheets.com/
- 竞争页面：https://pikobuysheet.net/
- Astro 7.1 官方发布说明：https://astro.build/blog/astro-710/
- Astro 按需渲染文档：https://docs.astro.build/en/guides/on-demand-rendering/
- Astro GitHub Pages 部署文档：https://docs.astro.build/en/guides/deploy/github/
- Google 排名系统与精确匹配域名说明：https://developers.google.com/search/docs/appearance/ranking-systems-guide
- Google 多地区与多语言网站说明：https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites

注册局查询尝试（未取得有效结果，不用于判断可注册）：https://rdap.verisign.com/com/v1/domain/pikobuytab.com 、https://rdap.verisign.com/com/v1/domain/pikobuypicks.com 、https://rdap.verisign.com/com/v1/domain/pikobuycatalog.com 。


## 11. 第二轮补充来源

- GitHub 目标仓库：https://github.com/hehaize88-code/cnfansge.com
- 参考站首页：https://kakobuypicklist.com/
- 参考站德语版：https://kakobuypicklist.com/de/
- 参考站目录：https://kakobuypicklist.com/spreadsheet/
- 参考站搜图页：https://kakobuypicklist.com/search/visual/
- Astro 官方源码包版本：https://github.com/withastro/astro/blob/main/packages/astro/package.json

参考站仅作为交互和信息结构参考，不复制其商品、图片或文章。所有商品来源仍严格为 cnfansge.com。

## 2026-10-20 — Public preview implementation

- User requested an actual public preview before formal deployment / Cloudflare binding.
- Source project: `pikobuy-at/`; preview checkout `/workspace/sites/pikobuy-at-preview`.
- Temporary Site ID: `appgprj_6ad709a65b1c81919183864d93b11e7b`.
- Preview origin: https://pikobuy-at-preview.hehaize88.chatgpt.site (publication status recorded in delivery notes).
- Astro stable npm version verified as 7.4.1. Uses Astro SSG for 120 localized pages, plus a small read-only Worker for live cnfansge catalog HTML. No database, copied product catalog, accounts, or admin.
- 24 languages: en,de,es,fr,it,pl,pt,ro,sv,nl,da,fi,el,cs,hu,bg,sk,hr,sl,lt,lv,et,ga,mt. Routes: home, spreadsheet, product (id query), guide, visual status. English root; other locales prefixed. Language switch preserves route/query.
- Catalog parses original page content on demand, follows original pagination links, displays 20 per page. Search uses `/search.html?keywords=...&channelid=2`. Category sort parameters come from actual source page links. Search pages keep source ordering (no unsupported local sorting).
- Official logo: https://www.pikobuy.com/images/header/pikobuy-logo-figma.png
- Official favicon: https://www.pikobuy.com/images/common/pikobuy-icon-192.png
- Original source script contains `const CNY_TO_USD_RATE=7.26`; adapter reads the source value on demand with a five-minute in-memory rate cache. No guessed exchange rate. If rate unavailable, display actual CNY with CNY label.
- Verified source record 6681 maps to Weidian 7755101935, five gallery images, CNY169 and source-converted USD23.28. Purchase URL uses the original marketplace URL, never the source record ID.
- Verified live latest catalog returns 60 source products; first record 6688. Verified Nike search and shoes price sorting; next source page preserves sort.
- QC/visual search: source endpoint not verified. Explicit unavailable state, no uploads, no fake image matching. Gallery photos are explicitly not labeled verified QC.
- Preview is noindex in metadata, response header and robots.txt. Formal pikobuy.at and Cloudflare DNS untouched pending user review.
- Production follow-up: review design, confirm image-search/QC upstream contract, optimize source response time/caching, add production domain canonical/sitemap and optional SSR product SEO, then deploy from requested GitHub folder and bind Cloudflare after approval.

## 2026-10-20 — Catalog completeness and pagination repair

User reports incomplete products and reiterates cnfansge.com as the only source.

Confirmed defects: default `/AllProducts/` emits `/index.php/list_1_2/`, which returned HTTP404; category pages emit e.g. `/shoes/list_4_2/`, which the previous allowlist dropped. Thus the first upstream batch (60 products / three 20-item screens) could not continue correctly. The source's three numbered links are a sliding window, not a three-page total.

Repair: derive each category's `tid` and dynamic Lists URL from the source's own sort controls; use dynamic pagination for default popular and all other sorts, with popular descending. Normalize old pretty cursors and source-provided category pagination links, retaining category, order and page. No database or persisted product mirror added. Retain 20 products per screen, add numbered buttons and a return-to-first-page button; calculate the preceding batch's last screen instead of assuming offset40. All 24 languages use the shared client/adapter.

Validation: eight adapter regression tests pass; 120 localized Astro pages build. Source all-products page2 and shoes page2 returned60 products; latest source page100 also returned60, confirming access far beyond the first batch. Internal preview renders but its development runtime cannot fetch upstream, so interactive browser pagination QA remains unverified there. Public preview's browser visit is blocked by the hosting-domain security page; pikobuy.at returned connection closed. This change updates source and the existing preview only; no claim that the formal domain is deployed or repaired. Cloudflare connector currently requires reauthentication.

Also removed27 stale extraneous lockfile entries that made npm ci try to install an AIX-only dependency on Linux; npm ci and build now succeed. Product data files used for read-only diagnostics remain outside the repository.

Additional completeness fix: source page100 contains record584 with no actual product photo. The old adapter silently dropped it. Such records now remain in results with their title and price, without inventing an image or reusing the source placeholder. Source page100 has60 records after this fix.

## 2026-10-20 16:55 Asia/Shanghai — Approved merge and publication completed

- User explicitly authorized merging PR #42 and publishing the repair.
- PR #42 merged into main: `64bf24b5a092776ec6694d087ef7351c593aa0b2`.
- Existing public preview updated successfully to Site version2; deployment `appgdep_6ad72c69d57c8191a7608717c6b559e7`; source `9f9e3464edc4604ce997386b3ae1f00208426435`.
- Published URL: https://pikobuy-at-preview.hehaize88.chatgpt.site
- Post-publication live API verification: all-products first batch60 (record6640), second batch60 (record4741); shoes first batch60 (record2586), second batch60 (record2223); latest source page100 returned60 records (starting616) and a valid next link to101. All successful responses point exclusively to cnfansge.com dynamic pagination.
- Formal pikobuy.at domain deployment/binding and the browser access block on the preview hostname remain unresolved. Successful publication and live API verification do not establish that the formal domain is working or that the preview is accessible in the connected browser. No Cloudflare account/domain changes were made.


## 2026-10-20 — Authorized Cloudflare production deployment preparation

User explicitly authorized use of the connected Chrome to deploy the repaired version to Cloudflare and bind pikobuy.at. Reused existing Worker pikobuy-at-preview in the user account; it was connected to preview/pikobuy-at and had no custom domains. Preparing to switch to main with root pikobuy-at and build command npm run build:production. This mode changes canonicals to pikobuy.at, emits 72 indexable localized URLs in sitemap.xml, enables robots for production, preserves noindex on generic product and unavailable visual pages, and redirects www to apex. Default build stays noindex for Sites preview. All live catalog data remains exclusively cnfansge.com. Production build produced120 pages and126 assets; eight adapter checks passed; bundle-level checks verified production canonicals, sitemap, robots and www redirect. Deployment and domain validation are recorded in the subsequent result entry; this entry is preparation, not proof of live success.


## 2026-10-20 17:15 Asia/Shanghai — Cloudflare production verified

- User authorized Chrome deployment and domain binding. Existing Worker pikobuy-at-preview now builds repository main, directory pikobuy-at, using npm run build:production; existing deploy command and Node24 retained.
- Production source commit: bf4affd268d63709a8b4fdca505712d9f1bd0b97; build-trigger commit with identical tree: 723fcbadfb3a15c2b4d4706c2a14773fe6bb7821. Cloudflare build ffd58f27-7189-40f7-a5c3-7a2966f99ccf reported Ready in38s, Worker version prefix b25bac44.
- Added custom domains pikobuy.at and www.pikobuy.at to the existing Worker. Live https://pikobuy.at/ opened in the connected Chrome and rendered real source product photos and USD prices. Catalog beyond the first60 products was visible: jacket category page4 rendered20 cards. Live shoes API first batch returned60 (first2586), second batch60 (first2223), and a valid third-batch link. Source remains cnfansge.com exclusively.
- robots.txt and sitemap.xml returned HTTP200 on the formal domain; sitemap contains72 URLs from24 locales. www.pikobuy.at/spreadsheet/?category=shoes returned HTTP301 to the identical apex path/query. Production canonicals use https://pikobuy.at; product and unavailable visual shells remain noindex.
- Formal URLs: https://pikobuy.at/ and https://pikobuy.at/spreadsheet/. The older chatgpt.site preview remains a separate deployment; its hosting-domain browser block was not changed or bypassed.
- Current source scope still has no researched FAQ or SEO article section and visual/QC integration remains pending; this deployment fixes access and publishes the approved pagination repair without claiming those separate features are complete.


## 2026-10-20 — Restore missing FAQ and SEO article content

User reports that FAQ and SEO articles disappeared. Root cause: production was switched to main for the pagination fix while the completed editorial implementation remained on preview/pikobuy-at-pages (content commit f458aa28a02d4a019d820a081b140c0bb75e18c0). Restored the original researched28 FAQs,10 complete localized articles, article index/detail routes, navigation and home entry points, Article/FAQPage data and compact mobile styles for all24 languages. The official and keyword research documents are restored unchanged. Kept the repaired catalog adapter/client, production origin, domain redirect, robots and sitemap build logic; output validation is environment-aware and now guards all409 HTML pages against missing editorial navigation/content. This restoration supersedes the prior note that production has no editorial section. Deployment and live verification will be recorded separately.


## 2026-10-20 — FAQ and SEO article restoration deployed and verified

- Restored production source commit: `4c137f583149b0a1d129470b65626c51853a5796`; Cloudflare build `b9004157-0a5e-46fe-9100-04a8b7f128df` reported Ready in35s, Worker version prefix `6dcbc253`.
- All24 editorial JSON files match the completed original implementation. Production build passed10 tests and generated409 HTML pages; output validation checks content counts, navigation, canonicals, hreflang, structured data and local targets. Catalog adapter/client remain unchanged from the pagination repair.
- Live https://pikobuy.at/faq/ returns200, renders28 questions and successfully expands answers on mobile. Live https://pikobuy.at/articles/ renders10 article cards. The spreadsheet-guide article opens; language switching preserves the article path and successfully displays its German content.
- At390px mobile viewport, FAQ and article pages have no horizontal overflow. Temporary viewport override was reset after testing.
- Live sitemap contains360 canonical URLs:24 FAQ pages,24 article indexes,240 individual articles and72 existing indexable pages. All24 languages restored, including header/footer editorial links.
- Public entry points: https://pikobuy.at/faq/ and https://pikobuy.at/articles/ . Formal production restoration is complete; visual-search/QC integration remains the separate previously documented pending feature.


## 2026-10-20 — All-page mobile compaction deployed and verified

- User requested tighter mobile layouts across the whole site. Production source commit `5953e6fa40d226c69c31fe92a79f3d4b360bfe49`; Cloudflare version `eb51ead2` reported Ready in30s at100% traffic.
- Shared CSS below760px compresses header, hero, cards, catalog controls, product gallery, guide steps, FAQ rows, article headings/paragraph rhythm, sidebars and footer for all24 languages. Desktop rules, all editorial JSON, article text, catalog adapter,20-item pagination and metadata remain unchanged. Article paragraphs remain14px; FAQs retain native expandable answers.
- Production build passed10 existing tests;409 HTML pages and415 assets built with content/navigation/SEO validation. No new implementation-mirroring tests added for this CSS-only adjustment.
- Live before/after heights at390px viewport: home2736→2412px(-12%); article index3076→2375px(-23%); spreadsheet-guide article4851→3905px(-20%); FAQ3036→2509px(-17%); guide1451→1096px(-24%); loaded20-item catalog3071→2929px(-5%); product6640 detail1148→981px(-15%). Catalog first product moves419→374px from viewport top. Measurements are page samples, not a guarantee for every translation/article length.
- Confirmed20 products after clicking next page,28 FAQ items and answer expansion,10 article cards, German article readability at14px, and no horizontal overflow in tested mobile layouts. Image-search status page also checked. An attempted320px override continued to report390px, so320px is not claimed as verified. Temporary viewport override reset after QA.
- Public URL: https://pikobuy.at/ . Screenshot proof of compact article index retained locally for delivery.


## 2026-10-20 — Catalog soft404 repair prepared

User screenshot shows GSC live inspection of /spreadsheet/ at17:46 returning soft404 while crawl succeeds. Public diagnostics confirm HTTP200/index,follow/self-canonical and sitemap inclusion, but raw HTML contains zero product cards and production robots.txt blocks /api/, which the JavaScript catalog needs. Browser visitors currently receive20 live source products.

Repair renders cnfansge products and ordinary pagination links into the initial HTML for all24 localized spreadsheet routes, using the existing source adapter and20-item paging. Client keeps the server-rendered results without a duplicate fetch. Successful rendered HTTP responses may be cached for60seconds at the edge; there is no product database or build-time product copy. Upstream errors and empty unfiltered catalogs return uncached503 with Retry-After instead of200 empty/error shells. SSR has a12-second source deadline propagated through reads. Public catalog/product API resources are crawlable and carry X-Robots-Tag:noindex.

Four new behavior regressions verify HTML cards/escaping, localized pagination across batches,503 on failure, cache keys and HEAD. All14 tests plus409-page production checks pass. Local direct Node source fetching times out in this environment; the503 deadline behaves as intended. Cloudflare live rendering must be verified after publication. GSC private inspection access was denied by automatic approval review even after the supplied screenshot clarified the soft404 problem; do not retry GSC or use another connector without user approval. Deployment and live public verification recorded separately.


## 2026-10-20 — Catalog server-rendering repair live; GSC follow-up blocked

- Production commit `b434d92a0854ffb1af6ae763ac6cfe88cdc8e6f1`, Cloudflare build `1943f4df-947f-40d9-b1e3-9b379163e34a` completed build/deploy stages; live repair verified below.
- Raw HTTP fetches of /spreadsheet/ and /de/spreadsheet/ return200 with20 product cards, data-server-rendered=true and native Next links, without JavaScript. Before the repair both contained0 product cards. Live robots.txt allows /api/catalog and /api/product while retaining the general API exclusion; API responses carry noindex.
- Chrome verified20 SSR products on pages1,2,3,4, crossing the source-batch boundary; page4 starts Trapstar t-shirt and offers page5. Shoes price-up sorting preserves category/order in native next link. Nike search returns20 SSR products with noindex,follow for the search result. Base catalog stays index,follow with its self-canonical.
- All24 localized catalog routes share this renderer; FAQ/articles and mobile compaction are retained. Only short-lived HTTP response caching, no product database or persisted mirror.
- This fixes confirmed website-side causes consistent with the supplied GSC soft404 screenshot. It is NOT confirmation that Google has cleared the report or indexed the URL. Browser auto-review twice denied signed-in GSC access due to insufficient explicit private-data authorization, including after attachment context became available. Do not retry through Browser, another connector, or an alternate surface until user explicitly authorizes access to pikobuy.at GSC, live URL testing and indexing request. User-facing next step is that authorization.


## 2026-10-20 — GSC live test passed and indexing requested

- User explicitly authorized access to pikobuy.at GSC, live URL testing and an indexing request, resolving the earlier private-access block.
- Tested exactly https://pikobuy.at/spreadsheet/ in the signed-in sc-domain:pikobuy.at property. GSC live-test timestamp: 2026-10-20 18:06 (UI local time). Result: “网址可编入 Google 索引” / “网页可以编入索引”. The fresh live test no longer reports soft404.
- Submitted one indexing request after the successful live test. GSC confirmed “已请求编入索引” and that the URL was added to its priority crawl queue. Screenshot evidence captured.
- The indexed-data view before the request remained “已发现 - 尚未编入索引”; do not claim the URL is already indexed. Live eligibility and accepted submission are confirmed; actual indexing is pending Google processing.
