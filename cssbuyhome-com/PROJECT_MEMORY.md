# CSSBuyHome / cnfansge 子站项目记忆

更新日期：2026-10-23（Asia/Shanghai）
阶段：cssbuyhome.com 与目标仓库已确认；完成参考站和多语言调研，已更新实施约定。尚未创建可部署网站或部署线上服务。

## 用户确认的要求

- 本轮只做 CSSBuy，一个平台、一个独立域名；域名必须包含 cssbuy。
- 正式域名已由用户准备：https://cssbuyhome.com 。不再建议购买其他域名。
- 用户指定 GitHub 仓库：https://github.com/hehaize88-code/cnfansge.com ，每个域名独立文件夹；本项目采用 cssbuyhome-com/，沿用仓库的连字符命名方式。
- 参考站：https://kakobuypicklist.com/ ，参考布局和多语言交互。参考站不作为商品、图片、QC 或搜索的数据源。
- 不操作主站后台、不需要后台账号，不新增后台管理系统。不得使用虚构商品、占位商品、示例产品图片或生成图片填充页面；商品及商品图片均来自 cnfansge。
- 数据唯一来源为 https://cnfansge.com 。商品、分类、搜索、搜图、QC 照片、排序均复用该项目，不另建商品数据库。
- 技术使用开始实施时 Astro 的最新稳定版本，采用 SSR 或 SSG，代码保存至 GitHub。
- 首页为 SEO 落地页，主关键词 cssbuy spreadsheet；其他关键词先调研。
- Logo 和浏览器图标按 CSSBuy 官网素材处理，记录素材来源；站点应明确为独立推荐站。
- 用户提供的注册入口：https://www.cssbuy.com/index 。严格保留；真实注册落地行为待验证。
- 用户提供的购买模板：https://www.cssbuy.com/shop/goodsDetail?type=micro&id={productId} 。示例 ID：7755101935。
- 一边工作一边更新此项目记忆，后续优化不应擅自改变以上规则。

## 当前边界与待核验

- 域名 cssbuyhome.com、仓库 hehaize88-code/cnfansge.com 已确认，本域名使用 cssbuyhome-com/；运行环境仍待实施时确定。用户表述“到时候需要部署的时候”作为后续部署目标，本轮不发布生产站点或修改 DNS。
- GitHub 代码托管与 GitHub Pages 网站托管需要区分；Pages 只托管静态网站。
- 商品源内部内容 ID 与原始商城商品 ID 必须分开；不能把 cnfansge 的文章/商品详情路由编号直接填入购买模板。
- type=micro 的跨商城适用范围未确认；Taobao、1688 等来源不得未经验证统一使用该值。
- 当前可读取主站公开目录及详情页；已读取同数据源旧子站的适配代码与项目记忆，存在搜索、排序、分页实现。本轮未重新联调其所有运行行为；搜图、独立 QC、CORS 和源站限流契约仍待核验。
- 当前执行环境直接访问 cnfansge.com 和 CSSBuy 返回 403，但网页检索能够读取部分公开页面；不得据此声称源站宕机或接口不存在。
- 旧站经验可作为参考；此次要求的 CSSBuy 购买跳转优先于历史项目的其他跳转规则。

## 2026-10-23 调研结论与证据

以下分为用户确认要求、公开页面观察、已有项目历史记录和建议。建议尚不代表用户已选择；历史记录尚不代表本轮已重新实测。

### 历史域名候选（已由 cssbuyhome.com 决定取代）

最终域名为用户提供的 **cssbuyhome.com**。下表仅保留第一轮调研记录，不再作为待选或建议购买事项。

在 2026-10-23 约 17:05（Asia/Shanghai）查询 Verisign .com 注册局 RDAP：

| 域名 | 查询结果 | 建议 |
| --- | --- | --- |
| cssbuytab.com | HTTP 404，未查到域名注册记录 | 首选；短、含完整品牌、适合表格目录定位；最终可购买状态与价格以注册商为准 |
| cssbuysheet.com | 本次请求 HTTP 503，未取得有效结论 | 语义更直接的备选；不能声称可注册 |
| cssbuycatalog.com | 本次请求 HTTP 503，未取得有效结论 | 商品目录定位的备选；不能声称可注册 |
| cssbuypicks.com | HTTP 200，已有注册记录，注册日 2026-08-21 | 不作为普通新注册首选 |
| cssbuyspreadsheet.com | HTTP 200，已有注册记录；公开页面为出售页 | 不作为低成本测试首选；未取得出售价格 |

