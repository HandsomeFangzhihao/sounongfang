//头部欢迎回来
if(sessionStorage['loginUname']!=undefined){
    //php请求回来信息
    $("#welcome").html('欢迎回来：' + sessionStorage['loginUname']);//H5 WebStorage
}

$(function () {
    $("#header").on("click", ".enter_e", function () {
        location.href = "enter.html";
    })
})
$(function () {//我的订单切换
    $(".list_rt").hover(function () {
        $list = $(this).children(".order_from");
        $list.toggle();
    })
    $(".shop").hover(function () {
        $ul = $(this).children("ul");
        $ul.toggle();
    })
})
$(function () {//导航栏下拉菜单
    $(".nav_1").hover(function () {
        var $sort = $(this).children(".son_sort");
        $sort.toggle();
    })
})
//左右滑动轮播
$(function () {
    var i = 0;
    var timer;
    $(".banner_c").hover(function () {//当鼠标移入class为.banner，停止定时器
        clearInterval(timer);
    }, function () {//判断当li到最后一个时返回第一个
        timer = setInterval(function () {
            i++;
            if (i > 4) {//判断当图片大于4的时候返回到第一个
                i = 0;
            }
            $(".btn_list li").eq(i).addClass("banner_move").siblings(".banner_move").removeClass("banner_move");
            $('.banner_b li').stop(false, true).animate({left: -1920 * i + 'px'}, 500);
        }, 3000);
    }).trigger('mouseleave');
})

$('.btn_list li').on('mouseover', function () {//当鼠标点击li时图片移动
    if (!$('.banner_b').is(':animated')) {
        var indexs = $(this).index();
        i = indexs;//拿到下标
        $(this).addClass('banner_move').siblings(".banner_move").removeClass("banner_move");
        $('.banner_b li').stop(false, true).animate({left: -1920 * i + 'px'}, 500);
    }
})
//上下滑动
$(function(){
    var i=0;
    var timer=null;
    $(".shop_list").hover(function(){
        clearInterval(timer);
    }).mouseleave(function(){
        play();
    })
    $(".shop_lt p").hover(function(){
        var i=$(this).index();
        clearInterval(timer);
        $(this).addClass("shop_show").siblings(".shop_show").removeClass("shop_show");
        $(".shop_a").stop(false,true).animate({top:-i*275+"px"});
    }).mouseleave(function(){
        play();
    })
    function play(){
        timer=setInterval(function(){
            i++;
            if(i>=2){
                i=0
            }
            $(".shop_lt p").eq(i).addClass("shop_show").siblings(".shop_show").removeClass("shop_show");
            $(".shop_a").stop(false,true).animate({top:-i*275+"px"});
        },3000)
    }
    play();
})
//ajax异步请求数据土货
$(function () {
    load("data/tuhuo.php", '.list_top');
    load("data/shuiguo.php", '.list_center');
    load("data/lingshi.php", '.list_ls');
    load("data/lihe.php", '.list_lh');
});
function load(a, b) {
    $.ajax({
        url: a,
        success: function (data) {
            var html = '';
            $.each(data, function (i, img) {
                html += `
                   <li>
                        <a href="#">
                            <img src="${img.pic}" alt=""/>

                            <div class="list_p">

                                <h3>${img.pname}</h3>
                                <span>￥${img.price} <s>￥${img.cprice}</s></span>

                                <p>
                                    <button>添加购物车</button>
                                </p>
                            </div>
                        </a>
                    </li>
                `;
            });
            $(b).html(html);
        },
        error: function () {
            alert("异步请求失败");
        }
    })
}