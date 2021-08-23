//First of all initialize variables and connect them according to your HTML id
var email = document.getElementById('email') //('email') -- replace email with ID of <input type = "email"> HTML element
var button = document.getElementById('button') //this is id of <input type = "button">
var success = document.getElementById('success') //this is id of success message
var error = document.getElementById('error') //this is id of error message

//initially hide the message
error.style.display = 'none'
success.style.display = 'none'

//show message on button click 
button.addEventListener('click', (e) => {
    e.preventDefault();
    if (email.value === '') { //if email is empty
        success.style.display = 'none' //make success message invisible
        error.style.display = 'block' //make error message visible
    } else { //if email is not empty
        error.style.display = 'none' //make error message invisible
        success.style.display = 'block' //make success message visible
    }
})