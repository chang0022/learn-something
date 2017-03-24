A:
```
本地服务器为 172.16.2.30：8080/test/index.html
服务器地址为 172.16.3.30：8088/get/data，
请求方式为 ‘get’，data 为 '',请求成功时获取数据为
{
  "success"  : true,
  "message"  : "请求成功",
  "data"     : "Message",
  "code"     : 200
};
请写一段 JS 程序获取服务器地址上的数据， 如果解题需要用到 JS 库或者插件，请用 reqiure.js 在 题前引入
```
Q:
```
reqiure('jquery.js', function($) {
  $.ajax({
    url: '172.16.3.30：8088/get/data',
    type: 'GET',
    dataType: 'jsonp',
    success: function (data) {
      console.log(data);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(XMLHttpRequest, textStatus, errorThrown);
    }
  })
});
```