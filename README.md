# 星愿之夜 · 天秤座生日礼物网站

这是一个无需安装任何依赖的静态多页面生日礼物网站。

## 启动
- 双击 `index.html`，浏览器直接打开即可。
- 或者运行 `python -m http.server 8000`，访问 http://localhost:8000。

## 页面（全部是独立 HTML 子页面）
- `index.html`：首页，四个板块的入口
- `blessing.html`：天秤祝福（使用 `<img>` 标签）
- `gift.html`：生日礼物（使用 `<img>` 标签，点击按钮弹出礼物）
- `album.html`：时光相册（使用六个 `<img>` 标签，点击放大）
- `promise.html`：未来约定（以 `<h2>` / `<p>` / `<span>` 等纯文字标签为主，不使用 `<img>`）

## 个性化文字
编辑 `config.js` 中的 `name`、`from`、`birthday`、`wish`、`surprise`。
未来约定的具体文字可以在 `promise.html` 的 `<p>` 标签中直接修改。

## 更换图片
前三个子页面 `<img>` 使用本地图片文件，可以离线打开：
- `blessing.html`：`assets/libra-illustration.svg`
- `gift.html`：`assets/gift-illustration.svg`
- `album.html`：`assets/photo-01.svg` 到 `assets/photo-06.svg`

要换成实际照片，把照片放进 `assets/`，例如 `my-photo-01.jpg`，然后把相册里的
`<img src="assets/photo-01.svg" ...>` 改成 `<img src="assets/my-photo-01.jpg" ...>`。

首页前三张导航卡片也使用 `<img>`；「未来约定」用文字艺术卡片替代图片。

## 开发说明
- `style.css`：全站排版、天秤座星空视觉、自适应
- `script.js`：星空、祝福按钮、拆礼物、相册大图
- `assets/`：所有本地 SVG 图片
- 不用 npm、框架、CDN、第三方字体或网络请求
