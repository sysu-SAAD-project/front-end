//app.js
App({
    onLaunch: function() {
        //调用API从本地缓存中获取数据
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
    },

    getUserInfo: function(cb) {
        var that = this
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo)
        } else {
            //调用登录接口
            wx.getUserInfo({
                withCredentials: false,
                success: function(res) {
                    that.globalData.userInfo = res.userInfo
                    typeof cb == "function" && cb(that.globalData.userInfo)
                }
            })
        }
    },
    testGetMethod: function() {
      wx.request({
        url: 'http://119.29.155.194:8080/act?page=0',
        method:"GET",
        success(res) {
          console.log(res.data);
        }
      })
    },
    testPosters: function() {
      console.log(this.globalData.posters);
    },
    getPosters: function(successCb, failCb) {
        var that = this;
        if (that.globalData.posters.length == 0) {
            // send request to Server, get data
          wx.request({
            url: 'http://119.29.155.194:8080/act?page=0',
            method: "GET",
            success(res) {
              let str = res.data.content;
              typeof successCb == "function" && successCb(str);
              that.globalData.posters = str;
              that.globalData.totalPages = res.data.totalPages;
              that.globalData.currentPages++;
            },
            fail(res) {
              typeof successCb == "function" && failCb("Server Error: cannot get initial poster");
            }
          })
        } else {
            typeof successCb == "function" && successCb(that.globalData.posters);
        }
    },

    getMorePosters: function(successCb, failCb) {
        var that = this;
        if (that.globalData.currentPages < that.globalData.totalPages) {
            // send request to Server, get data
          wx.request({
            url: 'http://119.29.155.194:8080/act?page=' + that.globalData.currentPages,
            method: "GET",
            success(res) {
              let str = res.data.content;
              for(let item in str) {
                that.globalData.posters.push(str[item]);
              }
              let old = that.globalData.posters;
              typeof successCb == "function" && successCb(old); 
              that.globalData.currentPages++;
            },
            fail(res) {
              typeof successCb == "function" && failCb("Server Error: cannot get more posters");
            }
          })
        }
    },

    getPosterById: function(posterId, successCb, failCb) {
        var postersItem = this.globalData.posters;
        var findOne = false;
        var currentPosterItem = null;
        for (var i = 0, lenI = postersItem.length; i < lenI; ++i) {
            // console.log(postersItem[i]);
            if (postersItem[i].id == posterId) {
                currentPosterItem = postersItem[i];
                findOne = true;
                break;
            }
        };
        if (findOne) {
            typeof successCb == "function" && successCb(currentPosterItem);
        } else {
            typeof failCb == "function" && failCb("Error Msg: Poster not found");
        }

    },
