var util = require('../../utils/util.js');
var app = getApp();
var that;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // goods: null,
    goods: {
      id: 110,
      banners: [
        "https://m.360buyimg.com/n12/jfs/t11317/108/1080677336/325163/f4c2a03a/59fd8b17Nbe2fcca3.jpg!q70.jpg",
        "https://m.360buyimg.com/n12/jfs/t11575/282/348533702/60173/d75cd1cc/59edb8d6N688b420f.jpg!q70.jpg",
        "https://m.360buyimg.com/n12/jfs/t11536/279/360605865/15194/442cab0b/59edb8d3N163a7608.jpg!q70.jpg",
        "https://m.360buyimg.com/n12/s750x750_jfs/t9733/126/2033941175/68120/a4eb4468/59edb8d6N37bea6f7.jpg!q70.jpg",
        "https://m.360buyimg.com/n12/s750x750_jfs/t10744/195/2053933852/71608/94425578/59edb8d6Ne28c70ff.jpg!q70.jpg"
      ],
      price: '4890',
      title: '国行iPhone XR 64G',
      imgs: [
        "https://haitao.nosdn1.127.net/8b8f60cb94b148e485dd50934e35ecca1511959468798jal1mola10610.jpg?imageView&quality=98&crop=0_0_750_500&imageView&thumbnail=710x0&quality=85",
        "https://haitao.nosdn1.127.net/8b8f60cb94b148e485dd50934e35ecca1511959468798jal1mola10610.jpg?imageView&quality=98&crop=0_500_750_500&imageView&thumbnail=710x0&quality=85",
        "https://haitao.nosdn1.127.net/8b8f60cb94b148e485dd50934e35ecca1511959468798jal1mola10610.jpg?imageView&quality=98&crop=0_1000_750_500&imageView&thumbnail=710x0&quality=85",
        "https://haitao.nosdn1.127.net/8b8f60cb94b148e485dd50934e35ecca1511959468798jal1mola10610.jpg?imageView&quality=98&crop=0_1500_750_500&imageView&thumbnail=710x0&quality=85",
        "https://haitao.nosdn1.127.net/8b8f60cb94b148e485dd50934e35ecca1511959468798jal1mola10610.jpg?imageView&quality=98&crop=0_2000_750_500&imageView&thumbnail=710x0&quality=85",
        "https://haitao.nosdn1.127.net/8b8f60cb94b148e485dd50934e35ecca1511959468798jal1mola10610.jpg?imageView&quality=98&crop=0_2500_750_500&imageView&thumbnail=710x0&quality=85",
        "https://haitao.nosdn1.127.net/8b8f60cb94b148e485dd50934e35ecca1511959468798jal1mola10610.jpg?imageView&quality=98&crop=0_3000_750_500&imageView&thumbnail=710x0&quality=85",
        "https://haitao.nosdn1.127.net/8b8f60cb94b148e485dd50934e35ecca1511959468798jal1mola10610.jpg?imageView&quality=98&crop=0_3500_750_500&imageView&thumbnail=710x0&quality=85",
        "https://haitao.nosdn1.127.net/8b8f60cb94b148e485dd50934e35ecca1511959468798jal1mola10610.jpg?imageView&quality=98&crop=0_4000_750_500&imageView&thumbnail=710x0&quality=85",
        "https://haitao.nosdn1.127.net/8b8f60cb94b148e485dd50934e35ecca1511959468798jal1mola10610.jpg?imageView&quality=98&crop=0_4500_750_500&imageView&thumbnail=710x0&quality=85",
        "https://haitao.nosdn1.127.net/8b8f60cb94b148e485dd50934e35ecca1511959468798jal1mola10610.jpg?imageView&quality=98&crop=0_5000_750_500&imageView&thumbnail=710x0&quality=85",
        "https://haitao.nosdn1.127.net/8b8f60cb94b148e485dd50934e35ecca1511959468798jal1mola10610.jpg?imageView&quality=98&crop=0_5500_750_500&imageView&thumbnail=710x0&quality=85",
      ]
    },

    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s

    goodsQuantity: 1,
    showDialog: false, 
    standardSelected: false,
    isCartOrBuy: 0  //1，加入购物车确认 2，购买确认
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this;
    let goodsId = options.id;
    
    // let url = app.globalData.txBase + "/goods/" + goodsId;
    // util.getHttpHelper(url, null, false, this.processGoodsData);
  },

  /**
   * 处理商品详情返回数据
   */
  processGoodsData(data) {
    if(data.error_code == 0) {
      let goods = data.data;
      that.setData({
        goods: goods
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  //预览图片
  previewImage: function(e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.goods.banners // 需要预览的图片http链接列表  
    })
  },

  /**
   * 联系客服
   */
  onContactKefu: function(){

  },

  /**
   * 跳到购物车
   */
  toCar() {
    wx.switchTab({
      url: '../cart/cart'
    })
  },

  /**
   * 点击选择规格，弹出弹框
   */
  onSelectedStandard: function(e) {
    this.setData({
      standardSelected: true,
      showDialog: true,
    });
  },
  
  // 点击加入购物车
  onAddCart: function() {
    this.setData({
      isCartOrBuy: 1
    });
    this.confirm();
  },

  // 点击立即购买
  onImmeBuy: function(e){
    this.setData({
      isCartOrBuy: 2
    });
    this.confirm();
  },

  /**
   * 点击底部加入购物车或购买，弹框
   */
  toggleDialog: function (e) {
    this.setData({
      showDialog: true,
      isCartOrBuy: e.target.dataset.index
    });
  },

  /**
   * 确定
   */
  confirm() {
    let cartOrBuy = this.data.isCartOrBuy;
    if (cartOrBuy == 1) {
      let url = app.globalData.txBase + '/goods/addToCart';
      let paras = {
        gid: this.data.goods.id,
        num: this.data.goodsQuantity
      }
      util.postHttpHelper(url, paras, true, function callBack(res) {
        if(res.error_code == 0) {
          wx.showToast({
            title: '加入购物车成功',
          });
        }
      });
    } else {
      wx.showToast({
        title: '立即购买',
      })
    }

        // token过期或无效，重新登录
        // util.wxLogin(function callBackLogin(lData){
        //   if(lData.error_code == 0) {

        //   }
        // });

    this.closeDialog();
  },
  
  // 关闭
  closeDialog: function () {
    this.setData({
      showDialog: false,
      standardSelected: false,
      isCartOrBuy: 0
    });
  },

  /**
   * 计步器
   */
  /* 点击减号 */
  onMinus: function (e) {
    var num = this.data.goodsQuantity;
    // 如果大于1时，才可以减  
    if (num <= 1) {
      return;
    }
    num--;
    this.refreshStepper(num);
  },

  /* 点击加号 */
  onPlus: function (e) {
    var num = this.data.goodsQuantity;
    // 不作过多考虑自增1  
    num++;
    this.refreshStepper(num);
  },

  /* 输入框事件 */
  onManual: function (e) {
    var num = e.detail.value;
    if (num < 1) {
      num = 1;
    }
    this.refreshStepper(num);
  },

  refreshStepper: function (num) {
    // 将数值写回  
    this.setData({
      goodsQuantity: num
    });
  }
  
})