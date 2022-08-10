'use strict'


const createCard = document.querySelector('.create');
const modal = document.querySelector('.modal')
const containerCard = document.querySelector('.card__container');

const mask = document.querySelector('.mask');
const showCard = document.querySelector('.show');
let usersCards = [];



createCard.addEventListener('click',() => {

    mask.classList.add('active')
    modalCreate()
})

showCard.addEventListener('click', () => {
    cardRender();
})

function maskRemove () {
    mask.classList.remove('active')
}


let resultModal = '';
function modalCreate () {
    resultModal = '';

    resultModal = `<div class="modal__create">
                   <form action="#" >
                   <label class="form__label" for="input">Name: <input placeholder="Your Name..." onchange="newName(this.value)" value=""  type="text"></label>
                    </form>
                     <label class="form__label" for="">Lastname: <input placeholder="Your Lastname..." onchange="newLastname(this.value)" value="" type="text"></label>
                    </form>
                     <label class="form__label" for="">Position: <input placeholder="Your position..." onchange="newPosition(this.value)" type="text"></label>
                    </form>
                    <button class="btn submit" onclick="newUser()">Submit</button>
                </div> `

    modal.innerHTML = resultModal;
}
let resultRender = '';
function cardRender () {
    resultRender = '';

    for (let i = 0; i < usersCards.length; i++) {
        resultRender += `<div class="card__item">
                        <p>Name:${usersCards[i].name}</p>
                        <p>Lastname:${usersCards[i].lastName}</p>
                        <p>Work Postion:${usersCards[i].position}</p>   
                        <button class="delete__user" onclick="deleteUser(${usersCards[i].id})" type="button">X</button>                                                               
                  </div>`
    }
    containerCard.innerHTML = resultRender;
}


//Clear str
let lastnameStr = '';
let positionStr = '';
let nameStr = '';


function newLastname (lastname) {
    return lastnameStr = lastname;
}
function newPosition (position) {
    return positionStr = position;
}

function newName (name) {
    return nameStr = name;
}

function newUser () {
    usersCards.push( {
        name: nameStr,
        lastName: lastnameStr,
        position: positionStr,
        id: randomID(),
    })
    console.log(usersCards);
    closeModal ();
    maskRemove();
    cardRender();
    clearStr();
}


function closeModal () {
    resultModal = ``;
   modal.innerHTML = resultModal;
}


function clearStr () {
     lastnameStr = '';
     positionStr = '';
     nameStr = '';
}

function randomID () {
    return Math.floor(Math.random() * 100000)
}

function deleteUser (userID) {
    usersCards = usersCards.filter( el => el.id !== userID);

    cardRender()
}