本轮没有购买、竞价、注册、绑定或保留任何域名。没有查询到域名不等于注册商承诺可出售；未核验首年费、续费费、溢价或历史站点记录。优先 .com、短名称和易拼写是本项目命名建议，不承诺排名提升。不要重复字母、堆叠多个关键词或添加 official。

### 竞品观察

| 页面 | 实际观察 | 本项目可采用的方向 |
| --- | --- | --- |
| https://cssbuyfind.com/ | SEO 首页介绍 spreadsheet，分类、搜索、指南与购物流程相连 | 首页提供清楚定位，并连接完整目录和使用指南 |
| https://cssbuywithqc.com/ | spreadsheet、QC finder、分类与直接购买入口突出 | 同商品的真实图片、QC 与购买 ID 必须对应；不引用其数量或优惠声明 |
| https://cssbuysspreadsheet.com/ | spreadsheet 首页连接鞋、卫衣、球衣等分类，以及 QC、运费和教程文章 | 让首页、分类、工具、教程承担不同搜索意图 |

本轮是公开结果和页面结构调研，没有获得 Google Keyword Planner、Ahrefs、Semrush 的月搜索量或关键词难度，也没有读取新域名 GSC / Bing / GA4 数据。优先级是基于站点用途的编辑判断，不是流量测量结果。竞品政策、优惠码、用户评价和商品数量不作为本站事实来源。

### 关键词到页面的规划

| 优先级 | 关键词簇 | 页面 | 内容与前提 |
| --- | --- | --- | --- |
| P1 | cssbuy spreadsheet, cssbuy spreadsheets, cssbuy sheet | / | 首页承接主词；说明如何选品，提供目录和指南入口 |
| P1 | cssbuy finds, cssbuy links, cssbuy product list | /spreadsheet/ | 全量主站目录、分类、搜索、排序、分页 |
| P1 | cssbuy shoes spreadsheet, cssbuy hoodie spreadsheet, cssbuy jersey spreadsheet | /category/{slug}/ | 对应真实主站分类；独立分类说明和真实商品 |
| P1（功能依赖） | cssbuy qc, cssbuy qc photos, cssbuy qc finder | /qc/ | QC 真实数据接通后提供查询；当前可规划阅读指南，不能假称已接通 |
| P2 | how to use cssbuy, how to buy on cssbuy, cssbuy guide | /guide/ | 用官网流程和可验证商品示例说明操作 |
| P2 | cssbuy shipping cost, cssbuy shipping calculator, cssbuy shipping time | /shipping/ | 首期写费用因素及估算说明；无官方数据接入时不制作伪实时报价器 |
| P2 | cssbuy weidian, cssbuy taobao, cssbuy 1688 | /articles/{slug}/ | 先验证不同来源的购买 URL 规则 |
| P3（需验证需求） | cssbuy image search, cssbuy reverse image search | /search/image/ | 先核验主站能力与接口，再写工具说明 |

标题初稿：CSSBuy Spreadsheet – Product Finds & Buying Guide。
H1：CSSBuy Spreadsheet。
QC 真正接通后，标题后半句可调整为 Finds & QC Photos；不在未实现时承诺 QC Finder。
年份仅在正文实际复核更新时使用；不要单纯自动替换年份制造更新假象。

建议的首批文章题库（尚未撰写或发布；本轮未承诺文章数量）：

1. How to Use a CSSBuy Spreadsheet: Find an Item and Open the Correct Link
2. CSSBuy QC Photos: Product Images, Warehouse Photos and What to Check
3. How to Buy Weidian Items on CSSBuy
4. CSSBuy Shipping Cost: Item Weight, Parcel Size and Consolidation
5. CSSBuy Links: How Product IDs and Marketplace Types Work
6. CSSBuy Shoes and Hoodie Finds: Compare Sizes, Photos and Prices

