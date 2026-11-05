$(document).ready(function () {
  // 開啟 Popup
  $(document).on("click", ".terms", function () {
    var popupId = $(this).data("popup");

    $("#" + popupId)
      .closest(".popup")
      .css("display", "flex");
  });

  // 關閉 Popup
  $(document).on("click", ".close-btn", function () {
    $(this).closest(".popup").css("display", "none");
  });

  var observer = lozad(".lozad");

  observer.observe();
});
