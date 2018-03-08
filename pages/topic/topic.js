var utils = require('../../utils/util.js');

Page({

    /**
     * 页面的初始数据
     */
    data: {
        item: null,
        footer: '',
        replies: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        
        wx.request({
            url: 'https://www.v2ex.com/api/topics/show.json?id=' + options.id,
            success: function(res) {
                var data = res.data[0];
                
                that.setData({
                    item: data,
                    footer: data.replies + ' 回复&nbsp;|&nbsp;直到 ' + data.last_modified
                });
            }
        });
        
        wx.request({
            url: 'https://www.v2ex.com/api/replies/show.json?topic_id=' + options.id,
            success: function(res) {                
                that.setData({
                    replies: res.data
                });
            }
        });
    }
})