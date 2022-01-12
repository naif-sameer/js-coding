/* eslint-disable quotes */
// function to get the element
const el = (element) => document.querySelector(element);

/** log function used for print the error message
 * @param element
 * @param err
 */
const log = (element, err) => {
  // console.log(element);

  // add the message to the dom
  el(element).textContent = err;

  console.log(err);
};

// email validation
function isEmailValid(email) {
  const MAIL_FORMAT = /\S+@\S+\.\S+/;

  return email.match(MAIL_FORMAT);
}

// passwrod validation
function isPasswordValid(passwrod) {
  // only god know what this line mean LOL.
  const PASSWORD_FORMAT =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;

  return passwrod.match(PASSWORD_FORMAT);
}

// url validation
function isURLValid(url) {
  // test the url if it is valid using js magick
  try {
    const testUrl = new URL(url);
    return false;
  } catch (err) {
    return true;
  }
}

function checkForm() {
  // name length
  const nameLen = el('#username').value.length;
  if (nameLen < 3) {
    log('.username-err', 'name must be upper than three letters');
  } else if (nameLen >= 10) {
    log('.username-err', 'name must be lower than ten letters');
  }

  // email
  const email = el('#email').value;
  if (!isEmailValid(email)) {
    log('.email-err', 'invalid email');
  }

  // pass
  const password = el('#password').value;
  if (!isPasswordValid(password)) {
    log(
      '.password-err',
      'password must contain an uppercase letter, symbol, lowecase, and number, at less 6 letter'
    );
  }

  // confirm pass
  const confirmPassword = el('#confirm-password').value;
  if (confirmPassword !== password) {
    log('.confirm-password-err', 'confirm pass must as same as password');
  }

  // age
  const age = el('#age').value;
  // check if the age not a valid number.
  if (isNaN(age)) {
    log('.age-err', 'bro enter correct age');
  }
  // age must be over 18
  if (Number(age) < 18) {
    log('.age-err', 'bro you need to be over than 18 years old');
  }

  // phone
  const phone = el('#phone').value;
  if (phone.length !== 9) {
    log('.phone-err', 'phone number must be 9 numbers ');
  }
  for (let i = 0; i < 3; i += 1) {
    if (Number(phone[i]) !== 7) {
      log('.phone-err', 'phone number must start with 777');
      break;
    }
  }

  // url
  const url = el('#url').value;
  if (isURLValid(url)) {
    log('.url-err', 'bro you need correct url ex. https://geeksforgeeks.com');
  }

  // message
  const message = el('#message').value.length;
  if (message < 20) {
    log('.message-err', 'bro message need to be over than 20 letters.');
  }
}

// form
const btn = el('#user-form button');
btn.addEventListener('click', (e) => {
  e.preventDefault();

  // remove the previews err
  document.querySelectorAll('.input-err').forEach((item) => {
    item.textContent = '';
  });

  checkForm();

  console.log('form is submitted');
});

// dark mode controller
const changeModeBtn = el('.mode-controller button');
changeModeBtn.onclick = () => {
  const bodyEl = document.body.classList;
  let label = 'dark';

  if (bodyEl.contains('dark')) {
    // change from dark to light
    bodyEl.remove('dark');
    label = 'light';
  } else {
    // change from light to dark
    bodyEl.add('dark');
    label = 'dark';
  }

  // change the label text on the heading
  el('.js-mode-label').textContent = label;
  window.document.title = label;

  console.log('chagne mode');
};
