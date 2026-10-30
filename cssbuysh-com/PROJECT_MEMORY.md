# CSSBuySH / cnfansge 项目记忆

更新：2026-10-30，Asia/Shanghai。
阶段：已正式发布，GitHub main与Cloudflare联动，cssbuysh.com及www已绑定并验收。

## 固定要求
- 用户已准备域名 cssbuysh.com。此项目独立于已有 cssbuyhome.com。
- 用户指定最终GitHub仓库 https://github.com/hehaize88-code/cnfansge.com ，每域名独立文件夹；本项目目录 cssbuysh-com/。
- 用户2026-10-26明确要求“帮我部署到GitHub和cf”，授权正式发布及域名绑定。
- 数据唯一来源 https://cnfansge.com 。不新建商品数据库、后台、模拟数据、示例商品或图片。
- 商品搜索、分类、排序、分页、详情留在子站；注册与购买进入CSSBuy。
- 注册入口 https://www.cssbuy.com/index 。购买模板 https://www.cssbuy.com/shop/goodsDetail?type=micro&id={productId} 。样本主站记录6681对应Weidian商品7755101935，禁止混用ID。
- 品牌logo和favicon来自CSSBuy官方；独立推荐站身份保留。
- 参考 https://kakobuypicklist.com/ 的24语范围和站内浏览；不能拿参考站商品当cnfansge数据。

## 本轮实现基线
- Astro 7.4.2 SSG生成SEO内容，Worker服务端注入主站实时商品；无商品数据库，仅短期响应缓存。
- 复用已有CSSBuy研究内容和24语言完整翻译，重做新域名视觉和导航。新站移除旧GA4与域名绑定，不影响旧站。
- en/de/es/fr/it/pl/pt/ro/sv/nl/da/fi/el/cs/hu/bg/sk/hr/sl/lt/lv/et/ga/mt；语言切换保持页面、查询与锚点。
- 完整主站目录，每页20项，源每批60项，UI页码跨源批次继续；不能限制为三页。
- 搜索排序保留 keywords/channelid，并传递sort/ sort_asc给真实源站；不能只排序当前20项。
- 首页SEO、Spreadsheet、Finds、Guide、QC、Shipping、FAQ、Articles独立入口。
- 来源图库只是卖家图片。已核对旧CSSBuy、Kakobuy、Pikobuy、AllChinaBuy同源适配器，均未发现可用独立QC或搜图接口；两项保留准确未接通说明，不能宣称完成。
- 预览域名保持noindex且不发送GA4；正式cssbuysh.com允许索引并接入独立GA4。历史预览及验收结果见下文。

## 后续验收
真实商品及图片、目录第4/10页、关键词搜索与价格排序、购买ID、24语相同内容和链接、390px无横向溢出、公开匿名访问。源站失败显示可重试状态，不能回填假商品。

## 验证进度
- 24 种语言、528 个静态页面、240 篇文章页、672 条 FAQ 已通过检查。
- 图片搜索和 QC 仍未接入，不伪装已完成。
- 当前本地环境读取 cnfansge.com 返回 403；公开 Worker 已成功读取真实主站商品，限制只发生在本地网络。
- 官方 Logo 使用官网实际 CDN 地址 https://assets.cssbuy.com/static/icon/logo.svg；本地下载受网络限制，不自行仿制。
- 预览 Site ID: appgprj_6adebc0edc8c8191a4daf352f7d781ec。
- 已发布预览地址: https://cssbuysh-preview.hehaize88.chatgpt.site。

