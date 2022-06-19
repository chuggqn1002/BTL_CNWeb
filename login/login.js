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
    //admin page
    if(email.value === 'admin@gmail.com' && password.value === 'admin2022') {
        console.log('sign in');
        window.location.href = '../admin/admin.html';
    }
    //log in
    let users = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [];
    if(users.some((user) => {
        return (email.value == user.Email && password.value == user.Password)
    })){
        //localStorage.setItem('account',JSON.stringify({Name:input_fullname.value, Email:input_email.value}))
        for(let i in users) {
            if(email.value == users[i].Email && password.value == users[i].Password){
                localStorage.setItem('log in',JSON.stringify({Name:users[i].Name, Email:users[i].Email}))
                break
            }
        }
        window.location.href = '../account/account.html';
    }
    else if (email.value === 'admin@gmail.com' && password.value === 'admin2022') {
        {
            login_failed.style.display='none';
        }
    }
    else{
        login_failed.style.display='block';
    }
}
// submit.onclick = function() {
//     location.href = 'https://google.com/';
//     console.log('đ');
// }
// console.log([1,2,3].map((item)=>{ if(item == 2) return item}))
var login_failed = document.getElementById('login-failed');
login_failed.style.display='none';