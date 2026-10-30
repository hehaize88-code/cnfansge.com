# USFans × cnfansge.com — 项目记忆与实施规划

更新时间：2026-10-30（UTC）
当前阶段：正式站已在线；五语言 SEO 内容与抓取优化完成本地构建，本地验证通过，正在通过原 GitHub → Cloudflare 集成发布。下方历史规划不代表当前授权范围。

**当前决定优先于下方首轮历史规划：** 用户已确定域名 usfansbuys.com、目录 usfansbuys-com/，明确授权公开预览。下方“待选域名 / 尚未实现”等文字是首轮历史状态，不是当前阻塞。

## 1. 用户已确认的规则

- 本轮只做 USFans，一个平台、一个独立域名；域名必须包含完整品牌 usfans。
- 数据唯一来源为 https://cnfansge.com 。商品、商品图、搜索、搜图、QC、分类、排序和分页均使用该项目；不得另建商品数据库、搜索索引或相似图模型。
- 框架使用实际初始化时 Astro 最新稳定版，SSR 或 SSG；代码保存到 GitHub。
- 首页以 SEO 为主，主关键词 usfans spreadsheet；先研究关键词与竞争页面，再开发；后续逐步优化。
- Logo 和浏览器图标使用 USFans 官网对应素材；保存资源来源与校验信息。站点定位为独立商品推荐站，不将其表述为 USFans 官方站。
- 注册链接严格保留：https://www.usfans.com/register 。用户没有提供注册推广参数，不自行添加或承诺注册优惠。
- 购买链接样本：https://www.usfans.com/product/3/7755101935?ref=SWD92F 。productId=7755101935，ref=SWD92F。
- 持续维护项目记忆。后续域名、配置、实现、测试、提交、部署、阻塞和下一步都需要记录。
- 当前任务先完成规划；不购买域名、不修改旧站、不发布生产站点。

## 2. 项目隔离与 GitHub

用户此前同数据源项目使用仓库 https://github.com/hehaize88-code/cnfansge.com ，每个域名一个独立顶层目录。本轮已读取仓库目录，存在 pikobuy-at、usfanss-org、usfanss-shop 等项目。

本轮 USFans 是待选新域名的项目，不将旧 usfanss.org/usfanss.shop 当作已选域名，不修改其原有购买与搜索规则。当前注册链接与 USFans 购买链接优先于旧站“全部跳主站”的历史规则。

域名确定后采用类似 usfanstab-com/ 的独立目录（仅示例，尚未创建），集中包含：

| 位置 | 职责 |
| --- | --- |
| PROJECT_MEMORY.md | 最新决定、状态和工作日志 |
| src/config/site.ts | 品牌、域名、注册入口、购买模板、语言 |
| src/lib/source/ | cnfansge 数据读取与解析适配 |
| src/lib/purchase/ | 原商城与 USFans 购买链接映射 |
| src/pages/ | 页面路由与同源数据端点 |
| src/content/ | 原创 SEO 内容、翻译、来源记录 |
| public/ | 官网品牌素材、robots、静态资源 |
| docs/research.md | 关键词、竞争页面、官方事实证据 |
| docs/data-contract.md | 真实接口、参数、字段、错误与样本 |
| docs/decisions.md | 重要设计决定与原因 |

GitHub Actions 工作流位于仓库根 .github/workflows/，使用该域名目录的 path filter 和 working-directory；不因一次提交触发全部子站部署。首站验证稳定后才考虑抽取共享模块，避免提前改动其他站点。

## 3. 域名调研

2026-10-26 查询 Verisign .com 注册局 RDAP：

| 域名 | 本轮实际结果 | 解释 |
| --- | --- | --- |
| usfanstab.com | HTTP 404 | 注册局未查到记录；优先候选，短且含完整品牌 |
| usfansgrid.com | HTTP 404 | 注册局未查到记录；备选，适合商品网格定位 |
| usfanssheet.com | HTTP 200，注册日 2025-05-29 | 已有注册记录 |
| usfanspick.com | HTTP 200，注册日 2026-08-26 | 已有注册记录 |
| usfansfinds.com | HTTP 200，注册日 2025-06-18 | 已有注册记录 |
| usfanslist.com | HTTP 200，注册日 2026-02-09 | 已有注册记录 |
| usfanspicks.com | HTTP 200，注册日 2026-08-21 | 已有注册记录 |
| usfanscatalog.com | HTTP 200，注册日 2026-02-09 | 已有注册记录 |
| usfansspreadsheet.com | HTTP 200，注册日 2025-05-29 | 已有注册记录 |

