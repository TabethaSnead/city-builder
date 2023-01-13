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
    mainCounter++;
});

sideDropdown.addEventListener('change', () => {
    sideCounter++;
});

dessertDropdown.addEventListener('change', () => {
    dessertCounter++;
});
favoriteButton.addEventListener('click', () => {
    const favoritePhrase = favoriteInput.value;
    favoriteArrs.push(favoritePhrase);
    favoriteInput.value = '';

    displayFavoriteResults();
});
/* Display Functions */
function displayFavoriteResults() {
    favoriteInput.textContent = '';
    for (let favorite of favoriteArrs) {
        const displayFavorite = document.createElement('div');
        displayFavorite.classList.add('favorite-phrases');
        displayFavorite.textContent = favorite;
        favoriteInput.append(displayFavorite);
    }
}
// (don't forget to call any display functions you want to run on page load!)
