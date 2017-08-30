$(function(){
    $("#header").load("data/header.php",function(){
        $("#welcome").html("欢迎回来"+sessionStorage["loginUname"]);
    })
    $("#footer").load("data/footer.php");
})
$(function(){
    $(".nav_1").hover(function(){
        var show=$(".son_sort");
        show.toggle();
    })
})
//放大镜
