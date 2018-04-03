// newpost.js
Page({

	/**
     * 页面的初始数据
     */
	data: {
		categoryItems: [
			{ value: 'teamwork', name: '组队', checked: 'true' },
			{ value: 'question', name: '问答' },
			{ value: 'share', name: '分享' }
		]
	},

	radioChange: function(e) {
		// console.log('radio发生change事件，携带value值为：', e.detail.value);

		var items = this.data.categoryItems;
		for (var i = 0, len = items.length; i < len; ++i) {
			items[i].checked = items[i].value == e.detail.value;
		}

		this.setData({
			items: items
		});
	},

	postButtonTap: function(e) {
		// console.log(e);
		// var categoryStr = e.detail.value.category;
		var content = e.detail.value.content;
		// console.log('发布新讨论，种类为', categoryStr, '内容：', content);

		// wx.request(), wx.showLoading(), wx.hideLoading(), 
		if (content == '') {
			return;
		}
		wx.showToast({
			title: '成功',
			duration: 2000,
			complete: function() {
				setTimeout(function() {
					wx.navigateBack({
						delta: 1, // 回退前 delta(默认为1) 页面
					});
				}, 2300);
			}
		});
	},

	/**
     * 生命周期函数--监听页面加载
     */
	onLoad: function() {

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