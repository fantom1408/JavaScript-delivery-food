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
const cardsRestaurants = document.querySelector('.cards-restaurants');
const containerPromo = document.querySelector('.container-promo');
const restaurants = document.querySelector('.restaurants');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');

let login = localStorage.getItem('gloDelivery');


function toggleModalAuth() {
  loginInput.style.borderColor = '';
  modalAuth.classList.toggle('is-open');
}

function authorized() {


  function logOut() {
    login = null;
    // localStorage.removeItem('gloDelivery');
    buttonAuth.style.display = '';
    userName.style.dysplay = '';
    buttonOut.style.dysplay = '';
    buttonOut.removeEventListener('click', logOut);
    checkAuth();
  }

  console.log('Авторизован');

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





function createCardRestaurant() {
  const card = `
     <a class="card card-restaurant">
						<img src="img/tanuki/preview.jpg" alt="image" class="card-image"/>
						<div class="card-text">
						  	<div class="card-heading">
								 <h3 class="card-title">Тануки</h3>
								 <span class="card-tag tag">60 мин</span>
							 </div>
							 <div class="card-info">
							  	<div class="rating">
							  		4.5
							  	</div>
							  	<div class="price">От 1 200 ₽</div>
							  	<div class="category">Суши, роллы</div>
				    	</div>
			     </div>
      </a>
    `;

  cardsRestaurants.insertAdjacentHTML('beforeend', card);

}

createCardRestaurant();
createCardRestaurant();
createCardRestaurant();



function createCardGood(){
  const card = document.createElement('div');
  card.className = 'card';

  card.insertAdjacentHTML('beforeend', `
  
  <img src="img/pizza-plus/pizza-classic.jpg" alt="image" class="card-image"/>
  <div class="card-text">
    <div class="card-heading">
      <h3 class="card-title card-title-reg">Пицца Классика</h3>
    </div>
    <div class="card-info">
      <div class="ingredients">Соус томатный, сыр «Моцарелла», сыр «Пармезан», ветчина, салями,
        грибы.
      </div>
    </div>
    <div class="card-buttons">
      <button class="button button-primary button-add-cart">
        <span class="button-card-text">В корзину</span>
        <span class="button-cart-svg"></span>
      </button>
      <strong class="card-price-bold">510 ₽</strong>
    </div>
  </div>

  `); 
  console.log(card);

}

function openGoods(event){
  // console.log(event);

  const target = event.target;
 
  const restaurant = target.closest('.card-restaurant');
  // console.log('restaurant: ', restaurant);

  if(restaurant){
    containerPromo.classList.add('hide');
    restaurants.classList.add('hide');
    menu.classList.remove('hide');
  }
 createCardGood();
 createCardGood();
 createCardGood();
  
}

cardsRestaurants.addEventListener('click', openGoods);
logo.addEventListener('click', function(){
   containerPromo.classList.remove('hide');
    restaurants.classList.remove('hide');
    menu.classList.add('hide');
})