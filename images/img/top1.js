   $(document).ready(function () {
            $.ajax({
                url: "/Pages/Ajax/isLoginStateNew.ashx",
                type: "post",
                data: {},
                dataType: "html",
                beforeSend: function () { },
                success: function (issuccess) {
                    var arr = issuccess.split('!@#$%');
                    if (arr[0] == "") {
                        var div2 = document.getElementById("loginfo");
                        div2.innerHTML = "您好&nbsp;&nbsp;请&nbsp;&nbsp;<a href='/Useradmin/login.aspx' target='_blank' title='登录'>[登录]</a>&nbsp;&nbsp;<a href='/Useradmin/regist.aspx' target='_blank' title='注册'>[注册有惊喜]</a>&nbsp;&nbsp;<span onclick=\"location.href = '/chose_city.aspx';\"><i id='address'>" + arr[1] + "</i>&nbsp;&nbsp;<img src='/temp/so50com/html/images/common/add_change.png' alt='选择地区'/>&nbsp;&nbsp;<a title='满49元免邮'>[满49元免邮]</a></span>";
                    }
                    else {
                        var div2 = document.getElementById("loginfo");
                        div2.innerHTML = "您好&nbsp;&nbsp;<a href='/Useradmin/index.aspx' title='会员中心'> " + arr[0] + "</a>&nbsp;&nbsp;<a  onClick='Logout();' title='退出'>[退出]</a>&nbsp;&nbsp;<span onclick=\"location.href = '/chose_city.aspx';\"><i id='address'>" + arr[1] + "</i>&nbsp;&nbsp;<img src='/temp/so50com/html/images/common/add_change.png' alt='选择地区'/>&nbsp;&nbsp;<a title='满49元免邮'>[满49元免邮]</a></span>";
                    }
                },
                error: function () { }
            });

            $.ajax({
                url: "/Pages/Ajax/GetUserShopPhSum.ashx",
                type: "post",
                data: {},
                dataType: "html",
                beforeSend: function () { },
                success: function (issuccess) {
                    $("#phcar_sum").html(issuccess);
                },
                error: function () { }
            });

            $.ajax({
                url: "/Pages/Ajax/GetSearchWord.ashx",
                type: "post",
                data: { "typ": 1 },
                dataType: "html",
                beforeSend: function () { },
                success: function (issuccess) {
                    var shopsum = document.getElementById("searchkey");
                    shopsum.innerHTML = issuccess;
                },
                error: function () { }
            });

            $.ajax({
                url: "/Pages/Ajax/RegionalPosition.ashx",
                type: "post",
                data: {},
                dataType: "html",
                beforeSend: function () { },
                success: function (issuccess) {
                    $("#address").html(issuccess);
                },
                error: function () { }
            });

            var url = document.location.href;
            for (var i = 0; i < $('#sddm li').length; i++) {
                if (url.indexOf($('#sddm li:eq(' + i + ') a:eq(0)').attr('href')) != "-1") {
                    $('#sddm li:eq(' + i + ') a:eq(0)').addClass("curclass");
                } else {
                    $('#sddm li:eq(' + i + ') a:eq(0)').removeClass("curclass");
                }
            }
            if (url.split('/')[3] == "" || url.split('/')[3] == "index.html") {
                $('#sddm li:eq(0) a:eq(0)').addClass("curclass");
            }
            else {
                $('#sddm li:eq(0) a:eq(0)').removeClass("curclass");
            }

            $("#keywordnew").keydown(function (event) {
                if (event.keyCode == 13) {
                    var acc = $("#keywordnew").val().replace("请输入要查找的内容", "");
                    location.href = "/products/ProductList.aspx?SearchKey=" + acc;

                    return false;
                }
            });

        });

        function AddFavorite(sURL, sTitle) {
            sURL = encodeURI(sURL);
            try {
                window.external.addFavorite(sURL, sTitle);
            } catch (e) {
                try {
                    window.sidebar.addPanel(sTitle, sURL, "");
                } catch (e) {
                    alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");
                }
            }
        }

        function searchListnew() {
            var acc = $("#keywordnew").val().replace("请输入要查找的内容", "");
            location.href = "/products/ProductList.aspx?SearchKey=" + acc;

        }

        function Logout() {
            location.href = "/Useradmin/Logout.aspx";
        }
        function getsearching(SearchKey) {
            $.ajax({
                url: "/Pages/Ajax/GetSqlStr.ashx",
                type: "post",
                data: { "SearchKey": SearchKey },
                dataType: "html",
                beforeSend: function () { },
                success: function (issuccess) {
                    location.href = "/products/ProductList.aspx";
                },
                error: function () { }
            });
        }

        function getsearchpro(typid) {
            location.href = "/products/ProductList.aspx?typid=" + typid;
        }