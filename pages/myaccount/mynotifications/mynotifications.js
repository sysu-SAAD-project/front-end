// mynotifications.js
Page({

  /**
     * 页面的初始数据
     */
  data: {
    leftTabEnabled: true,
    // 活动通知
    eventMessages: [{
      eventMsgId: 1,
      relatedPosterId: 1,
      eventName: '活动名称1-666活动',
      organization: '中大666俱乐部',
      msgTime: [2017, 11, 11],
      content: '由于光棍节666俱乐部的单身狗很难受，活动延迟一天举行'
    }, {
      eventMsgId: 2,
      relatedPosterId: 2,
      eventName: '活动名称2-777活动',
      organization: '中大777俱乐部',
      msgTime: [2017, 11, 10],
      content: '由于光棍节777俱乐部的朋友们突然很开心，活动提前一天举行'
    }],
    // 帖子回复
    discussionMessages: [{
      discussionMsgId: 1,
      relatedPostId: 'post1',
      relatedCommentId: 'comment2',
      relatedPostIntro: '我到河北省来',
      replyTime: [2017, 11, 13],
      content: '可以的，我醒哥刚过完光棍节，梁非凡就来炒我了'
    }, {
      discussionMsgId: 2,
      relatedPostId: 'post2',
      relatedCommentId: 'comment3',
      relatedPostIntro: '我到河北省来',
      replyTime: [2017, 12, 25],
      content: '可以的，我小黄还没嘴炮就到圣诞节了'
    }]
  },

  posterMsgTabTap: function() {
    this.setData({
      leftTabEnabled: true
    });
  },

  discussionMsgTabTap: function() {
    this.setData({
      leftTabEnabled: false
    });
  },

  posterTap: function(e) {
    var detailsUrl = '../../posterwall/details/details?posterId=' + e.currentTarget.dataset.posterId;
    wx.navigateTo({
      url: detailsUrl
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