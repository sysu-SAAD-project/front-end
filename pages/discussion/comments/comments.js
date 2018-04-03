// comments.js
var app = getApp();
Page({

	/**
     * 页面的初始数据
     */
	data: {
		currentPost: null,
		category2Name: {
			teamwork: '组队',
			question: '问答',
			share: '分享'
		}
	},

	/**
     * 生命周期函数--监听页面加载
     */
	onLoad: function(options) {
		// console.log(options);

		var that = this;
		app.getDiscussionPostById(options.postId,
			function(thePost) {
				that.setData({
					currentPost: thePost
				});
			},
			function() {
				// console.log(errMsg);
			}
		);
	},

	commentButtonTap: function() {
		// console.log(e);
		// var commentContent = e.detail.value;
		// console.log(commentContent);
		// currentPost.comments.append(newComment)
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