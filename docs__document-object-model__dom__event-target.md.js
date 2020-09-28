(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[202],{arwk:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=(n("B2uJ"),n("+su7"),n("qOys")),i=n.n(r);n("5Yjd");t["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"eventtarget"},l.a.createElement("a",{"aria-hidden":"true",href:"#eventtarget"},l.a.createElement("span",{className:"icon icon-link"})),"EventTarget"),l.a.createElement("p",null,"EventTarget \u662f\u4e00\u4e2a DOM \u63a5\u53e3\uff0c\u7531\u53ef\u4ee5\u63a5\u6536\u4e8b\u4ef6\u3001\u5e76\u4e14\u53ef\u4ee5\u521b\u5efa\u4fa6\u542c\u5668\u7684\u5bf9\u8c61\u5b9e\u73b0\u3002"),l.a.createElement("p",null,"Element\u3001Document \u548c Window \u662f\u6700\u5e38\u89c1\u7684 EventTarget\uff0c\u4f46\u662f\u5176\u4ed6\u5bf9\u8c61\u4e5f\u53ef\u4ee5\u4f5c\u4e3a EventTarget\uff0c\u6bd4\u5982 XMLHttpRequest\u3001AudioNode \u548c AudioContext \u7b49\u7b49\u3002"),l.a.createElement(i.a,{code:"EventTarget <- Node <- Element\n",lang:"plain"}),l.a.createElement("h2",{id:"\u539f\u578b\u65b9\u6cd5"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u539f\u578b\u65b9\u6cd5"},l.a.createElement("span",{className:"icon icon-link"})),"\u539f\u578b\u65b9\u6cd5"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{align:"left"},"\u65b9\u6cd5"),l.a.createElement("th",{align:"left"},"\u8bf4\u660e"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"EventTarget.addEventListener"),l.a.createElement("td",{align:"left"},"\u6ce8\u518c\u4e8b\u4ef6\uff0c\u5728 EventTarget \u4e0a\u6ce8\u518c\u7279\u5b9a\u4e8b\u4ef6\u7c7b\u578b\u7684\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f")),l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"EventTarget.removeEventListener"),l.a.createElement("td",{align:"left"},"\u6ce8\u9500\u4e8b\u4ef6\uff0c\u79fb\u9664 EventTarget \u4e2d\u4e8b\u4ef6\u4fa6\u542c\u5668")),l.a.createElement("tr",null,l.a.createElement("td",{align:"left"},"EventTarget.dispatchEvent"),l.a.createElement("td",{align:"left"},"\u89e6\u53d1\u4e8b\u4ef6\uff0c\u5c06\u4e8b\u4ef6\u5206\u6d3e\u5230\u6b64 EventTarget \u4e2d")))),l.a.createElement("h2",{id:"\u7b80\u5355\u5b9e\u73b0"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u7b80\u5355\u5b9e\u73b0"},l.a.createElement("span",{className:"icon icon-link"})),"\u7b80\u5355\u5b9e\u73b0"),l.a.createElement(i.a,{code:"let EventTarget = function() {\n  this.listeners = {};\n};\n\nEventTarget.prototype.listeners = null;\n\nEventTarget.prototype.addEventListener = function(type, callback) {\n  if (!(type in this.listeners)) {\n    this.listeners[type] = [];\n  }\n\n  this.listeners[type].push(callback);\n};\n\nEventTarget.prototype.removeEventListener = function(type, callback) {\n  if (!(type in this.listeners)) {\n    return;\n  }\n\n  let stack = this.listeners[type];\n\n  for (let i = 0, len = stack.length; i < len; i++) {\n    if (stack[i] === callback) {\n      stack.splice(i, 1);\n      return this.removeEventListener(type, callback);\n    }\n  }\n};\n\nEventTarget.prototype.dispatchEvent = function(event) {\n  if (!(event.type in this.listeners)) {\n    return;\n  }\n\n  let stack = this.listeners[event.type];\n\n  event.target = this;\n\n  for (let i = 0, len = stack.length; i < len; i++) {\n    stack[i].call(this, event);\n  }\n};\n",lang:"js"}),l.a.createElement("hr",null),l.a.createElement("p",null,l.a.createElement("strong",null,"\u53c2\u8003\u8d44\u6599\uff1a")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://dom.spec.whatwg.org/#interface-eventtarget",target:"_blank",rel:"noopener noreferrer"},"DOM EventTarget",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},l.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))))))}}}]);