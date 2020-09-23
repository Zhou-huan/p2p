$(function(){
   //获取本地的借款类型
   var type=sessionStorage.getItem('type')
  switch(type){
    case 'credit':
        $('#btnType').html('信用贷').addClass('btn-primary')
        break;
    case 'car':
        $('#btnType').html('车易贷').addClass('btn-danger')
        break;
    case 'house':
        $('#btnType').html('房易贷').addClass('btn-success')
        break;
  }
 // 给发布借款按钮绑定点击事件
 $('#borrowApplyBtn').on('click', function () {
    // 获取发布者的账号
    var acc = localStorage.getItem('username')

    // 获取用户输入的值
    var borrowmoney = $('#borrowmoney').val()
    var interest = $('#interest').val()
    var borrowtime = $('#borrowtime').val()

    var repaytype = $('.repaytype:checked').val() // 借款方式

    var minbid = $('#minbid').val()
    var bouns = $('#bouns').val()
    var days = $('#days').val()
    var title = $('#title').val()
    var info = $('#info').val()
    // 发送借款申请ajax 
    $.ajax({
        url: 'http://172.16.14.202:82/borrow.php',
        type: 'get',
        data: {
            acc,
            borrowmoney,
            interest,
            borrowtime,
            repaytype,
            minbid,
            bouns,
            days,
            title,
            info
        },
        success: function (data) {
            if (data === 'ok') {
                alert('恭喜你，发布借款成功！')
                location.href = '/' // 跳转到首页
              /*   console.log(data); */
            }
        }
    })
})
})