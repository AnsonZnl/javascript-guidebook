(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[111],{lc6s:function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),l=n.n(t),r=(n("B2uJ"),n("+su7"),n("qOys")),c=n.n(r);n("5Yjd");a["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"arrayprototypelastindexof"},l.a.createElement("a",{"aria-hidden":"true",href:"#arrayprototypelastindexof"},l.a.createElement("span",{className:"icon icon-link"})),"Array.prototype.lastIndexOf()"),l.a.createElement("p",null,l.a.createElement("code",null,"Array.prototype.lastIndexOf()")," \u65b9\u6cd5\u7528\u4e8e\u67e5\u627e\u6307\u5b9a\u6570\u7ec4\u6210\u5458\u5728\u6570\u7ec4\u4e2d\u6700\u540e\u4e00\u6b21\u51fa\u73b0\u7684\u4f4d\u7f6e\u3002"),l.a.createElement("h2",{id:"\u8bed\u6cd5"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},l.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),l.a.createElement(c.a,{code:"arr.lastIndexOd( searchValue [, fromIndex ] )\n",lang:"js"}),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"searchValue")),l.a.createElement("td",null,"\u9700\u8981\u67e5\u627e\u7684\u6570\u7ec4\u5143\u7d20"),l.a.createElement("td",null,"any")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"fromIndex")),l.a.createElement("td",null,"\u5728\u5f53\u524d\u6570\u7ec4\u4e2d\u67e5\u627e\u7684\u8d77\u59cb\u7d22\u5f15\uff0c\u9ed8\u8ba4\u4e3a ",l.a.createElement("code",null,"arr.lengt - 1"),"\u3002"),l.a.createElement("td",null,"numer")))),l.a.createElement("p",null,l.a.createElement("strong",null,"\u8fd4\u56de\u503c\uff1a")," ",l.a.createElement("code",null,"lastIndexOf()")," \u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u4e3a ",l.a.createElement("code",null,"Number")," \u7c7b\u578b\uff0c\u8fd4\u56de\u6570\u7ec4\u5143\u7d20\u5728\u5f53\u524d\u6570\u7ec4\u4e2d\u6700\u540e\u4e00\u6b21\u67e5\u627e\u5230\u7684\u8d77\u59cb\u4f4d\u7f6e\uff08\u7d22\u5f15\uff09\u3002"),l.a.createElement("h2",{id:"\u793a\u4f8b"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},l.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),l.a.createElement("h3",{id:"\u6807\u51c6\u793a\u4f8b"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u6807\u51c6\u793a\u4f8b"},l.a.createElement("span",{className:"icon icon-link"})),"\u6807\u51c6\u793a\u4f8b"),l.a.createElement(c.a,{code:"const arr = [2, 5, 9, 2];\n\nconst index = arr.lastIndexOf(2);\n// 3\n\nindex = arr.lastIndexOf(7);\n// -1\n\nindex = arr.lastIndexOf(2, 3);\n// 3\n\nindex = arr.lastIndexOf(2, 2);\n// 0\n\nindex = arr.lastIndexOf(2, -2);\n// 0\n\nindex = arr.lastIndexOf(2, -1);\n// 3\n",lang:"js"}),l.a.createElement("h3",{id:"\u67e5\u627e\u6240\u6709\u5143\u7d20"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u67e5\u627e\u6240\u6709\u5143\u7d20"},l.a.createElement("span",{className:"icon icon-link"})),"\u67e5\u627e\u6240\u6709\u5143\u7d20"),l.a.createElement("p",null,"\u4e0b\u4f8b\u4f7f\u7528 ",l.a.createElement("code",null,"lastIndexOf")," \u67e5\u627e\u5230\u4e00\u4e2a\u6210\u5458\u5728\u6570\u7ec4\u4e2d\u6240\u6709\u7684\u7d22\u5f15\uff08\u4e0b\u6807\uff09\uff0c\u5e76\u4f7f\u7528 ",l.a.createElement("code",null,"push")," \u5c06\u6240\u6709\u6dfb\u52a0\u5230\u53e6\u4e00\u4e2a\u6570\u7ec4\u4e2d\u3002"),l.a.createElement(c.a,{code:"var indices = [];\nvar arr = ['a', 'b', 'a', 'c', 'a', 'd'];\nvar element = 'a';\nvar idx = arr.lastIndexOf(element);\n\nwhile (idx != -1) {\n  indices.push(idx);\n  idx = idx > 0 ? arr.lastIndexOf(element, idx - 1) : -1;\n}\n\nconsole.log(indices); // Outputs: [4, 2, 0];\n",lang:"js"}),l.a.createElement("p",null,"\u6ce8\u610f\uff1a\u6211\u4eec\u8981\u5355\u72ec\u5904\u7406 ",l.a.createElement("code",null,"idx == 0")," \u65f6\u7684\u60c5\u51b5\uff0c\u56e0\u4e3a\u5982\u679c\u662f\u7b2c\u4e00\u4e2a\u5143\u7d20\uff0c\u5ffd\u7565\u4e86",l.a.createElement("code",null,"fromIndex")," \u53c2\u6570\u5219\u7b2c\u4e00\u4e2a\u5143\u7d20\u603b\u4f1a\u88ab\u67e5\u627e\u3002\u8fd9\u4e0d\u540c\u4e8e ",l.a.createElement("code",null,"indexOf")," \u65b9\u6cd5\u3002")))}}}]);