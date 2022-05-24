const email = document.getElementById('exampleInputEmail1');
const password = document.getElementById('exampleInputPassword1');
const submit = document.getElementById('submit');
const form = document.getElementById('form-signin');
password.oninput = function() {
    if(password.value.length < 6 ){
        password.setCustomValidity('Mật khẩu phải chứa 6 ký tự trở lên (Bạn đang nhập ' + password.value.length +' ký tự)' );
    }
    else{
        password.setCustomValidity('');
    }
}
form.onsubmit = function(e) {
    e.preventDefault();
    if(email.value === 'admin@gmail.com' && password.value === 'admin2022') {
        console.log('sign in');
        location.href = 'https://google.com/';
    }
    
}
// submit.onclick = function() {
//     location.href = 'https://google.com/';
//     console.log('đ');
// }