政策、费用、时效和优惠细节在写作时重新查询 CSSBuy 官方，不根据竞品文案编造。不先写大量相近页面；/finds/ 如保留，应承担独立精选主题，不能复制 /spreadsheet/ 的全量内容。

## 数据接入规划

已验证的公开样本：https://cnfansge.com/AllProducts/6681.html ，标题 Sweatshirts-1，显示 ID:7755101935，原始购买源为 Weidian。

| 字段 | 样本值 | 使用规则 |
| --- | --- | --- |
| sourceRecordId | 6681 | 主站记录读取与追溯 |
| marketplace | weidian | 选择平台链接转换规则 |
| marketplaceProductId | 7755101935 | CSSBuy 购买参数 |
| sourceProductUrl | https://cnfansge.com/AllProducts/6681.html | 原始记录地址 |

CSSBuy 样本链接按用户提供的模板生成，实际支付不属于本项目。用户给出的 /index 保留为指定注册入口，尚未验证是否直接进入注册表单，不能声称含推广参数或优惠。

同数据源的已有参考代码位于 https://github.com/hehaize88-code/cnfansge.com/tree/main/pikobuy-at 。本轮已读取 PROJECT_MEMORY.md 和 worker/source.mjs。该仓库根目录包含多个子站目录；不据此假设仓库包含 cnfansge 主站后台源码，也不把旧站部署状态等同于新站进度。

可参考但实施时必须重新验证的逻辑：

- 源站地址仅允许 cnfansge.com / www.cnfansge.com。
- 搜索使用 /search.html?keywords={encodedQuery}&channelid=2 。
- 从源站分类和排序控件解析动态 Lists 地址、tid、sort、sort_asc；不能猜造接口。
- 旧项目记录曾发现静态翻页链接 404，改用动态分页。源站的 1、2、3 可能只是滑动页码窗口，不能据此截断成三页商品。
- 旧适配器从主站脚本读取 CNY_TO_USD_RATE，再转换源币种数值。源码当前如此实现，本轮未重新验证最新源站汇率；禁止把原数值直接加美元符号或使用猜测固定汇率。
- worker/source.mjs 的商品返回 qcVerified:false。当前没有证据证明旧站已经实现独立 QC 或搜图；这两项仍是接口核验与接入任务。
- 旧站购买链接转换属于 Pikobuy，不能直接复制给 CSSBuy。CSSBuy 只使用本次指定规则，其他商城 type 值必须另行验证。

建议字段契约：sourceRecordId、marketplace、marketplaceProductId、sourceProductUrl、name、sourceCategoryId、priceAmount、priceCurrency、usdAmount、conversionRate、priceUpdatedAt、mainImage、listingImages、qcImages、qcVerified、nextCursor、previousCursor。未知值为空，不编造。

仅建立数据读取适配层，不另建 SQL / D1 商品数据库、不独立维护商品、搜索索引或相似图模型。可使用短期 HTTP 响应缓存减少重复读取；这与商品资料库分开。源站 429 尊重 Retry-After，有限重试、并发限制；读失败时显示准确错误，不能伪装为无商品。搜图上传和个人响应不共享缓存。

## Astro 与部署方案

2026-10-23 读取 https://registry.npmjs.org/astro/latest ：最新稳定标签为 **7.4.2**；返回要求 Node >=22.23.4、npm >=9.6.5。开始实际初始化时复核稳定版本与适配器兼容性，锁定版本和 lockfile，不将浮动 latest 留给每次生产构建。

推荐：Astro 预渲染首页与内容页面，目录、详情和数据接口按需渲染；GitHub 保存源码、记忆与构建流程，运行环境使用兼容 Astro 的 SSR 托管。Cloudflare Workers 或 Node 主机可作候选，尚未确定或部署。

| 部分 | 建议方式 | 原因 |
| --- | --- | --- |
| 首页、指南、FAQ、文章 | SSG | 搜索引擎直接读到正文，加载快；首页关键正文不依赖实时源站 |
| 目录与分类首屏 | SSR + 有期限的 HTTP 缓存 | 初始 HTML 有真实商品，避免只有加载中的空壳 |
| 搜索、排序、翻页 | 同源服务端适配调用 cnfansge | 保留主站结果与排序语义 |
| 商品详情、QC | 服务端按真实商品标识读取 | 正确映射图片与购买链接；QC 需真实接口 |
| 搜图 | 已验证的主站上传和匹配接口 | 不在子站新建搜图服务 |
| robots.txt、sitemap.xml | 独立静态输出 | 主站短暂异常不应让站点地图不可用 |

