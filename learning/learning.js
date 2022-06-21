var purchasedCourse_container = document.getElementById('purchasedCourse-container');
var purchasedCourses =JSON.parse(localStorage.getItem(user_emails[0].textContent));
purchasedCourses.forEach((purchasedCourse)=>{
    purchasedCourse_container.innerHTML += purchasedCourse;
})