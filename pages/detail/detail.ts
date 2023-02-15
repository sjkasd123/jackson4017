// pages/detail/detail.ts
Page({
    data: {
        check1:"",
      listData: [
        { "date": "2019/01/01", "time": "9:00", "content": "工作内容1" },
        { "date": "2019/01/01", "time": "10:30", "content": "工作内容2" },
        { "date": "2019/01/01", "time": "12:00", "content": "工作内容3" },
        { "date": "2019/01/01", "time": "2:30", "content": "工作内容4" },
        { "date": "2019/01/01", "time": "3:30", "content": "工作内容5" },
        { "date": "2019/01/01", "time": "4:00", "content": "工作内容6" },
        { "date": "2019/01/01", "time": "5:00", "content": "工作内容7" },
        { "date": "2019/01/02", "time": "9:00", "content": "工作内容1" },
        { "date": "2019/01/02", "time": "10:30", "content": "工作内容2" },
        { "date": "2019/01/02", "time": "12:00", "content": "工作内容3" },
        { "date": "2019/01/02", "time": "2:30", "content": "工作内容4" },
        { "date": "2019/01/02", "time": "3:30", "content": "工作内容5" },
        { "date": "2019/01/02", "time": "4:00", "content": "工作内容6" },
        { "date": "2019/01/02", "time": "5:00", "content": "工作内容7" }
      ]
    },
    zfc:function(){
        var that=this;
        wx.request({
            url:"",
            success:function(res){
                console.log(res.data)
                that.setData({
                    check1:res.data
                })
            }
        })
       
    },

    /**
     * 页面的初始数据
     */
   
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})