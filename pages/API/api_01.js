
Page({
  data:{
    
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // 貌似只支持https请求
    wx.request({
      url: 'https://www.baidu.com',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res)
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    });

    wx.chooseImage({
      count: 9, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function(res){
        // success
        var tempFilePaths = res.tempFilePaths
          wx.uploadFile({
          url: 'https://String',
          filePath: tempFilePaths[0],
          name:'name',
          // header: {}, // 设置请求的 header
          // formData: {}, // HTTP 请求中其他额外的 form data
          success: function(res){
            // success

          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
    
    wx.downloadFile({
      url: "https://URL",
      // type: 'image', // 下载资源的类型，用于客户端识别处理，有效值：image/audio/video
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        wx.playVoice({
          filePath: res.tempFilePath,
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
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