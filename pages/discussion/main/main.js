// main.js
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
			'teamwork': '组队',
			'question': '问答',
			'share': '分享'
		},
		posts: []
	},
	postTap: function(e) {
		// console.log(e);
		var commentsUrl = '../comments/comments?postId=' + e.currentTarget.dataset.postId;
		wx.navigateTo({
			url: commentsUrl
		});
	},

	newpostButtonTap: function() {
		// console.log(e);
		wx.navigateTo({
			url: '../newpost/newpost',
		});
	},

	categorySelMenuShow: function () {
		this.setData({
			categorySelVisible: !this.data.categorySelVisible,
		});
	},
	changeCategoryFilter: function (e) {
		// console.log('checkbox发生change事件，携带value值为：', e.detail.value);

		var categorySelItems = this.data.categorySel, values = e.detail.value;
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

	/**
   * 生命周期函数--监听页面加载
   */
	onLoad: function () {
		var that = this;
		if (this.data.posts.length == 0) {
			app.getDiscussionPosts(
				function(postsData) {
					that.setData({
						posts: postsData
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
	onReady: function () {
  
	},

	/**
   * 生命周期函数--监听页面显示
   */
	onShow: function () {
  
	},

	/**
   * 生命周期函数--监听页面隐藏
   */
	onHide: function () {
  
	},

	/**
   * 生命周期函数--监听页面卸载
   */
	onUnload: function () {
  
	},

	/**
   * 页面相关事件处理函数--监听用户下拉动作
   */
	onPullDownRefresh: function () {
  
	},

	/**
   * 页面上拉触底事件的处理函数
   */
	onReachBottom: function () {
		var that = this;
		app.getMoreDiscussionPosts(
			function(nowPosts) {
				that.setData({
					posts: nowPosts
				});
			},
			function() {
				// console.log(errMsg);
			}
		);
	},

	/**
   * 用户点击右上角分享
   */
	onShareAppMessage: function () {
  
	}
});