var util = require('utils/util.js')
var that;

App({
  onLaunch: function () {
    that = this;
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    util.wxLogin(res => {
      
    });
  },

  globalData: {
    userInfo: null,
    txBase: "http://127.0.0.1:5000/v1",
  }
})