// 탑버튼
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
      $("#topBtn").fadeIn();
    } else {
      $("#topBtn").fadeOut();
    }
  });

  $("#topBtn").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
});

// ps 이미지 변경
function tissueImg() {
  document.getElementById("main-img-01").src = "img/mainimg4.gif";
}
