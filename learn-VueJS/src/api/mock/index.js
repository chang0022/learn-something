/**
 * Created by Neo on 2017/4/12.
 */
import Mock from 'mockjs'

Mock.mock(/\/api\/news\/detail(\?newsId=\d+)?/, {
  'title'     : '@cname',
  'pubtime': '@datetime',
  'desc'    : '@cparagraph'
});
