(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{uXMw:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),o=(t("B2uJ"),t("+su7"),t("qOys")),r=t.n(o);t("5Yjd");n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"instanceof"},l.a.createElement("a",{"aria-hidden":"true",href:"#instanceof"},l.a.createElement("span",{className:"icon icon-link"})),"instanceof"),l.a.createElement("p",null,l.a.createElement("code",null,"instanceof")," \u8fd0\u7b97\u7b26\u7528\u4e8e\u6d4b\u8bd5\u6784\u9020\u51fd\u6570\u7684 ",l.a.createElement("code",null,"prototype")," \u5c5e\u6027\u662f\u5426\u51fa\u73b0\u5728\u5bf9\u8c61\u7684\u539f\u578b\u94fe\u4e2d\u7684\u4efb\u4f55\u4f4d\u7f6e\u3002"),l.a.createElement(r.a,{code:"obj instanceof constructor;\n",lang:"js"}),l.a.createElement("h2",{id:"\u68c0\u6d4b\u7c7b\u578b"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u68c0\u6d4b\u7c7b\u578b"},l.a.createElement("span",{className:"icon icon-link"})),"\u68c0\u6d4b\u7c7b\u578b"),l.a.createElement("p",null,l.a.createElement("code",null,"instanceof")," \u53ef\u4ee5\u68c0\u6d4b\u67d0\u4e2a\u5bf9\u8c61\u662f\u5426\u662f\u53e6\u4e00\u4e2a\u5bf9\u8c61\u7684",l.a.createElement("strong",null,"\u5b9e\u4f8b"),"\u3002"),l.a.createElement(r.a,{code:"const Person = function() {};\nconst student = new Person();\n\nconsole.log(student instanceof Person);\n// true\n",lang:"js"}),l.a.createElement("p",null,l.a.createElement("code",null,"instanceof")," \u53ef\u4ee5\u68c0\u6d4b\u7236\u7c7b\u578b\u3002"),l.a.createElement(r.a,{code:"function Person() {}\nfunction Student() {}\n\nconst p = new Person();\n\n// \u7ee7\u627f\u539f\u578b\nStudent.prototype = p;\n\nconst s = new Student();\n\nconsole.log(s instanceof Student);\n// true\nconsole.log(s instanceof Person);\n// true\n",lang:"js"}),l.a.createElement("h2",{id:"\u68c0\u6d4b\u5b9e\u4f8b"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u68c0\u6d4b\u5b9e\u4f8b"},l.a.createElement("span",{className:"icon icon-link"})),"\u68c0\u6d4b\u5b9e\u4f8b"),l.a.createElement("p",null,"\u67e5\u770b\u5bf9\u8c61 Bar \u7684 ",l.a.createElement("code",null,"prototype")," \u6307\u5411\u7684\u5bf9\u8c61\u662f\u5426\u5728\u5bf9\u8c61 Foo \u7684 ",l.a.createElement("code",null,"[[prototype]]")," \u94fe\u4e0a\u3002\u5982\u679c\u5728\uff0c\u5219\u8fd4\u56de ",l.a.createElement("code",null,"true"),"\uff0c\u5982\u679c\u4e0d\u5728\u5219\u8fd4\u56de ",l.a.createElement("code",null,"false"),"\u3002\u4e0d\u8fc7\u6709\u4e00\u4e2a\u7279\u6b8a\u7684\u60c5\u51b5\uff0c\u5f53\u5bf9\u8c61 Bar \u7684 ",l.a.createElement("code",null,"prototype")," \u4e3a ",l.a.createElement("code",null,"null")," \u5c06\u4f1a\u62a5\u9519\uff08\u7c7b\u4f3c\u4e8e\u7a7a\u6307\u9488\u5f02\u5e38\uff09\u3002"),l.a.createElement("p",null,"\u51fd\u6570\u6a21\u62df ",l.a.createElement("code",null,"Foo instanceof Bar"),"\uff1a"),l.a.createElement(r.a,{code:"function _instanceof(Foo, Bar) {\n  // \u53d6 Bar \u7684\u663e\u5f0f\u539f\u578b\n  var O = Bar.prototype;\n  // \u53d6 Foo \u7684\u9690\u5f0f\u539f\u578b\n  Foo = Foo.__proto__;\n  while (true) {\n    // Object.prototype.__proto__ === null\n    if (Foo === null) return false;\n    // \u8fd9\u91cc\u91cd\u70b9\uff1a\u5f53 O \u4e25\u683c\u7b49\u4e8e Foo \u65f6\uff0c\u8fd4\u56de true\n    if (O === Foo) return true;\n    Foo = Foo.__proto__;\n  }\n}\n",lang:"js"}),l.a.createElement("h2",{id:"\u793a\u4f8b"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},l.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),l.a.createElement(r.a,{code:"null instanceof Object;\n// invalid\n",lang:"js"}),l.a.createElement("hr",null),l.a.createElement("p",null,l.a.createElement("strong",null,"\u53c2\u8003\u8d44\u6599\uff1a")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://juejin.im/entry/5804640d0bd1d0005813083e",target:"_blank",rel:"noopener noreferrer"},"\ud83d\udcdd JS \u9b54\u6cd5\u5802\uff1a\u518d\u8bc6 instanceof",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},l.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://juejin.im/post/5b7f64be51882542c83476f0",target:"_blank",rel:"noopener noreferrer"},"\ud83d\udcdd instanceof \u539f\u7406",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},l.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))))))}}}]);