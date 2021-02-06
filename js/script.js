'use strict';

const form = document.form;

// bringing all the needed info from the form

const fName = document.getElementById('fname');
const lName = document.getElementById('lname');
const phone = document.getElementById('phone');
const email = document.getElementById('email'); 
const emailCon = document.getElementById('emailCon');

//RegEx for the checks

let reEmail = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi ;
let reNames = /^[a-z ,.'-]+$/i ;
let rePhone = /^\d{3,5}[- ]?\d{5,}$/;

let isValid = true;

//object.onsubmit = function(){myScript}; This would also do the trick but i keep it as backup

form.addEventListener('submit', (event) =>{

    if (fName.value.trim().length === 0) {
        alert('First name missing');
        isValid = false;
    }
    
    if (lName.value.trim().length === 0) { 
        alert('Last name missing');
        isValid = false;
    }

    if (email.value.trim().length === 0) { // even if valid it used to show that it's missing. I forgot the () in trim so lesson learned
        alert('Email missing');
        isValid = false;
    } 
    else if (!reEmail.test(email.value)) {
        alert('Invalid email address');
        isValid = false;
    }
     // checking if something is wrong
    if (email.value !== emailCon.value) {
        alert('Emails do not match');
        isValid = false;
    }
    
    if (isNaN(phone.value)) {
        alert('Phone numbers missing');
        isValid = false;
    } else if (!rePhone.test(phone.value)){
        alert('Phone is not valid');
        isValid = false;
    }
    
    //prevent default if something wrong


    if (!isValid) event.preventDefault();

});