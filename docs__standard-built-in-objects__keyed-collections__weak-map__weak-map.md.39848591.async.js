(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[136],{u1EN:function(e,a,n){"use strict";n.r(a);var t=n("55Ip"),l=n("q1tI"),r=n.n(l),c=(n("B2uJ"),n("+su7"),n("qOys")),m=n.n(c);n("5Yjd");a["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"weakmap"},r.a.createElement("a",{"aria-hidden":"true",href:"#weakmap"},r.a.createElement("span",{className:"icon icon-link"})),"WeakMap"),r.a.createElement("p",null,"WeakMap \u5bf9\u8c61\u662f\u4e00\u7ec4\u952e/\u503c\u5bf9\u7684\u96c6\u5408\uff0c\u5176\u4e2d\u7684\u952e\u662f",r.a.createElement("strong",null,"\u5f31\u5f15\u7528"),"\u7684\u3002\u5176\u952e\u5fc5\u987b\u662f",r.a.createElement("strong",null,"\u5bf9\u8c61"),"\uff0c\u800c\u503c\u53ef\u4ee5\u662f\u4efb\u610f\u7684\u3002"),r.a.createElement("h2",{id:"\u8bed\u6cd5"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},r.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),r.a.createElement(m.a,{code:"new WeakMap([iterable]);\n",lang:"js"}),r.a.createElement("p",null,"\u53c2\u6570 ",r.a.createElement("code",null,"iterable")," \u662f\u4e00\u4e2a\u6570\u7ec4\u6216\u8005\u5176\u4ed6\u53ef\u8fed\u4ee3\u7684\u4e14\u5143\u7d20\u662f\u952e\u503c\u5bf9\u7684\u5bf9\u8c61\u3002\u6bcf\u4e2a\u952e\u503c\u5bf9\u4f1a\u88ab\u52a0\u5230\u65b0\u7684 WeakMap \u91cc\u3002",r.a.createElement("code",null,"null")," \u4f1a\u88ab\u5f53\u505a ",r.a.createElement("code",null,"undefiend"),"\u3002"),r.a.createElement("h2",{id:"\u7279\u5f81"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u7279\u5f81"},r.a.createElement("span",{className:"icon icon-link"})),"\u7279\u5f81"),r.a.createElement("h3",{id:"\u5bf9\u8c61\u952e\u540d"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u5bf9\u8c61\u952e\u540d"},r.a.createElement("span",{className:"icon icon-link"})),"\u5bf9\u8c61\u952e\u540d"),r.a.createElement(m.a,{code:"const map = new WeakMap();\n\nmap.set(1, 2);\n// TypeError: Invalid value used as weak map key\n\nmap.set(null, 2);\n// TypeError: Invalid value used as weak map key\n",lang:"js"}),r.a.createElement("h3",{id:"\u5f31\u5f15\u7528\u5bf9\u8c61"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u5f31\u5f15\u7528\u5bf9\u8c61"},r.a.createElement("span",{className:"icon icon-link"})),"\u5f31\u5f15\u7528\u5bf9\u8c61"),r.a.createElement("blockquote",null,r.a.createElement("p",null,'WeakMaps hold "weak" references to key objects')),r.a.createElement("p",null,"\u7ffb\u8bd1\u8fc7\u6765\u5e94\u8be5\u662f ",r.a.createElement("strong",null,"WeakMap \u4fdd\u6301\u4e86\u5bf9\u952e\u540d\u6240\u5f15\u7528\u7684\u5bf9\u8c61\u7684\u5f31\u5f15\u7528"),"\u3002"),r.a.createElement("p",null,"\u8fd9\u4e2a\u5f31\u5f15\u7528\u7684\u7279\u6027\uff0c\u5c31\u662f WeakMap \u4fdd\u6301\u4e86\u5bf9\u952e\u540d\u6240\u5f15\u7528\u7684\u5bf9\u8c61\u7684\u5f31\u5f15\u7528\uff0c\u5373 ",r.a.createElement(t["a"],{to:"../../../core-modules/executable-code-and-execution-contexts/memory-management/garbage-collection"},"\u5783\u573e\u56de\u6536\u673a\u5236")," \u4e0d\u5c06\u8be5\u5f15\u7528\u8003\u8651\u5728\u5185\u3002\u53ea\u8981\u6240\u5f15\u7528\u7684\u5bf9\u8c61\u7684\u5176\u4ed6\u5f15\u7528\u90fd\u88ab\u6e05\u9664\uff0c\u5783\u573e\u56de\u6536\u673a\u5236\u5c31\u4f1a\u91ca\u653e\u8be5\u5bf9\u8c61\u6240\u5360\u7528\u7684\u5185\u5b58\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u4e00\u65e6\u4e0d\u518d\u9700\u8981\uff0cWeakMap \u91cc\u9762\u7684\u952e\u540d\u5bf9\u8c61\u548c\u6240\u5bf9\u5e94\u7684\u952e\u503c\u5bf9\u4f1a\u81ea\u52a8\u6d88\u5931\uff0c\u4e0d\u7528\u624b\u52a8\u5220\u9664\u5f15\u7528\u3002"),r.a.createElement("p",null,"\u4e5f\u6b63\u662f\u56e0\u4e3a\u8fd9\u6837\u7684\u7279\u6027\uff0cWeakMap \u5185\u90e8\u6709\u591a\u5c11\u4e2a\u6210\u5458\uff0c\u53d6\u51b3\u4e8e\u5783\u573e\u56de\u6536\u673a\u5236\u6709\u6ca1\u6709\u8fd0\u884c\uff0c\u8fd0\u884c\u524d\u540e\u5f88\u53ef\u80fd\u6210\u5458\u4e2a\u6570\u662f\u4e0d\u4e00\u6837\u7684\uff0c\u800c\u5783\u573e\u56de\u6536\u673a\u5236\u4f55\u65f6\u8fd0\u884c\u662f\u4e0d\u53ef\u9884\u6d4b\u7684\uff0c\u56e0\u6b64 ES6 \u89c4\u5b9a WeakMap \u4e0d\u53ef\u904d\u5386\u3002"),r.a.createElement("p",null,"\u6240\u4ee5 WeakMap \u4e0d\u50cf Map\uff0c\u4e00\u662f\u6ca1\u6709\u904d\u5386\u64cd\u4f5c\uff08\u5373\u6ca1\u6709 ",r.a.createElement("code",null,"keys()"),"\u3001",r.a.createElement("code",null,"values()")," \u548c ",r.a.createElement("code",null,"entries()")," \u65b9\u6cd5\uff09\uff0c\u4e5f\u6ca1\u6709 ",r.a.createElement("code",null,"size")," \u5c5e\u6027\uff0c\u4e5f\u4e0d\u652f\u6301 ",r.a.createElement("code",null,"clear")," \u65b9\u6cd5\uff0c\u6240\u4ee5 WeakMap \u53ea\u6709\u56db\u4e2a\u65b9\u6cd5\u53ef\u7528\uff1a",r.a.createElement("code",null,"get()"),"\u3001",r.a.createElement("code",null,"set()"),"\u3001",r.a.createElement("code",null,"has()"),"\u3001",r.a.createElement("code",null,"delete()"),"\u3002"),r.a.createElement("p",null,"\u7279\u5f81\u8be6\u7ec6\u5206\u6790\u8bf7\u53c2\u9605 ",r.a.createElement("a",{href:"https://juejin.im/post/5b594512f265da0f6263840f",target:"_blank",rel:"noopener noreferrer"},"\ud83d\udcdd ES6 \u7cfb\u5217\u4e4b WeakMap",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),r.a.createElement("h2",{id:"\u5b9e\u4f8b\u65b9\u6cd5"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u5b9e\u4f8b\u65b9\u6cd5"},r.a.createElement("span",{className:"icon icon-link"})),"\u5b9e\u4f8b\u65b9\u6cd5"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u65b9\u6cd5"),r.a.createElement("th",null,"\u8bf4\u660e"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("code",null,"WeakMap.prototype.delete(key)")),r.a.createElement("td",null,"\u79fb\u9664 ",r.a.createElement("code",null,"key")," \u7684\u5173\u8054\u5bf9\u8c61")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("code",null,"WeakMap.prototype.get(key)")),r.a.createElement("td",null,"\u8fd4\u56de ",r.a.createElement("code",null,"key")," \u7684\u5173\u8054\u5bf9\u8c61\u6216 ",r.a.createElement("code",null,"undefined"))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("code",null,"WeakMap.prototype.has(key)")),r.a.createElement("td",null,"\u5224\u5b9a\u662f\u5426\u6709\u6307\u5b9a ",r.a.createElement("code",null,"key")," \u5173\u8054\u5bf9\u8c61\u7231\u54ea\u4e2a")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("code",null,"WeakMap.prototype.set(key)")),r.a.createElement("td",null,"\u8bbe\u7f6e\u4e00\u7ec4 ",r.a.createElement("code",null,"key")," \u5173\u8054\u5bf9\u8c61")))),r.a.createElement("h2",{id:"\u4f7f\u7528\u793a\u4f8b"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u4f7f\u7528\u793a\u4f8b"},r.a.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528\u793a\u4f8b"),r.a.createElement(m.a,{code:"const x = new WeakMap();\nconst y = new WeakMap();\n\nconst a = {};\nconst b = function() {};\nconst c = window;\n\nx.set(a, 100);\nx.set(b, 'BINGO!');\n\ny.set(a, b);\ny.set(c, undefined);\ny.set(x, y);\n\nx.get(b);\n// 'BINGO!'\n\ny.get(b);\n// undefined\ny.get(c);\n// undefined\n\nx.has(b);\n// true\n\ny.has(b);\n// false\ny.has(c);\n// true\n\n// delete()\nx.has(a);\n// true\nx.delete(a);\nx.has(a);\n// false\n",lang:"js"}),r.a.createElement("hr",null),r.a.createElement("p",null,r.a.createElement("strong",null,"\u53c2\u8003\u8d44\u6599\uff1a")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://juejin.im/post/5b594512f265da0f6263840f",target:"_blank",rel:"noopener noreferrer"},"\ud83d\udcdd ES6 \u7cfb\u5217\u4e4b WeakMap",r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},r.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),r.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))))))}}}]);