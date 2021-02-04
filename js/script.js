'use strict';
// window.addEventListener('load', () => { sould i? and why?
// }
const form = document.form;

// is window.addEventListener('load', () => {	needed?

const fName = document.getElementById('fname');
const lName = document.getElementById('lname');
const phone = document.getElementById('phone');
const email = document.getElementById('email'); 
<<<<<<< HEAD
const emailCon = document.getElementById('emailCon'); 
=======
const emailCon = document.getElementById('emailCon');

let reEmail = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi ;
let reNames = /^[a-z ,.'-]+$/i ;
let rePhone = /^\d{3,5}[- ]?\d{5,}$/;
>>>>>>> f69b06e7c46f727cbe34237e86728003f7dda991

let isValid = true;

//object.onsubmit = function(){myScript}; This would also do the trick but i keep it as backup

form.addEventListener('submit', (event) =>{
<<<<<<< HEAD
   // const form = event.target; // is on slides and i do not understand y
   let isValid = true;
=======
   // const form = event.target; // is on slides and i do not understand why
>>>>>>> f69b06e7c46f727cbe34237e86728003f7dda991

    if (fName.value.trim().length === 0) {
        alert('First name missing');
        isValid = false;
<<<<<<< HEAD
    }else if (!renames.test(fName.value)) {
        alert('Invalid first name');
        isValid = false;
        }
=======
    }
>>>>>>> f69b06e7c46f727cbe34237e86728003f7dda991
    
    if (lName.value.trim().length === 0) { 
        alert('Last name missing');
        isValid = false;
<<<<<<< HEAD
    } else if (!renames.test(lName.value)) {
        alert('Invalid last name');
        isValid = false;
        }
    
    if (isNaN(phone.value)) {
        alert('Phone missing');
        isValid = false;
    }
    
    if (email.value.trim().length === 0) {
        alert('Email missing');
        isValid = false;
    } else if (!reEmail.test(email.value)) {
        alert('Invalid email address');
        isValid = false;
        }
    if(email.value != emailCon.value){
        alert('Emails do not match');
        isValid = false;
    }
    if(!isValid){
        event.preventDefault();
    }    
=======
    }

    if (email.value.trim.length === 0) { // even if valid it shows that it's missing
        alert('Email missing');
        isValid = false;
    } 
    else if (email.value.indexOf('@') < 0) {
        alert('Invalid email address');
        isValid = false;
    }
    
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
    
    

>>>>>>> f69b06e7c46f727cbe34237e86728003f7dda991

    if (!isValid) event.preventDefault();

});