未查到记录不等于注册商承诺可出售。未核验购买价格、溢价、续费、历史用途或保留状态，最终以注册商实时结果为准。没有购买、保留或绑定任何域名。

建议完整品牌 + 简短用途词 + .com；不加 official，不堆多个关键词或年份。完整 spreadsheet 可以放 Title、H1 和正文，不必塞进很长的域名；这是命名建议，不承诺排名提升。

## 4. 关键词与竞争页面

方法：公开搜索结果、实际竞争页面和官方页面/资源检查。未取得 Keyword Planner、Ahrefs、Semrush 的月搜索量、难度或 CPC；未声称读取本次未选域名的 GSC、Bing 或 GA4。优先级是基于用途的编辑判断。

| 调研对象 | 观察 | 本项目采取方向 |
| --- | --- | --- |
| https://usfanshub.com/ | spreadsheet 首页连接分类、QC、指南、运输与比较内容 | 首页清楚说明用途，工具与指南分页面承接不同意图 |
| https://us-fansspreadsheet.com/ | 分类目录、商品照片/价格/购买链接、注册入口 | 用真实完整目录支持用户选品；不复制其商品数、费用或优惠承诺 |
| https://rep.tools/guides/usfans-spreadsheet | 文章强调链接结构、QC 与选品流程 | 优先写清商品链接与 QC 的区别；政策与映射必须回到第一方验证 |

| 优先级 | 关键词簇 | 页面规划 | 注意事项 |
| --- | --- | --- | --- |
| P1 | usfans spreadsheet / usfans spreadsheets / usfans sheet | / | 首页主要意图；H1 用 USFans Spreadsheet |
| P1 | usfans finds / usfans links / usfans product list | /spreadsheet/ | 全量目录、分类、搜索、排序、分页 |
| P1 | usfans shoes spreadsheet / usfans hoodies / usfans jersey finds | /category/{slug}/ | 根据主站真实分类，分别提供商品与实用说明 |
| P1（依赖真实数据） | usfans qc / usfans qc photos / usfans qc finder | /qc/ | 阅读说明与真实 QC 查询；未接通不可宣称 Finder 已可用 |
| P2 | how to use usfans / how to buy on usfans / usfans guide | /guide/ | 官方流程与真实商品示例 |
| P2 | usfans shipping cost / usfans shipping time / usfans shipping calculator | /shipping/ 与文章 | 按官方资料讲因素；没有运费数据就不声称实时报价工具 |
| P2 | usfans weidian / usfans taobao / usfans 1688 / usfans product link | /articles/{slug}/ | 先验证商城映射，再写转换与购买说明 |
| P3（需求未量化） | usfans image search / usfans reverse image search | /search/image/ | 必须使用 cnfansge 已验证接口 |

首页 Title 建议：USFans Spreadsheet – Product Finds & Buying Guide。QC 真正接通后再考虑加入 QC Photos。年份随实际复核更新，不自动换年份冒充新内容。

首页建议内容：紧凑标题和站内搜索 → 真实分类 → 少量真实商品 → 使用步骤 → QC/指南/运费入口 → 最新 4–6 篇文章。完整目录放 /spreadsheet/。/finds/ 如保留则承担独立精选主题，不复制全集。FAQ 和 Articles 保留独立入口。

首批文章建议题库（尚未撰写或发布，数量不是已确认交付）：

1. How to Use a USFans Spreadsheet: From Finding an Item to Opening the Correct Link
2. How to Buy Weidian Products on USFans
3. USFans QC Photos: Listing Images, Warehouse Photos and What to Check
4. USFans Shipping Cost: Weight, Parcel Size and Consolidation
5. USFans Product Links: Marketplace Codes, Product IDs and Common Errors
6. USFans Shoes and Hoodies: Compare Sizing, Photos and Source Listings

