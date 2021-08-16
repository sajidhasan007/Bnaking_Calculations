
// login 

document.getElementById('login-submit').addEventListener('click', function () {

    const user_name_field = document.getElementById('login-username');
    const user_name = user_name_field.value;
    const password_name_field = document.getElementById('login-password');
    const password = password_name_field.value;
    // console.log(user_name, ' and ', password);
    if (user_name == 'hasan520' && password == '12346') {

        // console.log('valid');
        window.location.href = 'banking.html';

    }


})

