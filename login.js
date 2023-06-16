// Defines a function to validate the login form
function validateLoginForm() {
    // Checks if either email or password input is empty
    if (emailInput.value == "" || passInput.value == "") {
        // Calls moveLoginButton function and sets border color of email and password input to red
        moveLoginButton();
        document.getElementById("emailInput").style.border = "1px solid red";
        document.getElementById("passInput").style.border = "1px solid red";
    } else {
        // Sets border color of email and password input to green and moves login button to the right
        document.getElementById("emailInput").style.border = "1px solid green";
        document.getElementById("passInput").style.border = "1px solid green";
        button.style.left = "150px";
    }
}

// Initializes a flag variable to keep track of button position
buttonPositionFlag = 1;

// Defines a function to move the login button
function moveLoginButton() {
    // If button is in initial position, moves it to the right
    if (buttonPositionFlag == 1) {
        button.style.left = "210px";
        buttonPositionFlag = 2;
    } 
    // If button is in second position, moves it to the left
    else if (buttonPositionFlag == 2) {
        button.style.left = "80px";
        buttonPositionFlag = 1;
    }
}
