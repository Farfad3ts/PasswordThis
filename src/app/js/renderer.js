const body = document.getElementsByTagName('body')[0];
const password = document.getElementsByClassName('appPassword')[0];

//fill the password field with star characters
for (let i = 0; i < 18; i++) {
    password.innerHTML += '*';
}
// Path: src\app\js\main.js