官方研究入口为 https://www.usfans.com/ 、/help、/faq、/beginner-guide、/page/about。当前多处为客户端应用空壳，网页抓取正文有限。不能仅根据 200 状态认定实际内容/注册/商品加载成功；费用、时效、仓储等写作时必须读取具体官方事实，不能沿用竞品宣传。

## 5. 已核实的数据证据

2026-10-26 直接 HTTP 读取 cnfansge 首页、AllProducts 目录、AllProducts/6681.html 均为 200；并核对现有适配文件 pikobuy-at/worker/source.mjs。

| 字段 | 当前样本 | 用途 |
| --- | --- | --- |
| sourceRecordId | 6681 | cnfansge 内部记录 ID |
| sourceProductUrl | https://cnfansge.com/AllProducts/6681.html | 数据追溯 |
| marketplace | weidian | 原商城识别 |
| marketplaceProductId | 7755101935 | USFans 购买使用的商品 ID |
| sourceMarketplaceUrl | https://weidian.com/item.html?itemID=7755101935 | 原商城链接 |
| USFans purchase | https://www.usfans.com/product/3/7755101935?ref=SWD92F | 主站当前 HTML 自带此链接，与用户样本完全一致 |

不能用 6681 替换购买 ID。本轮进一步读取官网首页实际引用的 /assets/js/index-Nl76vCiY.js，发现 channel/value 与 name 的第一方映射：1=1688，2=TaoBao，3=WeiDian，且标记 isProductDetailsRouter:true。脚本 SHA-256 为 e6ff6f7e1511334e19583f9e4c379f4ed3d1522fd42fb9c3d26b2eb7916a04a8。此证据验证当前代码映射，不等同于完成各商城浏览器落地测试；Tmall 等扩展来源仍应单独验证。

购买模板按来源为 https://www.usfans.com/product/{channel}/{marketplaceProductId}?ref=SWD92F ，不得全部写死为 3。优先解析 cnfansge 已有 USFans 链接并校验 hostname、商城、商品 ID 和 ref；未知来源显式标记待确认，不产生猜测购买 URL。

官方样本购买 URL 返回 200 但仅为客户端应用 HTML，尚未验证浏览器中实际商品、规格及推广归因；没有操作账户、购物车或订单。

现有数据代码可参考的部分：

- 只允许源主机 cnfansge.com / www.cnfansge.com；轻量 HTML 读取适配并不等于官方公开 API。
- 搜索路径 /search.html?keywords={encodedQuery}&channelid=2。
- 目录读取实际源站 Lists 链接、tid、sort、sort_asc；本轮 HTML 看到了 new、click、price 控件。
- 分页必须跟随真实 next/previous；页码 1、2、3 可能只是滑动窗口，不能截断成只有三页。
- 旧适配器读取主站脚本 CNY_TO_USD_RATE，再计算 USD。实施时核验币种和当前换算含义，不给源币种数值直接贴美元符号，不使用猜测汇率。
- 旧适配器 qcVerified:false，且未实现独立搜图。这说明这两个功能不能按“已有适配器可用”宣称完成。
- 商品图库不自动视为 QC；需独立来源、商品匹配和实际 QC 证据。
- 旧 adapter 的购买转换属于 Pikobuy，本项目不能复制那个购买目标。

建议字段：sourceRecordId、marketplace、marketplaceProductId、name、categoryId、priceAmount、priceCurrency、usdAmount、conversionRate、priceUpdatedAt、mainImage、listingImages、qcImages、qcVerified、nextCursor、previousCursor。缺失数据为空，不伪造。

站内搜索、排序、分类、分页、搜图和 QC 结果保留在子站；通过同源读取层使用 cnfansge 数据，购买才跳用户给定 USFans 地址。不要把“调用主站数据”做成搜索按钮直接离站。

只允许短期响应缓存，不建立独立商品数据库或完整镜像 JSON。源站 429 尊重 Retry-After、限制并发与有限重试；错误不显示为零商品。搜图上传与个人响应不做公共缓存。

## 6. Astro 与部署建议

本轮读取 npm 官方包注册表 https://registry.npmjs.org/astro/latest ，latest=7.4.2，要求 Node >=22.23.4、npm >=9.6.5。实际初始化时再查最新稳定版，固定精确依赖与 lockfile；不要让每次部署自动漂移到新版本。

