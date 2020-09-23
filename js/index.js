$(function () {
    // 监听地址栏hash变化
    window.onhashchange = loadPage;
    // 进入页面的时候 刷新页面的时候 也要调用哦
    loadPage()  // 初始化调用
    // 加载页面
    function loadPage() {
        var hash = location.hash; // 获取hash
        // 根据这个hash地址 去判断 要加载哪个页面到root节点中去
        // 拼接要加载的文件的完整路径
        var filename = './modules/' + hash.split('/')[1] + '.html'; // 拼接加载的文件路径

        switch (hash) {
            /*一级路由*/
            case '#/projectlist':
                $('#root').load(filename)
                break;
            case '#/borrow':
                $('#root').load(filename)
                break;
             case '#/personal':
                $('#root').load(filename)
                break;
            case '#/disclosure':
                $('#root').load(filename, function () {
                    $('.main__right').load('/modules/disclosure/texture.html')
                })
                break;
            case '#/datas':
                $('#root').load(filename)
                break;
            case '#/helpCenter':
                $('#root').load(filename)
                break;
            /**二级路由开始 */
                /* ------------------------ 个人中心开始 --------------------- */
            case '#/personal/accinfo':
                loadpersonalPage('accinfo');
                break;

            case '#/personal/auth':
                loadpersonalPage('auth');
                break;

            case '#/personal/card':
                loadpersonalPage('card');
                break;

            case '#/personal/borrowitem':
                loadpersonalPage('borrowitem');
                break;


            //帮助中心二级路由
            /*--------------------------------------------------------------------------*/ 
            case '#/helpCenter/userRegister':
                loadHelpCenterPage('userRegister');
                break;
            case '#/helpCenter/userLogin':
                loadHelpCenterPage('userLogin');
                break;
            case '#/helpCenter/openCard':
                loadHelpCenterPage('openCard');
                break;
            case '#/helpCenter/userPay':
                loadHelpCenterPage('userPay');
                break;
            case '#/helpCenter/moneyNow':
                loadHelpCenterPage('moneyNow');
                break;
            case '#/helpCenter/important':
                loadHelpCenterPage('important');
                break;
            case '#/helpCenter/safe':
                loadHelpCenterPage('safe');
                break;
            default:
                $('#root').load('../modules/home.html')
                break;
                //抽取函数  优化代码 
                function loadHelpCenterPage(path) {
                    // 代码优化
                    // 如果不是刷刷新 直接点击的是左侧导航 那么这个时候个人中心以及存在了 只需要加载右侧子页面即可
                    if ($('#rightContent').length) {
                        $('#rightContent').load('./modules/helpCenter/' + path + '.html');
                    } else {
                        $('#root').load('./modules/helpCenter.html', function () {
                            $('#rightContent').load('./modules/helpCenter/' + path + '.html')
                        })
                    }
                }
            // 信息披露二级路由
             /*--------------------------------------------------------------------------*/ 
            case '#/disclosure/filing':
                loadDisclosurePage('filing');
                break;
            case '#/disclosure/great':
                loadDisclosurePage('great');
                break;
            case '#/disclosure/charge':
                loadDisclosurePage('charge');
                break;
            case '#/disclosure/law':
                loadDisclosurePage('law');
                break;
            case '#/disclosure/hint':
                loadDisclosurePage('hint');
                break;
            case '#/disclosure/core':
                loadDisclosurePage('core');
                break;
            case '#/disclosure/cooperation':
                loadDisclosurePage('cooperation');
                break;
            case '#/disclosure/course':
                loadDisclosurePage('course');
                break;
            case '#/disclosure/media':
                loadDisclosurePage('media');
                break;
            case '#/disclosure/enroll':
                loadDisclosurePage('enroll');
                break;
            case '#/disclosure/contact':
                loadDisclosurePage('contact');
                break;
            case '#/disclosure/contact':
                loadDisclosurePage('contact');
                break;
            case '#/disclosure/risk':
                loadDisclosurePage('risk');
                break;
            case '#/disclosure/audit':
                loadDisclosurePage('audit');
                /*  loadDisclosurePage(audit); */
                break;

            //我要借款部分二级路由
             /*--------------------------------------------------------------------------*/ 
            //借款申请页
             case '#/borrow/borrowapply':
                $('#root').load('./modules/borrow.html', function () {
                    $('#borrowRight').load('./modules/borrow/borrowapply.html')
                })
                break;
            //借款详情页
            case '#/borrow/borrowinfo':
                $('#root').load('./modules/borrow.html', function () {
                    $('#borrowRight').load('./modules/borrow/borrowinfo.html')
                })
                break;
        }
    }
    //抽取信息披露模块加载二级路由的代码
    function loadDisclosurePage(path) {
        // 代码优化
        // 如果不是刷刷新 直接点击的是左侧导航 那么这个时候个人中心以及存在了 只需要加载右侧子页面即可
        if ($('.main__right').length) {
            $('.main__right').load('./modules/disclosure/' + path + '.html');
        } else {
            $('#root').load('./modules/disclosure.html', function () {
                $('.main__right').load('./modules/disclosure/' + path + '.html')
            })
        }
    }
    //抽取个人信息模块加载二级路由的代码
    function loadpersonalPage(path) {
        // 代码优化
        // 如果不是刷刷新 直接点击的是左侧导航 那么这个时候个人中心以及存在了 只需要加载右侧子页面即可
        if ($('#rightContent').length) {
            $('#rightContent').load('./modules/personal/' + path + '.html');
        } else {
            $('#root').load('./modules/personal.html', function () {
                $('#rightContent').load('./modules/personal/' + path + '.html')
            })
        }
    }


    isLogin() // 初始化调用
    function isLogin() {
        // 获取本地存储的用户名
        var username = localStorage.getItem('username')
        // 如果本地有名字 就是登录过的 修改导航栏的内容
        if (username) {
            $('#loginNav').html(`<a href="#/helpCenter">${username}</a>`);
            $('#regNav').html(`<a class="logout" href="#/">注销</a>`);
        } else {
            // 否则本地就是没有名字 改为原来的样子
            $('#loginNav').html(`<a href="./login.html">登录</a>`);
            $('#regNav').html(`<a href="./register.html">注册</a>`);
        }
    }

    // 给注销绑定事件
    $('#regNav .logout').on('click', function () {
        // 清除本地存储的用户名
        localStorage.removeItem('username')
        // 调用判断是否登录函数
        isLogin()
    })

})