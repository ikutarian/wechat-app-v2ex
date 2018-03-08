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
    wx.showLoading({
      title: "加载中...",
    })
    this.load_data(function () {
      wx.hideLoading();
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.load_data(function () {
      wx.stopPullDownRefresh();
    });
  },

  load_data: function (callback) {
    var that = this;
    wx.request({
      url: 'https://www.v2ex.com/api/topics/latest.json',
      success: function (res) {
        var utils = require('../../utils/util.js');
        that.setData({
          topics: utils.processResData(res.data)
        });

        callback();
      }
    })
  }
})