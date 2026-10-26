# CSSBuySH / cnfansge 项目记忆

更新：2026-10-26，Asia/Shanghai。
阶段：公开预览已发布，正式域名未绑定。

## 固定要求
- 用户已准备域名 cssbuysh.com。此项目独立于已有 cssbuyhome.com。
- 用户指定最终GitHub仓库 https://github.com/hehaize88-code/cnfansge.com ，每域名独立文件夹；本项目目录 cssbuysh-com/。
- 当前只交付公开预览，用户看过后再正式部署/绑定域名。
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
- 预览noindex，不接GA4，不绑定cssbuysh.com。公开预览及验收结果见下文。

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
