(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[134],{MIoT:function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),l=n.n(t),c=(n("B2uJ"),n("+su7"),n("qOys")),r=n.n(c);n("5Yjd");a["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"map-\u5b9e\u4f8b\u7684\u5c5e\u6027\u548c\u65b9\u6cd5"},l.a.createElement("a",{"aria-hidden":"true",href:"#map-\u5b9e\u4f8b\u7684\u5c5e\u6027\u548c\u65b9\u6cd5"},l.a.createElement("span",{className:"icon icon-link"})),"Map \u5b9e\u4f8b\u7684\u5c5e\u6027\u548c\u65b9\u6cd5"),l.a.createElement("h2",{id:"\u5c5e\u6027"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u5c5e\u6027"},l.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),l.a.createElement("h3",{id:"size"},l.a.createElement("a",{"aria-hidden":"true",href:"#size"},l.a.createElement("span",{className:"icon icon-link"})),"size"),l.a.createElement("p",null,l.a.createElement("code",null,"size")," \u5c5e\u6027\u8fd4\u56de ",l.a.createElement("code",null,"Map")," \u7ed3\u6784\u7684\u6210\u5458\u603b\u6570\u3002"),l.a.createElement(r.a,{code:"const map = new Map();\n\nmap.set('foo', true);\nmap.set('bear', false);\n\nmap.size;\n// 2\n",lang:"js"}),l.a.createElement("h2",{id:"\u65b9\u6cd5"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u65b9\u6cd5"},l.a.createElement("span",{className:"icon icon-link"})),"\u65b9\u6cd5"),l.a.createElement("h3",{id:"mapprototypesetkey-value"},l.a.createElement("a",{"aria-hidden":"true",href:"#mapprototypesetkey-value"},l.a.createElement("span",{className:"icon icon-link"})),"Map.prototype.set(key, value)"),l.a.createElement("p",null,l.a.createElement("code",null,"set")," \u65b9\u6cd5\u8bbe\u7f6e ",l.a.createElement("code",null,"key")," \u5bf9\u5e94\u7684\u952e\u503c\uff0c\u7136\u540e\u8fd4\u56de\u6574\u4e2a ",l.a.createElement("code",null,"Map")," \u7ed3\u6784\u3002\u5982\u679c ",l.a.createElement("code",null,"Map")," \u7ed3\u6784\u3002\u5982\u679c ",l.a.createElement("code",null,"key")," \u5df2\u7ecf\u6709\u503c\uff0c\u5219\u952e\u503c\u4f1a\u88ab\u66f4\u65b0\uff0c\u5426\u5219\u5c31\u65b0\u751f\u6210\u8be5\u952e\u3002"),l.a.createElement("p",null,l.a.createElement("code",null,"set")," \u65b9\u6cd5\u8fd4\u56de\u7684\u662f\u5f53\u524d\u7684 Map \u5bf9\u8c61\uff0c\u56e0\u6b64\u53ef\u4ee5\u91c7\u7528\u94fe\u5f0f\u5199\u6cd5\u3002"),l.a.createElement(r.a,{code:"const map = new Map();\n\n// \u952e\u662f\u5b57\u7b26\u4e32\nmap.set('edition', 6);\n// \u952e\u662f\u6570\u503c\nmap.set(262, 'standard');\n// \u952e\u662f undefined\nmap.set(undefined, 'nah');\n\nconst m = new Map()\n  .set(1, 'a')\n  .set(2, 'b')\n  .set(3, 'c');\n",lang:"js"}),l.a.createElement("h3",{id:"mapprototypegetkey"},l.a.createElement("a",{"aria-hidden":"true",href:"#mapprototypegetkey"},l.a.createElement("span",{className:"icon icon-link"})),"Map.prototype.get(key)"),l.a.createElement("p",null,l.a.createElement("code",null,"get")," \u65b9\u6cd5\u8bfb\u53d6 ",l.a.createElement("code",null,"key")," \u5bf9\u5e94\u7684\u952e\u503c\uff0c\u5982\u679c\u627e\u4e0d\u5230 ",l.a.createElement("code",null,"key"),"\uff0c\u5219\u8fd4\u56de ",l.a.createElement("code",null,"undefined"),"\u3002"),l.a.createElement(r.a,{code:"const m = new Map();\n\nconst hello = function() {\n  console.log('hello');\n};\n\nm.set(hello, 'Hello ES6!');\n// \u952e\u662f\u51fd\u6570\n\nm.get(hello);\n// Hello ES6!\n",lang:"js"}),l.a.createElement("h3",{id:"mapprototypehaskey"},l.a.createElement("a",{"aria-hidden":"true",href:"#mapprototypehaskey"},l.a.createElement("span",{className:"icon icon-link"})),"Map.prototype.has(key)"),l.a.createElement("p",null,l.a.createElement("code",null,"has")," \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u67d0\u4e2a\u952e\u662f\u5426\u5728 Map \u6570\u636e\u7ed3\u6784\u4e2d\u3002"),l.a.createElement(r.a,{code:"const m = new Map();\n\nm.set('edition', 6);\nm.set(262, 'standard');\nm.set(undefined, 'nah');\n\nm.has('edition');\n// true\nm.has('years');\n// false\nm.has(262);\n// true\nm.has(undefined);\n// true\n",lang:"js"}),l.a.createElement("h3",{id:"mapprototypedeletekey"},l.a.createElement("a",{"aria-hidden":"true",href:"#mapprototypedeletekey"},l.a.createElement("span",{className:"icon icon-link"})),"Map.prototype.delete(key)"),l.a.createElement("p",null,l.a.createElement("code",null,"delete")," \u65b9\u6cd5\u5220\u9664\u67d0\u4e2a\u952e\uff0c\u8fd4\u56de ",l.a.createElement("code",null,"true")," \u3002\u5982\u679c\u5220\u9664\u5931\u8d25\uff0c\u5219\u8fd4\u56de ",l.a.createElement("code",null,"false"),"\u3002"),l.a.createElement(r.a,{code:"const m = new Map();\nm.set(undefined, 'nah');\nm.has(undefined);\n// true\n\nm.delete(undefined);\nm.has(undefined);\n// false\n",lang:"js"}),l.a.createElement("h3",{id:"mapprototypeclear"},l.a.createElement("a",{"aria-hidden":"true",href:"#mapprototypeclear"},l.a.createElement("span",{className:"icon icon-link"})),"Map.prototype.clear()"),l.a.createElement("p",null,l.a.createElement("code",null,"clear")," \u65b9\u6cd5\u6e05\u9664\u6240\u6709\u6210\u5458\uff0c\u6ca1\u6709\u8fd4\u56de\u503c\u3002"),l.a.createElement(r.a,{code:"const map = new Map();\n\nmap.set('foo', true);\nmap.set('bar', false);\nmap.size;\n// 2\n\nmap.clear();\nmap.size;\n// 0\n",lang:"js"})))}}}]);