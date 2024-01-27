document.addEventListener("DOMContentLoaded", function () {
    // Your existing code inside this function
    (function(){
        const fonts=["cursive","sans-serif","serif","monospace"];
        let captchaValue= "";
        
        function generateCaptcha(){
            let value= btoa(Math.random()*1000000000);
            value = value.substring(0,5+Math.random()*5);
            captchaValue=value;
        }
        
        function setCaptcha(){
            let html = captchaValue.split("").map((char)=>{
                const rotate = -20 + Math.trunc(Math.random()*30);
                const font = Math.trunc(Math.random()*fonts.length);
                return `<span
                    style = "
                        transform:rotate(${rotate}deg);
                        font-family:${fonts[font]}
                "
                >${char}</span>`
            }).join("");
            document.querySelector(".loginForm .captcha .preview").innerHTML = html;
        }
        
        function initCaptcha(){
            document.querySelector(".loginForm .captcha .captcha-refresh").addEventListener("click",function(){
                generateCaptcha();
                setCaptcha();
            });
            generateCaptcha();
            setCaptcha();
        }
        
        document.querySelector(".loginForm #login-btn").addEventListener("click",function(){
            let inputCaptchaValue = document.querySelector(".loginForm  .captcha-form input").value;
            if(inputCaptchaValue === captchaValue){
                alert("Logging In!!! Success");
            }else{
                alert("Invalid Captcha");
            }
        });
        
        initCaptcha();
        
    })();
});










// document.addEventListener("DOMContentLoaded", function () {
//     (function(){
// const fonts=["cursive","sans-serif","serif","monospace"];
// let captchaValue= "";
// function generateCaptcha() {
//     const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     let value = "";
//     for (let i = 0; i < 5 + Math.random() * 5; i++) {
//         value += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     captchaValue = value;
// }

// function setCaptcha(){
//     let html = captchaValue.split("").map((char)=>{
//         const rotate = -20 + Math.trunc(Math.random()*30);
//         const font = Math.trunc(Math.random()*fonts.length);
//         return `<span
//             style = "
//                 transform:rotate(${rotate}deg);
//                 font-family:${fonts[font]}
//         ">${char}</span>`
//     }).join("");
//     document.querySelector(".loginForm .captcha .preview").innerHTML = html;
// }

// function initCaptcha(){
//     document.querySelector(".loginForm .captcha .captcha-refresh").addEventListener("click",function(){
//         generateCaptcha();
//         setCaptcha();
//     });
//     generateCaptcha();
//     setCaptcha();
// }
// initCaptcha();

// document.querySelector(".loginForm #login-btn").addEventListener("click",function(event){
//     let inputCaptchaValue = document.querySelector(".loginForm  .captcha input").value;
//     if(inputCaptchaValue === captchaValue){
//         swal("", "Logging In!!!", "Success");
//     }else{
//         swal("Invalid Captcha");
//     }
// })();
// });
