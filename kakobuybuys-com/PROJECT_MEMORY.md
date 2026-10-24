# Kakobuy Buys 项目记忆

更新：2026-10-24。未来继续工作时先读本文件，再读实际代码。早期域名候选和阶段性规划保存在[planning-history.md](docs/planning-history.md)，不作为当前状态。

## 当前身份与交付

- 平台：仅Kakobuy；用户已准备域名 **kakobuybuys.com**。
- 正式代码仓库：https://github.com/hehaize88-code/cnfansge.com
- 每域名一个根级目录，本项目固定为 **kakobuybuys-com/**。
- 当前隔离分支：**preview/kakobuybuys-20261024**。不修改其他域名目录，不合并main。
- 本次授权目标：制作可公开访问的预览供用户看效果；正式域名绑定和正式上线在用户看过预览后另行进行。
- 当前已部署预览：https://kakobuybuys-preview.hehaize88.chatgpt.site/ 。2026-10-24用户报告被chatgpt.site入口安全服务拦截，不能继续称其对用户可访问；详见下方故障记录。
- Sites项目ID：appgprj_6adc4f0bd82c8191b163618b4f0a83c0。复用已有ID，不能重复create_site。
- 最新已核实在线版本为 **3**，完整24语已公开发布；每语10文章、28FAQ。域名kakobuybuys.com尚未绑定。
- 本地编辑目录：/workspace/sites/kakobuybuys-preview。冻结构建目录：/workspace/sites/kakobuybuys-review-build。GitHub是用户要求的源码保存位置，Sites源仓库仅保存对应预览快照。

## 用户固定要求

1. Astro实施时最新稳定版，允许SSR或SSG。当前锁定Astro7.4.2，核验日期2026-10-24。
2. 商品数据、商品照片、搜索、分页、排序、搜图和QC能力均使用cnfansge.com，不另建数据库、商品索引或后台。
3. LOGO/favicon使用Kakobuy官网原素材；不得用生成图片或虚构商品替代真实内容。
4. 首页是SEO入口，核心词kakobuy spreadsheet。先调研关键词/竞品和官网资料，再写内容。
5. 至少20条FAQ，10篇完整独立文章，顶部有Articles独立入口。实际英文为28条FAQ、10篇约1400—1500词文章。
6. 参考kakobuypicklist.com的交互和多语言。研究后采用24语全内容方案；24不是用户原话指定的数字。
7. 搜索、分类、翻页和商品详情保持在子站。仅注册/购买按钮前往官方指定地址。
8. 每次对话只做一个平台/域名；边做边更新本文件。其他优化后续进行。

## 注册与购买合同

- 注册URL原样：**https://item2.kakobuy.com/register**。不自行添加注册推广参数。
- 购买URL：`https://item2.kakobuy.com/item/details?url=<编码后的原始市场商品URL>&affcode=rf8x8`。
- 用户示例的Weidian商品ID为7617402324；不能把它硬编码给所有商品。
- cnfansge站内ID和市场商品ID不同。实测source6640→Weidian7662220801；公开站source6667→Weidian7648776138。
- 保留源站实际Weidian/Taobao/Tmall/1688链接，URLSearchParams编码一次。来源无效时不回退到示例商品。
- 已核对URL与参数，未登录、注册、下单或验证推广后台归因。

## 已实现的技术结构

- Astro7.4.2 SSG生成首页、专题、FAQ、文章和语言HTML。
- `worker/index.mjs`将静态文件打包为Cloudflare兼容Worker，并在请求时通过主站数据补充商品HTML；浏览器同域JSON用于开发和重试。这是SSG加请求时数据适配，不宣称使用原生Astro SSR适配器。
- `worker/source.mjs`是唯一商品数据适配层，仅访问https://www.cnfansge.com已核实公开路径。当前读取公开HTML与汇率脚本，不假称已获得主站私有API或后台源码。
- `src/data/content/*.json`是静态编辑内容/翻译，不是商品数据库。
- `npm run build`输出`dist/server/index.js`和`dist/.openai/hosting.json`。Node最低22.23.4，本轮实际Node24.19.0/npm11.9.0。
- GitHub用于源码；纯GitHub Pages无法运行当前实时适配层，正式托管目标需Worker/server支持。
- 不存在D1、R2商品库、用户账号/付款表单或管理后台。

## 主站真实数据合同

- 主站列表每页60条，UI每页20条。主站页=`floor((UI页-1)/3)+1`，切片起点=`((UI页-1)%3)*20`。
- 分类当前按核实的路径白名单维护；每类的tid从主站排序链接读取。全部商品仍可通过AllProducts和全局搜索访问。
- 列表排序：`/index.php?m=home&c=Lists&a=index&tid=...&sort=new|click|price&sort_asc=asc|desc&ZXljbXM=1&page=N`。
- 关键词搜索及排序：`/search.html?keywords=...&channelid=2&sort=...&sort_asc=...&page=N`。
- 不使用源站会丢失关键词的`c=Search&a=lists`链接。搜索是源站全局搜索；输入关键词时分类控件归为全部并停用，不能假装仍按分类过滤。
- 分页只把有href的下一页视为可达；源站显示3个页码是滑动窗口，不是全站仅3页。UI第300页（主站第100页）仍已核实有20条真实商品。
- 产品图只取主站`/uploads/`真实地址，不上传到新商品图片库。商品名和品牌等源字段保留，不根据语言创造规格。
- USD按主站当前`CNY_TO_USD_RATE`换算，本轮读取值7.26；不冒充实时外汇价，也不长期硬编码。无法读取换算值时显示待确认。
- 源请求有120秒内存缓存/合并，接口响应短缓存。Sites托管环境禁止caches.default，已能力检测并安全回退；不依赖该缓存才可正常运行。
- 源站错误显示可重试错误，不伪装成成功的0商品，也不拿固定演示数据补位。

## 尚未完成的真实接口

**搜图上传和独立QC照片源未核实，因此没有接通。**

已检查公开列表、搜索、详情和脚本；没有找到经过验证的可用接口。这不证明主站绝对没有此能力。预览相关页明确说明未接入；卖家商品图明确标注为卖家图，不能改名为QC。

后续需要主站真实接口路径/合同或相应源码线索，才能接通。不得另建图片搜索库、采集其他站QC或虚构上传结果来替代。

## 内容、关键词和语言

- 内容主题：spreadsheet使用、购买流程、QC阅读、运费、尺码、仓储合单、退换退款、支付费用、Weidian/Taobao链接、首次购买清单。
- 官方资料主要来自kakobuy.com及官方item/item2子域的帮助/教程页面。部分页面为JS壳，事实依据包括官方被索引正文；不宣称验证过登录后的所有规则。
- 费用、存储天数、运送时效、优惠金额不做无依据固定承诺。支付文中的107/100/7%是明确标注的假设算例，不是Kakobuy费率。
- 竞品只用于识别搜索意图与结构，不抄正文，不把其销量、优惠、鉴真承诺或流量当事实。
- 未取得Keyword Planner/Ahrefs/Semrush搜索量或KD，不能编造数据。
- 研究记录：`docs/sources-a.md`、`docs/sources-b.md`、`docs/seo-content-map.json`。
- 官方素材来源和SHA256：`docs/brand-assets.json`。logo为真实官网下载PNG，favicon为官网原ICO。
- 24语言：en,de,es,fr,it,pl,pt,ro,sv,nl,da,fi,el,cs,hu,bg,sk,hr,sl,lt,lv,et,ga,mt。
- 英文根路径，其余`/de/`等语言前缀。同一文章slug/产品ID稳定；切换保留路径、q/category/sort/page和锚点。
- 每种完整语言需要137条UI叶子字符串、28FAQ、10文章/100章节/200正文段落。不能用英文回退或摘要冒充完整译文。
- 语言菜单和hreflang只发布内容齐全的语言；正式完整版本仍须通过24语严格检查。

## 验证与目前状态

- 独立主站适配19项检查通过，见`docs/integration-checks.json`：分页2/4/300、关键词价格双向排序、11分类、空搜索、原始ID/推广参数。
- 公开浏览器通过：首页4张真实主站照片；jersey搜索→价格升序→下一页→hr切换保留query与page；站内详情的实际原始购买地址；FAQ28条。
- 初次公开错误为Sites禁止默认缓存，版本2已修复。一例托管入口临时500经一次刷新恢复，应用Worker无对应异常，后续流程完成。
- 初始375px内容视口（390px iframe含滚动条）首页无页面横向溢出；随后改善移动导航换行。完整24语移动端视觉检查尚未全部完成，不宣称全终端逐页目视验收。
- 浏览器证据摘要见`docs/browser-qa.json`。
- `npm run check`严格检查所有语言内容、段落/来源一致、无整段英文回退、完整静态路径、内部链接、lang/canonical/hreflang、结构化数据和购买URL。
- 完整24语最终构建、公开版本更新已通过；GitHub最终源码和本记录在同次提交同步。

## 预览与正式上线边界

当前预览一律noindex,nofollow；robots禁止抓取，不发布预览sitemap。正式域名尚未绑定，未修改DNS、生产main、GA4/GSC/Bing。

用户看过预览并确定正式部署后再做：
1. 确定正式Worker托管和GitHub构建流程，监听本项目目录。
2. 按正式域名配置DNS/HTTPS和主域规范跳转。
3. 配置可索引页面、正确canonical/query分页策略、sitemap和生产robots，排除搜索/筛选/工具等不应索引页。
4. 核实正式域名实际商品数据、购买地址、缓存/错误状态和手机体验。
5. 如仍需要搜图/QC，使用已验证的主站接口完成，不将当前预览称作全功能完成。
6. 只有用户另行要求时再操作统计/搜索站长平台、其他平台站点或发布自动化。

## GitHub与接续记录

- 首个源码检查点：257e2aa20a848242ecd1c4caac86d64222931713。
- 分支preview/kakobuybuys-20261024，根级kakobuybuys-com目录；旧_planning/kakobuy/PROJECT_MEMORY.md仅保留迁移指针。
- main和其他站点代码保持原样。继续写入前读取实际分支HEAD，使用expected_sha避免覆盖别人更新。
- 每次结束记录真实构建/发布结果、可访问URL和仍未完成项目。不能把成功提交代码说成上线成功，也不能把计划语言数量说成在线语言数量。

## 本轮最终发布结果（2026-10-24）

- Sites版本：3，ID `appgprj_6adc4f0bd82c8191b163618b4f0a83c0~appgver_18238b2a68f88191b5c72287149d5919`。
- 部署ID：`appgdep_6adc5d6bb314819188273b3c8466f138`，返回状态succeeded，公开访问。
- 精确构建源提交：`829890ea31b181ed7286066c64fb8f72f896add4`（Sites预览快照仓库；不与GitHub提交SHA混淆）。
- 公开URL：https://kakobuybuys-preview.hehaize88.chatgpt.site/ 。
- 严格检查通过：24语言、240篇语言版本文章、672条语言版本FAQ、504个静态页面、每语言137UI键；内部链接、元数据、来源、段落和购买地址校验均通过。
- 输出：508个打包资产，Worker ESM约5.64MB；无外部商品数据库。
- 部署后浏览器核实24个语言入口，并打开Maltese独立文章，实际10章节/20段落。
- GitHub当前分支HEAD即本轮最终源代码提交，保存完整项目和这份最终结果；未合并main或更改正式域名。
- 保留的真实缺口仍是主站搜图/独立QC接口；完整24语移动端逐页目视验收未做。不要在后续回复中把这些说成已完成。

## 公开预览访问故障（2026-10-24，Asia/Shanghai）

- 用户两次报告打不开，并提供截图：`Sorry, you have been blocked / You are unable to access chatgpt.site`。这是预览托管入口的安全拦截；仅凭截图无法确定具体触发规则。
- Sites管理接口再次核实：项目active、disabled_by为null、access_mode为public、版本3部署succeeded。没有把私有权限误设为公开的问题。
- 最近30分钟应用日志只返回预览sitemap.xml的404；预览不提供sitemap是当前设计。没有相关应用崩溃记录，但日志不能解释上游入口安全拦截。
- 现有完整Worker文件已核实仍在，5,636,209字节，SHA256为1289e6186fe247e8d53d1bef23c63aa5cfbe9b268b5406d97336f6a22ef37925。未修改应用内容、重新创建Sites项目或重复发布无关修复。
- 尝试通过Cloudflare连接检查备用临时托管，工具立即返回UNAUTHORIZED：This app connection requires reauthentication. Reconnect the app and try again. 尚未读取Cloudflare账户状态，更未创建Worker、修改DNS或绑定正式域名。
- 下一步需要恢复Cloudflare连接，或获得用户同意后使用其已登录浏览器操作Cloudflare。连接工具失效时切换浏览器需要先征求同意（浏览器工具的回退规则）；这不是Sites技能要求新增发布确认，也不是自动审批拒绝。
- 用户正式域名kakobuybuys.com仍未绑定。备用预览尚未发布，不应提供猜测的workers.dev地址或宣称访问已修好。
