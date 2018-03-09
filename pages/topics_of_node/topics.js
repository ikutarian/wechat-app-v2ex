var utils = require('../../utils/util.js');

Page({

    data: {
        topics: []
    },

    onLoad: function (option) {
        var node_id  = option.node_id;
        var node_title = option.node_title;
        wx.setNavigationBarTitle({
            title: node_title,
        })

        console.log('node_id=' + node_id);
        wx.showLoading({
            title: "加载中...",
        })
        this.load_data(node_id, function () {
            wx.hideLoading();
        })
    },

    load_data: function (node_id, callback) {
        var that = this;
        console.log(that);
        wx.request({
            url: 'https://www.v2ex.com/api/topics/show.json?node_id=' + node_id,
            success: function (res) {

                that.setData({
                    topics: utils.processResData(res.data)
                });

                callback();
            }
        })
    }
})