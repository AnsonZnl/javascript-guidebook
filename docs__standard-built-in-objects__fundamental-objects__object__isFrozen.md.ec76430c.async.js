(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[78],{OjPw:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),r=(a("B2uJ"),a("+su7"),a("qOys")),c=a.n(r);a("5Yjd");n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"objectisfrozen"},l.a.createElement("a",{"aria-hidden":"true",href:"#objectisfrozen"},l.a.createElement("span",{className:"icon icon-link"})),"Object.isFrozen"),l.a.createElement("p",null,l.a.createElement("code",null,"Object.isFrozen()")," \u65b9\u6cd5\u7528\u6765\u68c0\u6d4b\u6307\u5b9a\u5bf9\u8c61\u662f\u5426\u5df2\u88ab\u51bb\u7ed3\u3002"),l.a.createElement("h2",{id:"\u8bed\u6cd5"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},l.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),l.a.createElement(c.a,{code:"Object.isFrozen(O);\n",lang:"js"}),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"O"),l.a.createElement("td",null,"\u6307\u5b9a\u7528\u4e8e\u68c0\u6d4b\u7684\u5bf9\u8c61"),l.a.createElement("td",null,"object")))),l.a.createElement("p",null,"\u8fd4\u56de Boolean \u7c7b\u578b\u7684\u503c\u8868\u793a\u7528\u4e8e\u68c0\u6d4b\u7684\u5bf9\u8c61\u662f\u5426\u88ab\u51bb\u7ed3\u3002"),l.a.createElement("h2",{id:"\u63cf\u8ff0"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u63cf\u8ff0"},l.a.createElement("span",{className:"icon icon-link"})),"\u63cf\u8ff0"),l.a.createElement("p",null,"\u88ab\u51bb\u7ed3\u7684\u5bf9\u8c61\u4e0d\u53ef\u6269\u5c55\uff0c\u6240\u6709 Property \u5747\u4e0d\u53ef\u914d\u7f6e\uff0c\u4e14\u6240\u6709\u6570\u636e\u5c5e\u6027\uff08\u5373\u6ca1\u6709 ",l.a.createElement("code",null,"getter")," \u6216 ",l.a.createElement("code",null,"setter")," \u7ec4\u4ef6\u7684\u8bbf\u95ee\u5668\u7684\u5c5e\u6027 \uff09\u90fd\u662f\u4e0d\u53ef\u5199\u7684\u3002"),l.a.createElement("h2",{id:"\u793a\u4f8b"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},l.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),l.a.createElement("h3",{id:"\u57fa\u672c\u793a\u4f8b"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u57fa\u672c\u793a\u4f8b"},l.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u793a\u4f8b"),l.a.createElement(c.a,{code:"let foo = {\n  a: 1,\n  b: 2,\n};\n\nconsole.log(Object.isFrozen(foo));\n// false\n\nconsole.log(Object.freeze(foo));\n// {a: 1, b: 2}\n\nconsole.log(Object.isFrozen(foo));\n// true\n\nfoo.a = 3;\n\nconsole.log(foo);\n// { a: 1, b: 2 }\n",lang:"js"}),l.a.createElement("p",null,l.a.createElement("code",null,"Object.freeze")," \u65b9\u6cd5\u5b9e\u9645\u4e0a\u4f1a\u5728\u73b0\u6709\u5bf9\u8c61\u4e0a\u8c03\u7528 ",l.a.createElement("code",null,"Object.seal()")," \u65b9\u6cd5\uff0c\u5e76\u628a\u6240\u6709\u73b0\u6709\u5c5e\u6027\u7684 ",l.a.createElement("code",null,"writable")," \u63cf\u8ff0\u7b26\u7f6e\u4e3a ",l.a.createElement("code",null,"false"),"\u3002"),l.a.createElement(c.a,{code:"let foo = {\n  a: 1,\n};\n\n// { value: 1, writable: true, enumerable: true, configurable: true }\nconsole.log(Object.getOwnPropertyDescriptor(foo, 'a'));\n\nconsole.log(Object.freeze(foo));\n// { a: 1 }\n\n// { value: 1, writable: false, enumerable: true, configurable: false }\nconsole.log(Object.getOwnPropertyDescriptor(foo, 'a'));\n",lang:"js"})))}}}]);