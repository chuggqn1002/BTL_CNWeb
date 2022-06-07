var form_signUp = document.getElementById('form-signup');
// var email = document.getElementById('exampleInputEmail1');
// var password = document.getElementById('exampleInputPassword1');
 var fullname = document.getElementById('exampleInputFullName1');
localStorage.setItem('name','chung');
form_signUp.onsubmit = (e) => {
    e.preventDefault();
    let user = [{
        Name: fullname.value,
        Email: email.value,
        Password: password.value
    }]
    localStorage.setItem('users')
    
    // let users = JSON.stringify(localStorage);
    // console.log(users)
}