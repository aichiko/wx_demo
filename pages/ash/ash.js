Page({
  data:{
    // text:"这是一个页面"
    items: [
        'sheet','modal','toast'
    ],
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
  },
    audioPlay: function () {
        this.audioCtx.play()
    },
    audioPause: function () {
        this.audioCtx.pause()
    },
    audio14: function () {
        this.audioCtx.seek(14)
    },
    audioStart: function () {
        this.audioCtx.seek(0)
    },
  showSheetView: function(e){
      console.log(e);
      if(e.currentTarget.dataset.tag == 'sheet'){
        wx.showActionSheet({
        itemList: ['A', 'B', 'C'],
        success: function(res) {
            if (!res.cancel) {
            console.log(res.tapIndex)
                }
            }
        })
      }else if(e.currentTarget.dataset.tag == 'modal'){
          wx.showModal({
            title: '提示',
            content: '这是一个模态弹窗',
            success: function(res) {
                if (res.confirm) {
                console.log('用户点击确定')
                }
            }
        })
      }else if(e.currentTarget.dataset.tag == 'toast'){
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
        })
      }
  },

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
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