# AllChinaBuyBuy 项目记忆

更新时间：2026-10-24（用户时区 Asia/Shanghai）。本文件为后续开发事实来源；先读再改。

## 收录排查与商品列表服务端渲染（2026-10-24）

用户报告 /finds/、/qc/、/shipping/、/faq/、/articles/ 请求收录失败。须区分实时测试软 404 和手动请求额度/提交故障：截图中的 /finds/ 抓取成功、允许索引但被判软 404；/articles/ 截图已是绿色可编入索引，提交时报错。复测 /qc/ 于北京时间 16:59 已显示可编入索引；请求收录被 Google 明确以“超出了每日配额”拒绝，不能宣称提交成功或已经收录。

修复：首页、finds、spreadsheet 五语言页面由 Worker 在请求时调用原有 cnfansge.com 只读适配器，把真实商品和分页写入 HTML；所有用户同样输出，不按爬虫区分。浏览器保留首屏内容，不再清空后重新请求。仍只有 60 秒临时内存缓存，无数据库、无持久商品快照、无虚构商品。取消 robots 的 /api/ 抓取屏蔽，JSON API 保留 X-Robots-Tag: noindex。源站故障返回 503 + Retry-After + no-store；无结果搜索 noindex，超出范围页 404，非法参数 400。筛选/搜索/分页变体 noindex，基础目录页面 index。

验证：8 项自动测试，105 页构建，95 个站点地图 URL 检查；使用只在测试中导入的源站 fixture，不把测试商品放入生产。涵盖五语言 HTML 商品、分页、XSS 转义、源站故障状态、QC/运费静态正文、28 FAQ。上线及 Google 实测结果另记。

## Google Analytics 4（2026-10-24）

用户要求将本域名添加到 analytics.google.com。已有账号 405518068 中新建独立资源 allchinabuybuy.com，Property ID 560578171，Web Stream ID 16193977860，Measurement ID G-4YY4TM8ZFW。中国时区（GMT+08:00）、USD；目标为流量和用户互动，增强型衡量开启。

统计代码位于共享 src/components/Layout.astro 的 head，全站 105 页面及 5 种语言共用。只在 location.hostname === allchinabuybuy.com 时加载 Google tag，预览域名和本地不统计。采用一次 gtag config 默认 page_view，无重复手动 page_view。广告和 Search Console 关联未新增。提交 GitHub 后由 Cloudflare Builds 自动发布；实际接收验证结果写入独立项目记忆。

## 正式上线状态（2026-10-24，优先于下方历史记录）

用户明确要求“部署到GitHub 和cf”，正式部署已完成。

