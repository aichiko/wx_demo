
function getRandomColor(){
    let rgb = []
    for(let i=0;i<3;i++){
      let color = Math.floor(Math.random()* 256).toString(16)
      color = color.length == 1?'0'+color:color
      rgb.push(color)
    }
    return '#'+rgb.join('')
};

Page({
  inputValue: '',
  data:{
    // text:"这是一个页面"
    items: [
        'sheet','modal','toast'
    ],
    danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }
    ],
    videoSrc: '',
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    //map
    markers: [{
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园',
      desc: '我现在的位置'
    }],
    covers: [{
      latitude: 23.099794,
      longitude: 113.324520,
      iconPath: '../images/car.png',
      rotate: 10
    }, {
      latitude: 23.099298,
      longitude: 115.324129,
      iconPath: '../images/car.png',
      rotate: 90
    }]
  },
  
  bindButtonTap: function(e){
    this.setData({
      videoSrc: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
    })
  },
  bindInputBlur: function(e){
    this.inputValue = e.detail.value
  },
  bindSendDanmu: function(e){
    let text = this.inputValue
    var color = getRandomColor()
    this.videoContext.sendDanmu({
      text: text,
      color: color
    })
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

    console.log(getRandomColor())
  },
  onReady:function(){
    // 页面渲染完成
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
    this.videoContext = wx.createVideoContext('myVideo')

    // 使用 wx.createContext 获取绘图上下文 context
    var context = wx.createContext()

    context.setStrokeStyle("#00ff00")
    context.setLineWidth(5)
    context.rect(0, 0, 200, 200)
    context.stroke()
    context.setStrokeStyle("#ff0000")
    context.setLineWidth(2)
    context.moveTo(160, 100)
    context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    context.moveTo(140, 100)
    context.arc(100, 100, 40, 0, Math.PI, false)
    context.moveTo(85, 80)
    context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    context.moveTo(125, 80)
    context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    context.stroke()

    // 调用 wx.drawCanvas，通过 canvasId 指定在哪张画布上绘制，通过 actions 指定绘制行为
    wx.drawCanvas({
      canvasId: 'firstCanvas',
      actions: context.getActions() // 获取绘图动作数组
    })
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