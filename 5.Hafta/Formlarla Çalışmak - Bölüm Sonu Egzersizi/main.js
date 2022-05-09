// Submit fonksiyonu +
(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        // if (document.getElementById("password1").value != document.getElementById("password2").value) {
        //   alert("Password mismatch");
        //   event.preventDefault();
        //   event.stopPropagation();
        // }

        form.classList.add('was-validated')
      }, false)
    })
})()
// Submit fonksiyonu -

let userForm = document.querySelector("#userForm");
const toastNotification = document.querySelector("#toastNf");

userPassword = document.querySelector("#userPassword");
userName = document.querySelector("#userName");
userSurname = document.querySelector("#userSurname");
userEmail = document.querySelector("#userEmail");

const formHandler = (event) => {
  event.preventDefault()

  if (userName.value && userPassword.value && userSurname.value && userEmail.value) {
    setUserInfo(userName.value, userSurname.value, userEmail.value, userPassword.value);
    toastNotification.innerHTML =
    `
    <div class="alert alert-success" role="alert">
    <strong>Tebrikler!</strong> Kayıt başarılı.
    </div>
    `;
  }

  else {

  }

}

// LocalStorage işlemleri +
const setUserInfo = (name, surname, email, password) => {
  let userInfo = {
    name: name,
    surname: surname,
    email: email,
    password: password
  }
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
}

function getUserInfo() {
  return JSON.parse(localStorage.getItem("userInfo"));
}
// LocalStorage işlemleri -

userForm.addEventListener("submit", formHandler);