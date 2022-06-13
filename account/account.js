const user_infor = JSON.parse(localStorage.getItem('log in'));
const user_names = document.querySelectorAll('.user-name');
const user_emails = document.querySelectorAll('.user-email');
user_names.forEach((user_name) => {
user_name.textContent = user_infor.Name;
})
user_emails.forEach((user_email) => {
    user_email.textContent = user_infor.Email;
})

const log_out = document.getElementById('log-out');
log_out.onclick = () => localStorage.removeItem('log in')

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