推荐 Astro SSG + 按需 SSR：

| 部分 | 渲染方式 | 原因 |
| --- | --- | --- |
| 首页 SEO 正文、指南、FAQ、文章 | SSG | 初始 HTML 可读，源站短暂失败时正文仍可访问 |
| 商品目录/分类首屏、商品详情 | SSR + 短期响应缓存 | 读取当前主站商品，初始 HTML 有真实内容 |
| 搜索、排序、分页、搜图、QC | 同源服务端适配主站 | 复用数据和语义，避免前端 CORS 限制 |
| sitemap.xml、robots.txt | 静态输出 | 不依赖主站实时响应 |

GitHub 保存源码和自动构建配置；GitHub Pages 只能托管静态产物，不能运行 SSR/服务端适配。完整需求建议 GitHub 源码 + 兼容 Astro SSR 的运行环境，例如 Cloudflare Workers；本次没有把这项建议当作已确认托管或已完成部署。若以后用户明确只用 Pages，需要单独验证主站浏览器跨域接口，且说明动态功能限制。

## 7. 品牌、语言与 SEO 基线

- 官方首页 HTML 的 icon 指向 https://www.usfans.com/favicon.png ，本轮返回 200、1,936 字节，SHA-256 为 a28cf8e3526676db1e45380802aa5837649f1c574c51c2a96e96a04d79441225。官网脚本默认 blackLogo 指向 https://media.usfans.com/webresource/v1/app/7f2439bb1554488bb7a14afb3f638c3e.webp ，logoUrl 在无节庆覆盖时使用它。正式实施仍要视觉核验与当前官网一致，不拿旧站图或生成图代替。
- Logo/favicon 本地保存后登记源 URL、读取日期、摘要；不依赖第三方 favicon 聚合服务。
- 品牌资源 HTTP 复核：blackLogo 返回 200、image/webp、2,998 字节，SHA-256 74eaef710449a1d2ebd2e886785cab9620841140d6a841aedc47f5d709bd3efc；transparentLogo=https://media.usfans.com/webresource/v1/brand/6ebaf586041d4ff8ad34d66a35d3dc88.webp 返回 200、2,324 字节，SHA-256 8af1d0bac0a3756fd0eea5e468e75f76657dc0f87c6ff35d9f45582e4e5b0b1b。本轮仅核验资源来源与响应，未搭建页面或完成视觉验收。
- 多语言基础先支持独立语言 URL、同页切换、完整翻译、html lang、canonical、互指 hreflang 和 x-default。此前项目偏好多语，本轮尚未明确语言数量；建议 EN/DE/ES/FR/IT 起步，扩展语言必须同时补全文章与独立页，不能只改导航。
- 手机端建议目录每页 20 件、显式分页、两列卡片；压缩无用留白与过高首页区域，保持可读性。
- 首页与目录承担不同关键词意图。结构化数据只反映可见事实，不生成虚假评分、库存或 QC 认证。
- 搜索和任意筛选组合不进入 sitemap；仅列规范、可索引、已发布且成功返回的地址。
- 预览 noindex；正式发布检查取消预览限制、canonical、跳转、sitemap 与 HTTPS。

## 8. 实施顺序及验收

1. 用户选定一个域名；记录正式站点 URL 与独立 GitHub 目录。
2. 验证主站真实接口与数据契约：完整目录、分类、搜索、升降序、分页、图片、价格、QC、搜图。
3. 核验 USFans 多商城链接映射与官方品牌资源。
4. 初始化并固定 Astro 稳定版；实现 SEO 首页、目录和购买链路，给可访问预览。
5. 补齐确认范围内独立页面、文章和语言；检查移动端与异常状态。
6. 代码提交 GitHub，部署后逐项验证正式 URL，再提供真实 sitemap 与收录链接。

验收必须包含：主站同查询结果对齐、第一页/第四页/末端分页、不同分类、不同商城购买 ID、ref 保留、主图对应、真实 QC/搜图、币种正确、429 不误报空目录、页面 HTML 有正文、语言互链和 sitemap。提交成功、构建成功、线上部署、搜索引擎收录分别记录，不能混为一项成功。

