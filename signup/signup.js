var label_fullname = document.querySelector('#exampleInputFullName1 ~ label');
var label_email = document.querySelector('#exampleInputEmail1 ~ label');
var label_password = document.querySelector('#exampleInputPassword1 ~ label');
// var move_label = function(label) {
//     label.classList.add('move-label');

var input_fullname = document.getElementById('exampleInputFullName1');
var input_email = document.getElementById('exampleInputEmail1');
var input_password = document.getElementById('exampleInputPassword1');

input_fullname.onblur = function() {
    if(input_fullname.value.length > 0)
    {
        if(label_fullname.classList.contains('default-label'))
            label_fullname.classList.remove('default-label');
        label_fullname.classList.add('moved-label');
    }
    else{
        if(label_fullname.classList.contains('moved-label'))
            label_fullname.classList.remove('moved-label');
        label_fullname.classList.add('default-label');
    }
}
input_fullname.onfocus = function() {
    if(label_fullname.classList.contains('default-label')) 
        label_fullname.classList.remove('default-label');
    label_fullname.classList.add('moved-label');
}
// 
input_email.onblur = function() {
    if(input_email.value.length > 0)
    {
        if(label_email.classList.contains('default-label'))
            label_email.classList.remove('default-label');
        label_email.classList.add('moved-label');
    }
    else{
        if(label_email.classList.contains('moved-label'))
            label_email.classList.remove('moved-label');
        label_email.classList.add('default-label');
    }
}
input_email.onfocus = function() {
    console.log('focus!');
    if(label_email.classList.contains('default-label')) 
        label_email.classList.remove('default-label');
    label_email.classList.add('moved-label');
}
// 
input_password.onblur = function() {
    if(input_password.value.length > 0)
    {
        if(label_password.classList.contains('default-label'))
            label_password.classList.remove('default-label');
        label_password.classList.add('moved-label');
    }
    else{
        if(label_password.classList.contains('moved-label'))
            label_password.classList.remove('moved-label');
        label_password.classList.add('default-label');
    }
}
input_password.onfocus = function() {
    if(label_password.classList.contains('default-label')) 
        label_password.classList.remove('default-label');
    label_password.classList.add('moved-label');
}

const email = document.getElementById('exampleInputEmail1');
const password = document.getElementById('exampleInputPassword1');
const submit = document.getElementById('submit');
const form = document.getElementById('form-signup');
password.oninput = function() {
    if(password.value.length < 6 ){
        password.setCustomValidity('Mật khẩu phải chứa 6 ký tự trở lên (Bạn đang nhập ' + password.value.length +' ký tự)' );
    }
    else{
        password.setCustomValidity('');
    }
}

var pw1 = document.getElementById('password-level1');
var pw2 = document.getElementById('password-level2');
var pw3 = document.getElementById('password-level3');
var pw4 = document.getElementById('password-level4');
var password_alert = document.getElementById('password-alert');
password.oninput = () => {
    //mat khau it nhat 6 ki tu
    if(password.value.length < 6 ){
        password.setCustomValidity('Mật khẩu phải chứa 6 ký tự trở lên (Bạn đang nhập ' + password.value.length +' ký tự)' );
    }
    else{
        password.setCustomValidity('');
    }
    //do bao mat
    if (password.value.length <= 6) {
        pw1.classList.add('bg-secondary');
        pw1.classList.remove('bg-dark');
        password_alert.textContent = '';
    }
    else if (password.value.length <=8) {
        pw1.classList.add('bg-dark');

        pw2.classList.add('bg-secondary');
        pw2.classList.remove('bg-dark');

        password_alert.textContent = 'Too weak';
    }
    else if (password.value.length <=10) {
        pw2.classList.add('bg-dark');

        pw3.classList.add('bg-secondary');
        pw3.classList.remove('bg-dark');

        password_alert.textContent = 'Could be stronger';

    }
    else if (password.value.length <=12) {
        pw3.classList.add('bg-dark');

        pw4.classList.add('bg-secondary');
        pw4.classList.remove('bg-dark');

        password_alert.textContent = 'Strong password';
    }
    else if (password.value.length <=14) {
        pw4.classList.add('bg-dark');

        password_alert.textContent = 'Very strong password';

    }
}
//An hien mat khau

var eyes = document.getElementById('eyes');
eyes.onclick = () => {
    eyes.classList.toggle('fa-eye');
    eyes.classList.toggle('fa-eye-slash');

    if(eyes.classList.contains('fa-eye')){
        password.setAttribute('type','password');
    }
    else if (eyes.classList.contains('fa-eye-slash')) {
        password.setAttribute('type','text');
    }

}

//Dang ki tai khoan
var form_signUp = document.getElementById('form-signup');
form_signUp.onsubmit = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [];
    let user = {
        Name: input_fullname.value,
        Email: input_email.value,
        Password: input_password.value
    }
    if(users.every((user)=>{
        return (input_fullname.value != user.Name && input_email.value != user.Email)
    }) && input_email.value != 'admin@gmail.com') {
    users.push(user);
    alert('Creat account successfully')
    window.location.href = '../login/login.html';
    }
    else alert('Account already exists');
    localStorage.setItem('users', JSON.stringify(users))
    
    // let users = JSON.stringify(localStorage);
    // console.log(users)

    input_fullname.value = '';
    input_password.value = '';
    input_email.value = '';
    // label_fullname.classList.remove('moved-label');
    // label_fullname.classList.add('default-label');
    // label_email.classList.remove('moved-label');
    // label_email.classList.add('default-label');
    // label_password.classList.remove('moved-label');
    // label_password.classList.add('default-label');
}
//console.log(localStorage.length)