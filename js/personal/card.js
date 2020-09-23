$(function(){
    $('#chargeBtn').on('click',function(){
        console.log(111);
        //获取参数
        var id=localStorage.getItem('id')
        var bankcode=$('#bankcode').val()
        var chargemoney=$('#chargemoney').val()

        $.ajax({
            url:'http://127.0.0.1:82/charge.php',
            type:'get',
            data:{
                id,
                bankcode,
                chargemoney
            },
            success:function(data){
                if (data === 'ok') {
                    alert('土豪，恭喜你，充值成功！') // 弹
                    location.href = '#/personal/accinfo';  // 跳
                } else {
                    alert('充值失败！等会继续再充，加油') // 弹
                }
            }
        })
    })
})