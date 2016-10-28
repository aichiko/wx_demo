//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    myname:'wodetian',
    staffA: {firstName: 'Hulk', lastName: 'Hu'}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },

  onPullDownRefresh: function(){
    console.log('ssss')
  },

  clickAction: function(){
    console.log('wodetian')
  },
  changeText: function(){
    console.log('changtext')
    var that = this
    that.setData({
      motto:'ash'
    })
  }
})
