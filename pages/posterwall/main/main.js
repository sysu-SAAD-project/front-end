// main.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        campusSelVisible: false,
        categorySelVisible: false,
        campusSelector: {
            "EAST": true,
            "SOUTH": true,
            "NORTH": true,
            "ZHUHAI": true
            //"SHENZHEN": true
        },
        campusSel: [
          { "value": "EAST", "name": "东校区", "checked": true },
          { "value": "SOUTH", "name": "南校区", "checked": true },
          { "value": "NORTH", "name": "北校区", "checked": true },
          { "value": "ZHUHAI", "name": "珠海校区", "checked": true }
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
          { "value": 0, "name": "体育", "checked": true },
          { "value": 1, "name": "公益", "checked": true },
          { "value": 2, "name": "竞赛", "checked": true },
            { "value": 3, "name": "演出", "checked": true },
            { "value": 4, "name": "讲座", "checked": true },
            { "value": 5, "name": "户外", "checked": true },
            { "value": 6, "name": "休闲", "checked": true }
        ],
        posters: []
    },
    testFunc: function () {
      app.testGetMethod();
    },
    showPosters: function () {
      console.log(this.posters);
      //app.testPosters();
    },
    campusSelMenuShow: function() {
        this.setData({
            campusSelVisible: !this.data.campusSelVisible,
            categorySelVisible: false
        })
    },
    categorySelMenuShow: function() {
        this.setData({
            categorySelVisible: !this.data.categorySelVisible,
            campusSelVisible: false
        })
    },

    changeCampusFilter: function(e) {
        console.log('checkbox发生change事件，携带value值为：', e.detail.value)

        var campusSelItems = this.data.campusSel,
            values = e.detail.value;
        for (var i = 0, lenI = campusSelItems.length; i < lenI; ++i) {
            campusSelItems[i].checked = false;

            for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                if (campusSelItems[i].value == values[j]) {
                    campusSelItems[i].checked = true;
                    break
                }
            }
        }
        var campusSelectorItems = this.data.campusSelector;
        for (var key in campusSelectorItems) {
            for (var i = 0, lenI = campusSelItems.length; i < lenI; ++i) {
                if (campusSelItems[i].value == key) {
                    campusSelectorItems[key] = campusSelItems[i].checked;
                    break;
                }
            }
        }

        this.setData({
            campusSel: campusSelItems,
            campusSelector: campusSelectorItems
        })
    },
    changeCategoryFilter: function(e) {
        console.log('checkbox发生change事件，携带value值为：', e.detail.value)

        var categorySelItems = this.data.categorySel,
            values = e.detail.value;
        for (var i = 0, lenI = categorySelItems.length; i < lenI; ++i) {
            categorySelItems[i].checked = false;

            for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                if (categorySelItems[i].value == values[j]) {
                    categorySelItems[i].checked = true;
                    break
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
        })
    },

    posterTap: function(e) {
        console.log(e);
        var detailsUrl = '../details/details?posterId=' + e.currentTarget.dataset.posterId;
        wx.navigateTo({
            url: detailsUrl
        })
    },

    loadImageErrCallback: function(e) {
        console.log("海报墙图片载入失败", e.detail.errMsg);
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var that = this;
        if (this.data.posters.length == 0) {
            app.getPosters(
                function(postersData) {
                  //console.log(postersData);
                    that.setData({
                        posters : postersData
                    })
                },
                function(errMsg) {
                    console.log(errMsg);
                }
            )
        }
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
      var that = this;
      if (this.data.posters.length == 0) {
        app.getPosters(
          function (postersData) {
            //console.log(postersData);
            that.setData({
              posters: postersData
            })
          },
          function (errMsg) {
            console.log(errMsg);
          }
        )
      }
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
        var that = this;
        app.getMorePosters(
            function(nowPosters) {
                that.setData({
                    posters: nowPosters
                })
            },
            function(errMsg) {
                console.log(errMsg);
            }
        )
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})