// enroll.js
var app = getApp();
Page({

  /**
     * 页面的初始数据
     */
  data: {
    isFillingForm: true,
    currentPoster: null,
    blankNotify: {
      'stu_name': false,
      'stu_number': false,
      'stu_school': false,
      'stu_tel': false
    },
    formatNotify: {
      'stu_number': false,
      'stu_tel': false
    }
  },

  formSubmit: function(e) {
    // console.log(e);
    var formValue = e.detail.value;
    var bNotify = this.data.blankNotify;
    for (var key in bNotify) {
      bNotify[key] = !!(formValue[key] == '');
    }
    var fNotify = this.data.formatNotify;
    var formatErrFlag = false;
    if (formValue.stu_number.length != 8) {
      formatErrFlag = true;
      fNotify.stu_number = true;
    } else {
      fNotify.stu_number = false;
    }
    if (formValue.stu_tel.length != 11) {
      formatErrFlag = true;
      fNotify.stu_tel = true;
      // console.log('tel length err');
    } else {
      fNotify.stu_tel = false;
    }
    this.setData({
      blankNotify: bNotify,
      formatNotify: fNotify
    });
    if (formValue.stu_name && formValue.stu_number && formValue.stu_school && formValue.stu_tel) {
      if (!formatErrFlag) {
        this.setData({
          isFillingForm: !this.data.isFillingForm
        });
      }
    }
  },

  confirmButtonTap: function() {
    wx.navigateBack({
      delta: 1
    });
  },

  /**
     * 生命周期函数--监听页面加载
     */
  onLoad: function(options) {
    // console.log(options);
    var that = this;
    app.getPosterById(options.posterId,
      function(thePoster) {
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