## 2026-10-26 预览验收
- 已发布： https://cssbuysh-preview.hehaize88.chatgpt.site/ （public, noindex）。
- 首个版本源提交 70eab075cd744bd81143d7203fbae7cb7be3902c，部署 appgdep_6adec04108108191bf73b0fd8b545a15，状态 succeeded。
- 云浏览器匿名访问首页成功，8件真实商品、3件真实主图、CSSBuy官方Logo均已显示。没有填充任何测试商品。
- 目录第4页首个ID6628、第10页首个ID6507，均20件，跨越源60条一批的限制。页码跳转表单实测成功。
- 搜索Nike并选择price-up后USD价格按1.03、2.07、2.07、2.48等递增；由cnfansge源站执行排序。
- 切换德语保留q=Nike/category=all/sort=price-up，20件商品与产品链接保持/de/前缀，分页/结果提示已翻译。
- 商品6681有5张主站图库照片，CSSBuy购买链接确认为type=micro&id=7755101935。图片放大弹窗实测成功。
- FAQ总数28，搜索storage剩4条匹配。
- 通过临时本地iframe将线上首页和目录放入390px框（实际内容375px含滚动条）检查，scrollWidth=clientWidth，目录20件，手机菜单7项可打开。临时QA页已删除，不进入发布。
- 9项自动测试通过，24语言528页构建与运行期本地化检查通过。生产索引/正式域名尚未启用。

## 当前访问限制与后续工作
- Sites的public发布已经成功，云浏览器可访问并显示真实商品。连接的用户Chrome访问chatgpt.site被Cloudflare安全页面阻止，一次刷新仍相同；没有绕过安全检查。该链接的跨网络可访问性不能保证。
- Cloudflare API工具在2026-10-26返回UNAUTHORIZED，要求重新授权。没有改动Cloudflare、正式DNS、用户指定GitHub仓库。若需workers.dev预览，需要恢复连接；未擅自使用Cloudflare浏览器备用路径。
- 用户审核此版后再把cssbuysh-com/提交到hehaize88-code/cnfansge.com，并配置正式部署。Astro静态内容+运行期源站读取需要Worker等运行环境；GitHub负责源代码/CI，GitHub Pages不能执行此Worker。
- 正式索引前处理/guide/与/articles/cssbuy-spreadsheet-guide/、/shipping/与/articles/cssbuy-shipping-cost/的重复内容：统一canonical或重定向，sitemap只收首选地址。
- 后续需要cnfansge可验证的QC与搜图接口，不能用本地数据库或卖家图库冒充。

## 2026-10-26 用户反馈：公开预览打不开
- 用户截图明确显示“Sorry, you have been blocked / You are unable to access chatgpt.site”。当前临时域名无法作为用户可用的验收入口。
- 再次检查Cloudflare插件仍返回UNAUTHORIZED/需要重新授权。现有完整Worker包和24语言源代码已准备好，无需重做站点。
- 下一步拟通过用户连接的Chrome创建独立cssbuysh-preview Worker并发布workers.dev临时地址；按插件失效后的浏览器备用规则，等待用户授权该方式。未进入Cloudflare浏览器、未创建Worker、未改正式域名或GitHub main。

## 2026-10-26 用户已授权 Chrome 临时预览
用户明确回复“允许”，授权通过Chrome在Cloudflare创建cssbuysh-preview临时Worker。为完成预览，准备GitHub独立preview/cssbuysh分支、cssbuysh-com目录，Cloudflare从该分支构建，main及正式DNS不变。

