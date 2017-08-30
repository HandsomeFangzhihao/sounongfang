/**异步请求页头和页尾，修改页头中的欢迎消息**/
$("#header").load("data/header.php", function () {
    $("#welcome").html("欢迎回来：" + sessionStorage["loginUname"]);
});
$("#footer").load("data/footer.php");
$(function () {
    $("#header").on("click", ".enter_e", function () {
        location.href = "enter.html";
    })
})
$(function () {//导航栏下拉菜单
    $(".nav_1").hover(function () {
        var $sort = $(this).children(".son_sort");
        $sort.toggle();
    })
})
//ajax异步获取动态数据
$(function(){
    $.ajax({
        url:"data/product.php",
        success:function(data){
            var html="";
            $.each(data,function(i,img){
                html+=`
                    <li>
                    <a href="#"><img src="${img.pic}"/>${img.pname}</a>
                    <span>已售 <b>(${img.psell})</b></span>
                    <p>￥ ${img.price}<s>￥ ${img.pcost}</s><button>加入购物车</button></p>
                </li>
                `;
            })
            $(".main_part ul").html(html);
        }
    })
})
//搜索验证
$("#btns").click(function(){
    var txt=$("#txt").val();
    //console.log(txt);
    $.ajax({
        type:"GET",
        url:'data/product_get.php',
        data:{kw:txt},
        success:function(data){
          var html="";
            $.each(data,function(i,img){
                html+=`
                    <li>
                    <a href="#"><img src="${img.pic}"/>${img.pname}</a>
                    <span>已售 <b>(${img.psell})</b></span>
                    <p>￥ ${img.price}<s>￥ ${img.pcost}</s><button>加入购物车</button></p>
                </li>
                `;
            })
            $(".main_part ul").html(html);
        }
    })
})