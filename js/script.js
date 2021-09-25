function sendMailWaghy() {

    var message = document.getElementById("message").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var templateParams = {
        message: message,
        name: name,
        email: email,
        subject: subject
    };

    emailjs
        .send(
            "service_pv1uywt",
            "template_3vuxgew",
            templateParams,
            "user_RWNyiZjfYM1426ASLSkDC"
        )
        .then(
            function (response) {
                // window.location.href = "https://www.facebook.com/G.C.31DZ";
                alert("Your email was received you will hear from me soon , Thank You");
            },
            function (error) {
                // window.location.href = "https://www.facebook.com/waghydjemy";
                alert("Unknown error happend " + error.message + " contact me via social media directly , Thank You !");
            }
        );
}