## 9. 本轮状态与证据

已完成：需求整理、相关项目记忆读取、GitHub 只读核对、公开关键词与竞品研究、9 个域名 RDAP 查询、Astro 版本检查、cnfansge 目录/商品样本与购买链接核验、USFans 官方商城编号映射和品牌素材 URL 定位、规划与记忆文件整理。
未完成：域名选择/购买、USFans 子站实现、搜图/QC 联调、GitHub 提交、部署、内容发布、统计接入。

资料来源：

- https://cnfansge.com/
- https://cnfansge.com/AllProducts/
- https://cnfansge.com/AllProducts/6681.html
- https://www.usfans.com/
- https://www.usfans.com/register
- https://www.usfans.com/product/3/7755101935?ref=SWD92F
- https://www.usfans.com/help
- https://usfanshub.com/
- https://us-fansspreadsheet.com/
- https://rep.tools/guides/usfans-spreadsheet
- https://registry.npmjs.org/astro/latest
- https://docs.astro.build/en/guides/on-demand-rendering/
- https://docs.astro.build/en/guides/deploy/github/
- https://github.com/hehaize88-code/cnfansge.com
- https://github.com/hehaize88-code/cnfansge.com/blob/main/pikobuy-at/worker/source.mjs
- https://rdap.verisign.com/com/v1/domain/usfanstab.com
- https://rdap.verisign.com/com/v1/domain/usfanssheet.com
- https://rdap.verisign.com/com/v1/domain/usfanspick.com
- https://rdap.verisign.com/com/v1/domain/usfansfinds.com
- https://rdap.verisign.com/com/v1/domain/usfansgrid.com
- https://rdap.verisign.com/com/v1/domain/usfanslist.com
- https://rdap.verisign.com/com/v1/domain/usfanspicks.com
- https://rdap.verisign.com/com/v1/domain/usfanscatalog.com
- https://rdap.verisign.com/com/v1/domain/usfansspreadsheet.com
- https://www.usfans.com/assets/js/index-Nl76vCiY.js
- https://www.usfans.com/favicon.png
- https://media.usfans.com/webresource/v1/app/7f2439bb1554488bb7a14afb3f638c3e.webp

参考过的现有记忆：PROJECT_MEMORY_CSSBUY.md（版本 11）与 CNFANSGE_SUPERBUY_PROJECT_MEMORY.md（版本 6）。只提取同数据源与仓库经验；不同平台域名、购买链接、语言数量及部署状态不自动成为本项目已确认事实。


## 2026-10-26 第二轮：正式域名和预览开发

- 用户确定域名 usfansbuys.com，正式 GitHub 仓库 hehaize88-code/cnfansge.com，独立目录 usfansbuys-com/。旧域名候选不再适用。
- 本轮明确授权公开预览；不等于要求立即修改正式域名 DNS 或部署用户仓库 main。
- 参考 https://kakobuypicklist.com/ ，其有 24 语言入口。首版规划完整 EN/DE/ES/FR/IT 5 种语言，所有 10 篇文章和 28+ FAQ 同步翻译；其余语言预留扩展。
- 用户要求所有产品图片、数据来自 cnfansge，不要假商品、占位图片或生成商品图，不建设后台或数据库。
- 10 篇独立 SEO 文章与 20+ FAQ，顶部 Articles 与 FAQ 入口必须可访问。
- Sites 预览 project_id=appgprj_6adefcc5e600819183200670f8da8b85；expected_url=https://usfansbuys-preview.hehaize88.chatgpt.site 。当前未部署，不能当作可访问结果。
- 实测 cnfansge 动态第4页有不同商品且能继续第5页。已核查商品主图与官方商城映射。独立搜图/QC 接口尚未发现，不能以伪功能冒充接通。


## 2026-10-26 预览实现与验收记录

