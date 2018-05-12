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
      'username': false,
      'studentid': false,
      'school': false,
      'phone': false
    },
    formatNotify: {
      'username': false,
      'studentid': false,
      'school': false,
      'phone': false
    },
    reg: {
      'username': '([a-zA-Z0-9\\u4e00-\\u9fa5\\·]{1,10})',
      'studentid': '[1-9](\\d{7})',
      'phone': '[1-9](\\d{10})'
    },
    inputLen: {
      'username': 10,
      'studentid': 8,
      'phone': 11
    },
    array: ['数据科学与计算机学院', '工学院', '药学院', '其他'],
    index: 0
  },

  /**
     * 监听普通picker选择器
     */
  listenerPickerSelected: function (e) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      index: e.detail.value
    });
  }, 
  
  // 检查合法性
  validate: function(aspect, value) {
    var formValue = value;
    var bNotify = this.data.blankNotify;
    var fNotify = this.data.formatNotify;
    var reg = this.data.reg;
    var len = this.data.inputLen;
    // 检查是否为空
    if (formValue == '') {
      bNotify[aspect] = true;
    } else {
      bNotify[aspect] = false;
      // 若不为空检查是否合法
      if (formValue.length > len[aspect]) {
        fNotify[aspect] = true;
      } else {
        var thisReg = new RegExp(reg[aspect]);
        //console.log(thisReg);
        var result = thisReg.test(formValue);
        //console.log(result);
        fNotify[aspect] = !result;
      }
    }
    this.setData({
      blankNotify: bNotify,
      formatNotify: fNotify
    });
    //console.log(aspect+'BlankNotify: ' + this.data.blankNotify[aspect]);
    //console.log(aspect+'FormatNotify: ' + this.data.formatNotify[aspect]);
  },

  // 检查姓名合法性
  validateStuName: function (e) {
    var value = e.detail.value;
    this.validate('username', value);
  },

  /* 暂时用不上
  // 检查院系合法性
  validateStuSchool: function (e) {
    var value = e.detail.value;
    var bNotify = this.data.blankNotify;
    if (value == '') {
      bNotify.school = true;
    } else {
      bNotify.school = false;
    }
    this.setData({
      blankNotify: bNotify
    });
  },
*/

  // 检查学号合法性
  validateStuNum: function (e) {
    var value = e.detail.value;
    this.validate('studentid', value);
  },

  // 检查手机号合法性
  validateStuTel: function (e) {
    var value = e.detail.value;
    this.validate('phone', value);
  },

  // 这个是新的formSubmit
  formSubmit: function (e) {
    var formValue = e.detail.value;
    //console.log(e);
    var bNotify = this.data.blankNotify;
    var fNotify = this.data.formatNotify;
    var reg = this.data.reg;
    var currPoster = this.data.currentPoster;
    // 检查表单中是否存在不合法的项
    for (var aspect in reg) {
      this.validate(aspect, formValue[aspect]);
    }
    var isValid = true;
    for (var key in bNotify) {
      if (bNotify[key] == true || fNotify[key] == true) {
        isValid = false;
      }
    }
    // 若合法则提交表单
    if (isValid) {
      this.setData({
        isFillingForm: !this.data.isFillingForm
      });
      var schoolArray = this.data.array;
      var i = this.data.index;
      var appInstance = getApp();
      var token = wx.getStorageSync('token');
      var sendData = formValue;
      sendData.actid = currPoster.id;
      sendData.school = schoolArray[i];
      // adding a callback function to store outputString
      var outputString = '';
      appInstance.userSignUpCertainActivity(token,sendData, function(out) {
        outputString = out;
        if (outputString != '报名填写成功') {
          var detailsUrl = '../enroll_error/enroll_error?outputString=' + outputString;
          wx.navigateTo({
            url: detailsUrl
          });
        } else {
          var detailsUrl = '../enroll_success/enroll_success?outputString=' + outputString;
          wx.navigateTo({
            url: detailsUrl
          });
        }
      });
    }
  },

  // 这个是原本的formSubmit
  /*formSubmit: function(e) {
    console.log(e);
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
  },*/

  confirmButtonTap: function() {
    wx.navigateBack({
      delta: 1
    });
  },

  /**
     * 生命周期函数--监听页面加载
     */
  onLoad: function(options) {
    //console.log(options);
    var that = this;
    this.setData({
      actid: options.posterId
    });
    app.getPosterById(options.posterId,
      function(thePoster) {
        that.setData({
          currentPoster: thePoster
        });
      },
      function() {
        //console.log(errMsg);
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