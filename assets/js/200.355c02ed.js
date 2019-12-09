(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{629:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"ui事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ui事件"}},[t._v("#")]),t._v(" UI事件")]),t._v(" "),s("p",[t._v("UI事件指的是那些不一定与用户操作有关的事件。这些事件在 DOM 规范出现之前，都是以这种或那种形式存在的，而在 DOM 规范中保留是为了向后兼容。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("事件方法")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("DOMActivate")]),t._v(" "),s("td",[t._v("表示元素已经被用户操作（通过鼠标或键盘）激活。这个事件在DOM3级事件中被废弃，但 FireFox2+ 和 Chrome 支持它。考虑到不同浏览器实现的差异 ，不建议使用这个事件。")])]),t._v(" "),s("tr",[s("td",[t._v("load")]),t._v(" "),s("td",[t._v("当页面完全加载后在 window 上面触发，当所有框架都加载完毕时在框架集上面触发，当图像加载完毕时在 "),s("code",[t._v("<img>")]),t._v(" 元素上面触发。或者当嵌入的内容加载完毕时在元素上面触发。")])]),t._v(" "),s("tr",[s("td",[t._v("unload")]),t._v(" "),s("td",[t._v("当页面完全卸载后在 window 上面触发，当所有框架都卸载后在框架集上面触发，或者当嵌入的内容卸载完毕后在元素上面触发。")])]),t._v(" "),s("tr",[s("td",[t._v("abort")]),t._v(" "),s("td",[t._v("在用户停止下载过程时，如果嵌入的内容没有加载完，则在元素上面触发。")])]),t._v(" "),s("tr",[s("td",[t._v("error")]),t._v(" "),s("td",[t._v("当发生 JavasScript 错误时在 window 上面触发，当无法加载图片时在"),s("code",[t._v("<img>")]),t._v("元素上面触发，当元素加载嵌入内容时在元素上面触发，或者当有一或多个框架无法加载时在框架集上面触发。")])]),t._v(" "),s("tr",[s("td",[t._v("select")]),t._v(" "),s("td",[t._v("当用户选择文本框中的一个可多个字符时触发。")])]),t._v(" "),s("tr",[s("td",[t._v("resize")]),t._v(" "),s("td",[t._v("当窗口或框架的大小变化（"),s("code",[t._v("<input>")]),t._v(" 或 "),s("code",[t._v("<textarea")]),t._v("）时在window或框架上面触发。")])]),t._v(" "),s("tr",[s("td",[t._v("scroll")]),t._v(" "),s("td",[t._v("当用户流动带有流动条的元素中的内容时，在该元素上面触发。元素中包含所加载页面的流动条。")])])])]),t._v(" "),s("h3",{attrs:{id:"load事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#load事件"}},[t._v("#")]),t._v(" load事件")]),t._v(" "),s("p",[t._v("当页面完全加载后（包括所有图像、JavaScript 文件、CSS 文件等外部资源），就会触发 window 上面的 load 事件。")]),t._v(" "),s("p",[t._v("有两种定义load事件的方式：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("通过 JavaScript 事件处理程序定义")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'load'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("通过为 "),s("code",[t._v("<body>")]),t._v(" 元素添加 "),s("code",[t._v("onload")]),t._v(" 特性")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onload")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("console.log('Loaded!')"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"unload事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unload事件"}},[t._v("#")]),t._v(" unload事件")]),t._v(" "),s("p",[t._v("与 load 事件对应的是 unload 事件，这个事件在文档被完全卸载后触发。只要用户从一个页面切换到另一个页面，unload 事件就会触发。而利用这个事件最多的情况就是清除引用，以避免内存泄漏。")]),t._v(" "),s("p",[t._v("unload 事件的定义方式与 load 事件相同。")]),t._v(" "),s("h3",{attrs:{id:"resize-事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resize-事件"}},[t._v("#")]),t._v(" resize 事件")]),t._v(" "),s("p",[t._v("当浏览器窗口被调整到一个新的高度或宽度时，就会触发 resize 事件。这个事件在 window（窗口）上面触发，因此可以通过 JavaScript 或者 "),s("code",[t._v("<body>")]),t._v(" 元素中的 onsize 特性来指定事件处理程序。")]),t._v(" "),s("p",[t._v("关于何时会触发 resize 事件，不同浏览器有不同的机制。IE、Safari、Chrome 和 Opera 会在浏览器窗口变化了1像素时就触发 resize 事件，然后随着变化不断重复触发。FIrefox则只会在用户停止调整窗口变化时才会触发 resize事件。由于 存在这个差别，应该注意不要在这个事件的处理程序中加入大计算的代码。因为这些代码有可能被频繁执行，从而导致浏览器反应明显变慢。")]),t._v(" "),s("h3",{attrs:{id:"scroll事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scroll事件"}},[t._v("#")]),t._v(" scroll事件")]),t._v(" "),s("p",[t._v("虽然 scroll 事件是在 window 对象上发生的，但它实际表示的则是页面中相应元素的变化。在混杂模式下，可以通过 "),s("code",[t._v("<body>")]),t._v(" 元素的 "),s("code",[t._v("scrollLeft")]),t._v(" 和 "),s("code",[t._v("scrollTop")]),t._v(" 来监控到这一变化；而在标准模式下，除 Safari 之外的所有浏览器都会通过 "),s("code",[t._v("<html>")]),t._v(" 元素来反映这一变化（Safari 仍然基于 "),s("code",[t._v("<body>")]),t._v(" 跟踪滚动位置）。")]),t._v(" "),s("p",[t._v("与 resize 事件类似，scroll 事件也会在文档被滚动期间重复被触发，所以有必要尽量保持事件处理程序的代码简单。")])])}),[],!1,null,null,null);a.default=r.exports}}]);