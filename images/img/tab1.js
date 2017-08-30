// JavaScript Document
function setTab(name,cursel,n){
 for(i=1;i<=n;i++){
  var menu=document.getElementById(name+i);
  var con=document.getElementById("con_"+name+"_"+i);
  menu.className=i==cursel?"hover":"";
  con.style.display=i==cursel?"block":"none";
 }
}

function setTabLi(Li,name, cursel, n) {
    for (i = 1; i <= n; i++) {
        var menu = document.getElementById(Li + i);
        var con = document.getElementById("con_" + name + "_" + i);
        menu.className = i == cursel ? "hover" : "";
        con.style.display = i == cursel ? "block" : "none";
    }
}
function adHit(adid) {
    $.ajax({
        url: "/Pages/Ajax/UpdateadHit.ashx",
        data: { "id": adid },
        type: "post",
        dataType: "text",
        success: function (result) {
        },
        error: function () { }
    });

}

$(document).ready(function () {

    $(".hea_tit_d li").hover(function () {
        //$(this).children('a').show();

        $(this).children('.zq_hea_nav2').show();
        $(this).children('a').attr("class", "hover");

    }, function () {
        $(this).children('.zq_hea_nav2').hide();
        $(this).children('a').attr("class", "");

    });

})

$(document).ready(function () {

    $(".hea_tit_xq2").hover(function () {


    }, function () {
        $('.hea_tit_xq2').hide();


    });

})