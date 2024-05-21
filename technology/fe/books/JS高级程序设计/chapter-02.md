# 02. HTML 中的 JS

## `<script>` 元素

### 八大属性（实为六大）

1. `src`：引入外部脚本文件。<Badge type="warning" text="可选" />
2. `async`：异步执行脚本，立即下载当前脚本但并不阻塞页面渲染，浏览器该干什么就干什么。异步脚本一定会在 `load` 事件之前执行，可能会在 `DOMContentLoaded` 事件之前或之后执行。<Badge type="warning" text="可选" /> <Badge type="warning" text="仅适用于外部脚本" /> <Badge type="tip" text="HTML5" />
3. `defer`：推迟执行脚本，立即下载但推迟执行当前脚本直至文档被完全解析和显示之后（脚本在浏览器解析到 `</html>` 标签后开始执行）。由于 H5 规范要求 JS 脚本应当依次按序执行，因此推迟脚本也应当依次按序执行，且均应在 `DOMContentLoaded` 事件之前执行，但实际情况并不总是如此，因此最好仅包含一个推迟脚本。<Badge type="warning" text="可选" /> <Badge type="warning" text="仅适用于外部脚本" /> <Badge type="tip" text="HTML4.01" />
4. `crossorigin`：跨域（CORS）配置，默认不开启，`crossorigin="anonymous"` 表示不发送认证信息，`crossorigin="use-credentials"` 表示发送认证信息。<Badge type="warning" text="可选" />
5. `integrity`：指定脚本签名并通过对比接收到的脚本签名与指定脚本签名验证子资源的完整性，若二者不匹配，则页面会报错，脚本不会执行。该属性可确保 CDN 不会提供恶意内容。<Badge type="warning" text="可选" />
6. `type`：代替 `language` 属性，指定脚本内容类型（MIME 类型），默认值为 `text/javascript`。当 `type="module"` 时，JS 代码会被解析为 ES6 模块，此时可以使用 `import` 和 `export`。<Badge type="warning" text="可选" />
7. `charset`：搭配 `src` 属性设置代码字符集，很少使用。<Badge type="warning" text="可选" />
8. `language`：已废弃。

::: warning 注意

- `defer` 与 `async` 的区别：
  - `defer` 下载完成后推迟执行，而 `async` 下载完成后立即执行。
  - `defer` 可保证脚本依次按序执行，而 `async` 不能保证。
- `integrity` 属性存在兼容性问题。

:::

### 标签位置

使用 `<script>` 标签的方法有两种：内部 JS 代码和外部 JS 脚本。默认情况下，不论是解析内部代码还是外部脚本，均会以**同步**的方式依次按序解析，故会阻塞页面渲染。
若将 `<script>` 标签放在 `<head>` 标签内，则对于需要执行很多 JS 的页面会导致渲染出现明显延迟，产生白屏现象。为解决此问题，可将 `<script>` 标签放在 `<body>` 标签底部。
这样一来，浏览器会先渲染页面，渲染完成之后才会解析 JS，白屏时间变短，用户体验变好。

## 文档模式

文档模式诞生于 IE5.5，可以通过 `DOCTYPE` 切换文档模式。文档模式包括三种：**混杂模式**、**标准模式**和**准标准模式**。

混杂模式与标准模式的区别：CSS 渲染内容不同，同时对 JS 也会产生一定的副作用。

标准模式与准标准模式的区别：对图片周围的空白处理不同（在表格中使用图片时最明显）。

::: warning 注意
准标准模式与标准模式非常接近，一般不做区分，统一以标准模式指代。
:::

## `<noscript>` 元素

为不支持或禁用了 JS 的浏览器提供替代内容。`<noscript>` 标签可包含除 `<script>` 标签外能够出现在 `<body>` 标签中的任何标签。示例代码：

```html
<!DOCTYPE html>
<html lang="zh-Hans">
<head>
    <title>检查浏览器是否支持 JS</title>
</head>
<body>
    <script>
        document.write('<p>您的浏览器支持 JS。</p>');
    </script>
    <noscript>
        <p>您的浏览器不支持或禁用了 JS，请启用 JS 之后再访问此页面。</p>
    </noscript>
</body>
</html>
```
