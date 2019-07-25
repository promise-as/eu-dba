$(function () {
  theaMsForm($('.sign-in'));

  var mySwiper = new Swiper('.swiper-container', {
    // 如果需要分页器
    pagination: '.swiper-pagination',
    autoplay: 2000,
  })

  // onmouseenter
  $('.btn-module a').mouseenter(function () {
    $(this).addClass('active').siblings().removeClass('active');
  })

  // 关闭右侧悬浮
  $(".right-suspension .close").click(function () {
    $(".right-suspension").css("display", "none")
  })

  // 返回顶部
  $(".to-top").click(function () {
    $("html,body").animate({
      scrollTop: 0
    }, 500);
  })

  // active 切换
  $(".choice .choice-item").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $("#choice").val($(this).text());
  });

  // ele: 目标元素, c: 关闭按钮, f: 初始显示的时间, a: 第二次显示的时间, n: 一共显示多少次, s: 占位
  function popupHandle(ele, c, f, a, n, s) {
    var $par = $(ele);
    var $site = $(s)
    var $num = 1;
    popupTc(f);
    $(c).click(function () {
      $par.hide();
      $site.hide();
      if ($num < n) {
        popupTc(a);
      }
      $num++;
    });

    function popupTc(d) {
      setTimeout(function () {
        $site.fadeIn(300);
        $par.fadeIn(300);
      }, d);
    }
  }

  // 底部广告
  popupHandle(".ad", ".ad .close", 15000, 30000, 2, ".ad-site");
  // 预约试听弹窗
  popupHandle(".popup", ".popup .close", 15000, 30000, 2, ".mask");

  // 关闭 800弹窗
  $(".popup .close").click(function () {
    $(".popup").css("display", "none");
  })

  // 关闭 800弹窗
  $(".popup .test").click(function () {
    $(".mask").css("display", "none");
    $(".popup").css("display", "none");
  })

  // 关闭 800弹窗
  $(".popup #consult").click(function () {
    $(".mask").css("display", "none");
    $(".popup").css("display", "none");
  })

  // 预约试听弹窗 显示
  function appointShow(clickEle) {
    $(clickEle).click(function () {
      $(".appoint").css("display", "block");
    })
  }

  // 关闭 预约试听弹窗
  $(".appoint .close").click(function () {
    $(".appoint").css("display", "none");
  })

  appointShow(".test");
})