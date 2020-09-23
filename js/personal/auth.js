$(function(){
    $('#btn').on('click',function(){
        //获取用户资料的值
        var id=localStorage.getItem('id')
        var nickname=$('#nickname').val()
        var email=$('#email').val()
        var phone=$('#phone').val()
        //发送ajax
        $.ajax({
            url:'http://127.0.0.1:82/updateuser.php',
            tyep:'get',
            data:{
                id,
                nickname,
                email,
                phone
            },
            success: function (data) { // 4 响应
                if (data === 'ok') {
                    alert('修改资料成功'); // 弹 
                    location.href = '#/personal/accinfo' // 跳
                }
            }
        })
    })
})