GitHub Pages 只能托管静态输出，不能运行 SSR 或服务端代理；每个仓库最多一个 Pages 站点。若最后选择纯 GitHub Pages：需单独组织每个站点的 Pages 项目，并先确认 cnfansge 提供可跨域访问的功能接口。不能把 SSG 的构建时读取宣称为每次访问实时更新。当前最适合完整需求的建议是 GitHub 源码 + SSG/SSR 混合渲染运行环境。

## 页面、品牌和 SEO 基线

- 页面规划：首页 /、目录 /spreadsheet/、分类 /category/{slug}/、商品 /product/{marketplace}/{productId}/、QC /qc/、指南 /guide/、运费 /shipping/、FAQ /faq/、文章 /articles/ 及详情。尚未上线。
- 首页顺序：简短标题与搜索入口 → 分类 → 少量真实精选 → 使用流程 → QC/指南入口 → 最新 4–6 篇文章。商品模块可独立加载，SEO 正文始终可读。
- 商品目录手机端建议每页 20 件、显式上一页/下一页；压缩无用留白，不删除必要说明、不用无限滚动掩盖分页缺陷。
- 正式 Logo/favicon 从 CSSBuy 官网实际资源提取，记录原 URL、抓取日期及文件摘要；本轮尚未提取。不要让 CSSBuy 子站使用主站或旧平台图标；页面注明独立商品推荐站。
- 多语言按本轮参考站核验的 24 种规划，英文根路径，其余 /de/、/es/ 等语言前缀。该方案是用户授权自行规划下的实施选择，尚未完成页面翻译或发布。所有已发布语言必须有完整对应正文、正确 HTML lang、自引用 canonical、互指 hreflang 与 x-default；切换保留同页与查询状态，不发布空翻译页。完整语言清单和执行规则见下方第二轮记录。
- 首页与目录分配不同主要意图；分类页面有独立实用说明。未来其他平台站需要各自真实指南和平台流程，不能只替换平台名批量复制。
- 站点地图只列已发布、可索引、规范 URL；搜索、任意排序组合和无内容工具页不加入。
- Product 数据仅用于有真实商品和可验证字段的详情；不编造评分、评价数、库存或低价。Article/Breadcrumb/WebSite 等结构化数据对应实际可见内容。
- 分页和分类入口有普通可抓取链接；目录上游失败给准确 503 等响应，不返回 200 空商品错误页。预览 noindex，正式发布后复核。

## 项目组织与记忆维护

正式目标仓库：hehaize88-code/cnfansge.com；项目目录 cssbuyhome-com/。用户要求每域名单独目录，已核对仓库现有目录采用类似 pikobuy-at/、lovegobuys-org/ 的命名；本轮查看时 cssbuyhome-com/ 尚不存在。后续所有本域名源码、配置、记忆和文档都放入该目录，不改写旧站目录。本轮没有提交 GitHub 或部署。

建议每站保留 PROJECT_MEMORY.md、docs/research.md、docs/data-contract.md、docs/decisions.md；品牌、域名、注册入口、购买转换规则集中在 src/config/site.ts。数据适配模块单独放置，不散落在页面里。首站验证稳定后再抽取供其他平台复用的模块。

每次变更同步更新：用户已确认决定、实际修改、验证证据、未完成项、失败原因、GitHub commit、部署版本与可访问 URL。GitHub 提交、构建成功、线上部署成功、搜索引擎实际收录四种状态分别记录，不相互代替。记忆不保存密码、令牌或会话信息。

## 实施顺序与验收

