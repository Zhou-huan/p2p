$(function () {
    // 获取本地存储的数据
    var borrowid = sessionStorage.getItem('borrowid'); // 订单的id

    // 发送请求 获取订单详情
    $.ajax({
        url: 'http://127.0.0.1:82/getborrowinfo.php',
        type: 'get',
        dataType: 'json',
        data: {
            borrowid
        },
        success: function (data) {
            // 循环渲染
            for (var key in data) {
                $(`#${key}`).html(data[key])
            }
        }
    })

    // 投资
    $('#chargeBtn').on('click', function () {
        // 获取参数
        var id = localStorage.getItem('id')
        var chargemoney = $('#chargemoney').val()

        // 发送投资请求
        $.ajax({
            url: 'http://127.0.0.1:82/invest.php',
            type: 'get',
            data: {
                id,
                borrowid,
                chargemoney
            },
            success: function (data) {
                if (data === 'ok') {
                    alert('恭喜你，投资成功')
                    location.href = '/'
                }
            }
        })
    })
})