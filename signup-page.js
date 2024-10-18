document.addEventListener("DOMContentLoaded", () => {
  const repetitionCheckButton = document.querySelector(".repetition-check");
  const signupButton = document.querySelector(".signup-button");
  const passwordInput = document.querySelectorAll(".input-field");
  const pwFailMessage = document.querySelector(".pwfailure-message");
  const errorMessage = document.querySelector(".error-message");
  const pwCheckField = document.getElementById("pwcheck");
  const pwCheckField2 = document.getElementById("pwcheck2");
  const requiredMessage = document.querySelector(".required-message");

  // 아이디 유효성 검사
  repetitionCheckButton.addEventListener("click", function () {
    const inputId = document.querySelector(".input-id").value.trim();
    const idYesMessage = document.querySelector(".id-yes");
    const idNoMessage = document.querySelector(".id-no");
    const idFailMessage = document.querySelector(".idfailure-message");

    idYesMessage.style.display = "none";
    idNoMessage.style.display = "none";
    idFailMessage.style.display = "none";
    requiredMessage.style.display = "none";

    // 유효성 검사: 20자 이하, 영문 대소문자 및 숫자만 허용
    const regex = /^[a-zA-Z0-9]{1,20}$/;

    if (!regex.test(inputId)) {
      idFailMessage.style.display = "block"; // 유효하지 않은 경우 메시지 표시
      return; // 함수 종료
    }

    // 중복 확인 로직
    if (inputId === "jejucoding") {
      idNoMessage.style.display = "block";
    } else {
      idYesMessage.style.display = "block";
    }
  });

  // 비밀번호 유효성 검사 함수
  function validatePassword() {
    const password = passwordInput[0].value;
    const confirmPassword = passwordInput[1].value;

    pwFailMessage.style.display = "none";
    errorMessage.style.display = "none";
    pwCheckField.style.backgroundImage = "none";

    // 비밀번호 유효성 검사: 8자 이상, 영문 대소문자, 숫자, 특수문자 포함
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!passwordRegex.test(password)) {
      pwFailMessage.style.display = "block";
      pwCheckField.style.backgroundImage = "url(./images/icon-check-off.svg)";
      return;
    } else {
      pwCheckField.style.backgroundImage = "url(./images/icon-check-on.svg)";
      pwCheckField.style.backgroundRepeat = "no-repeat";

      pwCheckField.style.backgroundPositionX = "97%";
      pwCheckField.style.backgroundSize = "28px";

      // 비밀번호 재확인
      if (password !== confirmPassword) {
        errorMessage.style.display = "block";
        pwCheckField2.style.backgroundImage =
          "url(./images/icon-check-off.svg)";
        return;
      } else {
        pwCheckField2.style.backgroundImage = "url(./images/icon-check-on.svg)";
        pwCheckField2.style.backgroundRepeat = "no-repeat";

        pwCheckField2.style.backgroundPositionX = "97%";
        pwCheckField2.style.backgroundSize = "28px";
      }
    }
  }

  // 가입 버튼 클릭 시 유효성 검사
  signupButton.addEventListener("click", function () {
    const inputId = document.querySelector(".input-id").value.trim();

    // 필수 정보 메시지 초기화
    requiredMessage.style.display = "none";

    // 아이디가 비어있는지 확인
    if (!inputId || !passwordInput[0].value || !passwordInput[1].value) {
      requiredMessage.style.display = "block"; // 필수 정보 메시지 표시
    } else {
      // 비밀번호 유효성 검사 직접 호출
      validatePassword();
    }
  });

  // 비밀번호 입력창에서 포커스를 잃을 때 유효성 검사
  passwordInput[0].addEventListener("blur", validatePassword); // 비밀번호 입력 필드
  passwordInput[1].addEventListener("blur", validatePassword); // 비밀번호 재확인 필드
});
