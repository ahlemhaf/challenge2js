function register() {
    var nom = document.getElementById('nom')
    // var nom_valid = document.getElementById('nom_valid')
    var prenom = document.getElementById('prenom')
    var email = document.getElementById('email')
    var password = document.getElementById('password')
    var confirm_password = document.getElementById('confirm_password')
    var has_error=false;
    if (nom.value != '') {
        nom.classList.add('is-valid');
        nom.classList.remove('is-invalid')
        nom_valid.innerText = ''
    } else {
        nom.classList.remove('is-valid')
        nom.classList.add('is-invalid');
        nom_valid.innerText = 'le nom est obligatoire'
        has_error=true;
    }
    if (prenom.value != '') {
        prenom.classList.add('is-valid');
        prenom.classList.remove('is-invalid')
        prenom_valid.innerText = ''
    } else {
        prenom.classList.remove('is-valid')
        prenom.classList.add('is-invalid');
        prenom_valid.innerText = 'le prenom est obligatoire'
        has_error=true;
    }

    if ((email.value.includes('@')) && (email.value != '')) {
        email.classList.add('is-valid');
        email.classList.remove('is-invalid')
        email_valid.innerText = ''
    } else {
        email.classList.remove('is-valid')
        email.classList.add('is-invalid');
        has_error=true;
        if (email.value == '') {
            email_valid.innerText = `l'adresse email est obligatoire `
        }
        if (email.value != '' && !email.value.includes('@')) {
            email_valid.innerText = `Email doit contenir @`
        }

    }

    if (password.value != '') {
        password.classList.add('is-valid');
        password.classList.remove('is-invalid')
        password_valid.innerText = ''
    } else {
        password.classList.remove('is-valid')
        password.classList.add('is-invalid');
        password_valid.innerText = `le mot de passe  est obligatoire `
        has_error=true;
    }

    if (confirm_password.value != '') {
        confirm_password.classList.add('is-valid');
        confirm_password.classList.remove('is-invalid')
        confirm_password_valid.innerText = ''
    } else {
        confirm_password.classList.remove('is-valid')
        confirm_password.classList.add('is-invalid');
        confirm_password_valid.innerText = `la confirmation du mot de passe est obligatoire ou bien la confirmation est invalid`
        has_error=true;
    }


    if (password.value == confirm_password.value && password.value != '' && confirm_password.value != '') {
        confirm_password.classList.add('is-valid');
        confirm_password.classList.remove('is-invalid')
    } else {
        confirm_password.classList.remove('is-valid')
        confirm_password.classList.add('is-invalid');
        has_error=true;
    }

if(has_error==false){

    var users = JSON.parse(localStorage.getItem('users')) || [];
    var user = {
        firstName: nom.value,
        lastName: prenom.value,
        email: email.value,
        password: password.value,
    }
    users.push(user)
    localStorage.setItem('users', JSON.stringify(users))
    
}

}
var submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    register()
})