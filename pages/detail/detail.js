//logs.js
//获取应用实例
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      detail: app.globalData.detail
      })
      console.log(options)
      console.log(app.globalData.detail)
  },



  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '票房速递'
    }
  }
})