// home.js
Page({
  data:{
    // text:"这是一个页面"
    message: 'ash',
    array: [1, 2, 3, 4, 5],
    view: 'MINA',
    staffA: {firstName: 'Hulk', lastName: 'Hu'},
    staffB: {firstName: 'Shang', lastName: 'You'},
    staffC: {firstName: 'Gideon', lastName: 'Lin'},
    count: 0
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },

  add: function(){
      this.setData({
          count: this.data.count+1
      })
  },

  tapName: function(event){
    console.log(event)
    if(event.currentTarget.dataset.hi == 'MINA'){
      wx.navigateTo({
        url: '../next/next'
      })  
    }else {
      wx.navigateTo({
        url: '../ash/ash'
      }) 
    }
  }
})