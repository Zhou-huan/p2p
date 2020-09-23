$(function(){
    //发送ajax获取账户信息
    $.ajax({
        url:'http://127.0.0.1:82/getuserinfo.php',
        type:'get',
        dataType:'json',//我期望接收到的是json格式的数据额
        data:{
            id:localStorage.getItem('id')
        },
        success:function(data){
                 // 这一坨代码 如何优化
            // $('#nickname').html(data.nickname)
            // $('#username').html(data.username)
            // $('#lastlogintime').html(data.lastlogintime)
            // $('#totalmoney').html(data.totalmoney)
            // $('#usablemoney').html(data.usablemoney)
            // $('#blockedmoney').html(data.blockedmoney)
            // console.log(data);
              // 一句代码 优化一下
              for (var key in data) {
                $(`#${key}`).html(data[key])
            }
        }
    })
})