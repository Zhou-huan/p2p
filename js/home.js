//logo切换
$(function(){
    //发送ajax请求,获取借款列表数据
     // 定义每页条数
     const ROW = 5;
     var lock = true;
 
     // 发送ajax 获取借款列表数据
     function getDataRenderPage(page = 1) {
         $.ajax({
             url: 'http://127.0.0.1:82/getborrow.php',
             type: 'get',
             dataType: 'json',
             data: {
                 page,   // 当前页码
                 row: ROW    // 每页条数
             },
             success: function (res) {
                 var data = res.data;
                var total = res.total;
                 // 根据数据总条数 算出最大页码
                 var maxPage = Math.ceil(total / ROW)
                 // 优化代码
                 if (lock) {
                     // 初始化
                     // $(".zxf_pagediv").createPage({
                     //     pageNum: maxPage, // 总页数
                     //     current: page, // 当前页码
                     //     backfun: function (e) {
                     //         getDataRenderPage(e.current)
                     //     }
                     // });
                     // pageMe.js 使用方法
                     $("#page").paging({
                         pageNum: page, // 当前页面
                         totalNum: maxPage, // 总页码
                         totalList: total, // 记录总数量
                         callback: function (num) { //回调函数
                             getDataRenderPage(num);
                         }
                     });
                     lock = false;
                 } 

                 var rstHtml = '';  // 拼接结果
                 for (var i = 0; i < data.length; i++) {
                     rstHtml += `<tr class="lists">
                         <td>${data[i].userid}</td>
                         <td>${data[i].title}</td>
                         <td class="text-primary">${ parseFloat(data[i].interest).toFixed(2)}%</td>
                         <td class="text-primary"> ${data[i].borrowmoney}</td>
                         <td> ${ data[i].repaytype == 0 ? '按月分期' : '按月到期'} </td>
                         <td class="text-danger">${ ((data[i].ownmoney / data[i].borrowmoney) * 100).toFixed(2)} %</td>
                         <td><button data-borrowid="${data[i].id}"  class="detailBtn btn btn-xs btn-success">查看</button></td>
                       </tr> `
                 }
                 // 添加到页面
                 $('#borrowList').html(rstHtml)
             }
         })
     }
 
     // 初始化调用
     getDataRenderPage(); // 初始化调用  不传入参数 默认参数是1
   // 给查看详情按钮绑定点击事件 (这是爸爸绑定的事件： 事件委派)
   $('#borrowList').on('click', '.detailBtn', function () {
    // 把选中的这一条数据存入本地
    var borrowid = $(this).data('borrowid') // 获取这一行数据的id（借款订单的id）
    sessionStorage.setItem('borrowid', borrowid) // 存入本地
    location.href = '#/borrow/borrowinfo'; // 跳转到借款详情
})

 //用一个变量来存新地址
 var locals=['../images/hy (1).png','../images/keq (1).png','../images/sh (1).png',
 '../images/sn (1).png','../images/xlhb (1).png','../images/mymy (1).png','../images/mhjs (1).png','../images/gjkg (1).png']
//用一个变量来存旧地址
var oldLocals=['../images/hy.png','../images/keq.png','../images/sh.png',
'../images/sn.png','../images/xlhb.png','../images/mymy.png','../images/mhjs.png','../images/gjkg.png']
 var logoes=$('.logoimg').find('img');
 logoes.hover(function(){
    //获取当前的图片索引
    var index=$(this).index();
    $(this).prop(
        'src',locals[index]
    )
 },function(){
     var index=$(this).index();
     $(this).prop(
         'src',oldLocals[index]
     )
 });
    
})