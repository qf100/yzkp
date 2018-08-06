// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    currentTab: [true, true, true, true],//控制nav-bar的显示
    selectData: ['公司', '职位'],//下拉列表的数据
    index: 0,//选择的下拉列表下标，
    selectBar:[
      {
        url:'newwork/newwork',
        src:'../../image/index/zhiwei.png',
        text:'最新职位'
      },
      {
        url: 'parttime/parttime',        
        src:'../../image/index/time.png',
        text:'兼职职位'
      },
      {
        url: 'selfintro/selfintro',        
        src:'../../image/index/resume.png',
        text:'简历管理'
      },
      {
        url: 'prog/prog',        
        src:'../../image/index/pro.png',
        text:'应聘进度'
      },
      {
        url: 'ability/ability',        
        src:'../../image/index/train.png',
        text:'能力提升'
      }
    ],
    navBarData:['推荐','地区','职位','要求'],
    navbarShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  selectTap() {
    this.setData({
      show: !this.data.show
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      index: Index,
      show: !this.data.show
    });
  },

  onLoad: function (options) {
  
  },
// navbar的展开
  navbarTap: function (e) {
    var i = e.currentTarget.dataset.idx;
    var index = this.data.currentTab[i];
    var hid = "currentTab[" + i + "]";
    console.log(index);
    for (var j = 0; j < this.data.currentTab.length; j++) {
      var act = "currentTab[" + j + "]"
      this.setData({
        [act]: true
      })
    }
    if (index) {
      this.setData({
        [hid]: false
      })
    } else {
      this.setData({
        [hid]: true
      })
    }
  },
// navbar的收起
  hideBar: function (e) {
    var i = Number(e.currentTarget.dataset.idx);
    console.log(typeof i)
    var index = this.data.currentTab[i];
    var hid = "currentTab[" + i + "]";
    this.setData({
      [hid]: true
    })
  },

  //招聘信息页面跳转
  toCompanyDetail: function(e){
    wx.navigateTo({
      url: 'companyrequest/companyrequest',
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