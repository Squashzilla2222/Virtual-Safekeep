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

    JSON_DB();
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

function JSON_DB() {
    // Data to be used during the creation of the database
    const test_data = [{ Username: "Test@test.com", Password: "Test123" }];

    const JSON_text = JSON.stringify(test_data); // Convert constant test into something JSON can understand
    const blob = new Blob([JSON_text], { type: "application/json" }); // Create Blob for JSON database

    const read_data = new FileReader(); // Reader file content
    read_data.onloadend = function () {
        const revert_JSON_text = read_data.result; // converts string into JSON object
        const parsed_data = JSON.parse(revert_JSON_text);

        const JSON_table = document.getElementById("JSON_table").getElementsByTagName("tbody")[0];
        JSON_table.innerHTML = ""; // delete any existing rows in the table

        parsed_data.forEach(item => {
            const row = JSON_table.insertRow();
            const username_column = row.insertCell(0);
            const password_column = row.insertCell(1);

            username_column.textContent = item.Username;
            password_column.textContent = item.Password;
        });
    };

    read_data.readAsText(blob);
}
