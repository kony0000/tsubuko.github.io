jQuery(function($){
	$(".sp_gnav_btn, nav a").click(function(){
		$("header").toggleClass('spnav');
	});
});


// Topへ戻る
jQuery(window).on("scroll", function($) {
  if (jQuery(this).scrollTop() > 100) {
    jQuery('.floating').show();
  } else {
    jQuery('.floating').hide();
  }
});

jQuery('.floating').click(function () {
  jQuery('body,html').animate({
    scrollTop: 0
  }, 500);
  return false;
});

// スムーススクロール
$(function(){
  $('a[href^="#"]').click(function(){
    //スクロールのスピード
    var speed = 500;
    //リンク元を取得
    var href= $(this).attr("href");
    //リンク先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    //リンク先までの距離を取得
    var position = target.offset().top;
    //ヘッダーの高さを取得
    var header = $('header').height();
    //ヘッダーの高さを引く
    var position = target.offset().top - header;
    //スムーススクロール
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
