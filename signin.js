
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

function redirectHandler() {
  let formName = document.getElementById("username").value;
  let formNameQP = "name="+formName;
  console.log("profile.html?"+formNameQP);
  window.location.replace("profile.html?"+formNameQP);
}
