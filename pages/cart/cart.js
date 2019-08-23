var that;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAllSelected: false,
    totalPrice: 0,
    selectedCount: 0,
    goodsList: [
      {
        goodsId: 1,
        goodsImage: 'https://img14.360buyimg.com/n7/jfs/t1/38785/6/8044/79274/5cf4ed57E99cdf548/d98bce866c615155.jpg',
        goodsTitle: '兰蔻（Lancome）清滢柔肤水400ml（大粉水）',
        goodsPrice: 329,
        num: 1,
        isSelected: true
      },
      {
        goodsId: 2,
        goodsImage: 'https://img14.360buyimg.com/n7/jfs/t1/38785/6/8044/79274/5cf4ed57E99cdf548/d98bce866c615155.jpg',
        goodsTitle: '兰蔻（Lancome）清滢柔肤水400ml（大粉水）',
        goodsPrice: 329,
        num: 1,
        isSelected: true
      },
      {
        goodsId: 3,
        goodsImage: 'https://img14.360buyimg.com/n7/jfs/t1/38785/6/8044/79274/5cf4ed57E99cdf548/d98bce866c615155.jpg',
        goodsTitle: '兰蔻（Lancome）清滢柔肤水400ml（大粉水）',
        goodsPrice: 329,
        num: 1,
        isSelected: true
      },
      {
        goodsId: 4,
        goodsImage: 'https://img10.360buyimg.com/n7/jfs/t1/14244/12/6010/132776/5c483d4aE6676a301/b8141b3d825a8ed6.jpg',
        goodsTitle: '兰蔻（LANCOME）肌底精华眼霜/全新精华肌底眼霜 15ml',
        goodsPrice: 469,
        num: 1,
        isSelected: true
      },
      {
        goodsId: 5,
        goodsImage: 'https://img14.360buyimg.com/n7/jfs/t1/38785/6/8044/79274/5cf4ed57E99cdf548/d98bce866c615155.jpg',
        goodsTitle: '兰蔻（Lancome）清滢柔肤水400ml（大粉水）',
        goodsPrice: 329,
        num: 1,
        isSelected: true
      },
      {
        goodsId: 6,
        goodsImage: 'https://img14.360buyimg.com/n7/jfs/t1/38785/6/8044/79274/5cf4ed57E99cdf548/d98bce866c615155.jpg',
        goodsTitle: '兰蔻（Lancome）清滢柔肤水400ml（大粉水）',
        goodsPrice: 329,
        num: 1,
        isSelected: true
      },
      {
        goodsId: 7,
        goodsImage: 'https://img14.360buyimg.com/n7/jfs/t1/38785/6/8044/79274/5cf4ed57E99cdf548/d98bce866c615155.jpg',
        goodsTitle: '兰蔻（Lancome）清滢柔肤水400ml（大粉水）',
        goodsPrice: 329,
        num: 1,
        isSelected: true
      },
      {
        goodsId: 8,
        goodsImage: 'https://img14.360buyimg.com/n7/jfs/t1/38785/6/8044/79274/5cf4ed57E99cdf548/d98bce866c615155.jpg',
        goodsTitle: '兰蔻（Lancome）清滢柔肤水400ml（大粉水）',
        goodsPrice: 329,
        num: 1,
        isSelected: true
      },
      {
        goodsId: 9,
        goodsImage: 'https://img14.360buyimg.com/n7/jfs/t1/38785/6/8044/79274/5cf4ed57E99cdf548/d98bce866c615155.jpg',
        goodsTitle: '兰蔻（Lancome）清滢柔肤水400ml（大粉水）',
        goodsPrice: 329,
        num: 1,
        isSelected: true
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;
    //计算合计价格
    var totalPrice = 0;
    var selectedCount = 0;
    for(let i = 0; i < this.data.goodsList.length; i++) {
      let goods = this.data.goodsList[i];
      if(goods.isSelected){
        totalPrice += goods.goodsPrice * goods.num;
        selectedCount ++;
      }
    }
    let allSelected = (selectedCount == this.data.goodsList.length);
    this.setData({
      totalPrice: totalPrice,
      selectedCount: selectedCount,
      isAllSelected: allSelected
    })
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


  //勾选单个商品
  onSelectSingle: function(e) {
    let index = e.currentTarget.dataset.index;
    let totalPrice = this.data.totalPrice;
    let selectedCount = this.data.selectedCount;
    
    let isCurrentSelected = !this.data.goodsList[index].isSelected;
    let selectedKey = "goodsList[" + index + "].isSelected";

    //价钱统计
    if (isCurrentSelected) {
      totalPrice = totalPrice + (this.data.goodsList[index].goodsPrice * this.data.goodsList[index].num);
      selectedCount ++;
    }else {
      totalPrice = totalPrice - (this.data.goodsList[index].goodsPrice * this.data.goodsList[index].num);
      selectedCount --;
    }
    //是否全选判断
    let allSelected = (selectedCount == this.data.goodsList.length);

    this.setData({
      [selectedKey]: isCurrentSelected,
      totalPrice: totalPrice,
      isAllSelected: allSelected,
      selectedCount: selectedCount
    })
  },


  //全选
  onSelectAll: function(){
    let totalMoney = 0;
    var selectedCount = this.data.selectedCount;
    var goodsList = this.data.goodsList;
    if (!this.data.isAllSelected) {
      for (let i = 0; i < goodsList.length; i++) {
        goodsList[i].isSelected = true;
        totalMoney += goodsList[i].goodsPrice * goodsList[i].num;
      }
      selectedCount = goodsList.length;
    }else {
      for (let i = 0; i < goodsList.length; i++) {
        goodsList[i].isSelected = false;
      }
      selectedCount = 0;
    }
    this.setData({
      goodsList: goodsList,
      isAllSelected: !this.data.isAllSelected,
      totalPrice: totalMoney,
      selectedCount: selectedCount
    })
  },


  /**
   * 计步器
   */
  /* 点击减号 */
  onMinus: function (e) {
    let index = e.target.dataset.index;
    var num = this.data.goodsList[index].num;
    // 如果大于1时，才可以减  
    if(num <= 1) {
      return;
    }
    num--;
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
      num = 1;
    }
    this.refreshStepper(num, index);
  },

  refreshStepper: function(num, index) {
    let numKey = "goodsList[" + index + "].num";

    let totalPrice = this.data.totalPrice;
    let currentGoods = this.data.goodsList[index];
    //如果当前操作的商品是被选中的，则要更新总价
    if(currentGoods.isSelected) {
      if (num >= currentGoods.num) {
        totalPrice += currentGoods.goodsPrice * (num - currentGoods.num);
      } else {
        totalPrice -= currentGoods.goodsPrice * (currentGoods.num - num);
      }
    }
    // 将数值写回  
    that.setData({
      [numKey]: num,
      totalPrice: totalPrice
    });
  }
})