1. 已确定域名 cssbuyhome.com、GitHub 仓库 hehaize88-code/cnfansge.com、项目目录 cssbuyhome-com/，无需再次查询候选域名或索取主站后台。
2. 按 24 语言方案准备项目；确定 SSR 运行环境，复核并固定 Astro 稳定版。
3. 验证数据契约：目录、完整分页、分类、搜索、双向价格排序、价格币种、详情、搜图、QC；已有逻辑只在复测后标记通过。
4. 用 6681 → 7755101935 做购买链路样本，再测试不同分类与不同商城；注册入口和官方品牌资源验证。
5. 做可访问的首页和目录预览，检查手机端与数据异常状态。
6. 补齐已规划的实际内容、canonical、sitemap、robots 与基础事件统计；具体文章和语言数量跟随用户后续决定。
7. GitHub 提交和生产部署后验证线上版本、商品/图片/分页/购买跳转；再给真实收录链接。

验收底线：不限制在前三页；购买 ID 正确；USD 不伪转换；商品图与 QC 分开；搜图有真实上传与返回；没有假商品和假成功状态；首页和站点地图不因源站慢而失效。

## 证据来源（本轮读取）

- https://cnfansge.com/
- https://cnfansge.com/AllProducts/
- https://cnfansge.com/AllProducts/6681.html
- https://www.cssbuy.com/index （用户指定；网页正文读取为空）
- https://www.cssbuy.com/shop/goodsDetail?type=micro&id=7755101935 （用户指定；本轮未成功读取详情）
- https://www.cssbuy.com/shop/helpCenter?id=123 （官方入口；本轮未成功读取正文，不据此引用具体政策）
- https://cssbuyfind.com/
- https://cssbuywithqc.com/
- https://cssbuysspreadsheet.com/
- https://cssbuyspreadsheet.com/ （出售页）
- https://registry.npmjs.org/astro/latest
- https://astro.build/blog/astro-7/
- https://docs.astro.build/en/guides/on-demand-rendering/
- https://docs.astro.build/en/guides/deploy/github/
- https://docs.astro.build/en/guides/deploy/cloudflare/
- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- https://rdap.verisign.com/com/v1/domain/cssbuytab.com
- https://rdap.verisign.com/com/v1/domain/cssbuypicks.com
- https://rdap.verisign.com/com/v1/domain/cssbuysheet.com （503，无结论）
- https://rdap.verisign.com/com/v1/domain/cssbuycatalog.com （503，无结论）
- https://rdap.verisign.com/com/v1/domain/cssbuyspreadsheet.com
- https://github.com/hehaize88-code/cnfansge.com/blob/main/pikobuy-at/PROJECT_MEMORY.md
- https://github.com/hehaize88-code/cnfansge.com/blob/main/pikobuy-at/worker/source.mjs

当前交付：规划与项目记忆文件。未创建网站、购买域名、注册自动化、修改 DNS、发布文章或部署线上服务。

## 2026-10-23 第二轮：域名确认、参考站和多语言方案

### 当前固定配置

| 配置 | 值 |
| --- | --- |
| projectId（内部名称，非托管服务 ID） | cssbuyhome-cnfansge |
| siteOrigin | https://cssbuyhome.com |
| www 计划 | www.cssbuyhome.com 301 至相同路径和查询的主域名；尚未配置 |
| repository | hehaize88-code/cnfansge.com |
| projectDirectory | cssbuyhome-com/ |
| primaryKeyword | cssbuy spreadsheet |
| productSource | https://cnfansge.com |
| registerUrl | https://www.cssbuy.com/index |
| weidianBuyTemplate | https://www.cssbuy.com/shop/goodsDetail?type=micro&id={productId} |
| productDatabase | 无 |
| adminPanel | 无；不操作主站后台 |
| defaultLocale | en |
| plannedLocaleCount | 24 |

### 实际查看结果

