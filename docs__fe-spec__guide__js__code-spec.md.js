(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15,22],{"8xXG":function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),o=t("dEAq"),r=t("ZpkN");t("JjdP");n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u4ee3\u7801\u89c4\u8303"},l.a.createElement(o["AnchorLink"],{to:"#\u4ee3\u7801\u89c4\u8303","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u89c4\u8303"),l.a.createElement("p",null,"JavaScript \u662f\u4e00\u79cd\u5ba2\u6237\u7aef\u811a\u672c\u8bed\u8a00\uff0c\u8fd9\u91cc\u5217\u51fa\u4e86\u7f16\u5199 JavaScript\u65f6\u9700\u8981\u9075\u5b88\u7684\u89c4\u5219\u3002"),l.a.createElement("h3",{id:"\u7c7b\u578b"},l.a.createElement(o["AnchorLink"],{to:"#\u7c7b\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u7c7b\u578b"),l.a.createElement("p",null,"\u57fa\u672c\u7c7b\u578b"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5b57\u7b26\u4e32"),l.a.createElement("li",null,"\u6570\u503c"),l.a.createElement("li",null,"\u5e03\u5c14\u7c7b\u578b"),l.a.createElement("li",null,"null"),l.a.createElement("li",null,"undefined")),l.a.createElement("p",null,l.a.createElement("code",null,"const foo = 1let bar = foobar = 9console.log(foo, bar) // 1, 9")),l.a.createElement("p",null,"\u590d\u6742\u7c7b\u578b"),l.a.createElement("ul",null,l.a.createElement("li",null,"object"),l.a.createElement("li",null,"array"),l.a.createElement("li",null,"function")),l.a.createElement("p",null,l.a.createElement("code",null," const foo = [1, 2, 3]const bar = foobar[0] = 9console.log(foo[0], bar[0]) // 9, 9")),l.a.createElement("h3",{id:"\u5f15\u7528"},l.a.createElement(o["AnchorLink"],{to:"#\u5f15\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5f15\u7528"),l.a.createElement("p",null,"const \u548c let \u90fd\u662f\u5757\u7ea7\u4f5c\u7528\u57df\uff0cvar \u662f\u51fd\u6570\u7ea7\u4f5c\u7528\u57df \u5bf9\u6240\u6709\u5f15\u7528\u90fd\u4f7f\u7528 const\uff0c\u4e0d\u8981\u4f7f\u7528 ",l.a.createElement("code",null,"var")),l.a.createElement(r["a"],{code:"// bad\nvar a = 1\nvar b = 2\n\n// good\nconst a = 1\nconst b = 2\n\u5982\u679c\u5f15\u7528\u662f\u53ef\u53d8\u52a8\u7684\uff0c\u5219\u4f7f\u7528 let\n// bad\nvar count = 1\nif (count < 10) {  \n  count += 1\n}\n\n// good\nlet count = 1\nif (count < 10) {  \n  count += 1\n}",lang:"js"}),l.a.createElement("h3",{id:"\u5bf9\u8c61"},l.a.createElement(o["AnchorLink"],{to:"#\u5bf9\u8c61","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5bf9\u8c61"),l.a.createElement("p",null,"\u8bf7\u4f7f\u7528\u5b57\u9762\u91cf\u503c\u521b\u5efa\u5bf9\u8c61"),l.a.createElement(r["a"],{code:"// bad\nconst a = new Object{}\n\n// good\nconst a = {}",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u522b\u4f7f\u7528\u4fdd\u7559\u5b57\u4f5c\u4e3a\u5bf9\u8c61\u7684\u952e\u503c\uff0c\u8fd9\u6837\u5728 IE8 \u4e0b\u4e0d\u4f1a\u8fd0\u884c")),l.a.createElement(r["a"],{code:"// badconst a = {  default: {},  // default \u662f\u4fdd\u7559\u5b57  common: {}}// goodconst a = {  defaults: {},  common: {}}",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u8bf7\u4f7f\u7528\u5bf9\u8c61\u65b9\u6cd5\u7684\u7b80\u5199\u65b9\u5f0f")),l.a.createElement(r["a"],{code:"// badconst item = {  value: 1,  addValue: function (val) {    return item.value + val  }}// goodconst item = {  value: 1,  addValue(val) {    return item.value + val  }}",lang:"js"}),l.a.createElement("p",null,"\u8bf7\u4f7f\u7528\u5bf9\u8c61\u5c5e\u6027\u503c\u7684\u7b80\u5199\u65b9\u5f0f"),l.a.createElement(r["a"],{code:"const job = 'FrontEnd'// badconst item = {  job: job}// goodconst item = {  job}",lang:"js"}),l.a.createElement("p",null,"\u5bf9\u8c61\u5c5e\u6027\u503c\u7684\u7b80\u5199\u65b9\u5f0f\u8981\u548c\u58f0\u660e\u5f0f\u7684\u65b9\u5f0f\u5206\u7ec4"),l.a.createElement(r["a"],{code:"const job = 'FrontEnd'const department = 'JDC'// badconst item = {  sex: 'male',  job,  age: 25,  department}// goodconst item = {  job,  department,  sex: 'male',  age: 25}",lang:"js"}),l.a.createElement("p",null,"\u7528\u5b57\u9762\u91cf\u521b\u5efa\u5bf9\u8c61\uff1b"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u4e0d\u5141\u8bb8\u4f7f\u7528\u4fdd\u7559\u5b57\uff1b"),l.a.createElement("li",null,"\u4f7f\u7528\u53ef\u8bfb\u7684\u540c\u4e49\u8bcd\u66ff\u6362\u4fdd\u7559\u5b57"),l.a.createElement("li",null,"\u4f7f\u7528ES6\u5bf9\u8c61\u5c5e\u6027\u7b80\u5199"),l.a.createElement("li",null,"\u4f7f\u7528Object.keys(obj)\\Object.values(obj)\u6765\u904d\u5386\u5bf9\u8c61\u5c5e\u6027\u548c\u503c")),l.a.createElement("p",null,"// \u5b57\u9762\u91cf\u521b\u5efa\u5bf9\u8c61"),l.a.createElement(r["a"],{code:"let human = {\n    x: 1,\n    \n    // class -> klass \u4fdd\u7559\u5b57\u66ff\u6362\n    klass: Animal\n}\n\n// \u5c5e\u6027\u7b80\u5199\nlet username = 'June';\nlet password = 'helloworld';\nlet user = {\n    username,\n    password\n};",lang:"js"}),l.a.createElement("h3",{id:"\u6570\u7ec4"},l.a.createElement(o["AnchorLink"],{to:"#\u6570\u7ec4","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6570\u7ec4"),l.a.createElement("p",null,"\u8bf7\u4f7f\u7528\u5b57\u9762\u91cf\u503c\u521b\u5efa\u6570\u7ec4"),l.a.createElement(r["a"],{code:"// badconst items = new Array()// goodconst items = []",lang:"unknown"}),l.a.createElement("p",null,"\u5411\u6570\u7ec4\u4e2d\u6dfb\u52a0\u5143\u7d20\u65f6\uff0c\u8bf7\u4f7f\u7528 push \u65b9\u6cd5"),l.a.createElement(r["a"],{code:"const items = []// baditems[items.length] = 'test'// gooditems.push('test')",lang:"unknown"}),l.a.createElement("p",null,"\u4f7f\u7528\u62d3\u5c55\u8fd0\u7b97\u7b26 ... \u590d\u5236\u6570\u7ec4"),l.a.createElement(r["a"],{code:"// badconst items = []const itemsCopy = []const len = items.lengthlet i// badfor (i = 0; i < len; i++) {  itemsCopy[i] = items[i]}// gooditemsCopy = [...items]",lang:"unknown"}),l.a.createElement("p",null,"\u4f7f\u7528\u6570\u7ec4\u7684 map \u7b49\u65b9\u6cd5\u65f6\uff0c\u8bf7\u4f7f\u7528 return \u58f0\u660e\uff0c\u5982\u679c\u662f\u5355\u4e00\u58f0\u660e\u8bed\u53e5\u7684\u60c5\u51b5\uff0c\u53ef\u7701\u7565 return"),l.a.createElement(r["a"],{code:"// good[1, 2, 3].map(x => {  const y = x + 1  return x * y})// good[1, 2, 3].map(x => x + 1)// badconst flat = {}[[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {  const flatten = memo.concat(item)  flat[index] = flatten})// goodconst flat = {}[[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {  const flatten = memo.concat(item)  flat[index] = flatten  return flatten})// badinbox.filter((msg) => {  const { subject, author } = msg  if (subject === 'Mockingbird') {    return author === 'Harper Lee'  } else {    return false  }})// goodinbox.filter((msg) => {  const { subject, author } = msg  if (subject === 'Mockingbird') {    return author === 'Harper Lee'  }  return false})",lang:"unknown"}),l.a.createElement("p",null,"\u7528\u5b57\u9762\u91cf\u521b\u5efa\u6570\u7ec4\uff1b \u4f7f\u7528\u6269\u5c55\u8fd0\u7b97\u7b26\u8fdb\u884c\u6570\u7ec4\u8f6c\u6362\u6216\u6570\u7ec4\u590d\u5236\uff1b \u4f7f\u7528\u89e3\u6784\u83b7\u53d6\u548c\u64cd\u4f5c\u6570\u7ec4\u5143\u7d20\uff1b \u4f7f\u7528map\\filter\\forEach\\reduce\u6765\u904d\u5386\uff1b \u4f7f\u7528find\\findIndex\\includes\u6765\u68c0\u7d22\uff1b \u4f7f\u7528concat\\slice\\splice\\copyWithin\u6765\u622a\u5207\u548c\u62fc\u63a5\u6570\u7ec4\uff1b \u4f7f\u7528push\\pop\\shift\\unshift\u6765\u6267\u884c\u961f\u5217\u65b9\u6cd5"),l.a.createElement("p",null,"// \u5b57\u9762\u91cf\u521b\u5efa\u6570\u7ec4"),l.a.createElement(r["a"],{code:"let arr = [1, 2, 3, 4, 5];",lang:"unknown"}),l.a.createElement("p",null,"// \u6269\u5c55\u8fd0\u7b97\u7b26\uff0c\u6570\u7ec4\u590d\u5236"),l.a.createElement(r["a"],{code:"let arrSpec = [...arr];",lang:"unknown"}),l.a.createElement("p",null,"// \u89e3\u6784\u83b7\u53d6\u6570\u7ec4\u5143\u7d20\u5185\u5bb9"),l.a.createElement(r["a"],{code:"let [x, ...other] = arr;",lang:"unknown"}),l.a.createElement("p",null,"\u89e3\u6784\u8d4b\u503c \u5f53\u9700\u8981\u4f7f\u7528\u5bf9\u8c61\u7684\u591a\u4e2a\u5c5e\u6027\u65f6\uff0c\u8bf7\u4f7f\u7528\u89e3\u6784\u8d4b\u503c"),l.a.createElement(r["a"],{code:"// badfunction getFullName (user) {  const firstName = user.firstName  const lastName = user.lastName  return `${firstName} ${lastName}`}// goodfunction getFullName (user) {  const { firstName, lastName } = user  return `${firstName} ${lastName}`}// betterfunction getFullName ({ firstName, lastName }) {  return `${firstName} ${lastName}`}",lang:"unknown"}),l.a.createElement("p",null,"\u5f53\u9700\u8981\u4f7f\u7528\u6570\u7ec4\u7684\u591a\u4e2a\u503c\u65f6\uff0c\u8bf7\u540c\u6837\u4f7f\u7528\u89e3\u6784\u8d4b\u503c"),l.a.createElement(r["a"],{code:"const arr = [1, 2, 3, 4]// badconst first = arr[0]const second = arr[1]// goodconst [first, second] = arr",lang:"unknown"}),l.a.createElement("p",null,"\u51fd\u6570\u9700\u8981\u56de\u4f20\u591a\u4e2a\u503c\u65f6\uff0c\u8bf7\u4f7f\u7528\u5bf9\u8c61\u7684\u89e3\u6784\uff0c\u800c\u4e0d\u662f\u6570\u7ec4\u7684\u89e3\u6784"),l.a.createElement(r["a"],{code:"// badfunction doSomething () {  return [top, right, bottom, left]}// \u5982\u679c\u662f\u6570\u7ec4\u89e3\u6784\uff0c\u90a3\u4e48\u5728\u8c03\u7528\u65f6\u5c31\u9700\u8981\u8003\u8651\u6570\u636e\u7684\u987a\u5e8fconst [top, xx, xxx, left] = doSomething()// goodfunction doSomething () {  return { top, right, bottom, left }}// \u6b64\u65f6\u4e0d\u9700\u8981\u8003\u8651\u6570\u636e\u7684\u987a\u5e8fconst { top, left } = doSomething()",lang:"unknown"}),l.a.createElement("h3",{id:"\u5b57\u7b26\u4e32"},l.a.createElement(o["AnchorLink"],{to:"#\u5b57\u7b26\u4e32","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5b57\u7b26\u4e32"),l.a.createElement("p",null,"\u5b57\u7b26\u4e32\u7edf\u4e00\u4f7f\u7528\u5355\u5f15\u53f7\u7684\u5f62\u5f0f ''"),l.a.createElement(r["a"],{code:"// badconst department = \"JDC\"// goodconst department = 'JDC'\n\u5b57\u7b26\u4e32\u592a\u957f\u7684\u65f6\u5019\uff0c\u8bf7\u4e0d\u8981\u4f7f\u7528\u5b57\u7b26\u4e32\u8fde\u63a5\u7b26\u6362\u884c \\\uff0c\u800c\u662f\u4f7f\u7528 +\nconst str = '\u51f9\u51f8\u5b9e\u9a8c\u5ba4 \u51f9\u51f8\u5b9e\u9a8c\u5ba4 \u51f9\u51f8\u5b9e\u9a8c\u5ba4' +  '\u51f9\u51f8\u5b9e\u9a8c\u5ba4 \u51f9\u51f8\u5b9e\u9a8c\u5ba4 \u51f9\u51f8\u5b9e\u9a8c\u5ba4' +  '\u51f9\u51f8\u5b9e\u9a8c\u5ba4 \u51f9\u51f8\u5b9e\u9a8c\u5ba4'\n\u7a0b\u5e8f\u5316\u751f\u6210\u5b57\u7b26\u4e32\u65f6\uff0c\u8bf7\u4f7f\u7528\u6a21\u677f\u5b57\u7b26\u4e32\nconst test = 'test'// badconst str = ['a', 'b', test].join()// badconst str = 'a' + 'b' + test// goodconst str = `ab${test}`",lang:"unknown"}),l.a.createElement("h3",{id:"\u51fd\u6570"},l.a.createElement(o["AnchorLink"],{to:"#\u51fd\u6570","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u51fd\u6570"),l.a.createElement("p",null,"\u8bf7\u4f7f\u7528\u51fd\u6570\u58f0\u660e\uff0c\u800c\u4e0d\u662f\u51fd\u6570\u8868\u8fbe\u5f0f"),l.a.createElement(r["a"],{code:"// badconst foo = function () {  // do something}// goodfunction foo () {  // do something}",lang:"unknown"}),l.a.createElement("p",null,"\u4e0d\u8981\u5728\u975e\u51fd\u6570\u4ee3\u7801\u5757\u4e2d\u58f0\u660e\u51fd\u6570"),l.a.createElement(r["a"],{code:"// badif (isUse) {  function test () {    // do something  }}// goodlet testif (isUse) {  test = () => {    // do something  }}",lang:"unknown"}),l.a.createElement("p",null,"\u4e0d\u8981\u4f7f\u7528 arguments\uff0c\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528 ... arguments \u53ea\u662f\u4e00\u4e2a\u7c7b\u6570\u7ec4\uff0c\u800c ... \u662f\u4e00\u4e2a\u771f\u6b63\u7684\u6570\u7ec4"),l.a.createElement(r["a"],{code:"// badfunction test () {  const args = Array.prototype.slice.call(arguments)  return args.join('')}// goodfunction test (...args) {  return args.join('')}",lang:"unknown"}),l.a.createElement("p",null,"\u4e0d\u8981\u66f4\u6539\u51fd\u6570\u53c2\u6570\u7684\u503c"),l.a.createElement(r["a"],{code:"// badfunction test (opts) {  opts = opts || {}}// goodfunction test (opts = {}) {  // ...}",lang:"unknown"}),l.a.createElement("h3",{id:"\u539f\u578b"},l.a.createElement(o["AnchorLink"],{to:"#\u539f\u578b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u539f\u578b"),l.a.createElement("p",null,"\u4f7f\u7528 class\uff0c\u907f\u514d\u76f4\u63a5\u64cd\u4f5c prototype"),l.a.createElement(r["a"],{code:"// badfunction Queue (contents = []) {  this._queue = [..contents]}Queue.prototype.pop = function () {  const value = this._queue[0]  this._queue.splice(0, 1)  return value}// goodclass Queue {  constructor (contents = []) {    this._queue = [...contents]  }  pop () {    const value = this._queue[0]    this._queue.splice(0, 1)    return value  }}",lang:"unknown"}),l.a.createElement("p",null,"\u6a21\u5757 \u4f7f\u7528\u6807\u51c6\u7684 ES6 \u6a21\u5757\u8bed\u6cd5 import \u548c export // badconst util = require('./util')module.exports = util// goodimport Util from './util'export default Util// betterimport ","{"," Util ","}"," from './util'export default Util // badimport * as Util from './util'// goodimport Util from './util' \u8fed\u4ee3\u5668 \u4e0d\u8981\u4f7f\u7528 iterators"),l.a.createElement(r["a"],{code:"const numbers = [1, 2, 3, 4, 5]// badlet sum = 0for (let num of numbers) {  sum += num}// goodlet sum = 0numbers.forEach(num => sum += num)// betterconst sum = numbers.reduce((total, num) => total + num, 0)",lang:"unknown"}),l.a.createElement("p",null,"\u4f7f\u7528 . \u6765\u8bbf\u95ee\u5bf9\u8c61\u5c5e\u6027"),l.a.createElement(r["a"],{code:"const joke = {  name: 'haha',  age: 28}// badconst name = joke['name']// goodconst name = joke.name",lang:"unknown"}),l.a.createElement("p",null,"\u53d8\u91cf\u58f0\u660e \u58f0\u660e\u53d8\u91cf\u65f6\uff0c\u8bf7\u4f7f\u7528 const\u3001let \u5173\u952e\u5b57\uff0c\u5982\u679c\u6ca1\u6709\u5199\u5173\u952e\u5b57\uff0c\u53d8\u91cf\u5c31\u4f1a\u66b4\u9732\u5728\u5168\u5c40\u4e0a\u4e0b\u6587\u4e2d\uff0c\u8fd9\u6837\u5f88\u53ef\u80fd\u4f1a\u548c\u73b0\u6709\u53d8\u91cf\u51b2\u7a81\uff0c\u53e6\u5916\uff0c\u4e5f\u5f88\u96be\u660e\u786e\u8be5\u53d8\u91cf\u7684\u4f5c\u7528\u57df\u662f\u4ec0\u4e48\u3002\u8fd9\u91cc\u63a8\u8350\u4f7f\u7528 const \u6765\u58f0\u660e\u53d8\u91cf\uff0c\u6211\u4eec\u9700\u8981\u907f\u514d\u5168\u5c40\u547d\u540d\u7a7a\u95f4\u7684\u6c61\u67d3\u3002"),l.a.createElement(r["a"],{code:"// baddemo = new Demo()// goodconst demo = new Demo()",lang:"unknown"}),l.a.createElement("p",null,"\u5c06\u6240\u6709\u7684 const \u548c let \u5206\u7ec4"),l.a.createElement(r["a"],{code:"// badlet aconst blet cconst dlet e// goodconst bconst dlet alet clet e",lang:"unknown"}),l.a.createElement("p",null,"Hoisting var \u5b58\u5728\u53d8\u91cf\u63d0\u5347\u7684\u60c5\u51b5\uff0c\u5373 var \u58f0\u660e\u4f1a\u88ab\u63d0\u5347\u81f3\u8be5\u4f5c\u7528\u57df\u7684\u9876\u90e8\uff0c\u4f46\u662f\u4ed6\u4eec\u7684\u8d4b\u503c\u5e76\u4e0d\u4f1a\u3002\u800c const \u548c let \u5e76\u4e0d\u5b58\u5728\u8fd9\u79cd\u60c5\u51b5\uff0c\u4ed6\u4eec\u88ab\u8d4b\u4e88\u4e86 Temporal Dead Zones, TDZ"),l.a.createElement(r["a"],{code:"function example () {  console.log(notDefined)   // => throws a ReferenceError}function example () {  console.log(declareButNotAssigned)  // => undefined  var declaredButNotAssigned = true}function example () {  let declaredButNotAssigned  console.log(declaredButNotAssigned)   // => undefined  declaredButNotAssigned = true}function example () {  console.log(declaredButNotAssigned)   // => throws a ReferenceError  console.log(typeof declaredButNotAssigned)  // => throws a ReferenceError  const declaredButNotAssigned = true}",lang:"unknown"}),l.a.createElement("p",null,"\u533f\u540d\u51fd\u6570\u7684\u53d8\u91cf\u540d\u4f1a\u63d0\u5347\uff0c\u4f46\u51fd\u6570\u5185\u5bb9\u4e0d\u4f1a"),l.a.createElement(r["a"],{code:"function example () {  console.log(anonymous)  // => undefined  anonymous()  var anonymous = function () {    console.log('test')  }}\n\u547d\u540d\u7684\u51fd\u6570\u8868\u8fbe\u5f0f\u7684\u53d8\u91cf\u540d\u4f1a\u88ab\u63d0\u5347\uff0c\u4f46\u51fd\u6570\u540d\u548c\u51fd\u6570\u51fd\u6570\u5185\u5bb9\u5e76\u4e0d\u4f1a\nfunction example() {  console.log(named)  // => undefined  named()   // => TypeError named is not a function  superPower()  // => ReferenceError superPower is not defined  var named = function superPower () {    console.log('Flying')  }}function example() {  console.log(named)  // => undefined  named()   // => TypeError named is not a function  var named = function named () {    console.log('named')  }}",lang:"unknown"}),l.a.createElement("p",null,"\u5728\u975e\u7a7a\u6587\u4ef6\u4e2d\uff0c\u5b58\u5728\u62d6\u5c3e\u6362\u884c\u662f\u4e00\u4e2a\u5e38\u89c1\u7684 UNIX \u98ce\u683c\uff0c\u5b83\u7684\u597d\u5904\u662f\u53ef\u4ee5\u65b9\u4fbf\u5728\u4e32\u8054\u548c\u8ffd\u52a0\u6587\u4ef6\u65f6\u4e0d\u4f1a\u6253\u65ad Shell \u7684\u63d0\u793a\u3002\u5728\u65e5\u5e38\u7684\u9879\u76ee\u4e2d\uff0c\u4fdd\u7559\u62d6\u5c3e\u6362\u884c\u7684\u597d\u5904\u662f\uff0c\u53ef\u4ee5\u51cf\u5c11\u7248\u672c\u63a7\u5236\u65f6\u7684\u4ee3\u7801\u51b2\u7a81\u3002"),l.a.createElement(r["a"],{code:"\u4e0d\u63a8\u8350\nfunction func () {  // do something}\n\u63a8\u8350\nfunction func () {  // do something}  // \u6b64\u5904\u662f\u65b0\u7684\u4e00\u884c",lang:"unknown"}),l.a.createElement("p",null,"\u53ef\u4ee5\u901a\u8fc7 .editorconfig \u6dfb\u52a0 EOL \u51fd\u6570\u8c03\u7528 \u4e3a\u4e86\u907f\u514d\u8bed\u6cd5\u9519\u8bef\uff0c\u56e2\u961f\u7ea6\u5b9a\u5728\u51fd\u6570\u8c03\u7528\u65f6\uff0c\u7981\u6b62\u4f7f\u7528\u7a7a\u683c"),l.a.createElement(r["a"],{code:"\u4e0d\u63a8\u8350\nfn ()fn()\n\u63a8\u8350\nfn()",lang:"unknown"}),l.a.createElement("p",null,"\u7f29\u8fdb \u4ee3\u7801\u4fdd\u6301\u4e00\u81f4\u7684\u7f29\u8fdb\uff0c\u662f\u4f5c\u4e3a\u5de5\u7a0b\u5e08\u7684\u804c\u4e1a\u7d20\u517b\u3002\u4f46\u7f29\u8fdb\u7528\u4e24\u4e2a\u7a7a\u683c\uff0c\u8fd8\u662f\u56db\u4e2a\u7a7a\u683c\uff0c\u662f\u7528 Tab \u8fd8\u662f\u7a7a\u683c\u5462\uff1f\u8fd9\u6837\u7684\u4e89\u8bba\u592a\u591a\u4e86\uff0c\u4e5f\u5f97\u4e0d\u51fa\u7b54\u6848\u3002\u672c\u89c4\u8303\u7ed3\u5408\u4e86\u5e02\u9762\u4e0a\u4f18\u79c0\u7684\u5f00\u6e90\u9879\u76ee\uff0c\u59d1\u4e14\u7ea6\u5b9a\u4f7f\u7528 \u7a7a\u683c \u6765\u7f29\u8fdb\uff0c\u800c\u4e14\u7f29\u8fdb\u4f7f\u7528\u4e24\u4e2a\u7a7a\u683c\u3002 \u90a3\u662f\u4e0d\u662f\u4e0d\u80fd\u4f7f\u7528 Tab \u8fdb\u884c\u7f29\u8fdb\u4e86\uff1f\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e .editorconfig \uff0c\u5c06 Tab \u81ea\u52a8\u8f6c\u6362\u4e3a\u7a7a\u683c\u3002 \u56e2\u961f\u7ea6\u5b9a\u5bf9\u8c61\u5b57\u9762\u91cf\u7684\u952e\u548c\u503c\u4e4b\u95f4\u4e0d\u80fd\u5b58\u5728\u7a7a\u683c\uff0c\u4e14\u8981\u6c42\u5bf9\u8c61\u5b57\u9762\u91cf\u7684\u5192\u53f7\u548c\u503c\u4e4b\u95f4\u5b58\u5728\u4e00\u4e2a\u7a7a\u683c"),l.a.createElement(r["a"],{code:"\u4e0d\u63a8\u8350\nvar obj = { 'foo' : 'haha' }\n\u63a8\u8350\nvar obj = { 'foo': 'haha' }",lang:"unknown"}),l.a.createElement("p",null,"\u539f\u5219\u4e0a\u8868\u8fbe\u5f0f\u90fd\u5fc5\u987b\u4ee5\u5206\u53f7\u4f5c\u4e3a\u7ed3\u5c3e\uff0c\u5177\u4f53\u5305\u62ec:"),l.a.createElement("p",null,"\u53d8\u91cf\u58f0\u660e \u8868\u8fbe\u5f0f return throw break continue do-while \u95ed\u5305"),l.a.createElement("p",null,"\u6807\u51c6\u7279\u6027 \u4e3a\u4e86\u4ee3\u7801\u7684\u53ef\u79fb\u690d\u6027\u548c\u517c\u5bb9\u6027\uff0c\u6211\u4eec\u5e94\u8be5\u6700\u5927\u5316\u7684\u4f7f\u7528\u6807\u51c6\u65b9\u6cd5\uff0c\u4f8b\u5982\u4f18\u5148\u4f7f\u7528 string.charAt(3) \u800c\u4e0d\u662f string[3]"),l.a.createElement(r["a"],{code:"eval()",lang:"unknown"}),l.a.createElement("p",null,"\u7531\u4e8e eval \u65b9\u6cd5\u6bd4\u8f83 evil\uff0c\u6240\u4ee5\u6211\u4eec\u7ea6\u5b9a\u7981\u6b62\u4f7f\u7528\u8be5\u65b9\u6cd5"),l.a.createElement(r["a"],{code:"with() {}",lang:"unknown"}),l.a.createElement("p",null,"\u7531\u4e8e with \u65b9\u6cd5\u4f1a\u4ea7\u751f\u795e\u5947\u7684\u4f5c\u7528\u57df\uff0c\u6240\u4ee5\u6211\u4eec\u4e5f\u662f\u7981\u6b62\u4f7f\u7528\u8be5\u65b9\u6cd5\u7684 for-in \u5faa\u73af \u63a8\u8350\u4f7f\u7528 for in \u8bed\u6cd5\uff0c\u4f46\u662f\u5728\u5bf9\u5bf9\u8c61\u8fdb\u884c\u64cd\u4f5c\u65f6\uff0c\u5bb9\u6613\u5fd8\u4e86\u68c0\u6d4b hasOwnProperty(key)\uff0c\u6240\u4ee5\u6211\u4eec\u542f\u7528\u4e86 ESLint \u7684 guard-for-in \u9009\u9879 \u5bf9\u6570\u7ec4\u8fdb\u884c for in \u7684\u65f6\u5019\uff0c\u987a\u5e8f\u662f\u4e0d\u56fa\u5b9a\u7684 \u5faa\u73af\u4ee5\u53ca\u6761\u4ef6\u5224\u65ad"),l.a.createElement("p",null,"\u80fd\u4f7f\u7528\u5bf9\u8c61\u3001\u6570\u7ec4\u3001\u5b57\u7b26\u4e32\u6240\u62e5\u6709\u7684\u9ed8\u8ba4\u904d\u5386\u51fd\u6570\u89e3\u51b3\u7684\u95ee\u9898\uff0c\u5c3d\u91cf\u4e0d\u8981\u4f7f\u7528\u5faa\u73af\u4ee5\u53ca\u6761\u4ef6\u5224\u65ad\u8bed\u53e5\uff1b \u5bf9\u4e8e\u8d85\u8fc73\u4e2a\u4ee5\u4e0a\u7684if - else if - else\u8bed\u53e5\uff0c\u4f7f\u7528switch case\u6765\u66ff\u4ee3\uff1b \u907f\u514d\u51fa\u73b0\u6b7b\u5faa\u73af"),l.a.createElement(r["a"],{code:"let arr = [1, 2, 3];\nfor (let i = 0; i < arr.length; i++) {\n    console.log(i);\n}\n// \u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u6570\u7ec4\u9ed8\u8ba4\u904d\u5386\u65b9\u6cd5\narr.forEach((item) => {console.log(item)})\uff1b\n\nif (color === 'green') {\n    ...    \n} else if (color === 'red') {\n    ...\n} else if (color === 'blue') {\n    ...\n}\n\n// \u53ef\u4ee5\u5199\u6210\nswitch(color) {\n    case 'green':\n        ...\n        break;\n    case 'red'\n        ...\n        break;\n    case 'blue':\n        ...\n        break;\n    ...\n}",lang:"unknown"}),l.a.createElement("p",null,"ES6\u6a21\u5757"),l.a.createElement("p",null,"\u4f7f\u7528export\u548cimport\u5bfc\u51fa\u548c\u5f15\u5165\u6a21\u5757 export default\u547d\u4ee4\u6765\u5bfc\u51fa\u9ed8\u8ba4\u6a21\u5757 import ... as \u6765\u5bf9\u6a21\u5757\u8fdb\u884c\u91cd\u547d\u540d"),l.a.createElement("p",null,"Map\u4e0eSet"),l.a.createElement("p",null,"\u4f7f\u7528Map\u6765\u7ba1\u7406\u952e\u4e3a\u5bf9\u8c61\u7684\u5b57\u5178\uff1b \u4f7f\u7528Set\u6765\u505a\u96c6\u5408\u76f8\u5173\u7684\u64cd\u4f5c"),l.a.createElement("p",null,"Async\u4e0eAwait"),l.a.createElement("p",null,"\u8be5\u7279\u6027\u662fES7\u5b9a\u4e49\u7684\u76f8\u5173\u89c4\u8303\uff0c\u76ee\u524dbabel\u8f6c\u7801\u5668\u5df2\u7ecf\u652f\u6301\u5c06\u5176\u8f6c\u4e3aco\u6a21\u5757\u8fd0\u884c\u3002\u5927\u90e8\u5206\u524d\u7aef\u7684\u5f02\u6b65\u4efb\u52a1\u90fd\u6709\u5bf9\u5e94\u7684Promise\u5c01\u88c5\u6a21\u5f0f\uff0c\u914d\u5408async\u4e0eawait\u53ef\u4ee5\u66f4\u597d\u7684\u5904\u7406\u903b\u8f91\u4e4b\u95f4\u7684\u56de\u8c03\u5173\u7cfb\u4e0e\u9519\u8bef\u5904\u7406\uff0c\u5efa\u8bae\u5927\u5bb6\u591a\u4f7f\u7528\u5b83\u4eec\u6765\u7ba1\u7406\u5f02\u6b65\u8c03\u7528api\u3002\u67d0\u4e9b\u9ed8\u8ba4\u4e0d\u63d0\u4f9bPromise\u5c01\u88c5\u7684\u63a5\u53e3\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u624b\u52a8\u5c01\u88c5\u63a5\u53e3\u8fd4\u56dePromise\u5bf9\u8c61\u6765\u4f7f\u7528\u8be5\u7279\u6027\u3002"),l.a.createElement(r["a"],{code:"import $ from 'jquery'\n\nfunction async api() {\n    try {\n        let res = await $.ajax({\n            url: '...',\n            type: 'POST',\n            ...\n        });\n        console.log(res);\n    } catch(e) {\n        console.log(e);\n    }\n}",lang:"unknown"}),l.a.createElement("p",null,"\u4fee\u6539\u5185\u7f6e\u5bf9\u8c61\u7684\u539f\u578b \u4e0d\u8981\u4fee\u6539\u5185\u7f6e\u5bf9\u8c61\uff0c\u5982 Object \u548c Array")))}},JjdP:function(e,n,t){"use strict";t.r(n),n["default"]={}},MZF8:function(e,n,t){"use strict";var a=t("ogwx");t.d(n,"a",(function(){return a["b"]}));var l=t("VCU9");t.d(n,"b",(function(){return l["a"]}))},Zs1V:function(e){e.exports=JSON.parse("{}")}}]);