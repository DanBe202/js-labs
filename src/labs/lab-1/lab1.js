// Достаєм елемент за ID
const margheritaButton = document.getElementById('view-margherita');

// Достаєм елемент за допомогою селектора
const quattroButton = document.querySelector('#view-quattro');

// Достаєм елемент за класом
const capricciosaButton = document.getElementsByClassName('btn btn-primary')[2];  // Взяли третій елемент з класом

// Достаєм 4 елемент за тегом
const marinaraButton = document.getElementsByTagName('a')[3];  // Четвертий button елемент

// Достаєм всі елементи за допомогою селектора
const cardImages = document.querySelectorAll('.card-image');

function showMessage(message) {
    alert(message);
}

// До margheritaButton добавлєм addEventListener пр дії 'click'
margheritaButton.addEventListener('click', function () {
    showMessage('You selected Margherita pizza');
});

// До quattroButton добавлєм addEventListener пр дії 'click'
quattroButton.addEventListener('click', function () {
    showMessage('You selected Quattro Formaggi pizza');
});

// До capricciosaButton добавлєм addEventListener пр дії 'click'
capricciosaButton.addEventListener('click', function () {
    showMessage('You selected Capricciosa pizza');
});

// До marinaraButton добавлєм addEventListener пр дії 'click'
marinaraButton.addEventListener('click', function () {
    showMessage('You selected Marinara pizza');
});

// До кожного елкменту cardImages добавлєм addEventListener пр дії 'mouseover'
cardImages.forEach(image => {
    image.onmouseover = function () {
        this.style.boxShadow = "0 0 6px 6px rgba(83, 48, 17, 0.7)";
    };

    image.onmouseout = function () {
        this.style.boxShadow = "none";
    };
});

// Добавлєм addEventListener при натисканні клавіши тобто 'keydown' для 'Enter'
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        showMessage('Enter key pressed');
    }
});