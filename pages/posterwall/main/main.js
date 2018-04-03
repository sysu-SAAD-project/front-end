// main.js
var app = getApp();
var util = require('../../../utils/util.js');
Page({

	/**
     * 页面的初始数据
     */
	data: {
		campusSelVisible: false,
		campusString: '校区',
		campusImg: 'down.png',
		isCampusSet: false,
		categorySelVisible: false,
		categoryString: '类型',
		categoryImg: 'down.png',
		isCategorySet: false,
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
		posters: []
	},

	setCampus: function () {
		var campusSelItems = this.data.campusSel;
		var tmpString = '';
		var flag = false;
		for (var i = 0, lenI = campusSelItems.length; i < lenI; ++i) {
			if (campusSelItems[i].checked == true) {
				if (flag == true) tmpString += ',';
				tmpString += campusSelItems[i].name;
				flag = true;
			}
		}
		if (tmpString == '') tmpString = '未选中校区';

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
			campusSelVisible: !this.data.campusSelVisible,
			campusString: tmpString,
			isCampusSet: true,
			campusSelector: campusSelectorItems
		});
	},
	resetCampus: function () {
		this.setData({
			campusString: '校区',
			campusImg: 'up.png',
			isCampusSet: false,
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
			]
		});
	},
	setCategory: function() {
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
	resetCategory: function() {
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
	/**
     * 点击校区按钮回调事件
     */
	campusSelMenuShow: function() {
		var tmpImg;
		if (this.data.campusImg == 'down.png') tmpImg = 'up.png';
		else tmpImg = 'down.png';

		this.setData({
			campusSelVisible: !this.data.campusSelVisible,
			categorySelVisible: false,
			campusImg: tmpImg,
			categoryImg: 'down.png'
		});
	},
	/**
     * 点击类型按钮回调事件
     */
	categorySelMenuShow: function() {
		var tmpImg;
		if (this.data.categoryImg == 'down.png') tmpImg = 'up.png';
		else tmpImg = 'down.png';

		this.setData({
			categorySelVisible: !this.data.categorySelVisible,
			campusSelVisible: false,
			categoryImg: tmpImg,
			campusImg: 'down.png'
		});
	},

	changeCampusFilter: function(e) {
		// console.log('checkbox发生change事件，携带value值为：', e.detail.value);

		var campusSelItems = this.data.campusSel,
			values = e.detail.value;
		for (var i = 0, lenI = campusSelItems.length; i < lenI; ++i) {
			campusSelItems[i].checked = false;
			for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
				if (campusSelItems[i].value == values[j]) {
					campusSelItems[i].checked = true;
					break;
				}
			}
		}

		this.setData({
			campusSel: campusSelItems
		});
	},
	changeCategoryFilter: function(e) {
		// console.log('checkbox发生change事件，携带value值为：', e.detail.value);

		var categorySelItems = this.data.categorySel,
			values = e.detail.value;
		for (var i = 0, lenI = categorySelItems.length; i < lenI; ++i) {
			categorySelItems[i].checked = false;
			for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
				if (categorySelItems[i].value == values[j]) {
					categorySelItems[i].checked = true;
					break;
				}
			}
		}

		this.setData({
			categorySel: categorySelItems
		});
	},

	posterTap: function(e) {
		var detailsUrl = '../details/details?posterId=' + e.currentTarget.dataset.posterId;
		wx.navigateTo({
			url: detailsUrl
		});
	},

	loadImageErrCallback: function() {
		// console.log('海报墙图片载入失败', e.detail.errMsg);
	},

	/**
     * 生命周期函数--监听页面加载
     */
	onLoad: function() {
		var that = this;
		if (this.data.posters.length == 0) {
			app.getPosters(
				function(postersData) {
					for (var i = 0; i < postersData.length; i++) {
						postersData[i].startTime = util.startTimeFormatUtil(postersData[i].startTime);
						postersData[i].endTime = util.endTimeFormatUtil(postersData[i].endTime);
					}
					that.setData({
						posters: postersData
					});
				},
				function() {
					// console.log(errMsg);
				}
			);
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
					for (var i = 0; i < postersData.length; i++) {
						postersData[i].startTime = util.startTimeFormatUtil(postersData[i].startTime);
						postersData[i].endTime = util.endTimeFormatUtil(postersData[i].endTime);
					}
					that.setData({
						posters: postersData
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
				for (var i = 0; i < nowPosters.length; i++) {
					nowPosters[i].startTime = util.startTimeFormatUtil(nowPosters[i].startTime);
					nowPosters[i].endTime = util.endTimeFormatUtil(nowPosters[i].endTime);
				}
				that.setData({
					posters: nowPosters
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
	onShareAppMessage: function() {

	}
});