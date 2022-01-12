/* eslint-disable quotes */
// function to get the element
const el = (element) => document.querySelector(element);

// log function
const log = (param) => console.log(param);

// email validation
function isEmailValid(email) {
  const MAIL_FORMAT = /^w+[.-]*@w+([.-]?w+)*(.w{2,3})+$/;

  return email.match(MAIL_FORMAT);
}

// passwrod validation
function isPasswordValid(passwrod) {
  // only god know what this line mean LOL.
  const PASSWORD_FORMAT = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]$/;

  return passwrod.match(PASSWORD_FORMAT);
}

// url validation
function isURLValid(passwrod) {
  // only god know what this line mean LOL.
  const PASSWORD_FORMAT = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]$/;

  return passwrod.match(PASSWORD_FORMAT);
}

function checkForm() {
  // name length
  const nameLen = el('#username').value.length;
  if (nameLen < 3) {
    log('name must be upper than three letters');
  } else if (nameLen >= 10) {
    log('name must be lower than ten letters');
  }

  // email
  const email = el('#email').value;
  if (!isEmailValid(email)) {
    log('invalid email');
  }

  // pass
  const password = el('#password').value;
  if (!isPasswordValid(password) || password.length < 6) {
    log(
      'password must contain an uppercase letter, symbol, lowecase, and number, as less 6 letter'
    );
  }

  // age
  const age = el('#age').value;
  if (age < 18) {
    log('bro you need to be over than 18 years old');
  }

  // phone
  const phone = el('#phone').value;
  if (phone.length !== 9) {
    log('phone number must be 9 numbers ');
  }
  for (let i = 0; i < 3; i += 1) {
    if (Number(phone[i]) !== 7) {
      console.log('phone number must start with 777');
      break;
    }
  }

  // url
  const url = el('#url').value;
  if (url < 18) {
    log('bro you need to be over than 18 years old');
  }
}

// form
const userForm = el('#user-form');
userForm.onSubmit = (e) => {
  e.preverntDefault();

  checkForm();

  console.log('form is submitted');
};
