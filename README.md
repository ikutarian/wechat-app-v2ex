# wechat-app-v2ex

## API说明

* https://github.com/djyde/V2EX-API
* https://gist.github.com/fanzeyi/6951803
* https://www.v2ex.com/t/85402
* https://github.com/livid/v2ex/blob/master/api.py

### API请求次数限制

默认情况下，每个 IP 每小时可以发起的 API 请求数被限制在 120 次。可以在 API 返回结果的 HTTP  Header 中找到 Rate Limit 信息

```
X-Rate-Limit-Limit: 120
X-Rate-Limit-Reset: 1409479200
X-Rate-Limit-Remaining: 116
```

### 获取网站信息

```json
{
    "title" : "V2EX",
    "slogan" : "way to explore",
    "description" : "创意工作者们的社区",
    "domain" : "www.v2ex.com"
}
```

### 获取取网站状态

```json
{
    "topic_max" : 126172,
    "member_max" : 71033
}
```

对于能够被 CDN 缓存的 API 请求，只有第一次请求时，才会消耗 Rate Limit 配额。

### 热门主题

相当于首页右侧的 10 大每天的内容。

https://www.v2ex.com/api/topics/hot.json

### 最新主题

相当于首页的“全部”这个 tab 下的最新内容。

https://www.v2ex.com/api/topics/latest.json

### 节点信息

获得指定节点的名字，简介，URL 及头像图片的地址。

https://www.v2ex.com/api/nodes/show.json

Method: GET
Authentication: None
接受参数：

name: 节点名（V2EX 的节点名全是半角英文或者数字）
例如：

https://www.v2ex.com/api/nodes/show.json?name=python

### 用户主页

获得指定用户的自我介绍，及其登记的社交网站信息。

https://www.v2ex.com/api/members/show.json

Method: GET
Authentication: None
接受以下参数之一：

username: 用户名
id: 用户在 V2EX 的数字 ID
例如：

https://www.v2ex.com/api/members/show.json?username=Livid
https://www.v2ex.com/api/members/show.json?id=1

## 功能模块

* 最热
* 最新
* 节点

## 知识点

* css 的 flex 布局

## 参考demo

* https://github.com/search?q=v2ex+%E5%B0%8F%E7%A8%8B%E5%BA%8F&ref=opensearch
* https://github.com/newteo/team-blog-repo/issues/47
* http://blog.csdn.net/qq_32067045/article/details/54562302 他的博客里有很多小程序的文章
* http://blog.csdn.net/Mr_OOO/article/details/70196325
* https://www.zhihu.com/question/37208845 css能不能实现左边div固定宽度,右边div自适应撑满剩下的宽度?
* https://www.cnblogs.com/wxapp-union/p/6138830.html
* http://blog.csdn.net/qianqianstd/article/details/60609389
* https://www.cnblogs.com/sun8134/p/6395947.html
