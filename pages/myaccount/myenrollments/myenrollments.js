// myenrollments.js
var app = getApp();
Page({

  /**
     * 页面的初始数据
     */
  data: {
    campusSelVisible: false,
    categorySelVisible: false,
    campusSelector: {
      'EAST': true,
      'SOUTH': false,
      'NORTH': true,
      'ZHUHAI': true,
      'SHENZHEN': true
    },
    campusSel: [
      { 'value': 'EAST', 'name': '东校区', 'checked': true },
      { 'value': 'SOUTH', 'name': '南校区', 'checked': false },
      { 'value': 'NORTH', 'name': '北校区', 'checked': true },
      { 'value': 'ZHUHAI', 'name': '珠海校区', 'checked': true },
      { 'value': 'SHENZHEN', 'name': '深圳校区', 'checked': true }
    ],
    categorySelector: {
      '666': true,
      '777': true,
      '888': false,
      '999': true
    },
    categorySel: [
      { 'value': '666', 'name': '六六六', 'checked': true },
      { 'value': '777', 'name': '七七七', 'checked': true },
      { 'value': '888', 'name': '八八八', 'checked': false },
      { 'value': '999', 'name': '九九九', 'checked': true }
    ],
    enrollPosters: [{
      'posterId': '1',
      'coverImageUrl': 'https://tse4-mm.cn.bing.net/th?id=OIP.xUXmY7tW__eIdSy-RBBqYAEsDi&pid=15.1',
      'campus': 'EAST', // "EAST", "NORTH", "SOUTH", "ZHUHAI", "SHENZHEN"
      'category': '666',
      /**
                 * status 可报名状态
                 * 0: 可报名
                 * 1: 已报名（无需重复报名）
                 * 2: 报名人数已达上限
                 * 3: 已过报名截止时间
                 */
      'status': 0,
      // 下面4个需要显示在活动列表里的简介信息中（详细信息点开也要有）
      'name': '活动名称1-666活动',
      'tag': ['东校区', '666'],
      'date': [2017, 9, 26],
      'location': '中山大学东校区666室',
      // 后面的都是只在详细信息中出现
      'orientation': '活动对象（不明白是什么）',
      'organizer': '中大666俱乐部',
      'details': {
        'text': '（这是活动详情文字说明）这个活动关键在于66666，特别666666',
        'qrcodeUrl': 'https://vignette3.wikia.nocookie.net/zh.uncyclopedia/images/6/6c/2241385239547874665.jpg'
      },
      // 下面部分的内容可以为null，若null则不显示
      'introduction': '（这是活动简介：）是一个66666的活动',
      'enrollment': '（这是报名方式）接收个人、组队报名',
      'dueDate': [2017, 9, 1],
      'rewards': '（活动奖励）冠军可得666衣服一件',
      'requirements': '只要你足够666就来',
      // 内部信息
      // 报名表格用一个object数组，key为表单组件类型，value为该表格的描述（待定）
      'enrollingForm': [
        { 'input': '报名人姓名' },
        { 'input': '联系电话' },
        { 'input': '专业' },
        { 'input': '学号' }
      ]
    },
    {
      'posterId': '2',
      'coverImageUrl': 'https://tse4-mm.cn.bing.net/th?id=OIP.xUXmY7tW__eIdSy-RBBqYAEsDi&pid=15.1',
      'campus': 'SOUTH',
      'category': '777',
      /**
                 * status 可报名状态
                 * 0: 可报名
                 * 1: 已报名（无需重复报名）
                 * 2: 报名人数已达上限
                 * 3: 已过报名截止时间
                 */
      'status': 0,
      // 下面4个需要显示在活动列表里的简介信息中（详细信息点开也要有）
      'name': '活动名称2-777活动',
      'tag': ['南校区', '777'],
      'date': [2017, 10, 27],
      'location': '中山大学南校区777室',
      // 后面的都是只在详细信息中出现
      'orientation': '活动对象（不明白是什么）',
      'organizer': '中大777俱乐部',
      'details': {
        'text': '（这是活动详情文字说明）这个活动关键在于777777，特别7777777',
        'qrcodeUrl': 'https://vignette3.wikia.nocookie.net/zh.uncyclopedia/images/6/6c/2241385239547874665.jpg'
      },
      // 下面部分的内容可以为null，若null则不显示
      'introduction': '（这是活动简介：）是一个77777的活动',
      'enrollment': '（这是报名方式）接收个人、组队7777报名',
      'dueDate': [2017, 9, 14],
      'rewards': '（活动奖励）冠军可得777衣服一件',
      'requirements': '只要你足够777就来',
      // 内部信息
      // 报名表格用一个object数组，key为表单组件类型，value为该表格的描述（待定）
      'enrollingForm': [
        { 'input': '报名人姓名' },
        { 'input': '联系电话' },
        { 'input': '专业' },
        { 'input': '学号' }
      ]
    },
    {
      'posterId': '3',
      'coverImageUrl': 'https://tse4-mm.cn.bing.net/th?id=OIP.xUXmY7tW__eIdSy-RBBqYAEsDi&pid=15.1',
      'campus': 'NORTH',
      'category': '888',
      /**
                 * status 可报名状态
                 * 0: 可报名
                 * 1: 已报名（无需重复报名）
                 * 2: 报名人数已达上限
                 * 3: 已过报名截止时间
                 */
      'status': 1,
      // 下面4个需要显示在活动列表里的简介信息中（详细信息点开也要有）
      'name': '活动名称3-888活动',
      'tag': ['北校区', '888'],
      'date': [2017, 11, 12],
      'location': '中山大学北校区888室',
      // 后面的都是只在详细信息中出现
      'orientation': '活动对象（不明白是什么）',
      'organizer': '中大888俱乐部',
      'details': {
        'text': '（这是活动详情文字说明）这个活动关键在于888888，特别888888',
        'qrcodeUrl': 'https://vignette3.wikia.nocookie.net/zh.uncyclopedia/images/6/6c/2241385239547874665.jpg'
      },
      // 下面部分的内容可以为null，若null则不显示
      'introduction': '（这是活动简介：）是一个888888的活动',
      'enrollment': '（这是报名方式）接收个人、组队8888报名',
      'dueDate': [2017, 10, 2],
      'rewards': '（活动奖励）冠军可得888衣服一件',
      'requirements': '只要你足够888就来',
      // 内部信息
      // 报名表格用一个object数组，key为表单组件类型，value为该表格的描述（待定）
      'enrollingForm': [
        { 'input': '报名人姓名' },
        { 'input': '联系电话' },
        { 'input': '专业' },
        { 'input': '学号' }
      ]
    },
    {
      'posterId': '4',
      'coverImageUrl': 'https://tse4-mm.cn.bing.net/th?id=OIP.xUXmY7tW__eIdSy-RBBqYAEsDi&pid=15.1',
      'campus': 'ZHUHAI',
      'category': '999',
      /**
                 * status 可报名状态
                 * 0: 可报名
                 * 1: 已报名（无需重复报名）
                 * 2: 报名人数已达上限
                 * 3: 已过报名截止时间
                 */
      'status': 1,
      // 下面4个需要显示在活动列表里的简介信息中（详细信息点开也要有）
      'name': '活动名称4-999活动',
      'tag': ['珠海校区', '999'],
      'date': [2017, 12, 1],
      'location': '中山大学珠海校区999室',
      // 后面的都是只在详细信息中出现
      'orientation': '活动对象（不明白是什么）',
      'organizer': '中大999俱乐部',
      'details': {
        'text': '（这是活动详情文字说明）这个活动关键在于999999，特别999999',
        'qrcodeUrl': 'https://vignette3.wikia.nocookie.net/zh.uncyclopedia/images/6/6c/2241385239547874665.jpg'
      },
      // 下面部分的内容可以为null，若null则不显示
      'introduction': '（这是活动简介：）是一个99999的活动',
      'enrollment': '（这是报名方式）接收个人、组队9999报名',
      'dueDate': [2017, 11, 14],
      'rewards': '（活动奖励）冠军可得999衣服一件',
      'requirements': '只要你足够999就来',
      // 内部信息
      // 报名表格用一个object数组，key为表单组件类型，value为该表格的描述（待定）
      'enrollingForm': [
        { 'input': '报名人姓名' },
        { 'input': '联系电话' },
        { 'input': '专业' },
        { 'input': '学号' }
      ]
    },
    {
      'posterId': '5',
      'coverImageUrl': 'https://tse4-mm.cn.bing.net/th?id=OIP.xUXmY7tW__eIdSy-RBBqYAEsDi&pid=15.1',
      'campus': 'EAST', // "EAST", "NORTH", "SOUTH", "ZHUHAI", "SHENZHEN"
      'category': '666',
      /**
                 * status 可报名状态
                 * 0: 可报名
                 * 1: 已报名（无需重复报名）
                 * 2: 报名人数已达上限
                 * 3: 已过报名截止时间
                 */
      'status': 2,
      // 下面4个需要显示在活动列表里的简介信息中（详细信息点开也要有）
      'name': '活动名称1-666活动',
      'tag': ['东校区', '666'],
      'date': [2017, 9, 26],
      'location': '中山大学东校区666室',
      // 后面的都是只在详细信息中出现
      'orientation': '活动对象（不明白是什么）',
      'organizer': '中大666俱乐部',
      'details': {
        'text': '（这是活动详情文字说明）这个活动关键在于66666，特别666666',
        'qrcodeUrl': 'https://vignette3.wikia.nocookie.net/zh.uncyclopedia/images/6/6c/2241385239547874665.jpg'
      },
      // 下面部分的内容可以为null，若null则不显示
      'introduction': '（这是活动简介：）是一个66666的活动',
      'enrollment': '（这是报名方式）接收个人、组队报名',
      'dueDate': [2017, 9, 1],
      'rewards': '（活动奖励）冠军可得666衣服一件',
      'requirements': '只要你足够666就来',
      // 内部信息
      // 报名表格用一个object数组，key为表单组件类型，value为该表格的描述（待定）
      'enrollingForm': [
        { 'input': '报名人姓名' },
        { 'input': '联系电话' },
        { 'input': '专业' },
        { 'input': '学号' }
      ]
    },
    {
      'posterId': '6',
      'coverImageUrl': 'https://tse4-mm.cn.bing.net/th?id=OIP.xUXmY7tW__eIdSy-RBBqYAEsDi&pid=15.1',
      'campus': 'SOUTH',
      'category': '777',
      /**
                 * status 可报名状态
                 * 0: 可报名
                 * 1: 已报名（无需重复报名）
                 * 2: 报名人数已达上限
                 * 3: 已过报名截止时间
                 */
      'status': 2,
      // 下面4个需要显示在活动列表里的简介信息中（详细信息点开也要有）
      'name': '活动名称2-777活动',
      'tag': ['南校区', '777'],
      'date': [2017, 10, 27],
      'location': '中山大学南校区777室',
      // 后面的都是只在详细信息中出现
      'orientation': '活动对象（不明白是什么）',
      'organizer': '中大777俱乐部',
      'details': {
        'text': '（这是活动详情文字说明）这个活动关键在于777777，特别7777777',
        'qrcodeUrl': 'https://vignette3.wikia.nocookie.net/zh.uncyclopedia/images/6/6c/2241385239547874665.jpg'
      },
      // 下面部分的内容可以为null，若null则不显示
      'introduction': '（这是活动简介：）是一个77777的活动',
      'enrollment': '（这是报名方式）接收个人、组队7777报名',
      'dueDate': [2017, 9, 14],
      'rewards': '（活动奖励）冠军可得777衣服一件',
      'requirements': '只要你足够777就来',
      // 内部信息
      // 报名表格用一个object数组，key为表单组件类型，value为该表格的描述（待定）
      'enrollingForm': [
        { 'input': '报名人姓名' },
        { 'input': '联系电话' },
        { 'input': '专业' },
        { 'input': '学号' }
      ]
    },
    {
      'posterId': '7',
      'coverImageUrl': 'https://tse4-mm.cn.bing.net/th?id=OIP.xUXmY7tW__eIdSy-RBBqYAEsDi&pid=15.1',
      'campus': 'NORTH',
      'category': '888',
      /**
                 * status 可报名状态
                 * 0: 可报名
                 * 1: 已报名（无需重复报名）
                 * 2: 报名人数已达上限
                 * 3: 已过报名截止时间
                 */
      'status': 3,
      // 下面4个需要显示在活动列表里的简介信息中（详细信息点开也要有）
      'name': '活动名称3-888活动',
      'tag': ['北校区', '888'],
      'date': [2017, 11, 12],
      'location': '中山大学北校区888室',
      // 后面的都是只在详细信息中出现
      'orientation': '活动对象（不明白是什么）',
      'organizer': '中大888俱乐部',
      'details': {
        'text': '（这是活动详情文字说明）这个活动关键在于888888，特别888888',
        'qrcodeUrl': 'https://vignette3.wikia.nocookie.net/zh.uncyclopedia/images/6/6c/2241385239547874665.jpg'
      },
      // 下面部分的内容可以为null，若null则不显示
      'introduction': '（这是活动简介：）是一个888888的活动',
      'enrollment': '（这是报名方式）接收个人、组队8888报名',
      'dueDate': [2017, 10, 2],
      'rewards': '（活动奖励）冠军可得888衣服一件',
      'requirements': '只要你足够888就来',
      // 内部信息
      // 报名表格用一个object数组，key为表单组件类型，value为该表格的描述（待定）
      'enrollingForm': [
        { 'input': '报名人姓名' },
        { 'input': '联系电话' },
        { 'input': '专业' },
        { 'input': '学号' }
      ]
    },
    {
      'posterId': '8',
      'coverImageUrl': 'https://tse4-mm.cn.bing.net/th?id=OIP.xUXmY7tW__eIdSy-RBBqYAEsDi&pid=15.1',
      'campus': 'ZHUHAI',
      'category': '999',
      /**
                 * status 可报名状态
                 * 0: 可报名
                 * 1: 已报名（无需重复报名）
                 * 2: 报名人数已达上限
                 * 3: 已过报名截止时间
                 */
      'status': 3,
      // 下面4个需要显示在活动列表里的简介信息中（详细信息点开也要有）
      'name': '活动名称4-999活动',
      'tag': ['珠海校区', '999'],
      'date': [2017, 12, 1],
      'location': '中山大学珠海校区999室',
      // 后面的都是只在详细信息中出现
      'orientation': '活动对象（不明白是什么）',
      'organizer': '中大999俱乐部',
      'details': {
        'text': '（这是活动详情文字说明）这个活动关键在于999999，特别999999',
        'qrcodeUrl': 'https://vignette3.wikia.nocookie.net/zh.uncyclopedia/images/6/6c/2241385239547874665.jpg'
      },
      // 下面部分的内容可以为null，若null则不显示
      'introduction': '（这是活动简介：）是一个99999的活动',
      'enrollment': '（这是报名方式）接收个人、组队9999报名',
      'dueDate': [2017, 11, 14],
      'rewards': '（活动奖励）冠军可得999衣服一件',
      'requirements': '只要你足够999就来',
      // 内部信息
      // 报名表格用一个object数组，key为表单组件类型，value为该表格的描述（待定）
      'enrollingForm': [
        { 'input': '报名人姓名' },
        { 'input': '联系电话' },
        { 'input': '专业' },
        { 'input': '学号' }
      ]
    }
    ]
  },
  campusSelMenuShow: function() {
    this.setData({
      campusSelVisible: !this.data.campusSelVisible,
      categorySelVisible: false
    });
  },
  categorySelMenuShow: function() {
    this.setData({
      categorySelVisible: !this.data.categorySelVisible,
      campusSelVisible: false
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
  posterTap: function(e) {
    var detailsUrl = '../../posterwall/details/details?posterId=' + e.currentTarget.dataset.posterId;
    wx.navigateTo({
      url: detailsUrl
    });
  },

  /**
     * 生命周期函数--监听页面加载
     */
  onLoad: function() {
    var that = this;
    if (this.data.enrollPosters.length == 0) {
      app.getPostersEnrolledByCurrentUser(
        function(postersData) {
          that.setData({
            enrollPosters: postersData
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