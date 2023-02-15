// pages/register/register.ts
Page({
    Idinput:function(e){
        var val = e.detail.value;
        if(!val){
            wx.showToast({
                title:"请输入账号",
                icon:"error"

            })
            return
        }
        if(val!=""){
            this.setData({
                Id:val

            })
        }
        
    },
    Pswinput:function(e){
        var val = e.detail.value;
        if(!val.password){
            wx.showToast({
                title:"密码输入错误",
                icon:"error"
            })
            return
        }
        if(val!=""){
            this.setData({
                password:val

            })
        }
       

    },
    register:function(e){
        console.log(e.detail.value);
        var val =e.detail.value;
        val.id=e.detail.value.id;
        val.password1=e.detail.value.password1;
        val.password2=e.detail.value.password2;
        if(val.password1==""||val.password2=="null"){
            wx.showToast({
                title:"密码为空",
                icon:"error",
                duration:2000

            })
        }else if(val.password1==val.password2){}
        else{
            wx.showToast({
                title:"两次密码不一致",
                icon:"error",
                duration:2000
            })
        }
            
        console.log(val);
         //本地存多个用户
         var arr=wx.getStorageSync('userobjs')||[];
         arr.push(val);
         wx.setStorageSync('userobjs',arr);
         wx.showToast({
             title:"注册成功",
             duration:2000,
             success:function(){
                 
             }
         })

        
    },
    submit:function(e){
        wx.request({
            url:"http://39.101.214.179:8091/index.php?act=register",
            method:"POST",
            data:{
                id:this.Idinput,
                password:this.Pswinput,
            },
            success:function(res){
                console.log(res)
            }
        })
    },

    /**
     * 页面的初始数据
     */
    data: {
        Id:"",
        password:""

    },

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



































