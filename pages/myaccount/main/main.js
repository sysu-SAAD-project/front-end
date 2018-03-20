// main.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        motto: 'Hello World',
        userInfo: {},
        icons: [
            "../../../image/my/my_enroll.png",
            "../../../image/my/my_post.png",
            "../../../image/my/my_message.png"
        ]
    },
    //事件处理函数
    
    bindViewTap: function() {
        wx.navigateTo({
            url: '../../logs/logs'
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function() {
        console.log('onLoad')
        var that = this
            //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })
    },

    navToEnrollmentsTap: function() {
        wx.navigateTo({
            url: '../myenrollments/myenrollments'
        })
    },

    navToPostsTap: function() {
        wx.navigateTo({
            url: '../myposts/myposts'
        })
    },

    navToMessagesTap: function() {
        wx.navigateTo({
            url: '../mynotifications/mynotifications'
        })
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