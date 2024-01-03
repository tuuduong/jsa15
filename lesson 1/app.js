login.addEventListener("click", (e) => {
  e.preventDefault();
  let username = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (!username || !password) {
    alert("please Input email and password!");
  } else if (username != rightUsername) alert("please input right email");
  else if (username != rightUsername && password != rightPass)
    alert("please input again!");
  else if (password != rightPass) alert("Please input right password");
  else location.replace("index2.html");
});
