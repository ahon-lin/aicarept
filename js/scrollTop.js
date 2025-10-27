$(".scrollTop").click(function () {
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    "medium"
  );
});

// article scrollTop
$(document).ready(function () {
  // 取得目標元素的位置
  var targetTop = $(".auto-scrollTop").offset().top - 200;

  // 立即執行滾動動畫
  $("html,body").animate(
    {
      scrollTop: targetTop,
    },
    800 // 建議使用數字取代 "medium"，例如 800 毫秒
  );

  // 注意：如果有 80px 偏移需求，請修改為：
  // var targetTop = $(".colophon").offset().top - 80;
});
