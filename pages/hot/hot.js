// pages/hot/hot.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        latest_topics: []
    },
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.load_data()
    },
    
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        this.load_data()
    },
  
    load_data: function() {
        var that = this;
        wx.request({
            url: 'https://www.v2ex.com/api/topics/hot.json',
            success: function(res) {
                that.setData({
                    latest_topics: res.data
                })
            }
        })        
    }
})