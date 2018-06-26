// main.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categorySelVisible: false,
    categorySelector: {
      0: true,
      1: true,
      2: true
    },
    categoryString: '类型',
    categoryImg: 'down.png',
    categorySel: [
      { 'value': 0, 'name': '组队', 'checked': true },
      { 'value': 1, 'name': '问答', 'checked': true },
      { 'value': 2, 'name': '分享', 'checked': true }
    ],
    category2Name: {
      0: '组队',
      1: '问答',
      2: '分享'
    },
    posts: []
  },

  setCategory: function () {
    var categorySelItems = this.data.categorySel;
    var tmpString = '';
    var flag = false;
    for (var i = 0, lenI = categorySelItems.length; i < lenI; ++i) {
      if (categorySelItems[i].checked == true) {
        if (flag == true) tmpString += ',';
        tmpString += categorySelItems[i].name;
        flag = true;
      }
    }
    if (tmpString == '') tmpString = '未选中类型';

    var categorySelectorItems = this.data.categorySelector;
    for (var key in categorySelectorItems) {
      for (var i = 0, lenI = categorySelItems.length; i < lenI; ++i) {
        if (categorySelItems[i].value == key) {
          categorySelectorItems[key] = categorySelItems[i].checked;
          break;
        }
      }
    }

    this.setData({
      categorySelVisible: !this.data.categorySelVisible,
      categoryString: tmpString,
      isCategorySet: true,
      categorySelector: categorySelectorItems
    });
  },
  resetCategory: function () {
    this.setData({
      categoryString: '类型',
      categoryImg: 'up.png',
      isCategorySet: false,
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
      ]
    });
  },

  postTap: function(e) {
    // console.log(e);
    var commentsUrl = '../comments/comments?postId=' + e.currentTarget.dataset.postId;
    wx.navigateTo({
      url: commentsUrl
    });
  },

  newpostButtonTap: function() {
    // console.log(e);
    wx.navigateTo({
      url: '../newpost/newpost',
    });
  },

  categorySelMenuShow: function () {
    this.setData({
      categorySelVisible: !this.data.categorySelVisible,
    });
  },
  changeCategoryFilter: function (e) {
    // console.log('checkbox发生change事件，携带value值为：', e.detail.value);

    var categorySelItems = this.data.categorySel, values = e.detail.value;
    for (var i = 0, lenI = categorySelItems.length; i < lenI; ++i) {
      categorySelItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (categorySelItems[i].value == values[j]) {
          categorySelItems[i].checked = true;
          break;
        }
      }
    }
    var categorySelectorItems = this.data.categorySelector;
    for (var key in categorySelectorItems) {
      for (var i = 0, lenI = categorySelItems.length; i < lenI; ++i) {
        if (categorySelItems[i].value == key) {
          categorySelectorItems[key] = categorySelItems[i].checked;
          break;
        }
      }
    }

    this.setData({
      categorySel: categorySelItems,
      categorySelector: categorySelectorItems
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    if (this.data.posts.length == 0) {
      app.getDiscussionPosts(
        function (postsData) {
          that.setData({
            posts: postsData
          });
        },
        function () {
          // console.log(errMsg);
        }
      );
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    var that = this;
    if (this.data.posts.length == 0) {
      app.getDiscussionPosts(
        function (postsData) {
          that.setData({
            posts: postsData
          });
          wx.stopPullDownRefresh();
        },
        function () {
          // console.log(errMsg);
          wx.stopPullDownRefresh();
        }
      );
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    app.getMoreDiscussionPosts(
      function(nowPosts) {
        that.setData({
          posts: nowPosts
        });
      },
      function() {
        // console.log(errMsg);
      }
    );
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
});