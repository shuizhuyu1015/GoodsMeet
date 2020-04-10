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
    banners: [
      {
        img_url: 'https://img12.360buyimg.com/cms/jfs/t1/63001/37/6550/307063/5d4af86bEb5760df5/225b5ba2bcdb05f9.jpg',
      },
      {
        img_url: 'https://img11.360buyimg.com/cms/jfs/t1/49269/36/7020/276222/5d4bbe7aE81846aa8/e59d366307f9a745.jpg',
      },
      {
        img_url: 'https://img10.360buyimg.com/cms/jfs/t1/76451/25/6680/722465/5d4bbb09Ec1df0b44/7408df7c5254f5be.jpg'
      }
    ],
    lampContent: '兰蔻香港会员感谢月，现购物满HK $1,280即可获赠7件保湿旅行装',
    goodsList: [
      {
        src: 'https://img11.360buyimg.com/n7/jfs/t1/39571/30/9576/56840/5d0af29bE5875405c/09609aa0d29836d9.jpg',
        title: '兰蔻（LANCOME）新精华肌底液50ml',
        price: '¥1080'
      },
      {
        src: 'https://img10.360buyimg.com/n7/jfs/t1/14244/12/6010/132776/5c483d4aE6676a301/b8141b3d825a8ed6.jpg',
        title: '兰蔻（LANCOME）肌底精华眼霜/全新精华肌底眼霜 15ml',
        price: '¥469'
      },
      {
        src: 'https://img14.360buyimg.com/n7/jfs/t1/38785/6/8044/79274/5cf4ed57E99cdf548/d98bce866c615155.jpg',
        title: '兰蔻（Lancome）清滢柔肤水400ml（大粉水）',
        price: '¥329'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;

    // var url = app.globalData.txBase + "/home";
    // util.getHttpHelper(url, null, false, this.processHomeData)
    
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