//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   movies:[],
  },  
  //去往详情页，事件处理函数
  goDetail: function(event) {
    console.log(event);
    console.log(event.currentTarget.dataset.detail);
    app.globalData.detail = event.currentTarget.dataset.detail;
    wx.navigateTo({
      url: '../detail/detail',
    })
  },

  onLoad: function () {
    const that = this;
    wx.request({
      url: 'https://piaofang.maoyan.com/dashboard-ajax/movie',
      success(res) {
        console.log(res)
        that.setData({
          movies: res.data.movieList.list,
        });
      },
    })
  },

  onShow: function () {
    const that = this;
    app.globalData.timeId = setInterval(() => {
      wx.request({
      url:'https://piaofang.maoyan.com/dashboard-ajax/movie',
      success(res) {
        that.setData({
          movies:res.data.movieList.list,
        });
      }
      })
    },5000);
  },

  onHide: function() {
    clearInterval(app.globalData.timeId);
  },

  onPullDownRefresh: function() {
    const that = this;
    wx.request({
      url: 'https://piaofang.maoyan.com/dashboard-ajax/movie',
      success(res) {
        that.setData({
          movies:res.data.movieList.list
        })
      }
    })
  } ,

  onShareAppMessage: function() {
    return {
      title:'票房速递'
    }
  }

})
