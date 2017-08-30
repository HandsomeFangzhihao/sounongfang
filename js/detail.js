$(function(){
    $("#header").load('data/header.php',function(){
        $('#welcome').html('欢迎回来：'+ sessionStorage['loginUname']) ;
    });
    $("#footer").load('data/footer.php');
})
$('.nav_1').hover(function(){
    $('.son_sort').toggle();
});
$('.shoping').hover(function(){
    $(this).children().children('i').toggle();
})