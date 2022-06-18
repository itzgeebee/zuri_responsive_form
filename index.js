const fnameErr = document.getElementById("fnameErr")
const lnameErr = document.getElementById("lnameErr")
const mailErr = document.getElementById("mailErr")
const passwordErr = document.getElementById("passwordErr")

const fnameMsg = document.getElementById("fnameMsg")
const lnameMsg = document.getElementById("lnameMsg")
const mailMsg = document.getElementById("mailMsg")
const passwordMsg = document.getElementById("passwordMsg")


function validateForm(event) {
    const fName = document.getElementById('fname').value;
    const lName = document.getElementById('lname').value;
    const mail = document.getElementById('mail').value;
    const password = document.getElementById('password').value;

    if (fName == "") {

        fnameErr.classList.toggle("hidden")
        fnameMsg.classList.toggle('hidden')
        return false;
    }
    if (lName == "") {

        lnameErr.classList.toggle("hidden")
        lnameMsg.classList.toggle('hidden')
        return false;
    }
    if (mail == "") {
        mailErr.classList.toggle("hidden")
        mailMsg.classList.toggle('hidden')
        document.getElementById('mail').placeholder = "example@gmail.com"
        return false;
    }
    if (password == "") {
        passwordErr.classList.toggle("hidden")
        passwordMsg.classList.toggle('hidden')
        return false;
    }

    return true;

}



document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
        alert("Success")
    }
})

