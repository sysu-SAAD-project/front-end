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
      'stu_name': false,
      'stu_number': false,
      'stu_school': false,
      'stu_tel': false
    },
    reg: {
      'stu_name': '^[\u4e00-\u9fa5]+(·[\u4e00-\u9fa5]+)$',
      'stu_number': '^[1-9]\d{7}$',
      'stu_tel': '^[1-9]\d{10}$'
    }
  },

  // 检查合法性
  validate: function(aspect, value) {
    var formValue = value;
    var bNotify = this.data.blankNotify;
    var fNotify = this.data.formatNotify;
    var reg = this.data.reg;
    // 检查是否为空
    if (formValue == '') {
      bNotify[aspect] = true;
    } else {
      bNotify[aspect] = false;
      // 若不为空检查是否合法
      var thisReg = new RegExp(reg[aspect], 'gi');
      fNotify[aspect] = !thisReg.test(formValue);
    }
    this.setData({
      blankNotify: bNotify,
      formatNotify: fNotify
    });
    //console.log(aspect+': ' + this.data.blankNotify[aspect]);
    //console.log(aspect+': ' + this.data.formatNotify[aspect]);
  },

  // 检查姓名合法性
  validateStuName: function (e) {
    var value = e.detail.value;
    this.validate('stu_name', value);
  },

  // 检查院系合法性
  validateStuSchool: function (e) {
    var value = e.detail.value;
    var bNotify = this.data.blankNotify;
    if (value == '') {
      bNotify.stu_school = true;
    } else {
      bNotify.stu_school = false;
    }
    this.setData({
      blankNotify: bNotify
    });
  },

  // 检查学号合法性
  validateStuNum: function (e) {
    var value = e.detail.value;
    this.validate('stu_number', value);
  },

  // 检查手机号合法性
  validateStuTel: function (e) {
    var value = e.detail.value;
    this.validate('stu_tel', value);
  },

  // 这个是新的formSubmit
  formSubmit: function (e) {
    var formValue = e.detail.value;
    var bNotify = this.data.blankNotify;
    var fNotify = this.data.formatNotify;
    var reg = this.data.reg;
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
    if (isValid) {
      this.setData({
        isFillingForm: !this.data.isFillingForm
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