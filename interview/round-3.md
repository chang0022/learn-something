A:
```
找出数组中重复出现过的元素
如： [1，2，4，4，3，3，1，5，3]
output: [1，3，4]
```
Q:
```
//时间复杂度：O(n^2),indexOf本身也消耗了O(n)的复杂度，空间复杂度：O(n)
function duplicate(arr) {
  var temp = [];
  var output = [];
  arr.forEach(function (v) {
    if( temp.indexOf(v) === -1) {
      temp.push(v)
    } else {
      output.push(v)
    }
  });
  return Array.from(new Set(output));
}

function duplicate(arr) {
  var output = [];
  arr.sort().sort(function (a, b) {
    if (a === b && output.indexOf(a) === -1) output.push(a);
  });
  return output;
}

function duplicate(arr){
  var output = [], hash = {};
  arr.map(function(num) {
    if(hash[num] === 1) output.push(num);
    hash[num] = (hash[num] || 0) + 1;
  }); 
  return output;
}

function duplicate(arr){
  return Array.from(new Set(arr.filter( (x, i, self) => self.indexOf(x) !== i)));
}
```
A:
```
给定一些文档（docs）、词（words），找出词在文档中全部存在的所有文档
var docs = [
  {
    id: 1,
    words: ['hello','world']
  },
  {
    id: 2,
    words: ['hello','kids']
  },
  {
    id: 3,
    words: ['zzzz','hello']
  },
  {
    id: 4,
    words: ['world','kids']
  }

];
findDocList(docs,['hello']) //文档1，文档2，文档3
findDocList(docs,['hello','world']) //文档1
```