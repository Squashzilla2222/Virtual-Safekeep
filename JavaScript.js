let jsonData = JSON.parse(localStorage.getItem("jsonData")) || [{ Username: "Test@test.com", Password: "Test123" }]; // test

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

    render_table();
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

function render_table() {
    const table_body = document.getElementById("JSON_table").getElementsByTagName("tbody")[0];
    table_body.innerHTML = ""; // clear existing data

    jsonData.forEach((item, index) => {
        const row = table_body.insertRow();
        const username_cell = row.insertCell(0);
        const password_cell = row.insertCell(1);
        const actionCell = row.insertCell(2);

        username_cell.textContent = item.Username;
        password_cell.textContent = item.Password;

        // Add a delete button for each row
        const delete_button = document.createElement("button");
        delete_button.textContent = "Delete";
        delete_button.onclick = () => delete_account(index);
        actionCell.appendChild(delete_button);
    });
}

function add_account(event) {
    event.preventDefault();

    const new_username = document.getElementById("new_username").value;
    const new_password = document.getElementById("new_password").value;

    // Add new account to database
    jsonData.push({ Username: new_username, Password: new_password });

    // Update localStorage
    localStorage.setItem("jsonData", JSON.stringify(jsonData));

    // Clear the form inputs
    document.getElementById("new_username").value = "";
    document.getElementById("new_password").value = "";

    // Re-render the table
    render_table();
}

function delete_account(index) {
    // Remove data at this index
    jsonData.splice(index, 1);

    localStorage.setItem("jsonData", JSON.stringify(jsonData));

    render_table();
}
