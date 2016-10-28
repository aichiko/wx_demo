// next.js

globalData: {
    var types = ['default','primary','warn'];
    var sizes = ['default','mini'];
}

Page({
  data:{
    // text:"这是一个页面"
    types: types,
    size: sizes,
    disabled: false,
    plain: false,
    loading: false,
    time: '12:01',
    items: [
      {name: 'USA', value: '美国'},
      {name: 'CHN', value: '中国', checked: 'true'},
      {name: 'BRA', value: '巴西'},
      {name: 'JPN', value: '日本'},
      {name: 'ENG', value: '英国'},
      {name: 'TUR', value: '法国'},
    ]
  },

  setDisabled: function(e){
    this.setData({
      disabled: !this.data.disabled,
    })
  },
  setPlain: function(e){
    this.setData({
      plain: !this.data.plain,
    })
  },
  setLoading: function(e){
    this.setData({
      loading: !this.data.loading,
    })
  },
  checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },

  formSubmit: function(e){
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },

  formReset: function(e){
    console.log('form发生了reset事件')
  },

  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log('next加载完成!')
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
  }
})