# 中大活动-小程序端说明

## 文件结构
typings.json, typings/, jsconfig.json是vscode的插件支持

./image/ : 存放所有的图片，主要是指icon
./pages/ : 所有的页面都在pages里
./pages/posterwall/ 海报墙
./pages/discussion/ 讨论区
./pages/myaccount/ 我的

./pages/index : 用于测试，创建工程时自动生成的页面，显示userInfo
./pages/logs : 用于测试，创建工程时自动生成的页面，启动日志

## 命名
（不严格，但基本按以下规则）
与海报墙有关的，均以`poster`,`event`命名
与讨论区有关的，帖子为`post`,`discussion`，评论为`comment`
与我的相关的，命名都与`currentUser`有关

## 数据传输
目前的设计思路是所有的网络请求都由App实例去做。
当打开某页面时（非上拉加载更多），先看App实例里是否有数据，有则直接获取，否则请求服务端获取数据。然后将请求得到的数据存入App实例中，同时传入回调来setData。
```javascript
var app = getApp();
Page({
	//...
	onLoad: function() {
		app.getPosters(
			function(postersData) {
				// setData
			},
			function(errMsg) {
				// ...
			}
		)
	}
})
```

## 具体内容部分
### 海报墙
#### 校区、类型选择
校区包含东校区，南校区，北校区，珠海校区，分别以1,2,3,4表示
类型包含体育，公益，比赛，讲座，演出，户外，休闲，分别以数字1-7表示

#### 详情页
上面的图是活动的背景图
第二个图（葛平老师）是放二维码的地方
底部报名按钮分4种形态（status code不同形态不同）： 0-可以报名 1-该用户已报名 2-人数已满 3-已过截止日期

### 我的消息
活动消息和帖子回复，点击之后可以到达对应的活动/帖子页面，消息中有对应的`relatedPosterId`, `relatedPostId`, `relatedCommentId` 属性，本意是对应过去，不过评论部分我直接自己写了几行，并没有截取实际的评论（自造）数据中的评论

