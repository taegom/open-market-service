document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.querySelector(".login-button");
  const errorMessage = document.getElementById("error-message");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  loginButton.addEventListener("click", async () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username && !password) {
      showError("아이디를 입력해 주세요.");
      usernameInput.focus();
      return;
    } else if (username && !password) {
      showError("비밀번호를 입력해 주세요.");
      passwordInput.focus();
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5500/login-page.html", {
        method: "POST",

        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("로그인 성공!");
        window.location.href = document.referrer;
      } else {
        showError("아이디 또는 비밀번호가 일치하지 않습니다.");
        passwordInput.value = "";
        passwordInput.focus();
      }
    } catch (error) {
      console.error("로그인 요청 중 오류 발생:", error);
      showError("아이디 또는 비밀번호가 일치하지 않습니다.");
      passwordInput.value = "";
      passwordInput.focus();
    }
  });

  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
  }
});

const buyertap = document.querySelector(".tab-button.active");
const sellertap = document.querySelector(".tab-button");

// 탭 버튼들
const tabButtons = document.querySelectorAll(".tab-button");

// 탭 버튼 클릭 이벤트 추가
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // 모든 버튼에서 active 클래스 제거
    tabButtons.forEach((btn) => btn.classList.remove("active"));

    // 클릭한 버튼에 active 클래스 추가
    button.classList.add("active");
  });
});