- 读取参考站英文首页、德文首页、目录页和搜图页。英文目录可见分类、细分类下拉、排序、商品卡和分页；桌面设计为浅色背景、简洁顶部导航、搜索框和商品卡网格。
- 参考站语言菜单共 24 种；浏览器实际从 /spreadsheet/ 切到 /de/spreadsheet/，德文标题为“Kakobuy-Produktlinks durchsuchen”。证明此次目录切换保留页型；没有测试其全部商品、分页、查询参数的切换行为。
- 参考站提供搜图上传界面，标注 JPG、PNG、WebP 和 5 MB。此为参考站能力及限制，不应自动套用到 cnfansge；本轮未执行任何图片上传。
- 参考站英文与德文首页有部分正文差异；CSSBuy 新站使用内容键和段落对齐校验，避免只翻译导航或漏正文，不照搬其翻译。
- 浏览器直接打开 cnfansge.com/AllProducts/ 可展示实际商品和图片；没有进入后台。
- 在 cnfansge 目录搜索 Nike 后曾看到“Found 545 matching products”及结果，后续页面到了 https://www.cnfansge.com/ 首页。不能把这次操作记录为端到端稳定通过；原因未确认，后续检查查询 URL、跳转与翻页。
- 当前 DOM 首次读取出现带美元符号的原始样式数值；未完成源币种和客户端换算一致性验证。价格仍须按主站数据契约验证，不直接把读取数值标 USD。
- 已复读同源旧子站 worker/source.mjs；里面仍返回 qcVerified:false，未出现已经验证的独立 QC/搜图接入。本项目不能借参考站的工具外观声称这些功能已接通。

### 24 种语言与目录

| 代码 | 语言 | 路径前缀 |
| --- | --- | --- |
| en | English / 英语 | / |
| de | Deutsch / 德语 | /de/ |
| es | Español / 西班牙语 | /es/ |
| fr | Français / 法语 | /fr/ |
| it | Italiano / 意大利语 | /it/ |
| pl | Polski / 波兰语 | /pl/ |
| pt | Português / 葡萄牙语 | /pt/ |
| ro | Română / 罗马尼亚语 | /ro/ |
| sv | Svenska / 瑞典语 | /sv/ |
| nl | Nederlands / 荷兰语 | /nl/ |
| da | Dansk / 丹麦语 | /da/ |
| fi | Suomi / 芬兰语 | /fi/ |
| el | Ελληνικά / 希腊语 | /el/ |
| cs | Čeština / 捷克语 | /cs/ |
| hu | Magyar / 匈牙利语 | /hu/ |
| bg | Български / 保加利亚语 | /bg/ |
| sk | Slovenčina / 斯洛伐克语 | /sk/ |
| hr | Hrvatski / 克罗地亚语 | /hr/ |
| sl | Slovenščina / 斯洛文尼亚语 | /sl/ |
| lt | Lietuvių / 立陶宛语 | /lt/ |
| lv | Latviešu / 拉脱维亚语 | /lv/ |
| et | Eesti / 爱沙尼亚语 | /et/ |
| ga | Gaeilge / 爱尔兰语 | /ga/ |
| mt | Malti / 马耳他语 | /mt/ |

执行规则：

1. 一套商品源、同一组商品标识和价格；不同语言不各抓取或保存一套商品库。语言无关的公开数据缓存可共享，正文和 UI 翻译按语言独立输出。
2. 导航、按钮、筛选标签、错误/空状态、首页、指南、FAQ、文章、SEO title 和 description 均按语言提供。文章使用稳定 contentId/slug 对齐，所有语言段落语义和内容范围一致。
3. 商品品牌、型号、原始商品 ID、图片、价格保持主站事实。商品原名保留，通用分类和控件本地化；源站没有的尺寸、材质或描述不为翻译而编造。需要翻译动态商品名称时在展示层处理，保留可追溯原名，不创建商品副本库。
4. 语言切换仅修改语言路径前缀，保留页面类型、商品 ID、文章 slug、搜索词、分类、排序和页码。切换到不存在的正文版本不得悄悄回首页；未完成的对应语言不标记为已发布。
5. 每个已发布语言页面设置自身 canonical，并通过统一清单生成互相对应的 hreflang；x-default 指向同内容的英文版本，不是所有页面都指首页。未发布和错误页面不进入 hreflang 或 sitemap。
6. 语言选择器使用本地语言名称，电脑端紧凑下拉，手机端可展开选择；点击区域清晰，颜色有足够对比。无需访问时强制按 IP 跳语言，可记住用户主动选择。
7. USD 币种不随语言更改；仅本地化千分位和小数格式。所有语言使用同一来源价格和换算策略。
8. 采用 Astro 路由和静态翻译内容实现，不依赖客户端翻译插件才出现正文；首页和文章可预渲染，动态目录 SSR。构建检查语言键缺失、链接 404、跨语言正文缺段及 canonical 错域名。