- Astro 7.4.2，Node 24.22.1，精确 lockfile。Astro 构建 100 个页面；Worker 将主站实时商品注入初始 HTML，同时提供同源 API。无独立数据库、后台、镜像商品 JSON 或自建搜索。
- 页面：SEO 首页、Spreadsheet、Finds、QC 指南、购买指南、Shipping、FAQ、Articles、商品详情与搜图能力说明。首版 EN/DE/ES/FR/IT 五种完整语言；每语言 28 FAQ、10 篇文章、70 章节、180 正文段落。所有翻译已检查结构、ID、来源 URL 与数值。
- 10 篇英文正文各约 1,200–1,450 词，覆盖 spreadsheet 使用、Weidian 下单、QC 检查、运费、商品链接、新手首单、尺码、仓库合箱、物流状态、退货退款。帮助中心逐项引用，无杜撰优惠、固定运费、时效、免费 QC 数量或赔偿保证。
- 主数据层读取 cnfansge 真实分类、关键词查询、sort=new/click/price 与价格升降序、分页。源站每页 60 件，子站每页 20 件；子站第 10 页对应源第 4 页。价格读取源站脚本当前 CNY_TO_USD_RATE=7.26，非自设汇率。
- 商品样本 sourceRecordId=6681，对应 marketplaceProductId=7755101935，Weidian channel=3，5 张源站图库照片，buy=https://www.usfans.com/product/3/7755101935?ref=SWD92F。
- 品牌素材使用上述官方 logo.webp 与 favicon.png。所有商品图片直连 cnfansge uploads。
- 搜图和独立 QC 仍缺主站可验证接口，capabilities 明确 false；页面说明不可用，图库不标为 QC。尚未完成的功能不得对外宣称已接通。
- 预览 robots 禁止抓取，head 与 HTTP noindex；提供未来正式站构建变量 SITE_ORIGIN/PREVIEW、sitemap、语言 canonical/hreflang。正式上线须 PREVIEW=false 并复核 domain、robots、HTTPS。查询商品详情和搜索/筛选组合保持 noindex。
- 项目源代码路径 /workspace/sites/usfansbuys-com。正式目标仍是用户 GitHub 的 usfansbuys-com/，尚未修改该仓库或域名 DNS。
- 本地编译 Worker 的真实数据测试成功；managed 浏览器预览的源站网络请求暂失败，需在公开运行环境复验，不把构建测试当作线上已成功。
- Sites project_id=appgprj_6adefcc5e600819183200670f8da8b85，audience=public；预期公开 URL https://usfansbuys-preview.hehaize88.chatgpt.site。发布结果另记最终交付记忆。

- 公开版本 1 发布成功：deployment appgdep_6adf03c248488191949baf21e194e643，commit e1a74fb4479ea87e18a136626b780ab5a8ce7d99。浏览器验证真实 cnfansge 图片、商品已加载。发现平台优先返回 dist/client 静态 HTML，已将 Astro 中间输出移到 generated/static，仅部署嵌入静态资源的 Worker，确保商品初始 HTML 走 SSR。版本 2 将包含此修复。
- 浏览器手机宽度 390px 验证导航、文章列表、FAQ 搜索；已调整首页按钮换行。


## 最终公开预览交付（2026-10-26）

- **可访问 URL**：https://usfansbuys-preview.hehaize88.chatgpt.site/ 。公开访问，无需登录。浏览器验证已完成。
- **部署成功**：version 2，version_id=appgprj_6adefcc5e600819183200670f8da8b85~appgver_fb8aa5e38a6c8191b479f524d21ea84a；deployment_id=appgdep_6adf048a02248191b33e8fa19a390caa；source commit=848391e41678eddfeb74415d750052933b029507。
- 线上首页 initial-data 已存在，4 张真实商品卡片 + 真实主图成功显示；图片 URL 来自 cnfansge/uploads，检查 naturalWidth > 0。先前 managed 本地预览的源请求问题未影响公开运行环境。
- 线上实际交互验收：shoes 关键词搜索 20 件；价格升序结果正常；跳至第 10 页，上一页 9/下一页 11；商品 6681 的 5 张图库、图2切换、USD23.28、原商城 ID7755101935 与 ref=SWD92F 购买地址正确；切换法语后保留同一商品 ID 和购买地址。
- 手机宽度 390px：导航、文章独立页入口、FAQ 搜索检查通过。英德西法意各 28 FAQ 和 10 完整文章，静态结构测试覆盖 100 路由；npm run check 通过。
- 搜图上传和独立 QC 尚未联调：缺少 cnfansge 可验证接口。预览已明确不可用，无假图片或假商品。需要主站该接口的路由/请求契约后继续，不另建服务或数据库。
- 本轮未改 hehaize88-code/cnfansge.com、未改正式域名 DNS。用户查看预览后，再将项目放入 usfansbuys-com/ 并配置正式托管与域名。GitHub 保存代码和 CI；SSR 需要 Worker 等运行环境，不能仅用 GitHub Pages。
- 正式上线前待办：确认视觉/结构；核验主站搜图/QC接口；正式 domain/canonical、PREVIEW=false、robots/sitemap；若需要拓展到参考站 24 语言则完整翻译后再添加。当前未承诺具体上线收录、排名或流量。


