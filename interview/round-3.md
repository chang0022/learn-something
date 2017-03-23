A:
```
找出数组中重复出现过的元素
如： [1，2，4，4，3，3，1，5，3]
output: [1，3，4]
```
A:
```
给定一些文档（docs）、词（words），找出词在文档中全部存在的所有文档
var docs = [
  {
    id: 1,
    words: ['hello',"world"]
  },
  {
    id: 2,
    words: ['hello',"kids"]
  },
  {
    id: 3,
    words: ['zzzz',"hello"]
  },
  {
    id: 4,
    words: ['world',"kids"]
  }

];
findDocList(docs,['hello']) //文档1，文档2，文档3
findDocList(docs,['hello','world']) //文档1
```