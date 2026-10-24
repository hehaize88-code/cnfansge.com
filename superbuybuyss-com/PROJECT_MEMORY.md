## 当前部署决定（2026-10-24）

用户已明确授权部署到 GitHub 和 Cloudflare。此段取代后文历史记录中的“仅预览、等待正式部署”状态。

- 正式项目目录：hehaize88-code/cnfansge.com / superbuybuyss-com/，分支 main。
- 正式 Worker：superbuybuyss-com，计划绑定 superbuybuyss.com 与 www.superbuybuyss.com，www 301 到根域名并保留路径和查询。
- 预览经过用户查看后沿用现有视觉与内容，未新增其他平台项目。
- Node 24.19.0 / npm 11.9.0 / Astro 7.4.2 / Wrangler 4.152.0。最新 Astro 版本需要 Node >=22.23.4，不能用旧的 22.16.0 构建环境。
- 已通过全新 npm ci、Astro 构建、90 页/2910 内链/5 语言校验，以及 Wrangler dry-run（4,468.69 KiB，gzip 1,200.39 KiB；无数据库等绑定）。
- 正式 HTML 开放收录，sitemap.xml 含 85 条编辑内容和目录 URL及语言对应；product 客户端详情壳继续 noindex,follow，后续若要商品 SEO 再做服务端详情与产品站点地图。
- 正式域名与 workers.dev 的索引策略按请求主机隔离；API 永远 noindex。预览域名保留 robots 全站禁止收录。
- Git 集成设置：根目录 superbuybuyss-com，构建 npm run build && npm run check，部署 npx wrangler deploy，监听范围 superbuybuyss-com/**。启用发布前的完整校验。
- 注册链接、ES7pVI 推广码、cnfansge.com 唯一商品来源保持不变；没有自建商品库或图片副本。
- 独立搜图、真实 QC 查询接口以及额外语言仍未完成，不应声称全部实现。
- 此记录是提交前通过的验收；线上部署版本和浏览器验证结果将在部署完成后追加。

# Superbuybuyss.com × cnfansge.com — 项目记忆与实施约定

更新日期：2026-10-24（Asia/Shanghai）
项目内部标识：superbuybuyss-cnfansge
当前阶段：公开预览版本已实现；包括 Astro SSG 页面、实时商品读取层、10 篇英文长文、28 条 FAQ 与 5 种完整语言。公开发布结果以文末最新记录为准；正式域名和用户 GitHub 仓库尚未部署。

## 用户已明确的要求

- 本次只做 Superbuy，一个平台、一个独立域名；正式域名为用户已准备的 https://superbuybuyss.com 。以最新消息为准，前一条 cssbuyhome.com 不作为本次域名。无需继续建议或购买其他域名。
- 唯一商品与功能来源：https://cnfansge.com 。商品、分类、图片、搜索、搜图、QC、排序和分页全部复用主站，不另建商品库、后台或搜索引擎。
- 框架采用实施时 Astro 最新稳定版，SSR 或 SSG；GitHub 保存项目和部署流程。
- 用户明确指定仓库：https://github.com/hehaize88-code/cnfansge.com ，每域名一个顶层独立目录；本项目固定为 superbuybuyss-com/。所有本站代码、配置、文档和项目记忆均放在此目录。
- Logo 和浏览器图标使用 Superbuy 官网实际素材，记录来源；页面说明独立商品推荐站身份。
- 首页为 SEO 落地页，主关键词 superbuy spreadsheet；先调研其他关键词与竞品，再开发。
- 一边实施一边维护项目记忆；先规划再做站，后续逐步优化。
- 本次提供的注册与购买规则优先于其他旧站规则。
- 用户指定参考 https://kakobuypicklist.com/ 的页面结构、目录交互与多语言。参考站不作为商品、图片、QC 或搜索的数据源。
- 不操作主站后台，不索要后台账号，不建立新的后台、数据库或商品管理。不得使用假商品、占位产品图、生成图片填充商品模块。

注册链接（完整保留用户参数）：

https://www.superbuy.com/en/page/login/?ref=https%3A%2F%2Fwww.superbuy.com%2Fen%2F%3FnTag%3Dpc.shell.header.logo%26trackPayload%3Dpc_shell_header_logo

Weidian 购买链接样本：

https://www.superbuy.com/en/page/buy/?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7755101935&partnercode=ES7pVI

- marketplaceProductId = 7755101935；partnercode = ES7pVI。
- 内层 Weidian URL 整体作为外层 url 参数编码，推广参数保留在外层。
- 用户将 login 路由称为注册链接，按原链接保存；直接进入注册还是登录切换尚待实际验证，不自行添加推广或优惠参数。
- Taobao / 1688 等其他来源需要保留其原始商城链接并验证 Superbuy 支持，不能全部硬套 Weidian 模板。

## 项目隔离

- 本次不是 cnbuycha.com / superbuytab.com 项目。
- 历史记录有 spreadsheet-superbuy.net 等旧站；本轮不修改、迁移或复用其域名决定。
- CSSBuy 项目 cssbuyhome.com 属于同数据源但不同平台，仅参考数据接入经验，不混入其购买链接或品牌配置。
- 已核对 hehaize88-code/cnfansge.com 仓库存在，默认分支 main；本轮只读。

## 调研过程记录

2026-10-23 已完成：

- 读取 cnfansge 首页、AllProducts 目录及 6681 商品样本。
- 读取 Superbuy 官网首页、帮助中心入口。
- 公开搜索并检查 superbuy.net、superbuypick.com 等竞品结构。
- 读取 Astro 按需渲染与 GitHub Pages 官方文档。
- 读取同数据源既有项目的记忆与 worker/source.mjs，用于核对数据适配边界。

初步判断：SEO 内容适合 SSG，商品交互宜通过同源服务端读取主站；GitHub Pages 不能承担 SSR。独立搜图与 QC 接口仍需验证；旧适配器 qcVerified:false 不能被当作已有 QC 能力。

本轮已补齐下述域名、关键词、架构与验收规划。当前交付为规划文件，不代表网站功能已实现。

## 历史域名调研（已被 superbuybuyss.com 的确认取代）

当前正式域名固定为 superbuybuyss.com。下表仅保存第一轮查询记录，不再作为待选清单。

2026-10-23 约 17:43（Asia/Shanghai）通过 Verisign .com 注册局 RDAP 直连查询：

| 域名 | 实际查询结果 | 建议 |
| --- | --- | --- |
| superbuyhome.com | HTTP 404，未查到该域名注册记录 | 首选；含完整品牌，易记，适合扩展目录、QC、指南与文章 |
| superbuygrid.com | HTTP 404，未查到该域名注册记录 | 备选；grid 呼应表格与商品网格，较有辨识度 |
| superbuylist.com | HTTP 200，已注册，注册日 2025-05-29 | 不作为普通新注册候选 |
| superbuysheet.com | HTTP 200，已注册，注册日 2023-12-11 | 不作为普通新注册候选 |
| superbuyfinds.com | HTTP 200，已注册，注册日 2023-10-17 | 不作为普通新注册候选 |
| superbuytable.com | HTTP 503，查询未成功 | 状态未知，不声称可注册 |
| superbuypick.com | 已找到正在运营的竞争网站 | 不作为新站候选 |
| superbuytab.com | 既有用户项目，数据源为 cnbuycha.com | 本次不占用、不改绑 |

404 表示注册局此次未找到注册记录，不是注册商的可购买承诺。未查询价格、溢价、续费或历史使用情况；最终以购买时注册商结果为准。没有购买、保留或绑定域名。域名候选不是用户已确认决定。

推荐完整品牌 + 简短描述词 + .com；不在域名堆叠年份或多个关键词。域名里无需强塞完整 spreadsheet，核心词放在页面标题、H1 与实用正文。选用 .com 是命名与全球受众建议，不宣称它能保证排名。

正式目录固定为 superbuybuyss-com/；站点配置、canonical、sitemap 和部署项目统一使用 superbuybuyss.com。此前 superbuyhome.com 等候选建议已失效，不得当作当前配置。

## 关键词与竞品调研

本轮依据公开搜索结果、竞争页面和官方帮助内容判断搜索意图，未获取 Keyword Planner / Ahrefs / Semrush 的月搜索量、难度、CPC，也未读取新域名的 GSC / Bing / GA4 数据。以下优先级属于内容规划判断。

| 调研对象 | 实际页面观察 | 本站采用方向 |
| --- | --- | --- |
| https://superbuy.net/ | spreadsheet 主标题、商品搜索、分类、商品与注册入口 | 首页突出定位，提供可用的目录与购买流程 |
| https://www.superbuypick.com/ | spreadsheet + 年份、分类集合、商品与 QC 文案、FAQ | 按商品分类组织内容；不照搬其优惠、保险、数量或 verified 承诺 |
| https://spreadsheets-superbuy.com/ | 搜索结果强调 finds、W2C、QC 与运输指南 | 将找货、QC 和运输问题分配到不同内容页；本轮只读到检索摘要 |
| https://www.superbuy.com/en/ | 官方提供购买、入库检查、国际运输流程及帮助入口 | 平台操作、费用与时效等事实只依据官方对应资料 |

| 优先级 | 关键词簇 | 规划页面 | 页面职责 |
| --- | --- | --- | --- |
| P1 | superbuy spreadsheet / superbuy spreadsheets / superbuy sheet | / | SEO 首页：定位、选品入口、使用步骤、真实精选和内容导航 |
| P1 | superbuy finds / superbuy links / superbuy product list | /spreadsheet/ | 完整主站商品目录、分类、搜索、排序与分页 |
| P1 | superbuy shoes spreadsheet / superbuy hoodie spreadsheet / superbuy jersey spreadsheet | /category/{slug}/ | 按主站真实分类提供产品与独立说明 |
| P1，依赖接口 | superbuy qc / superbuy qc photos / superbuy qc finder | /qc/ | QC 阅读说明；真实查询接通后才宣称 finder 能力 |
| P2 | how to use superbuy / how to buy on superbuy / superbuy guide | /guide/ | 从找商品到入库、选运输方式的流程 |
| P2 | superbuy shipping cost / superbuy shipping calculator / superbuy shipping time | /shipping/ 与独立文章 | 费用因素、估算方式与时效影响因素；不编造实时报价 |
| P2 | superbuy weidian / superbuy taobao / superbuy 1688 | /articles/{slug}/ | 按来源平台解释正确的商品链接与下单方式 |
| P3，需求未量化 | superbuy image search / superbuy reverse image search | /search/image/ | 仅在主站真实搜图能力完成核验后开放工具 |

建议首页 Title：Superbuy Spreadsheet – Product Finds & Buying Guide。
建议首页 H1：Superbuy Spreadsheet。
真实 QC 接口完成后才考虑在标题承诺 QC Photos / QC Finder。年份随实际内容复核更新，不自动替换年份冒充更新。

首页与目录不能复制同一大段 SEO 文案。/finds/ 只在有独立主题选品价值时增加，不再复制一份全集。文章和 FAQ 的具体数量随后续开发需求决定；本轮仅规划，未撰写或发布。

后续优先文章主题：

1. How to Use a Superbuy Spreadsheet: From Finding an Item to Opening the Correct Link
2. How to Buy Weidian Products on Superbuy
3. Superbuy QC Photos: What to Check Before Shipping
4. Superbuy Shipping Cost: Actual Weight, Parcel Size and Route Choice
5. Superbuy Taobao Links: How to Keep the Correct Product and Variant
6. Superbuy Warehouse and Parcel Consolidation: A Practical Guide

政策、仓储期限、费用、运输时效与补偿细节在写作时重查官方具体页面；不把论坛帖子或竞品营销文案当作官方政策。

## 数据接入契约

本轮已读取 cnfansge 目录，看到搜索输入与 Latest / Popular / Price 控件。读取样本 https://cnfansge.com/AllProducts/6681.html，确认标题 Sweatshirts-1、ID:7755101935、Weidian 原始购买链接及图片。仅凭图库不能断言每张图片都是仓库 QC。

| 字段 | 样本 / 约定 | 作用 |
| --- | --- | --- |
| sourceRecordId | 6681 | cnfansge 内部详情记录 |
| marketplace | weidian | 商品原始商城类型 |
| marketplaceProductId | 7755101935 | 购买时的真实商品 ID |
| sourceProductUrl | https://cnfansge.com/AllProducts/6681.html | 来源追溯 |
| marketplaceUrl | https://weidian.com/item.html?itemID=7755101935 | Superbuy 外层 url 参数的值 |
| partnerCode | ES7pVI | 用户明确提供的 Superbuy 参数 |

不能把 sourceRecordId=6681 填入购买链接。不同商城可能有相同数字 ID，映射键应包含 marketplace。

本轮已读取 https://github.com/hehaize88-code/cnfansge.com/blob/main/pikobuy-at/worker/source.mjs：

- 存在主站 HTML 读取、详情解析、搜索、排序与动态分页适配。
- 搜索构造 /search.html?keywords={encodedQuery}&channelid=2。
- 排序使用源站的实际 Lists 链接与 sort / sort_asc；开发时复测，不猜造 API 地址。
- 现有代码从主站脚本读取 CNY_TO_USD_RATE。价格必须核验源币种与转换规则，不能把原始数值直接加美元符号。
- 商品返回 qcVerified:false；没有证据证明这个适配器接通了独立 QC 或搜图。
- 旧项目的购买链接属于其他平台，本次必须替换为用户提供的 Superbuy 规则。
- 上述是源代码观察，不等于本轮已重测所有浏览器行为。

| 功能 | 当前证据 | 开发验收 |
| --- | --- | --- |
| 商品 / 图片 / 分类 | 公开页面可读取，已有同源读取实现可参考 | 多分类抽样比对主站，主图一致，缺失不得以假商品补位 |
| 搜索 / 排序 | 页面控件与旧适配源码已看到 | 相同查询与排序条件结果对齐主站 |
| 全量分页 | 旧实现有动态分页处理 | 跟随真实下一页，不能只取第一页或前三页，不漏类目 |
| USD | 已有读取主站换算参数的代码 | 复核最新币种、换算值、舍入与更新时间 |
| QC | 仅见商品图库，未验证独立接口 | 区分商品图 / QC 图，核验对应商品与来源；未知不标已质检 |
| 搜图 | 接口未验证 | 验证上传地址、文件要求、会话、结果结构；不建立子站匹配库 |
| Superbuy 链接 | 用户模板和主站商品 ID 已确认 | 校验生成 URL；实际落地商品与推广参数仍需浏览器验收 |

本轮网页读取工具未能打开用户指定的登录与购买深层链接；因此未声称注册、购买落地或推广归因已经验证。没有下单、加购物车或操作账户。

只建立轻量读取适配层，不建立商品数据库、镜像商品 JSON、独立商品管理后台或搜索索引。可用有期限的 HTTP 响应缓存减少重复访问；源站失败不得伪装为零商品。429 时遵守 Retry-After、有限重试与并发限制。用户上传图片与个人响应不做共享缓存。

## Astro、GitHub 与运行环境

2026-10-23 实时读取 npm 官方 astro/latest，最新稳定版本 **7.4.2**，要求 Node >=22.23.4、npm >=9.6.5。初始化时再核验 stable 标签和适配器兼容性，固定版本及 lockfile，不让生产每次构建随浮动 latest 自动升级。

推荐 SSG + 按需 SSR：

| 模块 | 方式 | 原因 |
| --- | --- | --- |
| 首页 SEO 正文、指南、FAQ、文章 | Astro SSG | 首屏可抓取，源站暂时慢时正文仍可读 |
| 目录、分类与商品详情 | SSR + 有期限响应缓存 | 首屏包含真实源站内容，减少浏览器跨域依赖 |
| 搜索、排序、翻页 | 同源服务端适配 | 保持 cnfansge 的结果与排序语义 |
| 搜图和 QC | 调用经验证的主站接口 | 不另建服务、不把普通图库假称 QC |
| robots.txt、sitemap.xml | 独立静态输出 | 不在每次抓取 sitemap 时依赖主站实时查询 |

GitHub 保存源码、项目记忆、版本及 Actions 构建流程；SSR 仍需要兼容 Astro 的运行环境。Cloudflare Workers 或 Node 主机可作为候选，当前未选择、连接或部署。用户的“部署在 GitHub”不能被解释为 GitHub 能直接执行 SSR。

若最终仅使用 GitHub Pages：必须纯 SSG，且主站应提供允许跨域调用的接口才能在本站完成动态功能；SSG 构建时取数不等于实时更新。GitHub Pages 每仓库最多一个站点，同仓库多个独立域名目录不能各自作为独立 Pages 站点直接发布。保留当前每域名一目录的仓库约定时，推荐由各站独立部署项目指向对应目录。

正式仓库为 hehaize88-code/cnfansge.com，本站目录为 superbuybuyss-com/，建议包含：

- PROJECT_MEMORY.md：固定需求、状态、证据、下一步。
- docs/research.md：关键词、官方事实来源及核验日期。
- docs/data-contract.md：真实接口、字段、分页、币种和图片类型。
- docs/decisions.md：架构与范围变更记录。
- src/config/site.ts：域名、品牌、注册入口、partnercode、SEO 主词。
- src/lib/source/：cnfansge 数据读取与统一字段。
- src/lib/agents/superbuy.ts：原始商城链接到 Superbuy 的转换。
- src/content/、src/pages/、public/、astro.config.mjs、package.json 和 lockfile。

GitHub Actions 工作流放仓库根 .github/workflows/，通过路径过滤和 working-directory 只构建对应站点。不能放在子站内部后误认为 GitHub 会自动识别。首站稳定后再抽取公用模块，保留每域名独立配置和发布边界。

## 页面、品牌与体验规划

预留：首页 /、商品目录 /spreadsheet/、分类 /category/{slug}/、商品详情 /product/{marketplace}/{productId}/、QC /qc/、指南 /guide/、运费 /shipping/、FAQ /faq/、文章 /articles/ 和文章详情。

首页顺序：简短定位与搜索 → 真实分类 → 少量主站精选商品 → 使用步骤 → QC / 运输 / 指南入口 → 最新文章卡片。文章卡片进入独立正文页，首屏不过度堆词。

- Logo / favicon 从 Superbuy 官网实际资源提取，记录文件地址、获取日期和摘要；本轮尚未提取。可本地保存稳定品牌素材，商品数据仍只来自 cnfansge。
- 页面标注独立商品推荐站，不用官网身份承诺、虚构评价或未经核验的优惠。
- 注册按钮使用用户原链接；购买按钮使用本次 Superbuy 模板，完整保留 partnercode。
- 手机端压缩装饰留白，目录建议每页 20 件，保留可达的上一页 / 下一页；不横向溢出。
- 多语言按本轮参考站核验的 24 种规划，具体规则见第二轮记录。所有已发布语言完整翻译界面和 SEO 正文，切换保留当前页面与查询，不回首页或丢内容；未完成完整翻译不得显示为已完成语言。
- 每页自引用 canonical，语言正确的 HTML lang、互指 hreflang 与 x-default；预览 noindex，生产发布时复核。
- sitemap 仅列已发布、可索引的规范 URL；搜索、任意排序组合不批量生成索引页。所有实际生成分类分页与详情是否收录，按内容价值和数据可用性处理。
- 结构化数据基于可见真实内容，不编造库存、价格、评分或评论；FAQ 展示不代表承诺搜索结果富摘要。

## 实施顺序与下一步

1. 已确定 superbuybuyss.com、hehaize88-code/cnfansge.com 与 superbuybuyss-com/；无需重新确认域名、索取后台或重复提供注册与购买链接。
2. 验证主站数据链路，重点为完整分页、USD、搜图与 QC；先记录实际请求和结果。
3. 根据接口验证确定运行环境，初始化并锁定 Astro 与适配器版本。
4. 完成首页与商品目录可访问预览，使用真实主站数据，加入官方 Logo / favicon 和本次购买规则。
5. 检查移动端、独立页、空结果与故障提示、搜索排序、购买目标；内容页按官方调研补充。
6. 提交 GitHub 后记录 commit；部署后记录真实 URL 和验证结果；再提供已上线的 sitemap 和收录链接。

更新记忆时必须区分：用户确认 / 建议 / 已读源码 / 实测通过 / 待处理；区分已提交 GitHub / 已构建 / 已部署 / 已被搜索引擎收录。每次记录日期、变更、失败原因、验证与下一步，不写密码、令牌或会话信息。

当前状态：已完成前期调研、域名及仓库确认、参考站和多语言规划，已更新独立项目记忆。尚未生成可部署网站、提交 GitHub、发布文章、创建自动任务、改 DNS 或部署生产。

## 证据链接

补充第二轮实际读取：

- 参考站首页：https://kakobuypicklist.com/
- 参考站德语首页：https://kakobuypicklist.com/de/
- 参考站目录：https://kakobuypicklist.com/spreadsheet/
- 参考站德语目录：https://kakobuypicklist.com/de/spreadsheet/
- 参考站搜图页：https://kakobuypicklist.com/search/visual/
- 参考站商品详情：https://kakobuypicklist.com/products/weidian/7861977678/
- 仓库根目录：https://github.com/hehaize88-code/cnfansge.com

查询日期均为 2026-10-23，历史项目记忆只作参考；网页读取和源码读取不代替功能实测。

- 主站：https://cnfansge.com/
- 目录：https://cnfansge.com/AllProducts/
- 样本：https://cnfansge.com/AllProducts/6681.html
- Superbuy 官网：https://www.superbuy.com/en/
- 官方帮助：https://www.superbuy.com/en/page/help/
- 竞品：https://superbuy.net/
- 竞品：https://www.superbuypick.com/
- 竞品检索结果：https://spreadsheets-superbuy.com/
- Astro 稳定版本：https://registry.npmjs.org/astro/latest
- Astro 7.4 发布：https://astro.build/blog/astro-740/
- Astro SSR：https://docs.astro.build/en/guides/on-demand-rendering/
- Astro GitHub Pages：https://docs.astro.build/en/guides/deploy/github/
- GitHub Pages 类型与限制：https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- 域名注册查询：https://rdap.verisign.com/com/v1/domain/superbuyhome.com
- 域名注册查询：https://rdap.verisign.com/com/v1/domain/superbuygrid.com
- 域名注册查询：https://rdap.verisign.com/com/v1/domain/superbuylist.com
- 域名注册查询：https://rdap.verisign.com/com/v1/domain/superbuysheet.com
- 域名注册查询：https://rdap.verisign.com/com/v1/domain/superbuyfinds.com
- 域名注册查询：https://rdap.verisign.com/com/v1/domain/superbuytable.com （503，未取得状态）
- 同源适配参考：https://github.com/hehaize88-code/cnfansge.com/blob/main/pikobuy-at/worker/source.mjs
- 同源项目历史记忆：https://github.com/hehaize88-code/cnfansge.com/blob/main/pikobuy-at/PROJECT_MEMORY.md

## 2026-10-23 第二轮：正式域名、目录与多语言决定

### 已固定的项目配置

| 配置 | 值 |
| --- | --- |
| 平台 | Superbuy |
| 正式站点 origin | https://superbuybuyss.com |
| www 规划 | www.superbuybuyss.com 301 至主域名相同路径和查询；尚未配置 |
| GitHub 仓库 | hehaize88-code/cnfansge.com |
| 站点独立目录 | superbuybuyss-com/ |
| 唯一商品与功能数据源 | https://cnfansge.com |
| 参考站 | https://kakobuypicklist.com/；仅参考结构与交互 |
| SEO 核心词 | superbuy spreadsheet |
| 购买参数 | partnercode=ES7pVI；按真实 marketplace URL 构造 |
| 商品数据库 / 后台 | 无；不操作主站后台 |
| 默认语言 | en，使用根路径 / |
| 其他语言 | /{locale}/ 路径前缀 |
| 部署状态 | 未部署；用户指定的是后续部署目标 |

用户先发 cssbuyhome.com，随后完整重发要求并把域名改为 superbuybuyss.com；最新消息生效。本次继续 Superbuy，不切换 CSSBuy，也不把 CSSBuy 的购买链接带入。

已查看用户截图：仓库中每个域名为根目录同级文件夹，如 kakobuyvip-org。随后通过 GitHub 插件实时读取根目录，看到 kakobuyvip-org、pikobuy-at、spreadsheet-superbuy-net 等目录；尚不存在 superbuybuyss-com/。本轮仅核对，未创建分支或修改其他站点。

### 参考站观察与采用范围

- 首页有 SEO 主标题、搜索、分类、最新商品、功能说明及 FAQ 入口。
- 目录页有分类入口、分类细选、排序及编号分页；德语目录公开页面显示到第 205 页。这是参考站现状，不能作为 cnfansge 商品数量或分页总数。
- 目录页的德语菜单指向 /de/spreadsheet/，保留对应页面类型；该事实支持使用相同页面的多语言路径映射。本轮未验证它在查询、排序等所有状态下均保持参数。
- 搜图页展示选文件、拖放、粘贴和搜索按钮；这是界面观察，未实际上传或验证检索质量。它的 5 MB 与格式限制属于参考站，不自动当作 cnfansge 接口契约。
- 商品详情页使用原始商城与商品 ID 路径。本站仍以已核验的主站字段为准，不复制参考站的商品库、照片、QC、商品数量或结果。
- 参考站英德页面部分正文表述不同，本站以完整对应翻译为验收要求，不能仅翻按钮或丢失正文段落。

### 多语言方案：24 种完整语言

本轮实际读取参考站语言菜单，确认以下 24 种。用户授权自行规划多语言；这里将它们定为实施目标，不代表翻译已完成。

| 代码 | 语言 | 路径 |
| --- | --- | --- |
| en | English | / |
| de | Deutsch | /de/ |
| es | Español | /es/ |
| fr | Français | /fr/ |
| it | Italiano | /it/ |
| pl | Polski | /pl/ |
| pt | Português | /pt/ |
| ro | Română | /ro/ |
| sv | Svenska | /sv/ |
| nl | Nederlands | /nl/ |
| da | Dansk | /da/ |
| fi | Suomi | /fi/ |
| el | Ελληνικά | /el/ |
| cs | Čeština | /cs/ |
| hu | Magyar | /hu/ |
| bg | Български | /bg/ |
| sk | Slovenčina | /sk/ |
| hr | Hrvatski | /hr/ |
| sl | Slovenščina | /sl/ |
| lt | Lietuvių | /lt/ |
| lv | Latviešu | /lv/ |
| et | Eesti | /et/ |
| ga | Gaeilge | /ga/ |
| mt | Malti | /mt/ |

实施方式：

1. Astro 静态翻译词典覆盖导航、按钮、分类标签、排序、分页、空结果、错误状态、搜图提示；内容集合保存各语言的完整首页、指南、FAQ、文章与 SEO 元信息。
2. 语言不复制商品数据；所有语言共享 cnfansge 的原始商品 ID、图片、价格、分类和结果集。商品标题可显示忠实的派生翻译并保留原名，缺失规格不补造；无完整翻译时保留原名，不能伪造属性。
3. 切换语言使用同一逻辑路由映射，例如 /spreadsheet/ 对应 /de/spreadsheet/；商品路径保留 marketplace 与商品 ID，文章用同一内容标识定位对应翻译。
4. 保留关键词、分类、排序、页码和已选择商品；不把搜索词静默翻译后换一套结果。分页游标若绑定语言或会话，按数据接口实际契约处理。
5. 英文根路径，其他语言前缀。每页设置正确 HTML lang、自引用 canonical、互相对应的 hreflang 和 x-default；x-default 指向同一页面的默认英文版本。
6. 只把已完整发布且可索引的语言页面放进 sitemap 与语言对应列表。不得把英文正文挂在 23 个不同语言 URL 下当作完成翻译。
7. 桌面语言菜单用语言本名＋代码、分栏或筛选，手机端用可搜索的紧凑列表；不横向排满 24 个按钮，不仅用国旗区分语言。
8. 校验所有语言路径与关键链接，抽检长文本、手机换行、正文段落对应、商品数一致及语言切换状态。语言数量不会减少商品覆盖范围。

下一步实现以本节固定配置为准；正式可访问预览、接口联调、完整翻译和 GitHub 提交均需分别验证并记录，不将本次规划说成已经上线。


## 2026-10-23 第三轮：公开预览实施

用户最新授权：先制作可公开访问的预览，待用户认可后再准备正式域名部署；FAQ 至少 20 条，官网调研后写 10 篇精品文章，顶部增加独立文章入口。本轮不修改 DNS，不往用户目标仓库 main 直接推送。

### 已实现的预览结构

- Astro 7.4.2（实施时 npm 稳定版核验），锁定 package-lock；SSG 输出编辑内容，Worker 提供同源只读商品适配与主站原图直连。
- 首页 /、商品目录 /spreadsheet/、指南 /guide/、QC 说明 /qc/、运输 /shipping/、FAQ /faq/、文章索引 /articles/、10 个独立文章路径 /articles/{slug}/、商品详情 /product/?id={sourceRecordId}。
- 顶部 Articles 导航；文章有完整正文、章节目录、要点、官方来源和相关文章。FAQ 有搜索、分组、28 个可展开问答。
- 10 篇英文文章每篇约 1,200–1,360 词，覆盖 spreadsheet、Weidian、Taobao/1688、QC、运费、时效追踪、仓储合箱、服务费、尺码、退换退款；对应文件 src/data/articles.en.json。
- 完整预览语言：en/de/es/fr/it。界面、完整文章与 FAQ 均翻译，不是英文复制或简短摘要。24 语言为后续总体目标，此次预览仅开放这 5 种完成语言。
- 英文根路径，其他语言前缀；切换保持当前路由、商品 ID、关键词、分类、排序、分页游标与锚点。
- 官方 logo 和 favicon 原样保存，具体 URL/SHA 见 docs/brand-sources.json；没有生成商品图，也没有自建数据库。
- 明确独立网站身份；价格提示为商品估算，运输等费用分开。注册 URL 与用户输入保持完全一致。

### 真实数据验证

已通过直接请求验证：
- /api/catalog?sort=latest：上游返回 60 条一页，包含真实商品与图片，按实际上游分页；不将首屏展示数量当成全目录数量。
- /api/catalog?category=shoes&sort=popular：真实鞋类记录。
- /api/catalog?q=sweatshirt：真实关键词搜索；搜索排序遵循上游返回，UI 禁用无效排序组合。
- 鞋类价格升序第 1 页和第 2 页返回不同记录，sourcePage=1/2，下一页含正确 tid/sort/sort_asc/page。
- 商品记录 6681 → 原始商品 https://weidian.com/item.html?itemID=7755101935 → 正确 Superbuy 购买 URL，partnercode=ES7pVI。
- 币种从主站脚本 CNY_TO_USD_RATE 读取，缺失汇率则显示 CNY，不编造换算值；主站异常不伪装为空结果。

商品适配只接受 cnfansge.com 的已知目录路径与 uploads 图片；60 秒目录 HTTP 缓存；图片直接读取原站 URL 并遵循主站缓存策略，不落商品数据库、不做镜像 JSON、不建立搜索索引。

未接通：独立搜图和已验证 QC 查询。已观察主站当前公开页及脚本，没有核验独立可调用接口。预览搜图按钮解释未接通且不上传文件；QC 页提供有来源的阅读指南，商品图片始终标为 listing images，qcVerified=false。

### 调研与内容约束

关键词来自实际竞争页/公开检索：superbuy.net、superbuypick.com、spreadsheets-superbuy.com；参考站 kakobuypicklist.com 只提供结构参考。没有声称获得月搜索量、KD 或排名保证。具体关键词分配在 docs/research.md。

官方来源包括购物流程、1688 服务、服务费用、运费计算器、包裹查询、运输服务、用户协议与帮助中心。官方照片费用示例与服务列表存在不同数值，故正文不写固定服务费或固定退货期限，不承诺运输时效、真伪或退款结果。

### 预览和后续部署身份

- 本地项目：/workspace/scratch/118db24b5ab0/superbuybuyss-com
- Sites project_id：appgprj_6adb332380908191a2c3fd9e9d76cb2b
- 预览项目：superbuybuyss-preview
- 公开预览目标：https://superbuybuyss-preview.hehaize88.chatgpt.site
- 用户正式域名：https://superbuybuyss.com
- 用户指定正式 GitHub 仓库/目录：https://github.com/hehaize88-code/cnfansge.com → superbuybuyss-com/
- 预览代码使用 Sites 自有源码仓库保存；这不代表已经提交到用户指定 GitHub 仓库。
- 预览保留 noindex/nofollow 和 robots Disallow，禁止提前让搜索引擎收录预览副本；正式域名上线前再配置 sitemap、可索引商品详情路由及最终 canonical。
- 正式上线前重点：用户确认视觉；验证独立搜图/QC 源接口；确定正式运行环境（SSG+Worker 或 Astro SSR），补齐生产索引与剩余语言，再对指定域名和 GitHub 项目部署。

### 验证记录

- 已完成英文版 Astro 构建；文章搜索和完整正文页的浏览器交互通过，桌面没有横向溢出。
- 本地托管预览的浏览器容器无法从服务端抓取源站（fetch failed）；同一编译 Worker 在开发执行环境内已正确获取目录和商品。公开发布后另核验真正线上 API，不能将内部预览的网络错误当作数据已上线。
- 最终构建与校验已通过：5 种完整语言、90 个页面、2,910 条内部链接；正文结构、官方引用、HTML lang、canonical/hreflang、唯一 H1、noindex、购买链接映射及数据源白名单均校验通过。FAQ 浏览器验证：共 28 条，photos 检索返回并展开 6 条，随机无匹配词显示正确空结果。

- 公开运行环境兼容修复：Cloudflare 租户 Worker 禁止 caches.default。已移除 Cache API 调用，只保留标准 HTTP Cache-Control，商品直接从主站读取；增加权限拒绝环境的回归检查。

- 修复后公开 API 已验证 HTTP 200：鞋类热门与最新目录均返回 60 条；商品 6681 返回 5 张真实图片及正确购买 URL。
- 图片请求改为浏览器直接读取 cnfansge.com/uploads 原图，不经预览 Worker 图片代理。已通过浏览器核验两个真实样本均正常加载（750×750），未复制商品图片到项目。
- 浏览器法语切换验证通过：同页切换至 /fr/faq/，HTML lang=fr、28 条完整法语 FAQ，桌面未横向溢出。
