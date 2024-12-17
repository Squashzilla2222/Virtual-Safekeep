function change_content(page) {

    switch (page) {
        case "register_account":
            document.getElementById("content").innerHTML = "Register new account";
            break;
        case "home":
            document.getElementById("content").innerHTML = "Welcome to the home page";
            break;
        case "password_storage":
            document.getElementById("content").innerHTML = " Welcome to the details storage page";
            break;
        case "password_strength":
            document.getElementById("content").innerHTML = "Welcome to the password testing page";
            break;
        case "account_options":
            document.getElementById("content").innerHTML = "Account options";
            break;
        default:
            document.getElementById("content").innerHTML = "Page not found";
    }
}

document.getElementById("login").addEventListener("submit", function (event) {
    event.preventDefault();
    change_content("home");
});
