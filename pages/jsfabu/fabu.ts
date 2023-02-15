Page({
    fabu:function(res){
       console.log(res)
       //四十个var 我懒得写
       var userName = res.detail.value.userName
    var getAdress = res.detail.value.getAdress
    var putAdress = res.detail.value.putAdress
    var getTime = res.detail.value.getTime
    var getNumber = res.detail.value.getNumber
    var userNumber = res.detail.value.userNumber
    var getPrice = res.detail.value.getPrice
 
    userNumber = Number(userNumber)
    getNumber = Number(getNumber)
    getPrice = Number(getPrice)
    wx.request({
        url:"",
        method:"POST",
        data:{
            "userName":userName,
        "getAdress":getAdress,
        "putAdress":putAdress,
        "getTime":getTime,
        "getNumber":getNumber,
        "userNumber":userNumber,
        "getPrice":getPrice
        },
        success:function(res){
            console.log(res)
        }
    })
    },

    data:{
        text1:"",
        text2:"",
        text3:"",
        text4:"",
        text5:"",
        text6:"",
        text7:"",
        text8:"",
        text9:"",
        text10:"",
        text11:"",
        text12:"",
        text13:"",
        text14:"",
        text15:"",
        text16:"",
        text17:"",
        text18:"",
        text19:"",
        text20:"",
        text21:"",
        text22:"",
        text23:"",
        text24:"",
        text25:"",
        text26:"",
        text27:"",
        text28:"",
        text29:"",
        text30:"",
        text31:"",
        text32:"",
        text33:"",
        text34:"",
        text35:"",
        text36:"",
        text37:"",
        text38:"",
        text39:"",
        text40:""

    }
})