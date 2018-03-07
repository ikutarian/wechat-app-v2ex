Page({/**
     * 页面的初始数据
     */
  data: {
    topics: []
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
    this.load_data();
  },

  load_data: function () {
    var that = this;
    wx.request({
      url: 'https://www.v2ex.com/api/topics/latest.json',
      success: function (res) {
        var data = res.data;
        var utils = require('../../utils/util.js');
        for (var item of data) {
          item.last_modified = utils.getDateDiff(item.last_modified)
        }
        that.setData({
          topics: data
        });
        wx.stopPullDownRefresh();
      }
    })
  }
})