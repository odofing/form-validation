// Form Blur Event Listeners
document.getElementById('surname').addEventListener('blur', validateSurname);
document.getElementById('title').addEventListener('blur', validateTitle);
document.getElementById('lastname').addEventListener('blur', validatelastName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('password').addEventListener('blur', validatePassword);


function validateTitle() {
    const title = document.getElementById('title');
    const re = /^[a-zA-Z]{2,8}$/;
  
    if(!re.test(title.value)){
      title.classList.add('is-invalid');
    } else {
      title.classList.remove('is-invalid');
    }
  }
  

function validateSurname() {
  const surname = document.getElementById('surname');
  const re = /^[a-zA-Z]{2,10}$/;

  if(!re.test(surname.value)){
    surname.classList.add('is-invalid');
  } else {
    surname.classList.remove('is-invalid');
  }
}


function validatelastName() {
    const lastName = document.getElementById('lastname');
    const re = /^[a-zA-Z]{3,15}$/;
  
    if(!re.test(lastName.value)){
      lastName.classList.add('is-invalid');
    } else {
      lastName.classList.remove('is-invalid');
    }
  }
  
function validateEmail() {
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)){
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }
}

function validatePhone() {
  const phone = document.getElementById('phone');
  const re = /^([2-4]){3}([0-9]){10}$/;

  if(!re.test(phone.value)){
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}

function validatePassword() {
    const password = document.getElementById('password');
    const re = /^\S[A-Za-z0-9][\w]{7,20}$/;
  
    if(!re.test(password.value)){
      password.classList.add('is-invalid');
    } else {
      password.classList.remove('is-invalid');
    }
  }

  
  