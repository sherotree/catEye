//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   movies:[],
  },  
  onLoad: function () {
    const that = this;
    wx.request({
      url: 'http://piaofang.maoyan.com/second-box',
      success(res) {
        that.setData({
          movies:res.data.data.list,
        });
      },
    })
  },
})