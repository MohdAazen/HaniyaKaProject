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
    const userInput = document.getElementById("userInput").value;
    const captchaText = document.getElementById("captchaText").innerText;

    if (userInput === captchaText) {
        alert("Captcha is valid!");
    } else {
        alert("Captcha is invalid. Please try again.");
        refreshCaptcha();
    }
}
