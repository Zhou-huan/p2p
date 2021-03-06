

$(function () {
    $('#myform').validate({
        rules: {//规则 通过input标签上的name来选择器指定的标签
            telcode: {
                required: true,
                telcoderule: true,
            },
            icode: {
                icoderule: true,
            }

        },
        messages: {//提示信息
            telcode: {
                required: '请输入短信验证码'
            }
        }
    });
    //自定义验证规则
    //用户名验证
    //短信验证码
    jQuery.validator.addMethod('telcoderule', function (value, element) {
        var tcode = /^[A-Za-z0-9]{6}$/;
        return this.optional(element) || (tcode.test(value));
    }, '由6位数字和26个英文字母组成的字符串');
    //邀请码
    jQuery.validator.addMethod('icoderule', function (value, element) {
        var icode = /^[A-Za-z0-9]{4}$/;
        return this.optional(element) || (icode.test(value));
    }, '由4位数字和26个英文字母组成的字符串');

    //同意协议功能
    $('.isagree').change(function () {
        let status = $(this).prop('checked');
        if (status) {
            $('.regFormBut').css({
                'background': '#f60',
            }).prop('disabled', !status);
        } else {
            $('.regFormBut').css({
                'background': '#ccc',
            }).prop('disabled', !status);
        }
    });

    // 定义四个标杆
    var accOk = false,
    pwdOk = false,
    emailOk = false,
    nickOk = false;

   // 获取DOM
   var $username = $('#username');
   var $pwd = $('#pwd');
   var $email = $('#email');
   var $nickname = $('#nickname');


   // 绑定事件
   $username.on('blur', checkUserName);
   $pwd.on('blur', checkPwd);
   $email.on('blur', checkEmail);
   $nickname.on('blur', checkNick);


   // 定义两个小标杆
   var valid = false,
       repeat = false;

   // 验证用户名
   function checkUserName() {
       // 1账号的合法性:中文、英文、数字但不包括下划线等符号
       var username = $username.val()
       var reg = /^[\u4E00-\u9FA5A-Za-z0-9]{2,20}$/;

       if (reg.test(username)) {
           valid = true;
       } else {
           valid = false
       }
       // 2账号的重复性
       $.ajax({
           url: 'http://127.0.0.1:82/accrepeat.php',
           type: 'get',
           async: false, // 同步代码 保证代码执行的顺序
           data: {
               username
           },
           success: function (data) {
               if (data === 'ok') {
                   repeat = true;
               } else {
                   repeat = false;
               }
           }
       })

       // 根据两个小标杆确定大标杆
       if (valid && repeat) {
           $username.css({'border':'1px solid green','color':'green'})
           accOk = true;
       } else {
           $username.css({'border':'1px solid red','color':'red'})
           accOk = false;
       }
   }
   // 验证密码:密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
   function checkPwd() {
       var pwd = $pwd.val()
       var reg = /^[a-zA-Z]\w{5,17}$/;
       if (reg.test(pwd)) {
           $pwd.css({'border':'1px solid green','color':'green'})
           pwdOk = true;
       } else {
           $pwd.css({'border':'1px solid red','color':'red'})
           pwdOk = false;
       }
   }
   // 验证邮箱
   function checkEmail() {
       var email = $email.val()
       var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
       if (reg.test(email)) {
           $email.css({'border':'1px solid green','color':'green'})
           emailOk = true;
       } else {
           $email.css({'border':'1px solid red','color':'red'})
           emailOk = false;
       }
   }
   // 验证昵称:中文、英文、数字但不包括下划线等符号
   function checkNick() {
       var nickname = $nickname.val()
       var reg = /^[\u4E00-\u9FA5A-Za-z0-9]{2,20}$/;
       if (reg.test(nickname)) {
           $nickname.css({'border':'1px solid green','color':'green'})
           nickOk = true;
       } else {
           $nickname.css({'border':'1px solid red','color':'red'})
           nickOk = false;
       }
   }


   // 给注册绑定事件
   $('#registerBtn').on('click', function () {
       // 触发验证
       checkUserName()
       checkPwd()
       checkEmail()
       checkNick()

       // 判断 只要有一个标杆是false 就不能发送ajax注册
       if (!(accOk && pwdOk && emailOk && nickOk)) {
           // console.log('不可以ajax！ 不可以 ！！！')
           return;
       }

       // 发送注册ajax代码
       // console.log('可以发送ajax ！！ 可以可以')
       $.ajax({
           url: 'http://127.0.0.1:82/reg.php',
           type: 'post',
           data: {
               username: $username.val(),
               pwd: $pwd.val(),
               email: $email.val(),
               nickname: $nickname.val()
           },
           success: function (data) {
               if (data === 'ok') {
                   alert('恭喜你，注册成功!')
                   location.href = './login.html';
               }
           }
       })
   })
});