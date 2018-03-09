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
                
                var temp = new Date(data.last_touched * 1000);
                var last_time = temp.getFullYear() + '-'
                    + (temp.getMonth() + 1) + '-'
                    + temp.getDay() + ' '
                    + temp.getHours() + ':'
                    + temp.getMinutes() + ':'
                    + temp.getSeconds();

                that.setData({
                    item: data,
                    footer: data.replies + ' 回复&nbsp;|&nbsp;直到 ' + last_time
                });
            }
        });
        
        wx.request({
            url: 'https://www.v2ex.com/api/replies/show.json?topic_id=' + options.id,
            success: function(res) {                
                that.setData({
                    replies: utils.processResData(res.data)
                });
            }
        });
    }
})