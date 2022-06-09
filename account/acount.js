const user_infor = JSON.parse(localStorage.getItem('log in'));
const user_name = document.getElementById('user-name');
const user_email = document.getElementById('user-email');
user_name.textContent = user_infor.Name;
user_email.textContent = user_infor.Email;

const log_out = document.getElementById('log-out');
log_out.onclick = () => localStorage.removeItem('log in')