### 参考布局的采用范围

采用搜索突出、分类可达、商品网格、商品详情、清晰分页和同页语言切换。首页保持 CSSBuy SEO 定位，手机端压缩标题区和装饰留白，目录默认每页 20 件。分类数量和名称由 cnfansge 实际分类决定，不复制参考站并不存在于主站的细分类。图片使用主站对应商品真实图片；缺图不拿其他商品图替换。

源站一时不可读时使用明确错误状态；不生成模拟数据。只有 CSSBuy 官方 Logo/favicon 按先前用户要求来自 CSSBuy 官方，其余商品及商品图片以 cnfansge 为唯一来源。

### 第二轮状态

已完成：域名和目录固定、参考站结构与语言菜单检查、英德目录切换验证、主站公开页面查看、项目记忆更新。
未完成：Astro 项目初始化、可访问预览、24 语言正文、正式 Logo/favicon 提取、源站程序接入复测、搜图/QC 接通、GitHub 提交及生产部署。
下一步：按已确定配置进入首版实现，优先验证真实数据读取与完整分页，再做 24 语言首页/目录模板。无需索取主站后台账号，不更换商品数据源，不另建数据库。

新增来源：
- https://kakobuypicklist.com/
- https://kakobuypicklist.com/de/
- https://kakobuypicklist.com/spreadsheet/
- https://kakobuypicklist.com/de/spreadsheet/
- https://kakobuypicklist.com/search/visual/
- https://developers.google.com/search/docs/specialty/international/localized-versions
- https://docs.astro.build/en/guides/internationalization/


## 2026-10-23 公开预览实施（第三轮）

用户明确授权先做公开预览，确认外观后再准备 cssbuyhome.com 域名部署。本轮使用 Sites 技能完成独立预览；不操作正式域名 DNS，不向用户 GitHub main 推送。

- 预览项目 ID：appgprj_6adb295356288191ad2e09eb1a6417c6。
- 预览预期地址：https://cssbuyhome-preview.hehaize88.chatgpt.site （实际发布成功以部署结果为准）。
- 源码目录：cssbuyhome-com；Astro 7.4.2，Node >=22.23.4。Astro SSG 生成 SEO 正文，Worker SSR 读取商品目录和详情。
- 唯一商品来源 cnfansge.com；无数据库、无后台、无生成或伪造商品。HTTP 缓存 60 秒。保留 cnfansge 内部 ID 与市场商品 ID 的区别。
- 核对 CSSBuy 官方现代帮助中心：Cost and Fees id=12、Storage id=81、Return Policy id=80、Refund id=19。文章以官方 buyforme/expertbuy/shipforme/aboutus/estimates 为来源，10 篇共 10,538 英文单词，28 个 FAQ。调研见 docs/KEYWORD_RESEARCH.md。
- 顶部 Spreadsheet / Guides / QC guide / FAQ；Guides 有独立列表和 10 个静态详情页。首页 FAQ 摘要，独立 FAQ 页包含全部 28 条并可搜索。
- 官方 Logo 来自 https://assets.cssbuy.com/static/icon/logo.svg。favicon 从官方页面已呈现的原始 32px 图标中提取，未包含浏览器叠加标记。
- 原定 24 语言仍在配置清单；这轮以完整英文公开预览供审阅，尚未完成的翻译不发布、不挂伪语言切换，英文不会冒充其他语言。多语言结构保留同页路由及查询参数策略。
- 视觉搜索、独立 QC 图片接口没有在主站公开界面或既有 adapter 中得到验证，预览不开放上传或伪匹配。卖家图库明确标注 seller gallery。
- CSSBuy Weidian 购买 URL 已使用用户给定 type=micro 和原始 itemID；Taobao/1688 类型映射未验证，保留原商品链接供用户在官方站粘贴。
- 预览全部 noindex,nofollow，robots Disallow /。正式域名迁移仍需复核主站接入、语言、origin/canonical 和 DNS。
- 初始化默认 Vinext starter 后按用户明确要求切换为 Astro。移除了未使用的数据库/后台模板；没有创建产品数据库。安装前 pending pnpm starter 标记因框架切换不适用，检查确认无已安装依赖/恢复数据后移除，使用标准 npm 依赖安装成功。

