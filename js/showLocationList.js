function toggleButtonAndList() {
  var button = document.getElementById("more-location-btn");
  var list = document.getElementById("location-hide-list");
  var prelist = document.getElementById("l-pre-list");

  // 隱藏按鈕
  button.style.display = "none";

  // 隱藏預覽清單
  prelist.style.display = "none";

  // 顯示清單
  list.classList.toggle("d-none");
}

// 添加事件監聽器
document
  .getElementById("more-location-btn")
  .addEventListener("click", toggleButtonAndList);
