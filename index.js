const urlParams = new URLSearchParams(window.location.search);

let nameParam = urlParams.get('name') !== '' ? urlParams.get('name') : undefined;
let imageParam = urlParams.get('image') !== '' ? urlParams.get('image') : undefined;
let phoneParam = urlParams.get('phone') !== '' ? urlParams.get('phone') : undefined;
let emailParam = urlParams.get('email') !== '' ? urlParams.get('email') : undefined;


let nameSpan = document.getElementById('name_span');
let emailSpan = document.getElementById('email_span');
let phoneSpan = document.getElementById('phone_span');
let imageElement = document.getElementById('avatar_img');
let loadingSvg = document.getElementById('L7');

if (nameParam && imageParam && phoneParam && emailParam) {
    nameSpan.innerText = nameParam;
    imageElement.src = imageParam;
    phoneSpan.innerText = phoneParam;
    emailSpan.innerText = emailParam;
    imageElement.style.filter = 'grayscale(0)';
    loadingSvg.style.display = 'none';
} else {
    let errorString = 'Error - one or more query params missing : ';
    if (!nameParam) {
        errorString += '\n\t name';
    }
    if (!imageParam) {
        errorString += '\n\t image';
    }
    if (!phoneParam) {
        errorString += '\n\t phone';
    }
    if (!emailParam) {
        errorString += '\n\t email';
    }
    alert(errorString);
}