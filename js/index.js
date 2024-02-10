function sendEmail(){
    var pararms = {
        name: document.getElementById('fname').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,

    };
    const serviceID = "service_ovf68js";
    const templateID = "template_qiug6wj";

    emailjs.send(serviceID,templateID,pararms)
        .then((res) => {
        document.getElementById("fname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully");
    })
    .catch((err) => console.log(err));
}

