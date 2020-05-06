const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}


// day 1




const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');

let login = localStorage.getItem('gloDelivery');

console.log(login);

function toggleModalAuth() {
  loginInput.style.borderColor = '';
  modalAuth.classList.toggle('is-open');
}

function authorized() {
  console.log('Авторизован');

  function logOut() {
    login = null;
    // localStorage.removeItem('gloDelivery');
    buttonAuth.style.display = '';
    userName.style.dysplay = '';
    buttonOut.style.dysplay = '';
    buttonOut.removeEventListener('click', logOut);
    checkAuth();
    
  }

  userName.textContent = login;

  buttonAuth.style.display = 'none';
  userName.style.dysplay = 'inline';
  buttonOut.style.dysplay = 'block';
  buttonOut.addEventListener('click', logOut)
}


function notAuthorized() {
  console.log('Не авторизован');

  function logIn(event) {
    event.preventDefault();
  

    if (loginInput.value.trim()) {
      login = loginInput.value;
      // localStorage.setItem('gloDelivery', login);
      toggleModalAuth();
      buttonAuth.removeEventListener('click', toggleModalAuth);
      closeAuth.removeEventListener('click', toggleModalAuth);
      logInForm.removeEventListener('submit', logIn);
      logInForm.reset();
      checkAuth();
    } else {
      loginInput.style.borderColor = 'red';
    }
    // console.log('логин');
    //  console.log(loginInput.value);
  }


  buttonAuth.addEventListener('click', toggleModalAuth);
  closeAuth.addEventListener('click', toggleModalAuth);
  logInForm.addEventListener('submit', logIn);
}

function checkAuth() {
  if (login) {
    authorized()
  } else {
    notAuthorized()
  }
}
checkAuth();