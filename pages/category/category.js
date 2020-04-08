var util = require('../../utils/util.js')
var app = getApp();
var that;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateItems: [],
    navItems: [
      {
        cate: '护肤美体',
        cateId: 1,
        tree: [
          {
            brand: '雅诗兰黛',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t2668/260/4025973149/9893/c3adfddc/57a82f4eNeae01b08.jpg',
            brandId: 111
          },
          {
            brand: '阿玛尼',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t7825/24/1065987331/19754/53113115/599a3631Nff383916.jpg',
            brandId: 112
          },
          {
            brand: '兰蔻',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t5602/272/3930117523/26502/846945b3/5944be04Nd3b491be.jpg',
            brandId: 113
          },
          {
            brand: '资生堂',
            logo: 'https://img.alicdn.com/tfscom/TB1TDymgdXXWeJjSZFvXXa6lpXa.jpg',
            brandId: 114
          },
          {
            brand: '雪花秀',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t2218/86/2788476464/3631/26b5745a/56ebc705Nf8a60369.jpg',
            brandId: 115
          },
          {
            brand: '迪奥',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t4096/198/1419256260/4621/a44efbd1/58773bc2Nb0e24a44.jpg',
            brandId: 116
          },
          {
            brand: 'AHC',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t18655/32/889345592/2762/2309161a/5ab1c247Ne1ffc619.jpg',
            brandId: 117
          },
          {
            brand: 'whoo',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t2323/273/430152443/18574/b300f2ab/560a5c7aN7c8fcb4e.jpg',
            brandId: 118
          },
          {
            brand: 'YSL',
            logo: 'https://img20.360buyimg.com/popshop/jfs/t20407/122/1576958200/3371/b57f5150/5b713a30N64d937c4.jpg',
            brandId: 119
          },
          {
            brand: '欧莱雅',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t24889/256/1189478556/6211/876698cb/5b8c9149N501b62b2.jpg',
            brandId: 120
          },
          {
            brand: '黛珂',
            logo: 'http://img30.360buyimg.com/popshop/jfs/t1/1950/35/3791/2669/5b9a4080E6753e2de/fb62555004857dc2.png',
            brandId: 121
          },
          {
            brand: '娇韵诗',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t23212/325/872309952/10374/dcbdbdd6/5b470131Ne5877442.jpg',
            brandId: 123
          },
          {
            brand: '兰芝',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t1246/60/652074827/5309/44f5f684/553852dbN223db940.jpg',
            brandId: 124
          },
          {
            brand: 'MAC',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t1/3299/4/3927/1706/5b9b15c8Eaaeb1418/5522ba068779534e.png',
            brandId: 125
          },
          {
            brand: 'FANCL',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t2470/148/1659087024/25921/342a2341/566a6889N629767c2.jpg',
            brandId: 126
          }
        ]
      },
      {
        cate: '奶粉专区',
        cateId: 2,
        tree: [
          {
            brand: '爱他美',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t27745/39/463609088/13935/75a3fa92/5baf39e6N8d454b8f.jpg',
            brandId: 211
          },
          {
            brand: 'a2',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t18988/114/1818872745/2839/a4d5c229/5ad80c6dN02b0b0c3.png',
            brandId: 212
          },
          {
            brand: '诺优能',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t21634/197/690884617/11186/49ed43f2/5b16608fNa6e1835b.png',
            brandId: 213
          },
          {
            brand: '喜宝',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t21331/213/142849993/10896/c7c500f5/5afe79edNc7c00138.jpg',
            brandId: 214
          }
        ]
      },
      {
        cate: '营养保健',
        cateId: 3,
        tree: [
          {
            brand: 'Bio island',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t6163/145/2545954648/4370/49ab4890/59633e77N93b2a686.png',
            brandId: 311
          },
          {
            brand: 'GNC',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t3538/194/432529060/30332/e8c93aec/58098264Nc7430d77.jpg',
            brandId: 312
          },
          {
            brand: 'Swisse',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t2734/341/3557573636/11083/c44adf2a/5791c7beN290602e0.jpg',
            brandId: 313
          },
          {
            brand: '家得路',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t1/7414/28/4486/15810/5bdaaae8E3d4b330a/14d2fd4fcc0152ed.png',
            brandId: 314
          },
          {
            brand: '楼上',
            logo: 'https://img14.360buyimg.com/n7/jfs/t1/2841/12/10013/125303/5bc97b59E3d43c9f3/9b3c681992bd62ec.jpg',
            brandId: 318
          }
        ]
      },
      {
        cate: '面膜专区',
        cateId: 4,
        tree: [
          {
            brand: '可莱丝',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t2812/212/436133134/4878/51d4f935/57149abeNe6460ebb.jpg',
            brandId: 411
          },
          {
            brand: '春雨',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t25594/38/785840312/7646/b59d606a/5b7bbb56N9f28dfac.jpg',
            brandId: 412
          },
          {
            brand: '丽得姿',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t20971/122/356141331/6213/2e520852/5b0b6faaN2667005b.jpg',
            brandId: 413
          },
          {
            brand: '兰芝',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t1246/60/652074827/5309/44f5f684/553852dbN223db940.jpg',
            brandId: 414
          },
          {
            brand: '森田',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t14212/282/2240579162/26721/c7fe790a/5a7c1b88N17aa78c6.jpg',
            brandId: 415
          },
          {
            brand: 'JMsolution',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t21130/87/2157816259/15571/a93bd8a/5b483ebbNd54fd5a0.png',
            brandId: 416
          },
          {
            brand: 'BABYISH',
            logo: 'https://img13.360buyimg.com/n7/jfs/t22969/20/479690146/100859/cf4e4fbb/5b31b3bcNe4aad8fa.jpg',
            brandId: 417
          },
          {
            brand: 'RAY',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t1/966/33/3899/3337/5b9a2da0Eefbbfdf2/d6d33750e3d97545.png',
            brandId: 418
          },
          {
            brand: '雪花秀',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t2218/86/2788476464/3631/26b5745a/56ebc705Nf8a60369.jpg',
            brandId: 419
          }
        ]
      },
      {
        cate: '居家日用',
        cateId: 5,
        tree: [
          {
            brand: '贝德玛卸妆水',
            logo: 'https://img30.360buyimg.com/popshop/jfs/t2458/349/919496288/7268/5125a5dc/5632f22eNd9b1610a.png',
            brandId: 511
          },
          {
            brand: '黄道益',
            logo: 'https://img12.360buyimg.com/n7/jfs/t14440/327/1847614979/408913/756baa7c/5a5c02e1Ncad9bebe.jpg',
            brandId: 512
          },
          {
            brand: '澳洲脚气膏',
            logo: 'https://img11.360buyimg.com/n7/jfs/t24433/71/2031510945/226799/6a4882ff/5b726407N0d52dfb4.jpg',
            brandId: 316
          },
          {
            brand: '泰国足贴',
            logo: 'https://img12.360buyimg.com/n7/jfs/t16327/20/438375438/319348/63115b5d/5a31e8f3Nf2abdb74.jpg',
            brandId: 317
          },
        ]
      }
    ],
    curNav: 1,
    curIndex: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this;

    var url = app.globalData.txBase + "/category/all";
    util.getHttpHelper(url, null, false, this.processCateData)
  },

  processCateData(data) {
    var code = data.error_code;
    if(code == 0) {
      that.setData({
        cateItems: data.data
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
   * 
   */
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值
    let id = e.target.dataset.id;
    let index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index
    this.setData({
      curNav: id,
      curIndex: index
    })
  },
})