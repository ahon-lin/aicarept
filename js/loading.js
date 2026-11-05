$(document).ready(function () {
  $("#footer").load("/common/footer.html");
  $("#header").load("/common/header.html");
  $("#messenger-fixed").load("/common/messenger-fixed.html");
  $("#phone-fixed").load("/common/phone-fixed.html");
  // 自動建立 Popup
  $("body").append(`
    <div class="popup" id="terms-popup"></div>
    <div class="popup" id="personal-terms-popup"></div>
  `);
  // 載入 Popup 內容
  $("#terms-popup").load("/common/terms-popup.html");
  $("#personal-terms-popup").load("/common/personal-terms-popup.html");
});
