// 중복확인 버튼 클릭 시 실행되는 함수
document
  .querySelector(".repetition-check")
  .addEventListener("click", function () {
    const inputId = document.querySelector(".input-id").value.trim();
    const idYesMessage = document.querySelector(".id-yes");
    const idNoMessage = document.querySelector(".id-no");

    idYesMessage.style.display = "none";
    idNoMessage.style.display = "none";

    if (inputId === "jejucoding") {
      idNoMessage.style.display = "block";
    } else {
      idYesMessage.style.display = "block";
    }
  });
