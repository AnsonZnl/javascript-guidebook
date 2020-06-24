(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[153],{olyV:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),r=(a("B2uJ"),a("+su7"),a("qOys")),c=a.n(r);a("5Yjd");n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"proxy---handlerset"},l.a.createElement("a",{"aria-hidden":"true",href:"#proxy---handlerset"},l.a.createElement("span",{className:"icon icon-link"})),"Proxy - handler.set"),l.a.createElement("p",null,l.a.createElement("code",null,"handler.set()")," \u65b9\u6cd5\u7528\u4e8e\u62e6\u622a\u5bf9\u8c61\u5c5e\u6027\u7684\u8d4b\u503c\u64cd\u4f5c\u3002"),l.a.createElement("h2",{id:"\u8bed\u6cd5"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},l.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),l.a.createElement(c.a,{code:"const proxy = new Proxy(target, {\n  get: function(target, property, value, receiver) {\n    // do something\n  },\n});\n",lang:"js"}),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"target")),l.a.createElement("td",null,"\u76ee\u6807\u5bf9\u8c61"),l.a.createElement("td",null,"object")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"property")),l.a.createElement("td",null,"\u5c5e\u6027\u540d"),l.a.createElement("td",null,"string \u6216 symbol")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"value")),l.a.createElement("td",null,"\u65b0\u5c5e\u6027\u503c"),l.a.createElement("td",null,"any")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"receiver")),l.a.createElement("td",null,"\u6700\u521d\u88ab\u8c03\u7528\u7684\u5bf9\u8c61"),l.a.createElement("td",null,"object")))),l.a.createElement("h3",{id:"\u8fd4\u56de\u503c"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8fd4\u56de\u503c"},l.a.createElement("span",{className:"icon icon-link"})),"\u8fd4\u56de\u503c"),l.a.createElement("p",null,l.a.createElement("code",null,"set")," \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u8868\u793a\u662f\u5426\u8bbe\u7f6e\u6210\u529f\u3002"),l.a.createElement("h2",{id:"\u8bf4\u660e"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8bf4\u660e"},l.a.createElement("span",{className:"icon icon-link"})),"\u8bf4\u660e"),l.a.createElement("h3",{id:"\u62e6\u622a"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u62e6\u622a"},l.a.createElement("span",{className:"icon icon-link"})),"\u62e6\u622a"),l.a.createElement("p",null,"\u8be5\u65b9\u6cd5\u4f1a\u62e6\u622a\u76ee\u6807\u5bf9\u8c61\u7684\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6307\u5b9a\u5c5e\u6027\u503c\uff1a",l.a.createElement("code",null,"proxy[foo] = bar")," \u548c ",l.a.createElement("code",null,"proxy.foo = bar")),l.a.createElement("li",null,"\u6307\u5b9a\u7ee7\u627f\u8005\u7684\u5c5e\u6027\u503c\uff1a",l.a.createElement("code",null,"Object.create(proxy)[foo] = bar")),l.a.createElement("li",null,l.a.createElement("code",null,"Reflect.set()"))),l.a.createElement("h3",{id:"\u7ea6\u675f"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u7ea6\u675f"},l.a.createElement("span",{className:"icon icon-link"})),"\u7ea6\u675f"),l.a.createElement("p",null,"\u5982\u679c\u8fdd\u80cc\u4e86\u4ee5\u4e0b\u7684\u7ea6\u675f\uff0c",l.a.createElement("code",null,"proxy")," \u4f1a\u629b\u51fa TypeError \u5f02\u5e38\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5982\u679c\u76ee\u6807\u5c5e\u6027\u662f\u4e00\u4e2a\u4e0d\u53ef\u5199\u53ca\u4e0d\u53ef\u914d\u7f6e\u7684\u6570\u636e\u5c5e\u6027\uff0c\u5219 Proxy \u5bf9\u8fd9\u4e2a\u5c5e\u6027\u7684 ",l.a.createElement("code",null,"set")," \u4ee3\u7406\u4e0d\u4f1a\u751f\u6548\uff0c\u4e14\u4e0d\u80fd\u6539\u53d8\u5b83\u7684\u503c"),l.a.createElement("li",null,"\u5982\u679c\u76ee\u6807\u5c5e\u6027\u6ca1\u6709\u914d\u7f6e\u5b58\u50a8\u65b9\u6cd5\uff0c\u5373 ",l.a.createElement("code",null,"[[Set]]")," \u5c5e\u6027\u7684\u662f ",l.a.createElement("code",null,"undefined"),"\uff0c\u5219\u4e0d\u80fd\u8bbe\u7f6e\u5b83\u7684\u503c"),l.a.createElement("li",null,"\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u5982\u679c ",l.a.createElement("code",null,"set")," \u65b9\u6cd5\u8fd4\u56de ",l.a.createElement("code",null,"false"),"\uff0c\u90a3\u4e48\u4e5f\u4f1a\u629b\u51fa\u4e00\u4e2a TypeError \u5f02\u5e38")),l.a.createElement("h2",{id:"\u793a\u4f8b"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},l.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),l.a.createElement(c.a,{code:"const proxy = new Proxy(\n  {},\n  {\n    set: function(target, prop, value, receiver) {\n      target[prop] = value;\n      console.log('property set:' + prop + ' = ' + value);\n      return true;\n    },\n  }\n);\n\nconsole.log('foo' in proxy);\n// false\n\nproxy.foo = 100;\n// 'property set:' foo = 100\n\nconsole.log('foo' in proxy);\n// true\n\nconsole.log(proxy.foo);\n// 100\n",lang:"js"}),l.a.createElement("h3",{id:"\u6570\u636e\u6821\u9a8c"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u6570\u636e\u6821\u9a8c"},l.a.createElement("span",{className:"icon icon-link"})),"\u6570\u636e\u6821\u9a8c"),l.a.createElement("p",null,"\u5047\u8bbe ",l.a.createElement("code",null,"Person")," \u5bf9\u8c61\u6709\u4e00\u4e2a ",l.a.createElement("code",null,"age")," \u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u5e94\u8be5\u662f\u4e00\u4e2a\u4e0d\u5927\u4e8e 200 \u7684\u6574\u6570\uff0c\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528 ",l.a.createElement("code",null,"Proxy")," \u4fdd\u8bc1 ",l.a.createElement("code",null,"age")," \u7684\u5c5e\u6027\u503c\u7b26\u5408\u8981\u6c42\u3002"),l.a.createElement(c.a,{code:"const validator = {\n  set: function(target, prop, value) {\n    if (prop === 'age') {\n      if (!Number.isInteger(value)) {\n        throw new TypeError('The age is not an integer');\n      }\n      if (value > 200) {\n        throw new RangeError('The age seems invalid');\n      }\n    }\n\n    // \u5bf9\u4e8e\u6ee1\u8db3\u6761\u4ef6\u7684 age \u5c5e\u6027\u4ee5\u53ca\u5176\u4ed6\u5c5e\u6027\uff0c\u76f4\u63a5\u4fdd\u5b58\n    target[prop] = value;\n  },\n};\n\nlet person = new Proxy({}, validator);\n\nperson.age = 100;\n\nconsole.log(person.age);\n// 100\n\nperson.age = 'YOUNG';\n// Uncaught TypeError: The age is not an integer\n\nperson.age = 300;\n// Uncaught RangeError: The age seems invalid\n",lang:"js"}),l.a.createElement("h3",{id:"\u7981\u6b62\u8bfb\u5199\u5185\u90e8\u5c5e\u6027"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u7981\u6b62\u8bfb\u5199\u5185\u90e8\u5c5e\u6027"},l.a.createElement("span",{className:"icon icon-link"})),"\u7981\u6b62\u8bfb\u5199\u5185\u90e8\u5c5e\u6027"),l.a.createElement("p",null,"\u4e0b\u9762\u793a\u4f8b\u4ee3\u7801\uff0c\u53ea\u8981\u8bfb\u5199\u7684\u5c5e\u6027\u540d\u7b2c\u4e00\u4e2a\u5b57\u7b26\u4e0d\u662f\u4e0b\u5212\u7ebf\uff0c\u4e00\u5f8b\u629b\u9519\uff0c\u4ece\u800c\u8fbe\u5230\u7981\u6b62\u8bfb\u5199\u5185\u90e8\u5c5e\u6027\u7684\u76ee\u7684\u3002"),l.a.createElement(c.a,{code:"const invariant = function(key, action) {\n  if (key[0] === '_') {\n    throw new Error(`Invalid attempt to ${action} private \"${key}\" property`);\n  }\n};\n\nconst handler = {\n  get(target, prop) {\n    invariant(prop, 'get');\n    return target[prop];\n  },\n  set(target, prop, value) {\n    invariant(prop, 'set');\n    target[prop] = value;\n    return true;\n  },\n};\n\nconst target = {};\nconst proxy = new Proxy(target, handler);\n\nconsole.log(proxy._prop);\n// Uncaught Error: Invalid attempt to get private \"_prop\" property\n\nproxy._prop = 'c';\n// Uncaught Error: Invalid attempt to set private \"_prop\" property\n",lang:"js"})))}}}]);