var purchasedCourse_container = document.getElementById('purchasedCourse-container');
var purchasedCourses =JSON.parse(localStorage.getItem(user_emails[0].textContent));
if(purchasedCourses)
purchasedCourses.forEach((purchasedCourse)=>{
    purchasedCourse_container.innerHTML += purchasedCourse;
})
else 
purchasedCourse_container.innerHTML = "<div class='text-center mt-5'>You haven't purchased any course yet</div> <a class='text-center' href='../account/account.html'> Keep shopping </a>";
