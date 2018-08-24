// page/common/msgdetail/msgdetail.js
const webSocketUrl = `ws://192.168.1.123:8080/yzkp/websocket`;
var socket = require('../../../socket.js');

var msgList = [];
var curPage = 1;
var loadMore = false;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    input:'',
    list:[],
    resumeId:'',
    companyId:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      resumeId: options.resumeId,
      companyId: options.companyId,
    })
    socket.setFunc(this.getMsg)
    var msg = {
      msgType: 2,
      resumeId: this.data.resumeId,
      companyId: this.data.companyId,
      content: curPage
    }
    socket.sendMessage(msg)
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
    curPage++;
    loadMore = true;
    wx.showNavigationBarLoading();

    var msg = {
      msgType: 2,
      resumeId: this.data.resumeId,
      companyId: this.data.companyId,
      content: curPage
    }
    socket.sendMessage(msg);
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
  
  },
  getValue:function(e){
    console.log(e.detail.value)
    this.setData({
      input:e.detail.value
    })
  },
  sendBtn:function(){
    var msg = {
      msgType: 0, 
      resumeId: this.data.resumeId,
      companyId: this.data.companyId,
      content: this.data.input
    }
    socket.sendMessage(msg);
  },

  /**
  * 获取socket消息
  */
  getMsg: function(data){
    var msg = JSON.parse(data);
    console.log(msg)

    if (msg.msgType==1){
      var list = msg.list;
      list.reverse();
      msgList = list.concat(msgList);
    }
    if(msg.msgType==2){
      msgList.push(msg.obj);  
    }

    this.setData({ list: msgList }, function(){
      if(loadMore){
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();
        wx.pageScrollTo({ scrollTop: 0 })
      }else{
        wx.pageScrollTo({ scrollTop: 99999999 })
      }
    })    
  }
})