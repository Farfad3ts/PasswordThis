const body = document.getElementsByTagName("body")[0];
const password = document.querySelectorAll(".appPassword");
const main = document.getElementsByTagName("main")[0];
const addPasswordButton = document.getElementById("addPasswordButton");
// const seePassword = document.getElementsByClassName("seePassword");
// const editButton = document.getElementsByClassName("editButton");
// const deleteButton = document.getElementsByClassName("deleteButton");
// const copyPassword = document.getElementsByClassName("copyPassword");
const appPassword = document.getElementsByClassName("appPassword");

function fillPassword() {
  for (let i = 0; i < password.length; i++) {
    for (let j = 0; j < 18; j++) {
      password[i].innerHTML += "*";
    }
  }
}

function showAddPassword() {
  main.innerHTML += `
  <div id="addPassword">
    <div id="addPassword-header">
      <h4 id="addPassword-header-title">Add Password</h4>
      <button id="addPassword-headerclose" onclick="closeAddPassword()">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
    <div id="addPassword-body">
      <div class="addPassword-body-input">
        <label for="addPassword-body-input-name">Name:</label>
        <input type="text" name="addPassword-body-input-name" id="addPassword-body-input-name"/>
      </div>
      <div class="addPassword-body-input">
        <label for="addPassword-body-input-username">Username:</label>
        <input type="text" name="addPassword-body-input-username" id="addPassword-body-input-username"/>
      </div>
      <div class="addPassword-body-input">
        <label for="addPassword-body-input-password">Password:</label>
        <input type="text" name="addPassword-body-input-password" id="addPassword-body-input-password"/>
      </div>
    </div>
  </div>`;
  disableButton();
}

function closeAddPassword() {
  const addPassword = document.getElementById("addPassword");
  addPassword.remove();
  enableButton();
}
// //make that when i click on a password it shows the password
function showPassword() {
  for (let i = 0; i < seePassword.length; i++) {
    seePassword[i].addEventListener("click", () => {
      appPassword[i].innerHTML = "password";
    });
  }
}

function disableButton() {
  const seePassword = document.querySelectorAll(".seePassword");
  const editButton = document.querySelectorAll(".editButton");
  const deleteButton = document.querySelectorAll(".deleteButton");
  const copyPassword = document.querySelectorAll(".copyPassword");
  addPasswordButton.disabled = true;
  addPasswordButton.style.cursor = "default";
  seePassword.forEach((element) => {
    element.disabled = true;
    element.style.cursor = "default";
  });
  editButton.forEach((element) => {
    element.disabled = true;
    element.style.cursor = "default";
  });
  deleteButton.forEach((element) => {
    element.disabled = true;
    element.style.cursor = "default";
  });
  copyPassword.forEach((element) => {
    element.disabled = true;
    element.style.cursor = "default";
  });
}

function enableButton() {
  const seePassword = document.querySelectorAll(".seePassword");
  const editButton = document.querySelectorAll(".editButton");
  const deleteButton = document.querySelectorAll(".deleteButton");
  const copyPassword = document.querySelectorAll(".copyPassword");
  addPasswordButton.disabled = false;
  addPasswordButton.style.cursor = "pointer";
  seePassword.forEach((element) => {
    element.disabled = false;
    element.style.cursor = "pointer";
  });
  editButton.forEach((element) => {
    element.disabled = false;
    element.style.cursor = "pointer";
  });
  deleteButton.forEach((element) => {
    element.disabled = false;
    element.style.cursor = "pointer";
  });
  copyPassword.forEach((element) => {
    element.disabled = false;
    element.style.cursor = "pointer";
  });
}

