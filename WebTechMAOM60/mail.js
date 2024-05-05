function sendMail(){
    let parms ={
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        subject : document.getElementById('subject').value,
        message : document.getElementById('message').value
    }

    emailjs.send("service_lg1oysr","template_18fvvwy",parms).then(alert("Az üzenetet elküldtük!"))
}