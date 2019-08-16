var that;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList: [
      {
        goodsId: 1,
        goodsImage: 'https://img14.360buyimg.com/n7/jfs/t1/38785/6/8044/79274/5cf4ed57E99cdf548/d98bce866c615155.jpg',
        goodsTitle: '兰蔻（Lancome）清滢柔肤水400ml（大粉水）',
        goodsPrice: '¥329',
        num: 1,
        minusStatus: 'disabled'
      },
      {
        goodsId: 2,
        goodsImage: 'https://img14.360buyimg.com/n7/jfs/t1/38785/6/8044/79274/5cf4ed57E99cdf548/d98bce866c615155.jpg',
        goodsTitle: '兰蔻（Lancome）清滢柔肤水400ml（大粉水）',
        goodsPrice: '¥329',
        num: 1,
        minusStatus: 'disabled'
      },
      {
        goodsId: 3,
        goodsImage: 'https://img14.360buyimg.com/n7/jfs/t1/38785/6/8044/79274/5cf4ed57E99cdf548/d98bce866c615155.jpg',
        goodsTitle: '兰蔻（Lancome）清滢柔肤水400ml（大粉水）',
        goodsPrice: '¥329',
        num: 1,
        minusStatus: 'disabled'
      },
      {
        goodsId: 3,
        goodsImage: 'https://img14.360buyimg.com/n7/jfs/t1/38785/6/8044/79274/5cf4ed57E99cdf548/d98bce866c615155.jpg',
        goodsTitle: '兰蔻（Lancome）清滢柔肤水400ml（大粉水）',
        goodsPrice: '¥329',
        num: 1,
        minusStatus: 'disabled'
      },
      {
        goodsId: 3,
        goodsImage: 'https://img14.360buyimg.com/n7/jfs/t1/38785/6/8044/79274/5cf4ed57E99cdf548/d98bce866c615155.jpg',
        goodsTitle: '兰蔻（Lancome）清滢柔肤水400ml（大粉水）',
        goodsPrice: '¥329',
        num: 1,
        minusStatus: 'disabled'
      },
      {
        goodsId: 3,
        goodsImage: 'https://img14.360buyimg.com/n7/jfs/t1/38785/6/8044/79274/5cf4ed57E99cdf548/d98bce866c615155.jpg',
        goodsTitle: '兰蔻（Lancome）清滢柔肤水400ml（大粉水）',
        goodsPrice: '¥329',
        num: 1,
        minusStatus: 'disabled'
      },
      {
        goodsId: 3,
        goodsImage: 'https://img14.360buyimg.com/n7/jfs/t1/38785/6/8044/79274/5cf4ed57E99cdf548/d98bce866c615155.jpg',
        goodsTitle: '兰蔻（Lancome）清滢柔肤水400ml（大粉水）',
        goodsPrice: '¥329',
        num: 1,
        minusStatus: 'disabled'
      },
      {
        goodsId: 3,
        goodsImage: 'https://img14.360buyimg.com/n7/jfs/t1/38785/6/8044/79274/5cf4ed57E99cdf548/d98bce866c615155.jpg',
        goodsTitle: '兰蔻（Lancome）清滢柔肤水400ml（大粉水）',
        goodsPrice: '¥329',
        num: 1,
        minusStatus: 'disabled'
      },
      {
        goodsId: 3,
        goodsImage: 'https://img14.360buyimg.com/n7/jfs/t1/38785/6/8044/79274/5cf4ed57E99cdf548/d98bce866c615155.jpg',
        goodsTitle: '兰蔻（Lancome）清滢柔肤水400ml（大粉水）',
        goodsPrice: '¥329',
        num: 1,
        minusStatus: 'disabled'
      },
      {
        goodsId: 3,
        goodsImage: 'https://img14.360buyimg.com/n7/jfs/t1/38785/6/8044/79274/5cf4ed57E99cdf548/d98bce866c615155.jpg',
        goodsTitle: '兰蔻（Lancome）清滢柔肤水400ml（大粉水）',
        goodsPrice: '¥329',
        num: 1,
        minusStatus: 'disabled'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
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
   * 计步器
   */
  /* 点击减号 */
  onMinus: function (e) {
    let index = e.target.dataset.index;
    var num = this.data.goodsList[index].num;
    // 如果大于1时，才可以减  
    if (num > 1) {
      num--;
    }
    this.refreshStepper(num, index);
  },

  /* 点击加号 */
  onPlus: function (e) {
    let index = e.target.dataset.index;
    var num = this.data.goodsList[index].num;
    // 不作过多考虑自增1  
    num++;
    this.refreshStepper(num, index);
  },

  /* 输入框事件 */
  onManual: function (e) {
    let index = e.target.dataset.index;
    var num = e.detail.value;
    if (num < 1) {
      return;
    }
    this.refreshStepper(num, index);
  },

  refreshStepper: function(num, index) {
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    let numKey = "goodsList[" + index + "].num";
    let minusKey = "goodsList[" + index + "].minusStatus"
    // 将数值与状态写回  
    that.setData({
      [numKey]: num,
      [minusKey]: minusStatus
    });
  }
})