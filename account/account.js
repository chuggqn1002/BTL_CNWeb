const user_infor = JSON.parse(localStorage.getItem('log in'));
const user_names = document.querySelectorAll('.user-name');
const user_emails = document.querySelectorAll('.user-email');
// hien ten tai khoan
user_names.forEach((user_name) => {
user_name.textContent = user_infor.Name;
})
user_emails.forEach((user_email) => {
    user_email.textContent = user_infor.Email;
})
//dang xuat
const log_out = document.getElementById('log-out');
log_out.onclick = () => localStorage.removeItem('log in')

//tat quang cao
var adv = document.getElementById('advertisement');
var adv_btn = document.getElementById('dismis-ad');
adv_btn.onclick = () => {
    adv.style.display = 'none';
}
//them vao gio hang
// var btnAdd = document.getElementById('btn-add');
// console.log(btnAdd.getAttributeNS('data-purpose','sd'))
var addCourses = document.querySelectorAll('.course');
let courses = JSON.parse(localStorage.getItem('courses')) ? JSON.parse(localStorage.getItem('courses')) : [];
var cart = document.getElementById('cart');
console.log(user_emails)
console.log (courses)
if(courses.length >0 && courses.some((course) => {
    return(user_emails[0].textContent == course.email)
}))
{
    cart.innerHTML = '';
    //console.log(1)
    courses.forEach((course) => {
        //console.log(user_email.textContent == course.email)
        if(user_emails[0].textContent == course.email)
        cart.innerHTML += course.text;
    })
}

// console.log(course.innerHTML)
addCourses.forEach((addCourse,i) => {
    addCourse.onclick = (e) => {
        e.preventDefault();
        courses = JSON.parse(localStorage.getItem('courses')) ? JSON.parse(localStorage.getItem('courses')) : [];

        if(courses.length == 0 || courses.every((course) => {
            return(user_emails[0].textContent != course.email)
        }))
        cart.innerHTML = '';

        

        let course = {
            email : user_infor.Email,
            text: addCourses[i].innerHTML
        }
        // console.log(addCourses[i])
        courses.push(course);
        localStorage.setItem('courses', JSON.stringify(courses))
        cart.innerHTML += course.text;
    }
})

// cart.append(course.innerHTML);
// cart.append(course);

//xem khoa hoc
var course_infos = document.querySelectorAll('.courses');
course_infos.forEach((course_info) => {
    course_info.onclick = (e) => {
         e.preventDefault();
        window.location.href = '../course/course.html';
    }
}) 