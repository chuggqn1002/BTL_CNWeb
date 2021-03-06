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

//xem khoa hoc
var course_infos = document.querySelectorAll('.courses');

course_infos.forEach((course_info) => {
    course_info.onclick = (e) => {
        e.preventDefault();
        localStorage.setItem('course-info',JSON.stringify({
          img:course_info.querySelector('img').src,
          name:course_info.querySelector('h3 a').textContent,
          instructor:course_info.querySelector('.course-card-instr').textContent,
          price: course_info.querySelector('.price-text span').textContent
        }))
        
        window.location.href = '../course/course.html';
    }
})
//them gio hang
var cart = document.getElementById('cart');
var add = function (id) {
    let goToCartBtn = document.getElementById('goToCartBtn');
    if(goToCartBtn) {
        goToCartBtn.remove();
    }
    var imgCourse = '../images/container-content/4/container-1.jpg';
    var nameCourse = 'Ultimate Rust 2: Intermediate Concepts';
    var instructorCourse = 'Nathan Stocks';
    var priceCourse = '$26.99';
    switch (id) {
        case 'course1': {
            break
        }
        case 'course2': {
            imgCourse = '../images/container-content/4/container-2.jpg';
            nameCourse = 'Ultimate Rust Crash Course';
            instructorCourse = 'Nathan Stocks';
            priceCourse = '$36.99';
            break
        }
        case 'course3': {
            imgCourse = '../images/container-content/4/container-3.jpg';
            nameCourse = 'Learn Rust by Building Real Applications';
            instructorCourse = 'Lyubomir Gavadinov';
            priceCourse = '$18.99';
            break
        }
        case 'course4': {
            imgCourse = '../images/container-content/4/container-4.jpg';
            nameCourse = 'Learn Python: The Complete Python Programming Course';
            instructorCourse = 'Avinash Jain, The Codex';
            priceCourse = '$20.99';
            break
        }
        case 'course5': {
            imgCourse = '../images/container-content/4/container-5.jpg';
            nameCourse = 'Learn Python: The Complete Python Programming Course';
            instructorCourse = 'Avinash Jain, The Codex';
            priceCourse = '$36.99';
            break
        }


    }
    console.log(imgCourse)
    // console.log(cart)
    let courses = JSON.parse(localStorage.getItem('courses')) ? JSON.parse(localStorage.getItem('courses')) : [];
    if (courses.length == 0 || courses.every((course) => {
        return (user_emails[0].textContent != course.email)
    }))
        cart.innerHTML = '';



    let course = {
        email: user_infor.Email,
        img: imgCourse,
        name: nameCourse,
        instructor: instructorCourse,
        price: priceCourse
    }
    // console.log(addCourses[i])
    courses.push(course);
    localStorage.setItem('courses', JSON.stringify(courses))
    cart.innerHTML += `
    <div class="courses col">
            <div class="img-wrapper">
              <img src="`+ course.img + `" height="135" width="240" alt="">
            </div>
            <div class="course-card mt-2 mb-1">
              <h3>
                <a class="font-for-conteiner-banner" href="">`+ course.name + `</a>
              </h3>
            </div>
            <div class="instructor-font">
              <div class="course-card-instr">`+ course.instructor + `</div>
            </div>
            <div class="course-card-review d-flex">
              <span class="star-rating d-flex">
                <span class="font-content">4.4</span>
                <div class="">
                  <div class="ratings star-rating-wrapper fs-6">
                    <i class="fa-solid fa-star rating-color"></i>
                    <i class="fa-solid fa-star rating-color"></i>
                    <i class="fa-solid fa-star rating-color"></i>
                    <i class="fa-solid fa-star rating-color"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
              </span>
              <span class="reviews instructor-font">
                (1,564)
              </span>
            </div>

            <div class="course-card-pricing d-flex align-items-center">
              <div class="price-text">
                <span style="font-weight: 700;">` + course.price + `</span>
              </div>

              <div class="discount-pricing font-content">
                <span class="discount-text">$84.99</span>
              </div>
            </div>


          </div>

        </div>
      </div>
    </div>
    
    `;
    let newGoToCartBtn = document.createElement('div');
    newGoToCartBtn.innerHTML = `<a  href="../cart/cart.html" > <button class="w-100 bg-dark text-white fs-3">Go to Cart</button></a>`;
    newGoToCartBtn.id = 'goToCartBtn';
    cart.append(newGoToCartBtn);
}
//load gio hang
courses = JSON.parse(localStorage.getItem('courses')) ? JSON.parse(localStorage.getItem('courses')) : [];
console.log(user_emails[0].textContent == courses[0].email)
if (courses.length != 0 && courses.some((course) => {
    return (user_emails[0].textContent == course.email)
})) {
    cart.innerHTML = '';
    courses.forEach((course, i) => {
      if(user_emails[0].textContent == course.email) {
        cart.innerHTML += `
                <div class="courses col">
            <div class="img-wrapper">
              <img src="`+ course.img + `" height="135" width="240" alt="">
            </div>
            <div class="course-card mt-2 mb-1">
              <h3>
                <a class="font-for-conteiner-banner" href="">`+ course.name + `</a>
              </h3>
            </div>
            <div class="instructor-font">
              <div class="course-card-instr">`+ course.instructor + `</div>
            </div>
            <div class="course-card-review d-flex">
              <span class="star-rating d-flex">
                <span class="font-content">4.4</span>
                <div class="">
                  <div class="ratings star-rating-wrapper fs-6">
                    <i class="fa-solid fa-star rating-color"></i>
                    <i class="fa-solid fa-star rating-color"></i>
                    <i class="fa-solid fa-star rating-color"></i>
                    <i class="fa-solid fa-star rating-color"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
              </span>
              <span class="reviews instructor-font">
                (1,564)
              </span>
            </div>

            <div class="course-card-pricing d-flex align-items-center">
              <div class="price-text">
                <span style="font-weight: 700;">` + course.price + `</span>
              </div>

              <div class="discount-pricing font-content">
                <span class="discount-text">$84.99</span>
              </div>
            </div>


          </div>

        </div>
      </div>
    </div>
    `;
      }
            

    })
    var goToCartBtn = document.createElement('div');
    goToCartBtn.innerHTML = `<a  href="../cart/cart.html" > <button class="w-100 bg-dark text-white fs-3">Go to Cart</button></a>`;
    goToCartBtn.id = 'goToCartBtn';
    cart.append(goToCartBtn);
}
