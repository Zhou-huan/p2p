$(function () {
    $('#myform').validate({
        rules: {//规则 通过input标签上的name来选择器指定的标签
            user: {
                required: true,//要执行规则，必须要有
                /*  userrule:true, */

            },
            pwd: {
                required: true,
                /*  pwdrule:true,*/
            }

        },
        messages: {//提示信息
            user: {
                required: '请设置用户名',
            },
            pwd: {
                required: '请设置密码',
            }
        }
    });

    // 给登录按钮绑定点击事件
    $('#btn').click(function () {
        // 获取用户名和密码的值
        var username = $('#username').val();
        var pwd = $('#pwd').val();
        // 发送ajax
        $.ajax({
            url: "http://127.0.0.1:82/login.php", // 地址
            type: 'post',// 方式
            data: { // 参数   (如果对象的key和value相同 可以省略)
                username,
                pwd
            },
            success: function (data) { // 请求成功响应
                if (data != 'fail') { // 如果响应的数据不等于fail 就是成功
                    //把登录成功的用户名存入本地
                    localStorage.setItem('username', username)
                    //把登录成功的用户名ID存入本地
                    localStorage.setItem('id', data)

                    alert('登录成功')
                    location.href = '/index.html';
                } else {
                    alert('用户名或密码错误！')
                }
            }
        })
    })
});