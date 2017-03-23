A:
```
列出 display 的值，并说明他们的作用
```
Q:
```
none：隐藏对象。与visibility属性的hidden值不同，其不为被隐藏的对象保留其物理空间
inline：指定对象为内联元素。
block：指定对象为块元素。
list-item：指定对象为列表项目。
inline-block：指定对象为内联块元素。（CSS2）
table：指定对象作为块元素级的表格。类同于html标签<table>（CSS2）
inline-table：指定对象作为内联元素级的表格。类同于html标签<table>（CSS2）
table-caption：指定对象作为表格标题。类同于html标签<caption>（CSS2）
table-cell：指定对象作为表格单元格。类同于html标签<td>（CSS2）
table-row：指定对象作为表格行。类同于html标签<tr>（CSS2）
table-row-group：指定对象作为表格行组。类同于html标签<tbody>（CSS2）
table-column：指定对象作为表格列。类同于html标签<col>（CSS2）
table-column-group：指定对象作为表格列组显示。类同于html标签<colgroup>（CSS2）
table-header-group：指定对象作为表格标题组。类同于html标签<thead>（CSS2）
table-footer-group：指定对象作为表格脚注组。类同于html标签<tfoot>（CSS2）
run-in：根据上下文决定对象是内联对象还是块级对象。（CSS3）
box：将对象作为弹性伸缩盒显示。（伸缩盒最老版本）（CSS3）
inline-box：将对象作为内联块级弹性伸缩盒显示。（伸缩盒最老版本）（CSS3）
flexbox：将对象作为弹性伸缩盒显示。（伸缩盒过渡版本）（CSS3）
inline-flexbox：将对象作为内联块级弹性伸缩盒显示。（伸缩盒过渡版本）（CSS3）
flex：将对象作为弹性伸缩盒显示。（伸缩盒最新版本）（CSS3）
inline-flex：将对象作为内联块级弹性伸缩盒显示。（伸缩盒最新版本）（CSS3）
```
A:
```
position 中，relative 和 absolute 的区别，包括使用时的注意事项和定位原点
```
Q:
```
static：对象遵循常规流。此时4个定位偏移属性不会被应用。
relative：对象遵循常规流，并且参照自身在常规流中的位置通过top，right，bottom，left这4个定位偏移属性进行偏移时不会影响常规流中的任何元素。
absolute：对象脱离常规流，此时偏移属性参照的是离自身最近的定位祖先元素，如果没有定位的祖先元素，则一直回溯到窗口。盒子的偏移位置不影响常规流中的任何元素，其margin不与其他任何margin折叠。
fixed：与absolute一致，但偏移定位是以窗口为参考。当出现滚动条时，对象不会随着滚动。
center：与absolute一致，但偏移定位是以定位祖先元素的中心点为参考。盒子在其包含容器垂直水平居中。（CSS3）
page：与absolute一致。元素在分页媒体或者区域块内，元素的包含块始终是初始包含块，否则取决于每个absolute模式。（CSS3）
sticky：对象在常态时遵循常规流。它就像是relative和fixed的合体，当在屏幕中时按常规流排版，当卷动到屏幕外时则表现如fixed。该属性的表现是现实中你见到的吸附效果。（CSS3）
```
A:
```
CSS 选择符有哪些？哪些属性可以继承？优先级算法如何计算？CSS 3 新增的伪类有哪些？
```
A:
```
CSS 3 有哪些新特性？
```
A:
```
new 操作符具体做了什么？
```
Q:
```
var F=function(){
    //this指向谁，在定义时是不知道的
};
var p=new F;
```
（1）新建一个对象
`instance=new Object();`

（2）设置原型链
`instance.__proto__=F.prototype;`

（3）让F中的this指向instance，执行F的函数体

（4）判断F的返回值类型：

如果是值类型，就丢弃它，还是返回instance。
如果是引用类型，就返回这个引用类型的对象，替换掉instance。

> 知乎：https://www.zhihu.com/question/36440948

A:
```
function fun(n,o){
  console.log(o)
  return{
    fun:function(m){
      return fun(m,n);
    }
  };
}
var a = fun(0); a.fun(1); a.fun(2); a.fun(3);
var b = fun(0).fun(1).fun(2).fun(3);
var c = fun(0).fun(1); c.fun(2); c.fun(3);
```
Q:
```
var a = fun(0); // undefined
a.fun(1); // 0
a.fun(2); // 0
a.fun(3); // 0

var b = fun(0).fun(1).fun(2).fun(3);
//    undefined  0      1      2

var c = fun(0).fun(1);
//  undefined  0
c.fun(2);
// 1
c.fun(3);
// 1
```
A:
```
var a = 100;
function testResult(){
  // a 声明提前为 undefined
  var b = 2 * a;
  var a = 200;
  var c = a / 2;
  alert(b);
  alert(c);
}
testResult();
```
D: `NaN` `100`

A:
```
var a = 'AA';
function test(){
  alert(a);
  var a = "BB";
  alert(a);
}
test();
```
D: `undefined` `BB`