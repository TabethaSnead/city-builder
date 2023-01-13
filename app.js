/* Imports */

/* Get DOM Elements */
const mainDropdown = document.getElementById('main-dropdown');
const sideDropdown = document.getElementById('side-dropdown');
const dessertDropdown = document.getElementById('dessert-dropdown');
const favoriteInput = document.getElementById('favorite-input');
const favoriteButton = document.getElementById('favorite-button');
const stats = document.getElementById('stats');
const numOfChoices = document.getElementById('numOfChoices');
const favoriteResults = document.getElementById('favoriteResults');
const mainResult = document.getElementById('mainResult');
const sideResult = document.getElementById('sideResult');
const dessertResult = document.getElementById('dessertResult');
/* State */
let mainCounter = 0;
let sideCounter = 0;
let dessertCounter = 0;
let choicesCounter = 0;
let favoriteArrs = [];

/* Events */
mainDropdown.addEventListener('change', () => {
    mainResult.style.backgroundImage = `url(./assets/${mainDropdown.value}-main.png)`;
    mainCounter++;
    displayCounter();
    console.log(mainDropdown.value);
});

sideDropdown.addEventListener('change', () => {
    sideResult.style.backgroundImage = `url(./assets/${sideDropdown.value}-side.png)`;
    sideCounter++;
    displayCounter();
});

dessertDropdown.addEventListener('change', () => {
    dessertResult.style.backgroundImage = `url(./assets/${dessertDropdown.value}-dessert.png)`;
    dessertCounter++;
    displayCounter();
});
favoriteButton.addEventListener('click', () => {
    const favoritePhrase = favoriteInput.value;
    favoriteArrs.push(favoritePhrase);
    console.log(favoriteArrs);
    favoriteInput.value = '';
    displayFavoriteResults();
});
/* Display Functions */
function displayFavoriteResults() {
    favoriteResults.textContent = '';
    for (let favorite of favoriteArrs) {
        const displayFavorite = document.createElement('div');
        displayFavorite.classList.add('favorite-phrases');
        displayFavorite.textContent = favorite;
        favoriteResults.append(displayFavorite);
    }
}
function displayCounter() {
    numOfChoices.textContent = `You have chosen a new main dish ${mainCounter} times. You have chosen a new side dish ${sideCounter}
     times. Tou have chosen a new dessert ${dessertCounter} times.`;
}
// (don't forget to call any display functions you want to run on page load!)
