localStorage.setItem("login", "hamidulloh");
localStorage.setItem("password", "102");

let login = document.getElementById("login");
let password = document.getElementById("password");
let form = document.getElementById("form");
let glas = document.getElementById("glas");
let errorMsg = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault(); 
 
  if (
    login.value === localStorage.getItem("login") &&
    password.value === localStorage.getItem("password")
  ) {
    errorMsg.textContent = "";
    window.location.href = "abaut.html"; 
    alert("login togri ✅");
  } else {
    errorMsg.textContent = "Parol yoki login noto‘g‘ri kiritilgan!";
      alert("login yoki password hato  ❌");
  }
});

if (!localStorage.getItem("login") && !localStorage.getItem("password")) {
  
}

glas.addEventListener("click", () => {
  const isHidden = password.type === "password";
  password.type = isHidden ? "text" : "password";
  glas.textContent = isHidden ? "🙈" : "🙉";
});