- 正式网址：https://allchinabuybuy.com/ 。www.allchinabuybuy.com 以 308 跳到根域，保留路径、查询参数。
- GitHub：https://github.com/hehaize88-code/cnfansge.com/tree/main/allchinabuybuy-com 。生产代码提交 784a70b53f096e49818db9bfdf2d8d88d972ffe4，其他域名目录未改动。
- Cloudflare Worker：allchinabuybuy-preview（沿用原名称提供正式域名服务）；成功构建 b3e02f77，已发布版本 ae897948-22d8-4e22-9ff5-d33c60adac62。日志确认两个 custom domain 和 deploy command completed。
- GitHub main 已连接 Cloudflare Builds；根目录 allchinabuybuy-com；监视路径 allchinabuybuy-com/**；构建 npm run build:production；部署 npx wrangler deploy；NODE_VERSION=24。后续改该目录并推送 main 自动发布。
- npm 与 Cloudflare 对齐为 10.9.2；锁文件 331 个包记录、0 extraneous，嵌套平台包保留 optional/peer。干净安装及线上构建已通过。不要用 npm 11 重写锁文件。
- Astro SSG 105 个页面；英文及德/西/法/意共 5 种语言；10 篇文章、28 条 FAQ。正式 sitemap.xml 含 95 个可收录 URL；robots 允许抓取并链接 sitemap，API/动态商品详情/未接通搜图保持 noindex；workers.dev 保持 noindex。
- 正式站 Chrome 实测通过：首页及用户指定 Logo、8 个首页商品图片、shoes 搜索结果、商品 6681 的 5 张卖家图片、购买链接 Weidian 7755101935 + partnercode=wbVgOT、www 德语商品页跳转、切换法语保留商品 ID、10 篇文章目录及首篇完整正文、28 FAQ、公开 robots 和 95 URL sitemap。
- 所有商品和图片依然直接来自 cnfansge.com；无新数据库、后台或自建商品库。
- 未完成接口保持透明：源站独立 QC feed、搜图 API、官方可用注册入口仍未核实。现有 QC 页面是指南，卖家图不是 QC；部署不代表这些接口已接通。
- GitHub 目录是生产代码事实来源。旧 Sites 预览是历史审阅版本，未来正式修改应在此 GitHub 目录进行。

## 正式部署（2026-10-24，用户已授权）

目标 GitHub：hehaize88-code/cnfansge.com 的 allchinabuybuy-com/，保留其他域名目录。正式域名 https://allchinabuybuy.com，www 用 308 保留路径和查询参数跳根域。复用已验证的 Cloudflare Worker allchinabuybuy-preview。生产构建 npm run build:production，105 页面、95 个可收录页面进入 sitemap.xml；robots.txt 允许正式站抓取，API/动态详情/未接通搜图仍 noindex。workers.dev 保留 noindex 及 Disallow，防止与正式域名重复收录。没有数据库、后台或伪造商品。

已连接 GitHub main 分支，并保留现有 Workers Builds 令牌；Node 版本设为 24，关闭其他分支预览构建。此提交触发第一次自动构建。

Cloudflare Builds 的根目录已设 allchinabuybuy-com，构建命令 npm run build:production，部署命令 npx wrangler deploy；监视路径只包含 allchinabuybuy-com/**。不提交 .openai、构建产物、依赖或临时凭据。

### 首次 CI 安装修复

Cloudflare 首次构建因锁文件混入 27 个 extraneous 平台依赖（含 AIX esbuild）而报 EBADPLATFORM。在无 node_modules 的独立目录用 npm install --package-lock-only 重新计算锁文件，保留实际依赖版本，移除这些无依赖关系的条目。

最终改为使用 Cloudflare 相同的 npm 10.9.2 生成锁文件：331 条记录、0 extraneous；嵌套 esbuild 0.28.2 平台包正确标记 optional/peer，npm 10 clean install 通过。packageManager 固定 npm@10.9.2，后续不要用 npm 11 重写此锁文件。

## 用户指定 Logo（2026-10-24）

用户上传 allchinabuy.png 并要求替换 Logo。原图 1718×253，透明 PNG，保持原始颜色、透明背景及比例，不重新绘制。全站共享 Layout 的页头、页脚和 favicon 改用 /brand/allchinabuy-user-logo.png；新文件路径避免旧 Logo 缓存。适用于全部 5 种语言、105 个页面。

## Cloudflare 备用预览历史（2026-10-24，以下为上线前记录）

- 当前给用户审阅的地址：https://allchinabuybuy-preview.hehaize88.workers.dev/ 。
- 用户反馈旧 chatgpt.site 预览无法打开，截图为 Cloudflare "Sorry, you have been blocked"。Sites 部署仍 active/public，属于平台域名访问阻断。
- 用户明确允许通过已登录 Chrome 发布 Cloudflare 临时预览。Cloudflare 连接需重新认证，因此通过网页控制台创建并发布 Worker。
- Worker 名称 allchinabuybuy-preview；Cloudflare 账号子域 hehaize88.workers.dev；已发布活动版本 6a89781e。不是初始 Hello World 版本。
- 同一源代码用 SITE_ORIGIN=https://allchinabuybuy-preview.hehaize88.workers.dev npm run build 重建。105 静态页面和 4 项语义测试通过；dist/server/index.js 为 995599 字符的完整 Worker，嵌入静态页面并转发 cnfansge 只读数据。无数据库、R2 或新增后台。
- 用户 Chrome 实测：首页、8 条真实商品及全部图片、商品 6681 详情 5 张卖家图片和 Weidian 7755101935 购买链接均正常；partnercode=wbVgOT 保持不变；文章目录有 10 篇，首篇正文页可读；FAQ 28 条；切换德语详情保留 ?id=6681。
- 新预览仍为 noindex。正式域名 allchinabuybuy.com 未绑定；用户目标 GitHub 仓库尚未写入，等用户审阅反馈。
- 搜图 API、独立 QC feed、可用注册入口仍未核实；此前限制没有因迁移部署而改变。

## 固定约束

- 本次只做 AllChinaBuy 一个平台。正式域名已确定：allchinabuybuy.com。
- 目标仓库 https://github.com/hehaize88-code/cnfansge.com ，每域名单独目录。本项目目录 allchinabuybuy-com/。
- 预览已完成；用户已授权 GitHub 与 Cloudflare 正式部署，上线结果见文件顶部。
- 所有商品、商品图片、商品排序/搜索数据来自 cnfansge.com。不得种假商品、生成商品图片、新建产品数据库或后台。
- 参考 kakobuypicklist.com 的商品发现与多语言结构；不复制竞争对手文章。
- 用户购买链接 partnercode=wbVgOT；示例源记录6681对应Weidian商品7755101935，二者不可混用。

## 技术与路由

Astro 7.4.2（npm 官方版本查询确认）SSG；105静态页面，Cloudflare Worker提供只读源站数据适配。内存缓存60秒，不持久存储商品。英文根路径；德/西/法/意为/de/ /es/ /fr/ /it/；完整翻译10篇文章及28FAQ，切换语言保留路径、query、hash。未做其余语言的假页面。

主导航：Spreadsheet、Finds、Buying guide、QC guide、Shipping、FAQ、Articles。产品详情 /product/?id=源站记录ID；图片弹窗。文章独立 /articles/<slug>/。

预览 Site project_id：appgprj_6adc4f3b37308191b7c19780d81ef5d7。
预览地址：https://allchinabuybuy-preview.hehaize88.chatgpt.site
公开访问已按用户要求开启。全部预览页面noindex，robots Disallow。正式上线切SITE_ORIGIN和SITE_INDEXABLE并生成sitemap；同步canonical/hreflang，避免预览和正式域名竞争。

## 已核实与未核实边界

- 官方 https://www.allchinabuy.com/ 于2026-10-24显示维护公告，不提供恢复时间。FAQ/文章不杜撰注册福利、运费、时效、仓储和退货数字。
- 最初官方 Logo 取自维护页；现已按用户最新指示改用上传的 allchinabuy.png 作为页头、页脚及 favicon，详见 Logo 记录。
- 注册候选 https://www.allchinabuy.com/en/page/login/?partnercode=wbVgOT&type=register 未核实正常可用，预览只提供官方状态入口，不承诺注册送券。
- 已适配公开目录、分类、关键词搜索、源站排序、真实分页、详情卖家图片、卖家购买链接。
- 未发现可验证的源站搜图API及独立QC feed。/api/capabilities如实false；搜图页说明未接通，QC页是指南；卖家图不冒充QC。后续若源站项目提供真实接口，只接适配层，禁止自建替代库。
- 无任何商品质量认证、真伪保证、星级或虚构使用者数字。
- Source sort routes from page controls; source pretty list_N_page routes may404，转换为其实际index.php列表路由。源站60条/批，前台20条/页，不能把分页窗口当总页数。
- 交易发生在官方站；披露推荐code，独立站身份不混同官方。

## 关键词与内容

主词allchinabuy spreadsheet；二级intent包括allchinabuy finds、how to use allchinabuy、allchinabuy qc/photos、size guide、shipping cost、volumetric weight、product links、registration/maintenance。竞争对手观察spreadsheetsallchinabuy.com、allchinabuy-finds.com、allchinabuy.delivery及kakobuypicklist.com。没有付费关键词数据库的搜索量/KD证据，不编造数值。

10篇：spreadsheet guide、finds search、beginner guide、maintenance/link troubleshooting、product links、shortlist checklist、QC photo checklist、sizing guide、shipping cost guide、actual vs volumetric weight。每篇英语约1300–1560词，5语种完整正文；研究记录docs/*-research.md。事实限于官方可核实信息，通用购物/照片评估方法明确是编辑建议。

## 检查与下一步

构建通过，105路由；四项语义测试通过（购买链接/源站host约束/商品ID和QC区分/完整多语言内容）。本地浏览器验证首页布局。实时源接口已返回60条商品/批；6681详情返回5张卖家图并正确映射购买链接7755101935。进一步核对线上分页、搜索、图片。正式部署前复核官方注册和服务状态；若用户要求搜图和QC实图，需取得源站真实API契约而不是伪造。
