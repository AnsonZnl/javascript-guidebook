(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[98],{K4rT:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),r=(t("B2uJ"),t("+su7"),t("qOys")),i=t.n(r);t("5Yjd");n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"symboltoprimitive"},l.a.createElement("a",{"aria-hidden":"true",href:"#symboltoprimitive"},l.a.createElement("span",{className:"icon icon-link"})),"Symbol.toPrimitive"),l.a.createElement("p",null,"\u5bf9\u8c61\u7684",l.a.createElement("code",null,"Symbol.toPrimitive"),"\u5c5e\u6027\uff0c\u6307\u5411\u4e00\u4e2a\u65b9\u6cd5\u3002\u8be5\u5bf9\u8c61\u88ab\u8f6c\u4e3a\u539f\u59cb\u7c7b\u578b\u7684\u503c\u65f6\uff0c\u4f1a\u8c03\u7528\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u8fd4\u56de\u8be5\u5bf9\u8c61\u5bf9\u5e94\u7684\u539f\u59cb\u7c7b\u578b\u503c\u3002"),l.a.createElement("p",null,l.a.createElement("code",null,"Symbol.toPrimitive"),"\u88ab\u8c03\u7528\u65f6\uff0c\u4f1a\u63a5\u53d7\u4e00\u4e2a\u5b57\u7b26\u4e32\u53c2\u6570\uff0c\u8868\u793a\u5f53\u524d\u8fd0\u7b97\u7684\u6a21\u5f0f\uff0c\u4e00\u5171\u6709\u4e09\u79cd\u6a21\u5f0f\u3002"),l.a.createElement("ul",null,l.a.createElement("li",null,"Number\uff1a\u8be5\u573a\u5408\u9700\u8981\u8f6c\u6210\u6570\u503c"),l.a.createElement("li",null,"String\uff1a\u8be5\u573a\u5408\u9700\u8981\u8f6c\u6210\u5b57\u7b26\u4e32"),l.a.createElement("li",null,"Default\uff1a\u8be5\u573a\u5408\u53ef\u4ee5\u8f6c\u6210\u6570\u503c\uff0c\u4e5f\u53ef\u4ee5\u8f6c\u6210\u5b57\u7b26\u4e32")),l.a.createElement(i.a,{code:"let obj = {\n  [Symbol.toPrimitive](hint) {\n    switch (hint) {\n      case 'number':\n        return 123;\n      case 'string':\n        return 'str';\n      case 'default':\n        return 'default';\n      default:\n        throw new Error();\n    }\n  },\n};\n\n2 * obj; // 246\n3 + obj; // '3default'\nobj == 'default'; // true\nString(obj); // 'str'\n",lang:"js"})))}}}]);