# Kakobuy 项目记忆

最后更新：2026-10-24（Asia/Shanghai）
状态：立项调研与架构规划，域名未选定，未创建或部署生产站。

## 本次用户已确认的要求
- 本次只做 Kakobuy，一个平台、一个独立域名；域名必须包含 kakobuy。
- 使用实施当日 Astro 最新稳定版，SSR 或 SSG；代码存入 GitHub。
- cnfansge.com 是商品、商品图片、分类、分页、搜索、搜图、QC、排序的唯一数据来源，不另建商品数据库。
- 官方相同 LOGO 和 favicon；首页以 SEO 为主，主关键词 kakobuy spreadsheet；先调研官方与竞品。
- 注册链接固定为 https://item2.kakobuy.com/register ，不擅自追加参数。
- 用户示例购买链接为 https://item2.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7617402324&affcode=rf8x8 。7617402324 是 Weidian 商品 ID，不是主站文章/商品记录 ID。
- 开始正式建站前先规划域名与架构；边做边更新项目记忆文件。其他优化后续逐步开展。

## 已检查的仓库
沿用已知仓库 https://github.com/hehaize88-code/cnfansge.com ，本次规划分支 planning/kakobuy-20261024。
根目录已有多个独立域名目录（含 cssbuyhome-com、pikobuy-at、superbuybuyss-com），没有根目录 AGENTS.md；本次不改这些已有站点。
规划暂存 _planning/kakobuy/；域名确认后移入对应域名目录并保留本文件历史。

## 第一轮核查记录
- cssbuyhome-com/worker/source.mjs 使用 www.cnfansge.com 公开 HTML 解析接入，并非主站源代码或一份完整官方 API 文档。
- 现有适配包含 catalog、search、sorting；/api/capabilities 明确 visualSearch:false、qc:false。不能宣称已实现搜图或把商品详情图标为 QC。
- 现有 parseProduct 的 id 来自主站 /AllProducts/{id}.html，购买时另外提取原始 Weidian itemID。新站必须保留这个区分。
- 现有分页代码说明旧漂亮分页 URL 可能 404，不能把滑动分页窗口当成总页数。应采用主站真实分页参数，全目录可达。
- 2026-10-24 注册局初查：kakobuytab.com 返回 404；kakobuysheet.com 和 kakobuyindex.com 返回已注册记录。尚不等于注册商可购买保证。
- 已打开 Astro 官方 7.4.2 release 及 SSR/GitHub Pages 文档；最终锁定版本前仍须核查发布列表。

## 待完成
1. 完成域名注册局核查与关键词到页面的映射。
2. 核验主站当前页面与公开脚本，定位搜图/QC 的真实接口，记录缺失证据。
3. 明确 GitHub 保存代码与 SSR 运行平台的区别。
4. 完成独立站路由、数据字段、购买链接、SEO、多语言和验收计划。
5. 用户选定域名后开始实施；生产部署与域名购买尚未进行。
