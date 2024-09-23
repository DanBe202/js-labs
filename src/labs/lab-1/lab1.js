const margheritaButton = document.getElementById('view-margherita');
const quattroButton = document.querySelector('#view-quattro');
const capricciosaButton = document.getElementsByClassName('btn btn-primary')[2];  // Взяли третій елемент з класом
const marinaraButton = document.getElementsByTagName('a')[3];  // Четвертий button елемент

function showMessage(message) {
    alert(message);
}

margheritaButton.addEventListener('click', function () {
    showMessage('You selected Margherita pizza');
});

quattroButton.addEventListener('click', function () {
    showMessage('You selected Quattro Formaggi pizza');
});

capricciosaButton.addEventListener('click', function () {
    showMessage('You selected Capricciosa pizza');
});

marinaraButton.addEventListener('click', function () {
    showMessage('You selected Marinara pizza');
});

const cardImages = document.querySelectorAll('.card-image');

cardImages.forEach(image => {
    image.addEventListener('mouseover', function () {
        this.style.boxShadow = "0 0 6px 6px rgba(83, 48, 17, 0.7)";
    });

    image.addEventListener('mouseout', function () {
        this.style.boxShadow = "none";
    });
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        showMessage('Enter key pressed');
    }
});