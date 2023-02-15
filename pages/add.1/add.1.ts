import { button } from "../../miniprogram_npm/vant-weapp/mixins/button";

// pages/add.1/add.1.ts
Page({
    infoadd:function(res){
        console.log(res.data)
        var text1 = res.detail.value.userName
        var text2 = res.detail.value.getAdress
        var text3 = res.detail.value.putAdress
        var text4 = res.detail.value.getTime
        wx.request({
            url:"",
            method:"POST",
            data:{
                text1:text1,
                text2:text2,
                text3:text3,
                text4:text4
            },
            success:function(res){
                console.log(res)
            }
        })

    },
    /**
     * 页面的初始数据
     */
    

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad:function() {
        var that =this;
        wx.request({
            url:"",
            success:function(res){
                console.log(res.data)
                that.setData({
                    text:res.data
                })
        
    }
})
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
   

    