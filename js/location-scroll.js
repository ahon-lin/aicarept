// 你的優化程式碼，直接從選擇器開始
$('[class*="arc-btn"]').click(function (e) {
  e.preventDefault();

  var btnClass = $(this).attr("class");

  var match = btnClass.match(/arc-btn(\d+)/);
  // ... 後續邏輯 ...

  if (match && match[1]) {
    var btnIndex = match[1];
    var targetSelector = ".ct-" + btnIndex;
    var $target = $(targetSelector);

    var offset = 0;
    var speed = 800;

    if ($target.length) {
      var targetTop = $target.offset().top - offset;

      $("html,body").animate(
        {
          scrollTop: targetTop,
        },
        speed
      );
    }
  }
});

// $(".arc-btn1").click(function () {
//   $("html,body").animate(
//     {
//       scrollTop: $(".ct-1").offset().top,
//     },
//     "medium"
//   );
// });
// $(".arc-btn2").click(function () {
//   $("html,body").animate(
//     {
//       scrollTop: $(".ct-2").offset().top,
//     },
//     "medium"
//   );
// });
// $(".arc-btn3").click(function () {
//   $("html,body").animate(
//     {
//       scrollTop: $(".ct-3").offset().top,
//     },
//     "medium"
//   );
// });
// $(".arc-btn4").click(function () {
//   $("html,body").animate(
//     {
//       scrollTop: $(".ct-4").offset().top,
//     },
//     "medium"
//   );
// });
// $(".arc-btn5").click(function () {
//   $("html,body").animate(
//     {
//       scrollTop: $(".ct-5").offset().top,
//     },
//     "medium"
//   );
// });
// $(".arc-btn6").click(function () {
//   $("html,body").animate(
//     {
//       scrollTop: $(".ct-6").offset().top,
//     },
//     "medium"
//   );
// });
// $(".arc-btn7").click(function () {
//   $("html,body").animate(
//     {
//       scrollTop: $(".ct-7").offset().top,
//     },
//     "medium"
//   );
// });
// $(".arc-btn8").click(function () {
//   $("html,body").animate(
//     {
//       scrollTop: $(".ct-8").offset().top,
//     },
//     "medium"
//   );
// });