// 以下是个人信息及讨论区需要用到的函数
    getPostersEnrolledByCurrentUser: function(successCb, failCb) {
        var that = this;

        if (that.globalData.postersEnrolledByCurrentUser.length == 0) {
            // send request to Server, get data
            var reqSuccess = true;
            if (reqSuccess) {
                // that.globalData.postersEnrolledByCurrentUser = 
            } else {
                typeof failCb == "function" && failCb("Server Error Msg");
            }
        } else {
            typeof successCb == "function" && successCb(that.globalData.postersEnrolledByCurrentUser);
        }
    },

    getDiscussionPosts: function(successCb, failCb) {
        var that = this;

        if (that.globalData.posts.length == 0) {
            // send request to Server, get data
            var reqSuccess = true;
            if (reqSuccess) {
                // that.globalData.posts = 
            } else {
                typeof failCb == "function" && failCb("Server Error Msg");
            }
        } else {
            typeof successCb == "function" && successCb(that.globalData.posts);
        }
    },

    getMoreDiscussionPosts: function(successCb, failCb) {
        var that = this;
        // getPosts from server
        /* request */
        var reqSuccess = true;
        // add up the posts
        var morePostsData = [];
        // call callback to setData if success
        if (reqSuccess) {
            this.globalData.posts = this.globalData.posts.concat(morePostsData);

            typeof successCb == "function" && successCb(this.globalData.posts);
        } else {
            typeof failCb == "function" && failCb("Server Error Msg");
        }
    },

    getDiscussionPostById: function(postId, successCb, failCb) {
        // 只是用来测试，实际的poster数据直接从服务器获取
        var postItem = this.globalData.posts;
        var findOne = false;
        var currentPostItem = null;
        for (var i = 0, lenI = postItem.length; i < lenI; ++i) {
            console.log(postItem[i]);
            if (postItem[i].postId == postId) {
                currentPostItem = postItem[i];
                findOne = true;
                break;
            }
        };

        if (findOne) {
            typeof successCb == "function" && successCb(currentPostItem);
        } else {
            typeof failCb == "function" && failCb("Error Msg : comment detail not found")
        }
    },

    getDiscussionPostsOfCurrentUser: function(successCb, failCb) {
        var that = this;
        // getUserInfo
        if (that.globalData.postsOfCurrentUser.length == 0) {
            // send request to Server, get data
            var reqSuccess = true;
            if (reqSuccess) {
                // that.globalData.postsOfCurrentUser = 
            } else {
                typeof failCb == "function" && failCb("Server Error Msg");
            }
        } else {
            typeof successCb == "function" && successCb(that.globalData.postsOfCurrentUser);
        }
    },

    globalData: {
        currentPages: 0,
        totalPages: null,
        userInfo: null,
        postsOfCurrentUser: [],
        postersEnrolledByCurrentUser: [],
        posts: [{
                "postId": "post1",
                "category": "teamwork", // teamwork组队, question问答, share分享
                "user": {
                    "userId": "user1",
                    "avatar": "https://tse2.mm.bing.net/th?id=OIP.NJrE-D51N9LQGXrY2wTA5ADTEo",
                    "nickname": "元元"
                },
                "postTime": [2017, 8, 11],
                "content": {
                    "text": "我到河北省来求组队",
                    "pics": [
                        "http://pic.baike.soso.com/p/20130820/20130820111330-872590673.jpg",
                        "http://pic0.qqmofasi.com/2014/06/05/42_g611Thc02dK20dERT12N_large.jpg"
                    ]
                },

                // 以下为详情页内的信息，主列表中要显示评论数(comments.length)
                "comments": [{
                        "commentId": "comment1",
                        "user": {
                            "userId": "user2",
                            "avatar": "http://a3.att.hudong.com/71/09/01200000030965134373097057320_s.jpg",
                            "nickname": "小黄"
                        },
                        "commentTime": [2017, 8, 12],
                        "content": {
                            "text": "必须录到圣诞"
                        }
                    },
                    {
                        "commentId": "comment2",
                        "user": {
                            "userId": "user3",
                            "avatar": "https://tse4.mm.bing.net/th?id=OIP.JM0jH2dnpD5y8b7dG3BN6wCWCW",
                            "nickname": "醒哥"
                        },
                        "commentTime": [2017, 8, 13],
                        "content": {
                            "text": "梁非凡梁非凡梁非凡"
                        }
                    },
                    {
                        "commentId": "comment1",
                        "user": {
                            "userId": "user2",
                            "avatar": "http://a3.att.hudong.com/71/09/01200000030965134373097057320_s.jpg",
                            "nickname": "小黄"
                        },
                        "commentTime": [2017, 8, 12],
                        "content": {
                            "text": "必须录到圣诞"
                        }
                    },
                    {
                        "commentId": "comment2",
                        "user": {
                            "userId": "user3",
                            "avatar": "https://tse4.mm.bing.net/th?id=OIP.JM0jH2dnpD5y8b7dG3BN6wCWCW",
                            "nickname": "醒哥"
                        },
                        "commentTime": [2017, 8, 13],
                        "content": {
                            "text": "梁非凡梁非凡梁非凡"
                        }
                    },
                    {
                        "commentId": "comment7",
                        "user": {
                            "userId": "user2",
                            "avatar": "http://a3.att.hudong.com/71/09/01200000030965134373097057320_s.jpg",
                            "nickname": "小黄"
                        },
                        "commentTime": [2017, 8, 12],
                        "content": {
                            "text": "必须录到圣诞"
                        }
                    },
                    {
                        "commentId": "comment8",
                        "user": {
                            "userId": "user3",
                            "avatar": "https://tse4.mm.bing.net/th?id=OIP.JM0jH2dnpD5y8b7dG3BN6wCWCW",
                            "nickname": "醒哥"
                        },
                        "commentTime": [2017, 8, 13],
                        "content": {
                            "text": "梁非凡梁非凡梁非凡"
                        }
                    },
                    {
                        "commentId": "comment9",
                        "user": {
                            "userId": "user2",
                            "avatar": "http://a3.att.hudong.com/71/09/01200000030965134373097057320_s.jpg",
                            "nickname": "小黄"
                        },
                        "commentTime": [2017, 8, 12],
                        "content": {
                            "text": "必须录到圣诞"
                        }
                    },
                    {
                        "commentId": "comment10",
                        "user": {
                            "userId": "user3",
                            "avatar": "https://tse4.mm.bing.net/th?id=OIP.JM0jH2dnpD5y8b7dG3BN6wCWCW",
                            "nickname": "醒哥"
                        },
                        "commentTime": [2017, 8, 13],
                        "content": {
                            "text": "梁非凡梁非凡梁非凡"
                        }
                    }
                ]
            },
            {
                "postId": "post2",
                "category": "question", // teamwork组队, question问答, share分享
                "user": {
                    "userId": "user1",
                    "avatar": "https://tse2.mm.bing.net/th?id=OIP.NJrE-D51N9LQGXrY2wTA5ADTEo",
                    "nickname": "元首"
                },
                "postTime": [2017, 8, 11],
                "content": {
                    "text": "我到河北省来参加问答节目",
                    "pics": []
                },

                // 以下为详情页内的信息，主列表中要显示评论数(comments.length)
                "comments": [{
                        "commentId": "comment1",
                        "user": {
                            "userId": "user2",
                            "avatar": "http://a3.att.hudong.com/71/09/01200000030965134373097057320_s.jpg",
                            "nickname": "小黄"
                        },
                        "commentTime": [2017, 8, 12],
                        "content": {
                            "text": "必须录到圣诞"
                        }
                    },
                    {
                        "commentId": "comment2",
                        "user": {
                            "userId": "user3",
                            "avatar": "https://tse4.mm.bing.net/th?id=OIP.JM0jH2dnpD5y8b7dG3BN6wCWCW",
                            "nickname": "醒哥"
                        },
                        "commentTime": [2017, 8, 13],
                        "content": {
                            "text": "梁非凡梁非凡梁非凡"
                        }
                    }
                ]
            },
            {
                "postId": "post3",
                "category": "share", // teamwork组队, question问答, share分享
                "user": {
                    "userId": "user1",
                    "avatar": "https://tse2.mm.bing.net/th?id=OIP.NJrE-D51N9LQGXrY2wTA5ADTEo",
                    "nickname": "愤怒的元首"
                },
                "postTime": [2017, 8, 11],
                "content": {
                    "text": "我到河北省来分享汉语学习经验",
                    "pics": [
                        "http://pic0.qqmofasi.com/2014/06/05/42_g611Thc02dK20dERT12N_large.jpg"
                    ]
                },

                // 以下为详情页内的信息，主列表中要显示评论数(comments.length)
                "comments": [{
                        "commentId": "comment1",
                        "user": {
                            "userId": "user2",
                            "avatar": "http://a3.att.hudong.com/71/09/01200000030965134373097057320_s.jpg",
                            "nickname": "小黄"
                        },
                        "commentTime": [2017, 8, 12],
                        "content": {
                            "text": "必须录到圣诞"
                        }
                    },
                    {
                        "commentId": "comment2",
                        "user": {
                            "userId": "user3",
                            "avatar": "https://tse4.mm.bing.net/th?id=OIP.JM0jH2dnpD5y8b7dG3BN6wCWCW",
                            "nickname": "醒哥"
                        },
                        "commentTime": [2017, 8, 13],
                        "content": {
                            "text": "梁非凡梁非凡梁非凡"
                        }
                    }
                ]
            }
        ],
        posters: [
          //{ // 标准数据格式
          //       "id": 1,
          //       
          //       "name": '活动名称1-666活动',
          //       "startTime": ,
          //       "endTime": ,
          //       "location": '中山大学东校区666室',
          //       // 后面的都是只在详细信息中出现
          //       "campus": 0, // 0"EAST", 2"NORTH", 1"SOUTH", 3"ZHUHAI", "SHENZHEN"
          //       "enrollCondition": '活动对象（不明白是什么）',
          //       "sponsor": '中大666俱乐部',
          //       "type": "666",
          //       "pubStartTime": ,
          //       "pubEndTime": ,

          //       "detail":  "（这是活动详情文字说明）这个活动关键在于66666，特别666666",
          //           
          //       "verified": true,
          //       "canEnrolled": false;
          //       
          //       "email":"",
          //       "enrollWay": "（这是报名方式）接收个人、组队报名",
          //       "enrollEndTime": ,
          

          //       "reward": "（活动奖励）冠军可得666衣服一件",
          //       "introduction": "（这是活动简介：）是一个66666的活动",
          //       "requirement": "只要你足够666就来",


          //       "poster": '',
          //       "QRcode": ""
          //   },  // end of format data





          // {
          //       "posterId": 1,
          //       "coverImageUrl": 'https://tse4-mm.cn.bing.net/th?id=OIP.xUXmY7tW__eIdSy-RBBqYAEsDi&pid=15.1',
          //       "campus": "EAST", // "EAST", "NORTH", "SOUTH", "ZHUHAI", "SHENZHEN"
          //       "category": "666",
          //       /**
          //        * status 可报名状态
          //        * 0: 可报名
          //        * 1: 已报名（无需重复报名）
          //        * 2: 报名人数已达上限
          //        * 3: 已过报名截止时间
          //        */
          //       "status": 0,
          //       // 下面4个需要显示在活动列表里的简介信息中（详细信息点开也要有）
          //       "name": '活动名称1-666活动',
          //       "tag": ["东校区", "sport"],
          //       "date": [2017, 9, 26],
          //       "location": '中山大学东校区666室',
          //       // 后面的都是只在详细信息中出现
          //       "orientation": '活动对象（不明白是什么）',
          //       "organizer": '中大666俱乐部',
          //       "details": {
          //           "text": "（这是活动详情文字说明）这个活动关键在于66666，特别666666",
          //           "qrcodeUrl": "https://vignette3.wikia.nocookie.net/zh.uncyclopedia/images/6/6c/2241385239547874665.jpg"
          //       },
          //       // 下面部分的内容可以为null，若null则不显示
          //       "introduction": "（这是活动简介：）是一个66666的活动",
          //       "enrollment": "（这是报名方式）接收个人、组队报名",
          //       "dueDate": [2017, 9, 1],
          //       "rewards": "（活动奖励）冠军可得666衣服一件",
          //       "requirements": "只要你足够666就来",
          //       // 内部信息
          //       // 报名表格用一个object数组，key为表单组件类型，value为该表格的描述（待定）
          //       "enrollingForm": [
          //           { "input": "报名人姓名" },
          //           { "input": "联系电话" },
          //           { "input": "专业" },
          //           { "input": "学号" }
          //       ]
          //   },
          //   {
          //       "posterId": "2",
          //       "coverImageUrl": 'https://tse4-mm.cn.bing.net/th?id=OIP.xUXmY7tW__eIdSy-RBBqYAEsDi&pid=15.1',
          //       "campus": "SOUTH",
          //       "category": "777",
          //       /**
          //        * status 可报名状态
          //        * 0: 可报名
          //        * 1: 已报名（无需重复报名）
          //        * 2: 报名人数已达上限
          //        * 3: 已过报名截止时间
          //        */
          //       "status": 0,
          //       // 下面4个需要显示在活动列表里的简介信息中（详细信息点开也要有）
          //       "name": '活动名称2-777活动',
          //       "tag": ["南校区", "contest"],
          //       "date": [2017, 10, 27],
          //       "location": '中山大学南校区777室',
          //       // 后面的都是只在详细信息中出现
          //       "orientation": '活动对象（不明白是什么）',
          //       "organizer": '中大777俱乐部',
          //       "details": {
          //           "text": "（这是活动详情文字说明）这个活动关键在于777777，特别7777777",
          //           "qrcodeUrl": "https://vignette3.wikia.nocookie.net/zh.uncyclopedia/images/6/6c/2241385239547874665.jpg"
          //       },
          //       // 下面部分的内容可以为null，若null则不显示
          //       "introduction": "（这是活动简介：）是一个77777的活动",
          //       "enrollment": "（这是报名方式）接收个人、组队7777报名",
          //       "dueDate": [2017, 9, 14],
          //       "rewards": "（活动奖励）冠军可得777衣服一件",
          //       "requirements": "只要你足够777就来",
          //       // 内部信息
          //       // 报名表格用一个object数组，key为表单组件类型，value为该表格的描述（待定）
          //       "enrollingForm": [
          //           { "input": "报名人姓名" },
          //           { "input": "联系电话" },
          //           { "input": "专业" },
          //           { "input": "学号" }
          //       ]
          //   },
          //   {
          //       "posterId": "3",
          //       "coverImageUrl": 'https://tse4-mm.cn.bing.net/th?id=OIP.xUXmY7tW__eIdSy-RBBqYAEsDi&pid=15.1',
          //       "campus": "NORTH",
          //       "category": "888",
          //       /**
          //        * status 可报名状态
          //        * 0: 可报名
          //        * 1: 已报名（无需重复报名）
          //        * 2: 报名人数已达上限
          //        * 3: 已过报名截止时间
          //        */
          //       "status": 1,
          //       // 下面4个需要显示在活动列表里的简介信息中（详细信息点开也要有）
          //       "name": '活动名称3-888活动',
          //       "tag": ["北校区", "charity"],
          //       "date": [2017, 11, 12],
          //       "location": '中山大学北校区888室',
          //       // 后面的都是只在详细信息中出现
          //       "orientation": '活动对象（不明白是什么）',
          //       "organizer": '中大888俱乐部',
          //       "details": {
          //           "text": "（这是活动详情文字说明）这个活动关键在于888888，特别888888",
          //           "qrcodeUrl": "https://vignette3.wikia.nocookie.net/zh.uncyclopedia/images/6/6c/2241385239547874665.jpg"
          //       },
          //       // 下面部分的内容可以为null，若null则不显示
          //       "introduction": "（这是活动简介：）是一个888888的活动",
          //       "enrollment": "（这是报名方式）接收个人、组队8888报名",
          //       "dueDate": [2017, 10, 2],
          //       "rewards": "（活动奖励）冠军可得888衣服一件",
          //       "requirements": "只要你足够888就来",
          //       // 内部信息
          //       // 报名表格用一个object数组，key为表单组件类型，value为该表格的描述（待定）
          //       "enrollingForm": [
          //           { "input": "报名人姓名" },
          //           { "input": "联系电话" },
          //           { "input": "专业" },
          //           { "input": "学号" }
          //       ]
          //   },
          //   {
          //       "posterId": "4",
          //       "coverImageUrl": 'https://tse4-mm.cn.bing.net/th?id=OIP.xUXmY7tW__eIdSy-RBBqYAEsDi&pid=15.1',
          //       "campus": "ZHUHAI",
          //       "category": "999",
          //       /**
          //        * status 可报名状态
          //        * 0: 可报名
          //        * 1: 已报名（无需重复报名）
          //        * 2: 报名人数已达上限
          //        * 3: 已过报名截止时间
          //        */
          //       "status": 1,
          //       // 下面4个需要显示在活动列表里的简介信息中（详细信息点开也要有）
          //       "name": '活动名称4-999活动',
          //       "tag": ["珠海校区", "show"],
          //       "date": [2017, 12, 1],
          //       "location": '中山大学珠海校区999室',
          //       // 后面的都是只在详细信息中出现
          //       "orientation": '活动对象（不明白是什么）',
          //       "organizer": '中大999俱乐部',
          //       "details": {
          //           "text": "（这是活动详情文字说明）这个活动关键在于999999，特别999999",
          //           "qrcodeUrl": "https://vignette3.wikia.nocookie.net/zh.uncyclopedia/images/6/6c/2241385239547874665.jpg"
          //       },
          //       // 下面部分的内容可以为null，若null则不显示
          //       "introduction": "（这是活动简介：）是一个99999的活动",
          //       "enrollment": "（这是报名方式）接收个人、组队9999报名",
          //       "dueDate": [2017, 11, 14],
          //       "rewards": "（活动奖励）冠军可得999衣服一件",
          //       "requirements": "只要你足够999就来",
          //       // 内部信息
          //       // 报名表格用一个object数组，key为表单组件类型，value为该表格的描述（待定）
          //       "enrollingForm": [
          //           { "input": "报名人姓名" },
          //           { "input": "联系电话" },
          //           { "input": "专业" },
          //           { "input": "学号" }
          //       ]
          //   },
          //   {
          //       "posterId": "5",
          //       "coverImageUrl": 'https://tse4-mm.cn.bing.net/th?id=OIP.xUXmY7tW__eIdSy-RBBqYAEsDi&pid=15.1',
          //       "campus": "EAST", // "EAST", "NORTH", "SOUTH", "ZHUHAI", "SHENZHEN"
          //       "category": "outdoor",
          //       /**
          //        * status 可报名状态
          //        * 0: 可报名
          //        * 1: 已报名（无需重复报名）
          //        * 2: 报名人数已达上限
          //        * 3: 已过报名截止时间
          //        */
          //       "status": 2,
          //       // 下面4个需要显示在活动列表里的简介信息中（详细信息点开也要有）
          //       "name": '活动名称1-666活动',
          //       "tag": ["东校区", "leisure"],
          //       "date": [2017, 9, 26],
          //       "location": '中山大学东校区666室',
          //       // 后面的都是只在详细信息中出现
          //       "orientation": '活动对象（不明白是什么）',
          //       "organizer": '中大666俱乐部',
          //       "details": {
          //           "text": "（这是活动详情文字说明）这个活动关键在于66666，特别666666",
          //           "qrcodeUrl": "https://vignette3.wikia.nocookie.net/zh.uncyclopedia/images/6/6c/2241385239547874665.jpg"
          //       },
          //       // 下面部分的内容可以为null，若null则不显示
          //       "introduction": "（这是活动简介：）是一个66666的活动",
          //       "enrollment": "（这是报名方式）接收个人、组队报名",
          //       "dueDate": [2017, 9, 1],
          //       "rewards": "（活动奖励）冠军可得666衣服一件",
          //       "requirements": "只要你足够666就来",
          //       // 内部信息
          //       // 报名表格用一个object数组，key为表单组件类型，value为该表格的描述（待定）
          //       "enrollingForm": [
          //           { "input": "报名人姓名" },
          //           { "input": "联系电话" },
          //           { "input": "专业" },
          //           { "input": "学号" }
          //       ]
          //   },
          //   {
          //       "posterId": "6",
          //       "coverImageUrl": 'https://tse4-mm.cn.bing.net/th?id=OIP.xUXmY7tW__eIdSy-RBBqYAEsDi&pid=15.1',
          //       "campus": "SOUTH",
          //       "category": "leisure",
          //       /**
          //        * status 可报名状态
          //        * 0: 可报名
          //        * 1: 已报名（无需重复报名）
          //        * 2: 报名人数已达上限
          //        * 3: 已过报名截止时间
          //        */
          //       "status": 2,
          //       // 下面4个需要显示在活动列表里的简介信息中（详细信息点开也要有）
          //       "name": '活动名称2-777活动',
          //       "tag": ["南校区", "777"],
          //       "date": [2017, 10, 27],
          //       "location": '中山大学南校区777室',
          //       // 后面的都是只在详细信息中出现
          //       "orientation": '活动对象（不明白是什么）',
          //       "organizer": '中大777俱乐部',
          //       "details": {
          //           "text": "（这是活动详情文字说明）这个活动关键在于777777，特别7777777",
          //           "qrcodeUrl": "https://vignette3.wikia.nocookie.net/zh.uncyclopedia/images/6/6c/2241385239547874665.jpg"
          //       },
          //       // 下面部分的内容可以为null，若null则不显示
          //       "introduction": "（这是活动简介：）是一个77777的活动",
          //       "enrollment": "（这是报名方式）接收个人、组队7777报名",
          //       "dueDate": [2017, 9, 14],
          //       "rewards": "（活动奖励）冠军可得777衣服一件",
          //       "requirements": "只要你足够777就来",
          //       // 内部信息
          //       // 报名表格用一个object数组，key为表单组件类型，value为该表格的描述（待定）
          //       "enrollingForm": [
          //           { "input": "报名人姓名" },
          //           { "input": "联系电话" },
          //           { "input": "专业" },
          //           { "input": "学号" }
          //       ]
          //   },
          //   {
          //       "posterId": "7",
          //       "coverImageUrl": 'https://tse4-mm.cn.bing.net/th?id=OIP.xUXmY7tW__eIdSy-RBBqYAEsDi&pid=15.1',
          //       "campus": "NORTH",
          //       "category": "sport",
          //       /**
          //        * status 可报名状态
          //        * 0: 可报名
          //        * 1: 已报名（无需重复报名）
          //        * 2: 报名人数已达上限
          //        * 3: 已过报名截止时间
          //        */
          //       "status": 3,
          //       // 下面4个需要显示在活动列表里的简介信息中（详细信息点开也要有）
          //       "name": '活动名称3-888活动',
          //       "tag": ["北校区", "sport"],
          //       "date": [2017, 11, 12],
          //       "location": '中山大学北校区888室',
          //       // 后面的都是只在详细信息中出现
          //       "orientation": '活动对象（不明白是什么）',
          //       "organizer": '中大888俱乐部',
          //       "details": {
          //           "text": "（这是活动详情文字说明）这个活动关键在于888888，特别888888",
          //           "qrcodeUrl": "https://vignette3.wikia.nocookie.net/zh.uncyclopedia/images/6/6c/2241385239547874665.jpg"
          //       },
          //       // 下面部分的内容可以为null，若null则不显示
          //       "introduction": "（这是活动简介：）是一个888888的活动",
          //       "enrollment": "（这是报名方式）接收个人、组队8888报名",
          //       "dueDate": [2017, 10, 2],
          //       "rewards": "（活动奖励）冠军可得888衣服一件",
          //       "requirements": "只要你足够888就来",
          //       // 内部信息
          //       // 报名表格用一个object数组，key为表单组件类型，value为该表格的描述（待定）
          //       "enrollingForm": [
          //           { "input": "报名人姓名" },
          //           { "input": "联系电话" },
          //           { "input": "专业" },
          //           { "input": "学号" }
          //       ]
          //   },
          //   {
          //       "posterId": "8",
          //       "coverImageUrl": 'https://tse4-mm.cn.bing.net/th?id=OIP.xUXmY7tW__eIdSy-RBBqYAEsDi&pid=15.1',
          //       "campus": "ZHUHAI",
          //       "category": "sport",
          //       /**
          //        * status 可报名状态
          //        * 0: 可报名
          //        * 1: 已报名（无需重复报名）
          //        * 2: 报名人数已达上限
          //        * 3: 已过报名截止时间
          //        */
          //       "status": 3,
          //       // 下面4个需要显示在活动列表里的简介信息中（详细信息点开也要有）
          //       "name": '活动名称4-999活动',
          //       "tag": ["珠海校区", "999"],
          //       "date": [2017, 12, 1],
          //       "location": '中山大学珠海校区999室',
          //       // 后面的都是只在详细信息中出现
          //       "orientation": '活动对象（不明白是什么）',
          //       "organizer": '中大999俱乐部',
          //       "details": {
          //           "text": "（这是活动详情文字说明）这个活动关键在于999999，特别999999",
          //           "qrcodeUrl": "https://vignette3.wikia.nocookie.net/zh.uncyclopedia/images/6/6c/2241385239547874665.jpg"
          //       },
          //       // 下面部分的内容可以为null，若null则不显示
          //       "introduction": "（这是活动简介：）是一个99999的活动",
          //       "enrollment": "（这是报名方式）接收个人、组队9999报名",
          //       "dueDate": [2017, 11, 14],
          //       "rewards": "（活动奖励）冠军可得999衣服一件",
          //       "requirements": "只要你足够999就来",
          //       // 内部信息
          //       // 报名表格用一个object数组，key为表单组件类型，value为该表格的描述（待定）
          //       "enrollingForm": [
          //           { "input": "报名人姓名" },
          //           { "input": "联系电话" },
          //           { "input": "专业" },
          //           { "input": "学号" }
          //       ]
          //   }
        ]
    }
})

/*
"tabBar": {
        "color": "#000000",
        "selectedColor": "#5074d7",
        "borderStyle": "black",
        "backgroundColor": "#ffffff",
        "position":"top",
        "list": [{
                "pagePath": "pages/posterwall/main/main",
                "iconPath": "image/tabBar/posterwall.png",
                "selectedIconPath": "image/tabBar/posterwall-hi.png",
                "text": "海报墙"
            },
            {
                "pagePath": "pages/discussion/main/main",
                "iconPath": "image/tabBar/discussion.png",
                "selectedIconPath": "image/tabBar/discussion-hi.png",
                "text": "讨论区"
            },
            {
                "pagePath": "pages/myaccount/main/main",
                "iconPath": "image/tabBar/myaccount.png",
                "selectedIconPath": "image/tabBar/myaccount-hi.png",
                "text": "我的"
            }
        ]
    },
*/