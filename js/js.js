document.addEventListener("DOMContentLoaded", function () {
  // Swiper
  let swiper = new Swiper(".swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // 탑버튼
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 250) {
  //     $("#topBtn").fadeIn();
  //   } else {
  //     $("#topBtn").fadeOut();
  //   }
  // });

  // $("#topBtn").click(function () {
  //   $("html, body").animate(
  //     {
  //       scrollTop: 0,
  //     },
  //     400
  //   );
  //   return false;
  // });

  // 타이핑 효과
  String.prototype.toKorChars = function () {
    let cCho = [
        "ㄱ",
        "ㄲ",
        "ㄴ",
        "ㄷ",
        "ㄸ",
        "ㄹ",
        "ㅁ",
        "ㅂ",
        "ㅃ",
        "ㅅ",
        "ㅆ",
        "ㅇ",
        "ㅈ",
        "ㅉ",
        "ㅊ",
        "ㅋ",
        "ㅌ",
        "ㅍ",
        "ㅎ",
      ],
      cJung = [
        "ㅏ",
        "ㅐ",
        "ㅑ",
        "ㅒ",
        "ㅓ",
        "ㅔ",
        "ㅕ",
        "ㅖ",
        "ㅗ",
        "ㅘ",
        "ㅙ",
        "ㅚ",
        "ㅛ",
        "ㅜ",
        "ㅝ",
        "ㅞ",
        "ㅟ",
        "ㅠ",
        "ㅡ",
        "ㅢ",
        "ㅣ",
      ],
      cJong = [
        "",
        "ㄱ",
        "ㄲ",
        "ㄳ",
        "ㄴ",
        "ㄵ",
        "ㄶ",
        "ㄷ",
        "ㄹ",
        "ㄺ",
        "ㄻ",
        "ㄼ",
        "ㄽ",
        "ㄾ",
        "ㄿ",
        "ㅀ",
        "ㅁ",
        "ㅂ",
        "ㅄ",
        "ㅅ",
        "ㅆ",
        "ㅇ",
        "ㅈ",
        "ㅊ",
        "ㅋ",
        "ㅌ",
        "ㅍ",
        "ㅎ",
      ],
      cho,
      jung,
      jong;

    let str = this,
      cnt = str.length,
      chars = [],
      cCode;
    for (let i = 0; i < cnt; i++) {
      cCode = str.charCodeAt(i);
      if (cCode == 32) {
        chars.push(" ");
        continue;
      }
      // 한글이 아닌 경우
      if (cCode < 0xac00 || cCode > 0xd7a3) {
        chars.push(str.charAt(i));
        continue;
      }
      cCode = str.charCodeAt(i) - 0xac00;

      jong = cCode % 28; // 종성
      jung = ((cCode - jong) / 28) % 21; // 중성
      cho = ((cCode - jong) / 28 - jung) / 21; // 초성

      chars.push(cCho[cho]);
      chars.push(String.fromCharCode(44032 + cho * 588 + jung * 28));
      if (cJong[jong] !== "") {
        chars.push(String.fromCharCode(44032 + cho * 588 + jung * 28 + jong));
      }
    }
    return chars;
  };

  // 타이핑할 문장 설정
  let result = `끝으로 드릴 말씀이 있어요...`;
  let typeing1 = [];
  result = result.split("");

  // 각 글자를 초성, 중성, 종성으로 나눔
  for (let i = 0; i < result.length; i++) {
    typeing1[i] = result[i].toKorChars();
  }

  // 출력할 엘리먼트 요소 가져옴
  let resultDiv = document.getElementsByClassName("result")[0];

  let text = "";
  let i = 0;
  let j = 0;

  // 총 글자 수
  let imax = typeing1.length;

  // 타이핑 함수
  function typi() {
    if (i <= imax - 1) {
      // 각 글자가 초성 중성 종성 순서대로 추가되도록
      let jmax = typeing1[i].length;
      resultDiv.innerHTML = text + typeing1[i][j];
      j++;
      if (j == jmax) {
        text += typeing1[i][j - 1];
        // 초성 중성 종성 순서대로 출력된 글자는 저장 (다음 글자와 이어붙이기 위해서)
        i++;
        j = 0;
      }
    } else {
      clearInterval(inter); // 타이핑 완료 후 반복 종료
      setTimeout(resetTyping, 1000); // 1초 후에 타이핑 효과 반복
    }
  }

  // 타이핑 효과 초기화 및 반복 함수
  function resetTyping() {
    text = "";
    i = 0;
    j = 0;
    inter = setInterval(typi, 100); // 타이핑 효과 재시작
  }

  // 타이핑 효과 시작
  let inter = setInterval(typi, 100);
});

// ps 이미지 변경 함수 (이벤트에 따라 호출)
function tissueImg() {
  document.getElementById("main-img-01").src = "img/mainimg4.gif";
}
