// pages/form/form.ts
Page({
    gotoxinxi:function(){wx.navigateTo({url:"/pages/xinxi/xinxi.wxml",})},
    data: {
        check:"",
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
    check:function(){
        var that=this;
        wx.request({
            url:'',
            success:function(res
                ){
                    console.log(res.data)
                    that.setData({
                        check1:res.data
                    })
                }

        })
    },
    onLoad: function () {
      console.log('onLoad')
    },
    
del:function(){
    var that =this;
    wx.request({
        url:'',
        method:"DELETE",
        success:function(res){
            console.log(res.data)
            
        }
    })
}
  })