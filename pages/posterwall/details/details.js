// details.js
var util = require('../../../utils/util.js');

var app = getApp();
Page({

  /**
     * 页面的初始数据
     */
  data: {
    // currentPoster: null,
    statusText: [
      '报名该活动',
      '您已报名',
      '报名人数已达上限',
      '已过报名截止时间'
    ],
    // added from main.js
    campusSelector: {
      0b1000: true,
      0b0100: true,
      0b0010: true,
      0b0001: true
      //"SHENZHEN": true
    },
    campusSel: [
      { 'value': 0b1000, 'name': '东校区', 'checked': true },
      { 'value': 0b0100, 'name': '南校区', 'checked': true },
      { 'value': 0b0010, 'name': '北校区', 'checked': true },
      { 'value': 0b0001, 'name': '珠海校区', 'checked': true }
      // { "value": "SHENZHEN", "name": "深圳校区", "checked": true }
    ],
    categorySelector: {
      0: true,
      1: true,
      2: true,
      3: true,
      4: true,
      5: true,
      6: true,
    },
    categorySel: [
      { 'value': 0, 'name': '体育', 'checked': true },
      { 'value': 1, 'name': '公益', 'checked': true },
      { 'value': 2, 'name': '竞赛', 'checked': true },
      { 'value': 3, 'name': '演出', 'checked': true },
      { 'value': 4, 'name': '讲座', 'checked': true },
      { 'value': 5, 'name': '户外', 'checked': true },
      { 'value': 6, 'name': '休闲', 'checked': true }
    ],
    currentPoster: {},

    //json后台数据无法接收到，先用测试数据
        
    /*currentPoster: {
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
          pubEndTime: '5月23日 23:59',

          status: 0,
   
        },
        // test data
        
     */
  },
    
  enrollButtonTap: function() {
    // 此处使用了this获取id
    // 原先的e并没有id存在
    // 需要修改时请检查e是否正确
    // console.log(this.data.currentPoster.id);
    var detailsUrl = '../enroll/enroll?posterId=' + this.data.currentPoster.id;
    wx.navigateTo({
      url: detailsUrl
    });
  },

    
  // 生命周期函数--监听页面加载

  onLoad: function(options) {
    // console.log(options);
    var that = this;
    app.getPosterById(options.posterId,
      function(thePoster) {
        thePoster.startTime = util.startTimeFormatUtil(thePoster.startTime);
        thePoster.endTime = util.endTimeFormatUtil(thePoster.endTime);
        that.setData({
          currentPoster: thePoster
        });
      },
      function() {
        // console.log(errMsg);
      }
    );
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
