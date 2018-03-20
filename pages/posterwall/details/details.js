// details.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentPoster: null,
        statusText: [
            "报名该活动",
            "您已报名",
            "报名人数已达上限",
            "已过报名截止时间"
        ]
    },
    enrollButtonTap: function(e) {
        console.log(e);
        var detailsUrl = '../enroll/enroll?posterId=' + e.currentTarget.dataset.posterId;
        wx.navigateTo({
            url: detailsUrl
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log(options)
        var that = this;
        app.getPosterById(options.posterId,
            function(thePoster) {
                that.setData({
                    currentPoster: thePoster
                })
            },
            function(errMsg) {
                console.log(errMsg);
            }
        )
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
})