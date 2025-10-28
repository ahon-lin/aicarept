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
  // *** 1. 設定觸發滾動的 DIV Class ***
  var $trigger = $(".scroll-trigger"); // 將這個 Class 替換成你的實際觸發元素
  var $target = $(".auto-scrollTop");
  var offset = 100;
  var speed = 800;

  // 檢查觸發元素和目標元素是否存在
  if ($trigger.length && $target.length) {
    // 2. 監聽點擊事件
    $trigger.click(function () {
      // 取得目標元素的位置，並減去偏移量
      var targetTop = $target.offset().top - offset;

      // 執行滾動動畫
      $("html,body").animate(
        {
          scrollTop: targetTop,
        },
        speed
      );
    });
  }
});