## Cloudflare 发布进度
- 账户9010cea800ac2a140509889d88fe612e（页面确认Hehaize88账户），创建cssbuysh-preview。
- GitHub预览源提交0f7fe0ccb3265ced7d9b46df0227e0095c24248e，main未变。
- 初始创建界面不提供分支选择，首次构建中显式检出preview/cssbuysh；构建e145a296-14b9-47cb-85fb-8935fff7bb86通过，版本dddd5583，Ready。随后正式保存构建设置：Production branch=preview/cssbuysh，root=cssbuysh-com，build=npm run build，deploy=npx wrangler deploy，Node24，watch=cssbuysh-com/**，其他分支Preview builds关闭。
- 复用现有Workers Builds凭据，不创建token、数据库、R2或其他绑定。
- Domains页已打开Production Worker URL开关，显示Anyone with this URL can visit；无自定义域名绑定。新公开地址https://cssbuysh-preview.hehaize88.workers.dev/，浏览器验收中。

## 新预览已完成验收（2026-10-26）
- https://cssbuysh-preview.hehaize88.workers.dev/ 已在用户连接的Chrome真实打开，不再遇到chatgpt.site安全拦截。
- 首页8件商品、3张首屏商品图片正常，24语言选项齐全，meta robots=noindex,nofollow。
- 首页搜索Nike留在新预览域名，显示20件；切换德语保留q=Nike并正常显示20件。
- 全目录第10页20件，继续存在上一页/下一页及页码跳转。
- 商品6681显示5张主站图片，购买链接精确指向type=micro&id=7755101935。
- 浏览器验收截图保存docs/preview-check.png。QC/搜图仍未验证接入，保持准确提示。
- 只发布临时Worker与GitHub预览分支。cssbuysh.com和www未绑定，main未更新。
- 后续以本GitHub预览分支为继续开发源；旧Sites仓库和chatgpt.site地址仅留历史，不作为交付入口。

## 正式发布准备（2026-10-26）
- 用户明确授权部署GitHub和Cloudflare。当前操作只涉及cssbuysh-com目录及对应Worker和域名。
- 生产源切换到GitHub main/cssbuysh-com，复用已验证的cssbuysh-preview Worker；Node24，build=npm run build:production，deploy=npx wrangler deploy，root=cssbuysh-com，watch=cssbuysh-com/**。
- 生产canonical=https://cssbuysh.com，www保留路径和查询跳转根域；workers.dev继续noindex。
- Guide与Shipping保留独立入口，以对应文章地址作为canonical及hreflang首选地址。sitemap排除重复别名以及noindex的商品/搜图页，24语共432条。
- Cloudflare API仍要求重新授权，沿用用户已允许的Chrome部署方式，不创建新凭据或数据库。
- 已完成生产构建和正式域名浏览器验收，结果见下文。

## 正式发布完成（2026-10-26）
- 正式入口：https://cssbuysh.com/ 。www.cssbuysh.com已绑定相同Worker，自动308至根域并保留路径和查询。
- GitHub主分支提交f49aa2bd561d17f686c878c42f742c6856f5f5c8；目录cssbuysh-com/。只新增本域名目录，其他站点不变。
- Cloudflare构建368c631a-e258-4ee8-8527-d11b31bcde84成功，44秒，版本0a202c31，状态Ready，main自动构建链路已验证。
- 配置保存确认：main，cssbuysh-com，npm run build:production，npx wrangler deploy，Node24，watch=cssbuysh-com/**。
- 本地生产构建通过9项测试和24语528页校验；240文章页、672 FAQ，生产canonical及预览noindex检查通过。
- 用户连接的Chrome正式域名：首页8件真实商品、3张主站首图正常；24语言，robots=index,follow，canonical=https://cssbuysh.com/。
- 实测https://www.cssbuysh.com/de/spreadsheet/?q=Nike&sort=price-up&page=4跳转根域，保留全部参数，德语第4页20件真实商品。
- https://cssbuysh.com/sitemap.xml实测可读取432个loc，全部使用正式域名，不包含guide/shipping重复别名。
- robots.txt允许抓取公开页面，禁抓/api/并声明正式sitemap。
- 正式验收截图docs/production-check.png。QC与搜图接口仍未接通，保持准确说明。GA4/GSC/Bing尚未在本项目配置或提交。
- 后续以GitHub main/cssbuysh-com作为唯一开发源。preview/cssbuysh分支及旧Sites仓库只是历史，不再作为生产源。

## Google Analytics 4（2026-10-26）
- 用户明确要求把本站添加到analytics.google.com，已在用户连接的Chrome完成GA4属性和Web数据流创建，复用现有Analytics账号405518068。
- 媒体资源cssbuysh.com，Property ID=560775323；数据流cssbuysh.com Web，Stream ID=16203811453；Measurement ID=G-WXZK6H99JM；URL=https://cssbuysh.com。
- 属性时区中国时间（UTC+8），币种USD；业务目标为网站流量及用户互动。增强型衡量保持开启。
- 共享Layout在全部24语言528页接入同一个GA4，Google signals和广告个性化信号关闭。预览Worker响应移除统计代码，避免混入生产数据。
- 24语言隐私说明同步补充GA4和Cookie用途。生产构建及9项测试通过，所有语言统计标签、正确衡量ID、预览无标签检查通过。
- 报告入口：https://analytics.google.com/analytics/web/#/a405518068p560775323/reports/intelligenthome 。
- 已通过GitHub main提交3fd18778d1e153dca76529fe6d39fd4c4f4eb715部署；Cloudflare版本cd6830f6，Ready，45秒。
- 正式首页及德语首页均实测加载2段GA4标签，Measurement ID正确，首页8件真实商品保持正常。
- Google安装检测显示“恭喜！Google 代码已添加到https://cssbuysh.com中”，截图docs/ga4-installed.png。
- GA4实时报告已收到测试访问：过去30分钟/5分钟活跃用户均为1；CSSBuy首页浏览1次；first_visit、page_view、session_start各1次。标准报表仍可能延迟更新。
- 实时报告：https://analytics.google.com/analytics/web/#/a405518068p560775323/realtime/overview?restoreUserState=true 。这次任务为统计接入，不代表搜索引擎已收录。

## 2026-10-30 SEO 与全语言内容更新
- 用户明确要求结合 GSC、Bing、GA4 和竞争站调研改进并部署，全部24语言同步。
- 调研口径、原始观察值和官方资料见 docs/SEO_RESEARCH_2026-10-30.md；不能把 Bing 的区间曝光当 Google 月搜索量，也不能以小样本声称优化已提高点击。
- 每语言原10篇全文改进，新增美国配送、鞋类 Spreadsheet、卫衣 Spreadsheet 三篇完整指南，共13篇；英文正文约1200–1800词，其他语言保留全文结构和信息。
- 鞋/卫衣新增独立分类网址，旧分类参数308至对应页面；深分页 self-canonical/hreflang，搜索和非精选过滤 noindex。
- 首页6篇重点指南，文章增加相关推荐和商品目录入口，移动端目录控制高度。Article dateModified 和 sitemap lastmod 更新。
- 源站读取总时限8.5秒、短期旧缓存回退；目录真正上游失败返回503/Retry-After，文章独立可用，无伪造商品或新数据库。
- GA4新增 buy_click/register_click/article_open/catalog_open/catalog_filter；参数不含搜索原文或个人表单值。未改 GA4 账户设置、GSC/Bing提交设置。
- 生产构建配置再次经 Cloudflare UI 确认：main，root cssbuysh-com，npm run build:production，npx wrangler deploy，Node24，watch cssbuysh-com/**。Cloudflare插件仍需重授权，沿用已授权Chrome读取配置。
- 可见文案统一 CSSBuy SH，源站URL及真实商品来源保持不变。QC/搜图仍没有可验证接口。
- 本次生产构建通过14项测试和24语648页检查：312个唯一文章语言页、672条FAQ、552个sitemap URL。真实分页的canonical/hreflang、过滤noindex、空深页404、目录503及预览无GA均已验证。
- 打包改为24个按语言压缩的HTML档案，最多暂存2种语言的解压结果；648页逐字节复原一致，gzip约2.9MiB，排除Astro内部prerender文件。桌面与390px手机布局已验收。
- 本版本通过main触发现有Cloudflare构建；实际发布状态和版本号以本提交的Workers Builds检查及正式域名验收为准。