## 2026-10-26 正式部署授权与准备

- 用户明确要求“帮我部署到GitHub和cf”，覆盖先前预览后等待部署的状态。目标仓库 main 下 usfansbuys-com/，域名 usfansbuys.com 和 www。
- 正式独立目录默认 canonical=https://usfansbuys.com，预览开关改为显式 PREVIEW=true；正式 robots/sitemap 允许收录。www 与 HTTP 正式域名 308 到 HTTPS apex，保留路径与参数。
- wrangler.jsonc：Worker usfansbuys-com，单文件 dist/server/index.js，无数据库/存储绑定。Cloudflare Workers Builds 对应 root=usfansbuys-com、build=npm run build、deploy=npx wrangler deploy。
- 新增只针对该目录的 GitHub Actions：构建、100 路由/真实主站数据与生产 SEO 验证、上传部署包；已有 CLOUDFLARE_API_TOKEN 和 CLOUDFLARE_ACCOUNT_ID secrets 时自动发布，否则明确标记 CF 待部署。
- Cloudflare API 连接当前返回 UNAUTHORIZED / requires reauthentication；本地 wrangler whoami 返回未登录。尚未读取或更改 DNS、创建 Worker、绑定域名，不能宣称 Cloudflare 已上线。
- 公开预览继续保持原版本与 noindex。正式配置和代码不影响其他子站。
- 正式发布检查已通过：独立目录 npm ci 全新安装、100 语言路由与实时源数据测试、90 sitemap URL 和 canonical/hreflang/robots 检查、HTTPS/www 308、Wrangler dry-run。部署包约 1,959.57 KiB，gzip 359.10 KiB，无 bindings。
- 清理 Astro 包锁中 27 条 extraneous 的非当前平台 esbuild 记录后，npm ci 可复现；未改变固定 Astro 7.4.2 版本。


## GitHub 部署完成，Cloudflare 待恢复连接（2026-10-26）

- 正式代码已提交 main：2b0ed49e22f18b954d347925ec5203435431885b。
- 项目目录：https://github.com/hehaize88-code/cnfansge.com/tree/main/usfansbuys-com 。仅新增该域名目录及 .github/workflows/usfansbuys.yml，其他子站未改动。
- GitHub Actions run 40295212985 成功：https://github.com/hehaize88-code/cnfansge.com/actions/runs/40295212985 。npm ci、构建、全部实时数据测试与 production SEO 验证均成功；部署产物已上传。
- Deploy Worker and bind custom domains 步骤明确 skipped：仓库缺少可用 CLOUDFLARE_API_TOKEN / CLOUDFLARE_ACCOUNT_ID 凭据。CI success 只证明构建和检查通过，不等于 Cloudflare 已部署。
- Cloudflare 连接返回 requires reauthentication / UNAUTHORIZED；本地 Wrangler 未登录。本轮未创建 Worker、未绑定域名、未改 DNS。
- 下一步：恢复 Cloudflare 连接，或取得用户同意后改用已连接 Chrome 创建 usfansbuys-com Worker、关联 GitHub 目录并绑定 apex/www。工具回退规则要求连接失效改用浏览器前取得同意；本轮尚未使用浏览器进入 Cloudflare。
- 继续使用已验证的公开预览链接查看；正式 usfansbuys.com 尚未验收，不应提交其 sitemap 作为已上线链接。

## Cloudflare 正式上线完成（2026-10-26）

