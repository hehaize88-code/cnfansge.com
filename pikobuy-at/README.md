# pikobuy.at

Pikobuy 商品推荐站的独立项目目录。当前为开发准备阶段，尚无网站构建产物或线上部署。

| 项目 | 约定 |
| --- | --- |
| 域名 | https://pikobuy.at |
| 仓库 | hehaize88-code/cnfansge.com |
| 项目根目录 | pikobuy-at/ |
| 框架目标 | 开工时核验 Astro 最新稳定版；SEO 内容预渲染，商品功能按需读取 |
| 商品唯一数据源 | https://cnfansge.com（www.cnfansge.com 为已观察到的同站主机） |
| 商品数据库 | 不创建、不复制、不维护镜像库 |
| 图片 | 商品主图、图库及真实 QC 全部取自主站；不使用假图或生成图 |
| 品牌素材 | Pikobuy 官方 Logo / favicon，待实际提取确认 |
| 多语言 | 参照参考站规划 24 语；当前仅完成语言方案，未完成翻译或上线 |
| 后台 | 不新增后台，也不操作源站后台 |

先阅读 [PROJECT_MEMORY.md](PROJECT_MEMORY.md)、[数据接入约定](docs/data-contract.md) 和 [多语言方案](docs/i18n-plan.md)。

商品详情和购买链接必须区分主站记录 ID 与原平台商品 ID。样本主站记录为 `6681`，Weidian 商品 ID 为 `7755101935`；购买链接使用后者。

注册入口：<https://www.pikobuy.com/?mode=register&redirect=/home>

本次提交只添加本目录的配置与规划文件，不发布页面，不修改其他域名项目，不触发 DNS 或 Cloudflare 变更。后续部署应将构建根目录设为 `pikobuy-at`；SSR 功能不能直接运行在 GitHub Pages 上。
