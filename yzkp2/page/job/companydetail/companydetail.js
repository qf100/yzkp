// pages/index/companyrequest/companydetail/companydetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    barShow:[false,true]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  // nav-bar的隐藏选择
  choosebar: function(e){
    var i = Number(e.currentTarget.dataset.id);
    var hid = "barShow[" + i + "]";
    for (var j = 0; j < this.data.barShow.length;j++){
      var act = "barShow[" + j + "]"
      this.setData({
        [act]: true
      })
    }
    this.setData({
      [hid]: false
    })
    console.log(this.data.barShow)
  },
  toCompanyDetail:function(){
    wx.navigateTo({
      url: '../jobdetails/jobdetails',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})