var course_info = JSON.parse(localStorage.getItem('course-info'))
console.log(course_info)
var course_imgs = document.querySelectorAll('.course-img');
var course_prices = document.querySelectorAll('.course-price')
var course_names = document.querySelectorAll('.course-name');
var course_instructors  =document.querySelectorAll('.course-instructor')
course_imgs.forEach((course_img)=>{
    course_img.src = course_info.img;
})

course_prices.forEach((course_price)=>{
    course_price.textContent = course_info.price;
})

course_names.forEach((course_name)=>{
    course_name.textContent = course_info.name;
})
course_instructors.forEach((course_instructor)=>{
    course_instructor.textContent = course_info.instructor;
})


var courses = JSON.parse(localStorage.getItem('courses')) ? JSON.parse(localStorage.getItem('courses')) : [];
console.log(user_emails[0].textContent)
var addToCardBtns = document.querySelectorAll('.add-btn')
addToCardBtns.forEach((addToCardBtn)=>{
    console.log(addToCardBtn)
        addToCardBtn.addEventListener('click', () => {
        let goToCartBtn = document.getElementById('goToCartBtn');
        if (goToCartBtn) {
          goToCartBtn.remove();
        }
        if (courses.length == 0 || courses.every((course) => {
            return (user_emails[0].textContent != course.email)
        }))
            cart.innerHTML = '';
    
    
    
        let course = {
            email: user_emails[0].textContent,
            img: course_info.img,
            name: course_info.name,
            instructor: course_info.instructor,
            price: course_info.price
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
    }) 
})