// myposts.js
var app = getApp();
Page({

	/**
     * 页面的初始数据
     */
	data: {
		categorySelVisible: false,
		categorySelector: {
			'teamwork': true,
			'question': false,
			'share': true
		},
		categorySel: [
			{ 'value': 'teamwork', 'name': '组队', 'checked': true },
			{ 'value': 'question', 'name': '问答', 'checked': false },
			{ 'value': 'share', 'name': '分享', 'checked': true }
		],
		category2Name: {
			teamwork: '组队',
			question: '问答',
			share: '分享'
		},
		myPosts: [{
			'postId': 'post1',
			'category': 'teamwork', // teamwork组队, question问答, share分享
			'user': {
				'userId': 'user1',
				'avatar': 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3851622717,1658245915&fm=27&gp=0.jpg',
				'nickname': '元元'
			},
			'postTime': [2017, 8, 11],
			'content': {
				'text': '我到河北省来求组队',
				'pics': [
					'http://pic.baike.soso.com/p/20130820/20130820111330-872590673.jpg',
					'http://pic0.qqmofasi.com/2014/06/05/42_g611Thc02dK20dERT12N_large.jpg'
				]
			},

			// 以下为详情页内的信息，主列表中要显示评论数(comments.length)
			'comments': [{
				'commentId': 'comment1',
				'user': {
					'userId': 'user2',
					'avatar': 'http://a3.att.hudong.com/71/09/01200000030965134373097057320_s.jpg',
					'nickname': '小黄'
				},
				'commentTime': [2017, 8, 12],
				'content': {
					'text': '必须录到圣诞'
				}
			},
			{
				'commentId': 'comment2',
				'user': {
					'userId': 'user3',
					'avatar': 'https://tse4.mm.bing.net/th?id=OIP.JM0jH2dnpD5y8b7dG3BN6wCWCW',
					'nickname': '醒哥'
				},
				'commentTime': [2017, 8, 13],
				'content': {
					'text': '梁非凡梁非凡梁非凡'
				}
			},
			{
				'commentId': 'comment1',
				'user': {
					'userId': 'user2',
					'avatar': 'http://a3.att.hudong.com/71/09/01200000030965134373097057320_s.jpg',
					'nickname': '小黄'
				},
				'commentTime': [2017, 8, 12],
				'content': {
					'text': '必须录到圣诞'
				}
			},
			{
				'commentId': 'comment2',
				'user': {
					'userId': 'user3',
					'avatar': 'https://tse4.mm.bing.net/th?id=OIP.JM0jH2dnpD5y8b7dG3BN6wCWCW',
					'nickname': '醒哥'
				},
				'commentTime': [2017, 8, 13],
				'content': {
					'text': '梁非凡梁非凡梁非凡'
				}
			},
			{
				'commentId': 'comment7',
				'user': {
					'userId': 'user2',
					'avatar': 'http://a3.att.hudong.com/71/09/01200000030965134373097057320_s.jpg',
					'nickname': '小黄'
				},
				'commentTime': [2017, 8, 12],
				'content': {
					'text': '必须录到圣诞'
				}
			},
			{
				'commentId': 'comment8',
				'user': {
					'userId': 'user3',
					'avatar': 'https://tse4.mm.bing.net/th?id=OIP.JM0jH2dnpD5y8b7dG3BN6wCWCW',
					'nickname': '醒哥'
				},
				'commentTime': [2017, 8, 13],
				'content': {
					'text': '梁非凡梁非凡梁非凡'
				}
			},
			{
				'commentId': 'comment9',
				'user': {
					'userId': 'user2',
					'avatar': 'http://a3.att.hudong.com/71/09/01200000030965134373097057320_s.jpg',
					'nickname': '小黄'
				},
				'commentTime': [2017, 8, 12],
				'content': {
					'text': '必须录到圣诞'
				}
			},
			{
				'commentId': 'comment10',
				'user': {
					'userId': 'user3',
					'avatar': 'https://tse4.mm.bing.net/th?id=OIP.JM0jH2dnpD5y8b7dG3BN6wCWCW',
					'nickname': '醒哥'
				},
				'commentTime': [2017, 8, 13],
				'content': {
					'text': '梁非凡梁非凡梁非凡'
				}
			}
			]
		},
		{
			'postId': 'post2',
			'category': 'question', // teamwork组队, question问答, share分享
			'user': {
				'userId': 'user1',
				'avatar': 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3851622717,1658245915&fm=27&gp=0.jpg',
				'nickname': '元首'
			},
			'postTime': [2017, 8, 11],
			'content': {
				'text': '我到河北省来参加问答节目',
				'pics': []
			},

			// 以下为详情页内的信息，主列表中要显示评论数(comments.length)
			'comments': [{
				'commentId': 'comment1',
				'user': {
					'userId': 'user2',
					'avatar': 'http://a3.att.hudong.com/71/09/01200000030965134373097057320_s.jpg',
					'nickname': '小黄'
				},
				'commentTime': [2017, 8, 12],
				'content': {
					'text': '必须录到圣诞'
				}
			},
			{
				'commentId': 'comment2',
				'user': {
					'userId': 'user3',
					'avatar': 'https://tse4.mm.bing.net/th?id=OIP.JM0jH2dnpD5y8b7dG3BN6wCWCW',
					'nickname': '醒哥'
				},
				'commentTime': [2017, 8, 13],
				'content': {
					'text': '梁非凡梁非凡梁非凡'
				}
			}
			]
		},
		{
			'postId': 'post3',
			'category': 'share', // teamwork组队, question问答, share分享
			'user': {
				'userId': 'user1',
				'avatar': 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3851622717,1658245915&fm=27&gp=0.jpg',
				'nickname': '愤怒的元首'
			},
			'postTime': [2017, 8, 11],
			'content': {
				'text': '我到河北省来分享汉语学习经验',
				'pics': [
					'http://pic0.qqmofasi.com/2014/06/05/42_g611Thc02dK20dERT12N_large.jpg'
				]
			},

			// 以下为详情页内的信息，主列表中要显示评论数(comments.length)
			'comments': [{
				'commentId': 'comment1',
				'user': {
					'userId': 'user2',
					'avatar': 'http://a3.att.hudong.com/71/09/01200000030965134373097057320_s.jpg',
					'nickname': '小黄'
				},
				'commentTime': [2017, 8, 12],
				'content': {
					'text': '必须录到圣诞'
				}
			},
			{
				'commentId': 'comment2',
				'user': {
					'userId': 'user3',
					'avatar': 'https://tse4.mm.bing.net/th?id=OIP.JM0jH2dnpD5y8b7dG3BN6wCWCW',
					'nickname': '醒哥'
				},
				'commentTime': [2017, 8, 13],
				'content': {
					'text': '梁非凡梁非凡梁非凡'
				}
			}
			]
		}
		]
	},

	categorySelMenuShow: function() {
		this.setData({
			categorySelVisible: !this.data.categorySelVisible,
		});
	},
	changeCategoryFilter: function(e) {
		// console.log('checkbox发生change事件，携带value值为：', e.detail.value);

		var categorySelItems = this.data.categorySel,
			values = e.detail.value;
		for (var i = 0, lenI = categorySelItems.length; i < lenI; ++i) {
			categorySelItems[i].checked = false;

			for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
				if (categorySelItems[i].value == values[j]) {
					categorySelItems[i].checked = true;
					break;
				}
			}
		}
		var categorySelectorItems = this.data.categorySelector;
		for (var key in categorySelectorItems) {
			for (var i = 0, lenI = categorySelItems.length; i < lenI; ++i) {
				if (categorySelItems[i].value == key) {
					categorySelectorItems[key] = categorySelItems[i].checked;
					break;
				}
			}
		}

		this.setData({
			categorySel: categorySelItems,
			categorySelector: categorySelectorItems
		});
	},

	postTap: function() {
		// console.log(e);
		var commentsUrl = '../../discussion/comments/comments?postId=' + e.currentTarget.dataset.postId;
		wx.navigateTo({
			url: commentsUrl
		});
	},

	/**
     * 生命周期函数--监听页面加载
     */
	onLoad: function() {
		var that = this;
		if (this.data.myPosts.length == 0) {
			app.getDiscussionPostsOfCurrentUser(
				function(postsData) {
					that.setData({
						myPosts: postsData
					});
				},
				function() {
					// console.log(errMsg);
				}
			);
		}
	},

	/**
     * 生命周期函数--监听页面初次渲染完成
     */
	onReady: function() {

	},

	/**
     * 生命周期函数--监听页面显示
     */
	onShow: function() {

	},

	/**
     * 生命周期函数--监听页面隐藏
     */
	onHide: function() {

	},

	/**
     * 生命周期函数--监听页面卸载
     */
	onUnload: function() {

	},

	/**
     * 页面相关事件处理函数--监听用户下拉动作
     */
	onPullDownRefresh: function() {

	},

	/**
     * 页面上拉触底事件的处理函数
     */
	onReachBottom: function() {

	},

	/**
     * 用户点击右上角分享
     */
	onShareAppMessage: function() {

	}
});