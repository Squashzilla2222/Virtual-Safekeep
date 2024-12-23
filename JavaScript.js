function login() {
    event.preventDefault();
    var login_page = document.getElementById("login_page");
    var home = document.getElementById("home");

    login_page.style.display = "none";
    home.style.display = "block";
}