当前验证：来源白名单、购买 ID 映射、超过60件分页、文章和 FAQ 完整性测试均通过；构建与页面 QA 进行中。

### 预览发布检查与修正

- 首次部署 version 1 / commit 3f25e079f0dc77164e97fac321e4e7d33ca12f5c 已发布，但线上日志暴露 Sites dispatch Worker 不允许 caches.default。已移除依赖，改为最多64条、TTL60秒的临时内存响应缓存；无持久化数据库。加入并发去重与错误不缓存测试。
- 本地浏览器访问公开预览遇到 Cloudflare 访问保护；部署日志可通过原生服务读取。尚不能将浏览器访问等同于线上端到端通过。
- 源站浏览器验证 www.cnfansge.com/AllProducts/ 与 Nike 搜索结果（545条）正常，已采用 www canonical 作为同一商品源地址。
- 构建19个页面，全部站内链接存在。文章列表/详情、FAQ搜索已通过本地界面检查。

### 用户反馈预览打不开（同日后续）

用户截图明确显示 chatgpt.site 的 Cloudflare 访问保护拦截；原预览不能作为可用公开预览交付。当前版本2的默认缓存异常已修复，但发布成功不代表用户可访问。原生服务确认public/active/version2。

拟用现有代码包发布Cloudflare workers.dev临时预览，不绑定cssbuyhome.com、不改正式DNS。Cloudflare连接的首次API发现调用返回UNAUTHORIZED，明确要求重新授权。没有进入Cloudflare浏览器，也没有创建Worker；需按工具规则取得插件失效后的浏览器备用授权，或恢复原连接。现有修正版dist包及6项测试可复用，禁止重新搭建或填充假商品。


## 2026-10-23 GitHub Pages 临时外观预览

用户反馈无法连接 Cloudflare。改用仓库独立分支 `preview/cssbuyhome`，目录 `cssbuyhome-com/`；主分支和正式域名不变。通过 GitHub Actions 构建 Astro 静态预览，构建时仅从 www.cnfansge.com 获取真实商品与图片，写入生成 HTML，不新建数据库。搜索及分类打开源站；仅供页面审阅，不能声称实时搜索、搜图及 QC 已接通。10 篇文章和 28 条 FAQ 完整保留，英文，noindex。发布状态与公开地址须以工作流和浏览器验证为准。


## 2026-10-23 改用 GitHub Pages：已发布并打开

- 用户反馈无法连接 CF；本轮未调用 Cloudflare 或绑定正式域名。
- 公开临时预览：https://hehaize88-code.github.io/cnfansge.com/
- 仓库独立分支：preview/cssbuyhome；项目目录：cssbuyhome-com/；main 未改动。
- 首次源代码提交：b803a037bc649f5b7cddb090ea6b47b279384881。
- GitHub Actions 工作流：CSSBuy preview；run 39938983221，第 2 次尝试成功发布。第一次仅发布任务被新建 Pages 环境默认 main 分支限制阻止；已为无 secrets 的 github-pages 环境加入精确分支 preview/cssbuyhome，保留其他限制。
- 构建实际读取 60 件 cnfansge 商品，生成 8 个详情页面；主页展示 8 件，列表展示前 20 件。图片直接使用 www.cnfansge.com/uploads/。
- 商品记录只进入本次生成的静态 HTML，不新增数据库，也不把商品 JSON 写入源代码。
- 本版是静态外观预览：搜索和分类跳转 cnfansge 源站。实时站内搜索、排序、搜图、QC 数据接口仍不应声称已接通。英文 10 篇文章与 28 条 FAQ 完整保留，noindex。
- 浏览器已打开首页，顶部 3 张商品图 naturalWidth 均大于 0；FAQ 页面确认 28 条。
- 原 Sites 预览地址仍受 chatgpt.site 拦截，不再作为可用预览交付。
- 独立 GitHub 项目的 Worker 打包支持缺少 Sites 专属 hosting.json；完整 npm run build 成功，19 个 Astro 静态页面、6 项测试通过。
