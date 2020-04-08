var util = require('../../utils/util.js')
var app = getApp();
var that;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    banners: [],
    lampContent: '兰蔻香港会员感谢月，现购物满HK $1,280即可获赠7件保湿旅行装',
    goodsList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;

    var url = app.globalData.txBase + "/home";
    util.getHttpHelper(url, null, false, this.processHomeData)
    
  },

  /**
   * 首页数据返回处理
   */
  processHomeData(data) {
    var code = data.error_code;
    if (code == 0){
      that.setData({
        banners: data.data.banner,
        goodsList: data.data.goods
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
   * 点击banner
   */
  onTapBanner: function(e) {
    var index = e.target.dataset.index;
    var banner = this.data.banners[index];
    if(banner.type == 1) {
      let goods_id = banner.keyword;
      wx.navigateTo({
        url: '/pages/goods-detail/goods-detail?id=' + goods_id,
      })
    }
  },

  /**
   * 点击单个商品
   */
  onTapGoods: function(e) {
    let goodsid = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/goods-detail/goods-detail?id=' + goodsid,
    });
  }
})