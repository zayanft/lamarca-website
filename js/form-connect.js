
function sendEmail(){
  
    // var FirstName = document.getElementById('fname').value;
    // var lastName = document.getElementById('lname').value;
    // var email = document.getElementById('email').value;
    // var messages = document.getElementById('message').value;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "tenplaylm10@gmail.com",
        Password : "5E9F928E15371EB68B6365DE331743E9ADD2",
        To : 'sales@lamarca.in',
        From :document.getElementById('email').value,
        Subject : "New Contact From Enquiry",
        Body :   "Name :" + document.getElementById('fname').value +
                "<br/> Last Name :" + document.getElementById('lname').value +
                "<br/> Email :" + document.getElementById('email').value +
                "<br/> Message :" + document.getElementById('message').value
    }).then(
      message => alert(message)
    );
}