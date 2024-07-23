// 預約表單個資與注意事項
// $(".terms").click(function(){
//     $(".popup").addClass('popup-open');
//     console.log("開啟");
// });
// $(".terms-popup").find('.close-btn').click(function(){
//     $(".popup").removeClass('popup-open');
//     console.log("關閉");
// });

$(document).ready(function() {
    $('.terms').click(function() {
      $('.popup').css('display', 'flex');
    });
  
    $('.close-btn').click(function() {
      $('.popup').css('display', 'none');
    });
    var observer = lozad('.lozad')
    observer.observe()
  });