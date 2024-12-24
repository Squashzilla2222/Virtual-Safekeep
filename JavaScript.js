function login() {
    event.preventDefault(); // prevent login page form reloading
    var login_page = document.getElementById("login_page");
    var home = document.getElementById("home");

    login_page.style.display = "none"; // hide login
    home.style.display = "block"; // show home page
}

function manage_accounts() {
    var home = document.getElementById("home");
    var manage_acc = document.getElementById("manage_accounts")
    home.style.display = "none";
    manage_acc.style.display = "block";
}

function password_strength() {
    var home = document.getElementById("home");
    var password_test = document.getElementById("password_tester")
    home.style.display = "none";
    password_test.style.display = "block";
}

function account_options() {
    var home = document.getElementById("home");
    var acc_options = document.getElementById("account_options")
    home.style.display = "none";
    acc_options.style.display = "block";
}

function quit() {
    window.close();
}

function back_to_home() {
    var home = document.getElementById("home");
    var manage_acc = document.getElementById("manage_accounts")
    var password_test = document.getElementById("password_tester")
    var acc_options = document.getElementById("account_options")

    manage_acc.style.display = "none";
    password_test.style.display = "none";
    acc_options.style.display = "none";
    home.style.display = "block";
}
