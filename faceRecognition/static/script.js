const doorFront = document.querySelector(".door-front");
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const exitButton = document.getElementById("exit-button");
const loginContainer = document.querySelector(".login-container");
const loginButton = document.getElementById("login-button");

// admin info
const validUsername = "admin";
const validPassword = "123456";

//close Door
function closeDoor() {
  doorFront.style.transform = "rotateY(0deg)"; // Đóng cửa
}

// Login form
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from submitting

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Check username and password
  if (username === validUsername && password === validPassword) {
    // Open door
    doorFront.style.transform = "rotateY(-160deg)";
    alert("Login Sucessfully !!!");

    // close auto after 10s
    setTimeout(closeDoor, 10000); 
    
    loginContainer.style.display = "none"; 
    usernameInput.value = ""; 
    passwordInput.value = ""; 
  } else {
    // error login
    alert("Sai UserName hoặc Password. Vui lòng thử lại.");
  }
});

// Exit button
exitButton.addEventListener("click", () => {
  loginContainer.style.display = "none"; // close login form

  // Reset form
  usernameInput.value = ""; 
  passwordInput.value = ""; 
});

// Login button
loginButton.addEventListener("click", () => {
  loginContainer.style.display = "block";
});
