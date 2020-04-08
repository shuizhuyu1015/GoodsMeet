const base64 = require('base64.js');

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * GET请求
 */
function getHttpHelper(url, data, auth_required, callBack) {
  wx.showNavigationBarLoading();
  var header = {
    'content-type': 'application/json'
  }
  // 如需要验证token，请求头增加参数
  if (auth_required) {
    let token = wx.getStorageSync('token');
    header.Authorization = 'Basic ' + token;
  }
  wx.request({
    method: "GET",
    url: url,
    data: data,
    header: header,
    success: res => {
      console.log(url);
      console.log(res);
      callBack(res.data);
    },
    complete: function () {
      wx.hideNavigationBarLoading();
    }
  })
}

/** 
 * POST请求
 */
function postHttpHelper(url, data, auth_required, callBack) {
  wx.showLoading({
    title: '加载中',
    mask: true
  });
  var header = {
    'content-type': 'application/form-data'
  }
  // 如需要验证token，请求头增加参数
  if(auth_required) {
    let token = wx.getStorageSync('token');
    console.log('token:',token)
    console.log('base64Token:', base64.baseEncode(token))
    header.Authorization = 'Basic ' + base64.baseEncode(token);
  }
  wx.request({
    method: "POST",
    url: url,
    data: data,
    header: header,
    success: res => {
      console.log(url + '\n' + 'paras:' + JSON.stringify(data));
      console.log(res);
      callBack(res.data);
    },
    complete: function () {
      wx.hideLoading();
    }
  })
}

/**
 * 小程序登录
 * 先调用button.open-type.getUserInfo
 * 再传入userInfo，生成token（包含openid和scope权限）
 * ✅在需要识别openid的地方，校验token，解析出openid，如token失效，重新走登录流程
 */
function wxLogin(callBack) {
  //登录
  wx.login({
    success: res => {
      // 发送 res.code 到后台换取 openId, sessionKey, unionId
      if (res.code) {
        // 获取用户信息
        wx.getSetting({
          success: setting => {
            if (setting.authSetting['scope.userInfo']) {
              // 已授权
              getUserInfo(res.code, callBack);
            } else {
              // 未授权
              wx.authorize({
                scope: 'scope.userInfo',
                success(r) {
                  getUserInfo(res.code, callBack);
                }
              })
            }
          }
        });
      }
    }
  });
}

// 获取用户信息
function getUserInfo(code, callBack) {
  const app = getApp();
  // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
  wx.getUserInfo({
    success: res => {
      // 可以将 res 发送给后台解码出 unionId
      app.globalData.userInfo = res.userInfo

      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      if (app.userInfoReadyCallback) {
        app.userInfoReadyCallback(res)
      }

      //获取token
      getToken(code, res.userInfo, callBack);
    }
  })
}

// 换取openid，加密token
function getToken(code, userInfo, callBack) {
  const app = getApp();
  let url = app.globalData.txBase + "/token";
  let paras = {
    code: code,
    nickname: userInfo.nickName,
    gender: userInfo.gender
  }
  postHttpHelper(url, paras, false, function callLoginData(data) {
    wx.setStorageSync('token', data.data.token);
    // 登录获取token成功, 回传token信息
    callBack(data)
  });
}

// 校验token
function getTokenInfo(callBack) {
  const app = getApp();
  let token = wx.getStorageSync('token');
  let url = app.globalData.txBase + '/token/verify';
  let paras = {
    token: token
  }
  postHttpHelper(url, paras, false, function callBackToken(data) {
    callBack(data);
  });
}

module.exports = {
  formatTime: formatTime,
  getHttpHelper: getHttpHelper,
  postHttpHelper: postHttpHelper,
  wxLogin: wxLogin,
  getTokenInfo: getTokenInfo
}
