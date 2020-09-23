/* 为更多按钮绑定点击事件 */
$(function(){
    $('.moreitem').hide();
    $('.more').click(function(){
        $('.moreitem').slideDown(600);
        $(this).hide();
    })
    $('.nomore').click(function(){
        $('.moreitem').slideUp(300);
        $('.more').show();
    })
})