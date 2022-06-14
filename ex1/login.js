function login() {
    var email = document.getElementById('email')
    var password = document.getElementById('password')
    var has_error = false;


    if (email.value != '') {
        email.classList.add('is-valid');
        email.classList.remove('is-invalid')
        email_valid.innerText = ''
    } else {
        email.classList.remove('is-valid')
        email.classList.add('is-invalid');
        email_valid.innerText = `l'adresse email est invalid `
        var has_error = true;
    }

    if (password.value != '') {
        password.classList.add('is-valid');
        password.classList.remove('is-invalid')
        password_valid.innerText = ''
    } else {
        password.classList.remove('is-valid')
        password.classList.add('is-invalid');
        password_valid.innerText = `le mot de passe  est obligatoire `
        var has_error = true;
    }

    if (has_error == false) {
        var users = JSON.parse(localStorage.getItem('users')) || [];
        const resultat = users.find(coordonnées => coordonnées.password === password.value && coordonnées.email === email.value)
        console.log(resultat);

        if (resultat != undefined) {
            alert('welcome back ')
            window.open('/javascript/challenge 2/ex1/dashboard.html')       
        } else {
            alert('verifiez vos informations ')
           
        }
    }

}

var submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    login()

})