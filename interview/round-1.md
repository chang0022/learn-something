A:
```
var z = 10;
function foo(){
  console.log(z);
}
(function(funArg){
  var z = 20;
  funArg();
})(foo);
```
Q: `10`

A:
```
var data = [];
for(var k = 0; k < 3; k++){
  data[k] = function(){
    console.log(k);
  };
}
data[0]();
data[1]();
data[2]();
```
Q: 3 3 3

A: 
```
假设现有一篇文章，var content = "...大量文字"，
文章中关键字,如 ["系统","部门","Web"] 等内容，
并将关键字背景设置为红色或者改变字体颜色并标示出来
```
Q: 
```
var content = 'xxx';
var keys = ['x', 'x', 'x'];
function sensitiveWords(words, key) {
  var r = new RegExp(key,"g");
  return words.replace(r, '<span class="key">' + key + '</span>')
}
keys.forEach(function (v) {
  content = sensitiveWords(content, v);
});
```
A:
```
jQuery 中 $fn.extend 函数的实现
```
A:
```
设计基于观察者模式的事件绑定机制
```