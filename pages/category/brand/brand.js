var util = require('../../../utils/util.js')
var app = getApp();
var that;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    products: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
    var brandId = options.id;

    wx.setNavigationBarTitle({
      title: brandId,
    });

    // var url = app.globalData.txBase + "/brand/" + brandId;
    // util.getHttpHelper(url, null, false, this.processBrandData)

    
  },

  processBrandData(data) {
    var code = data.error_code;
    if (code == 0) {
      that.setData({
        products: data.data.products
      });
      wx.setNavigationBarTitle({
        title: data.data.description,
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 点击单个商品
   */
  onTapGoods: function (e) {
    let goodsid = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/goods-detail/goods-detail?id=' + goodsid,
    });
  }
})