- 用户回复“允许”，明确授权在 Cloudflare API 失效后使用已连接 Chrome 完成部署。实际登录账户 ID=9010cea800ac2a140509889d88fe612e；连接器旧预设账户不用于本项目。
- 正式网站 https://usfansbuys.com/ 已公开上线，HTTPS 正常。usfansbuys.com 与 www.usfansbuys.com 都已绑定 Worker usfansbuys-com；workers.dev 和 Preview URLs 保持关闭。
- Cloudflare 使用现有 GitHub 连接，repo=hehaize88-code/cnfansge.com，production branch=main，root=usfansbuys-com；build=`npm run build && npm run check:production`；deploy=`npx wrangler deploy`；NODE_VERSION=24。无新增数据库、存储绑定或独立后台。
- 自动构建只包含 usfansbuys-com/**，排除 usfansbuys-com/*.md。预览分支构建关闭。只修改本项目配置，未更改其他站点或域名。
- 首次构建因 Cloudflare 默认 npm10.9.2 对锁文件解析不同而失败。package.json 固定 packageManager=npm@11.9.0，与本地/GitHub 已验证环境一致；没有放宽依赖版本或移除 lockfile。实际 Cloudflare 构建确认 Node24.22.1/npm11.9.0，npm clean-install 成功。
- 发布代码 commit=2587598ff94cb3ce2a57f5da0282f0d35dd088c1。Cloudflare 成功 build=8c48e9f7-45bf-4c33-accc-2085014cf76e；生产 version 前缀 e47546f5，状态 Ready，100% 流量。
- Cloudflare 构建记录：https://dash.cloudflare.com/9010cea800ac2a140509889d88fe612e/workers/services/view/usfansbuys-com/production/builds/8c48e9f7-45bf-4c33-accc-2085014cf76e 。
- 最新 GitHub Actions run40298211945 成功：https://github.com/hehaize88-code/cnfansge.com/actions/runs/40298211945 。GitHub workflow 的凭据部署步骤仍可跳过；现在由 Cloudflare 原生 Git 构建负责自动发布，不需要补填 GitHub secrets。
- 正式站验收：首页4条真实商品初始 HTML；Chrome 源站图片 naturalWidth>0；shoes 搜索20项；价格升序正常；第10页前后页9/11；商品6681返回200、noindex,follow，购买地址精确为 https://www.usfans.com/product/3/7755101935?ref=SWD92F。
- 英德西法意页面 HTTP200；canonical/hreflang 正确；编辑内容允许索引；robots.txt 允许抓取；https://usfansbuys.com/sitemap.xml 包含90条URL。HTTPS www 实测308到apex并保留路径参数；HTTP在Chrome中成功到达相同HTTPS地址。本地HTTP网络请求受环境代理断开，未据此虚报HTTP线上状态码；Worker单元测试已验证HTTP308。
- 本轮不新增搜索引擎提交任务；可在后续接入/确认 Search Console 属性后提交 sitemap。不得承诺索引、排名或流量。
- 搜图及独立仓库QC能力仍为 false，等待 cnfansge 可验证接口；seller galleries不标为QC。已上线5语言、每语言28 FAQ与10文章，不代表该两项接口已接通。
- 既有 Sites 公开预览维持原版本和 noindex，正式Cloudflare站与预览分开维护。本节覆盖上文“Cloudflare待部署/正式站尚未验收”等历史状态。



## 2026-10-30 五语言 SEO 更新

用户明确要求依据 GSC、Bing 和 Analytics 调研改进并部署，同时改善旧文、新增最优先文章，全部语言同步。已完成 EN/DE/ES/FR/IT 三篇新文、四篇重点旧文检查表、三个分类落地页、相关链接和分页 SEO。详见 `docs/seo-release-2026-10-30.md`。

生产继续使用仓库 `hehaize88-code/cnfansge.com` 的 `usfansbuys-com/` 和 Cloudflare Worker `usfansbuys-com`。没有迁移到 Sites 或改变其他子站。GA4 尚未发现对应资源，本次不接入其他站点的衡量 ID。

验证：`npm run build`、`npm run check:seo`、`npm run check:production`、`npm run check` 通过；最后一项包含实时商品数据、分页、排序、搜索和 USFans 购买参数校验。空的后续目录分页返回 404，避免软 404。
