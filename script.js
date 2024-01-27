document.addEventListener("DOMContentLoaded", function () {
    refreshCaptcha();
});

function generateCaptchaText() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captchaText = "";
    for (let i = 0; i < 6; i++) {
        captchaText += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captchaText;
}

function refreshCaptcha() {
    const captchaText = generateCaptchaText();
    document.getElementById("captchaText").innerText = captchaText;
}

function validateCaptcha() {
    const userInput = document.getElementById("captcha-form").value;
    const captchaText = document.getElementById("captchaText").innerText;
    const userName= document.getElementById("username").value;
    const password= document.getElementById("password").value;
    if (userInput === captchaText) {
        if(userName == null)
        {
            alert("Fill the Username first");
        }
        else if(password == "")
        {
            alert("Enter the Password first");
        }
        alert("Captcha is valid!");
    } else {
        alert("Captcha is invalid. Please try again.");
        refreshCaptcha();
    }
}
