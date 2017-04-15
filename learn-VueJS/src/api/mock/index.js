/**
 * Created by Neo on 2017/4/12.
 */
import Mock from 'mockjs'

Mock.mock(/\/api\/news\/detail(\?newsId=\d+)?/, {
  'id': '@integer(1, 100)',
  'title': '@cname',
  'pubtime': '@datetime',
  'agree': '@integer(1, 100)',
  'desc': '@cparagraph'
});

Mock.mock(/\/api\/news\/lists/, {
  'array|5-10': [
    {'newsid': '@integer(1, 100)', 'pubtime': '@datetime', 'title': '@ctitle', 'desc': '@csentence', 'isDeleted': '@boolean'}
  ]
});

Mock.mock(/\/api\/news\/agree/, 'post', {
  'status': 'success',
  'agree': '@integer(100, 200)'
});
