// details.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // currentPoster: null,
        statusText: [
            "报名该活动",
            "您已报名",
            "报名人数已达上限",
            "已过报名截止时间"
        ],
        currentPoster: {
          coverImageUrl: '../../../image/sysu-icon.jpeg',
          name: '第二届毽球团体赛+趣味挑战赛',
          tag: [
            '体育',
            '东校区'
          ],
          startTime: '5月25日19:00-21:00',
          location: '体育馆羽毛球场',
          enrollCondition: '全体在校生',
          sponsor: '中东毽球协会',

          // line
          introduction: '本项赛事是由中东毽球协会主办的趣味体育赛事，又好玩又有趣，参加即有体育章，欢迎大家踊跃报名',
          detail: '欢迎扫描下方二维码，关注“中东毽球协会”公众号了解活动详情。',
          QRcode: '../../../image/QRcode.png',

          // line
          reward: '参与即有5个体育章',
          requirement: '团体赛限3人组队，可加1人替补，限16队；趣味单人赛可以参与，需完成两个挑战，限100人。',
          enrollWay: '步骤一：打开网站（http://actplus.sysuactivity.com/X）或在“活动plus”小程序找到改活动进入报名界面。\n' + '步骤二：填写报名信息并提交。',
          enrollEndTime: '5月23日 23:59',

          status: 0,
   
        },
        // test data
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