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

var cart = document.getElementById('cart');
var cart_container  =document.getElementById('cart-container');
var total = 0;
var index = 0;
courses = JSON.parse(localStorage.getItem('courses')) ? JSON.parse(localStorage.getItem('courses')) : [];
if (courses.length != 0 && courses.some((course) => {
    return (user_emails[0].textContent == course.email)
})) {
    cart.innerHTML = '';
    let i =0;
    courses.forEach((course) => {
      if(user_emails[0].textContent == course.email){
        i++;
        total+=parseFloat(course.price.replace('$',''));
            cart.innerHTML += `
                <div class="course`+i+` courses col">
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
    if(index==0) {
        index++;
        cart_container.innerHTML = '';
        cart_container.innerHTML += `
        <div class="col-md-8">
        <h3 class="fw-normal"><span id="course-index"></span> Courses in Cart</h3>
        <div class="course`+ index +` d-flex gap-4 justify-content-between border p-3 flex-column flex-md-row">
          <div>
            <img class="w-100" src="`+ course.img +`" alt="">
          </div>
          <div>
            <h3>`+ course.name +`</h3>
            <p>`+ course.instructor +`</p>
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
            <p>
              22 total hours
            </p>
          </div>
          <div>
            <a class="removeCourse" style="color: #a435f0;" href="">Remove</a>
          </div>
          <div class="course-price fw-bolder">
            `+ course.price +`
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <h3 class="fw-normal">Total:</h3>
        <h1 id="total">$169.98</h1>
        <button id="checkout" style="background-color: #a435f0;" class="w-100 p-4 text-white border-0">Check out</button>
        <div class="mt-3">Promotions</div>
        <form action="" class="mt-3">
          <input style="margin-right: -0.5rem;" class="p-2 w-75" type="text" placeholder="Enter coupon" name="" id="">
          <span><button style="background-color: #a435f0;" class="py-2 w-25 text-white border-0">Apply</button></span>
        </form>
      </div>
        `;
    }
    else{
      index++;
       //s console.log(cart_container.firstElementChild)
        cart_container.firstElementChild.innerHTML += `        <div class="course`+ index +` d-flex gap-4 justify-content-between border p-3 flex-column flex-md-row">
          <div>
            <img class="w-100" src="`+ course.img +`" alt="">
          </div>
          <div>
            <h3>`+ course.name +`</h3>
            <p>`+ course.instructor +`</p>
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
            <p>
              22 total hours
            </p>
          </div>
          <div >
            <a class="removeCourse" style="color: #a435f0;" href="">Remove</a>
          </div>
          <div class="course-price fw-bolder">
            `+ course.price +`
          </div>
        </div>

        `;
    }
      }
        
    })
    var goToCartBtn = document.createElement('div');
    goToCartBtn.innerHTML = `<a  href="../cart/cart.html" > <button class="w-100 bg-dark text-white fs-3">Go to Cart</button></a>`;
    goToCartBtn.id = 'goToCartBtn';
    cart.append(goToCartBtn);
    var courses_index = document.getElementById('course-index');
    courses_index.textContent = index;
}

//xoa khoa hoc khoi gio hang
var removeCourseBtns = document.querySelectorAll('.removeCourse');
removeCourseBtns.forEach((removeCourseBtn) => {
        removeCourseBtn.onclick = (e) => {
            e.preventDefault();
            //console.log(removeCourseBtn.parentElement.parentElement.classList[0])
            let deleteCourses = document.getElementsByClassName(removeCourseBtn.parentElement.parentElement.classList[0])
            deleteCourses[0].remove();
            deleteCourses[0].remove();
            let course_price = removeCourseBtn.parentElement.parentElement.querySelector('.course-price');
            index--;
            courses_index.textContent = index;
            if(index == 0) {
              cart.innerHTML = `
              <p class="m-3 text-black-50">
              Your cart is empty.
            </p>
            <a class="text-decoration-none" href="#">Keep shopping</a>
              `;

              cart_container.innerHTML = `
              <h3 class="fw-normal">0 Courses in Cart</h3>
              <div class="w-100 border d-flex flex-column align-items-center p-4">
                  <img class="w-25" src="../images/Cart/empty-shopping-cart-v2.jpg" alt="">
                  <p>Your cart is empty. Keep shopping to find a course!</p>
                  <a href="../account/account.html">
                      <button style="background-color: #a435f0 !important;" class="text-white fw-semibold bg-warning border-0 p-3">Keep shopping</button>
                  </a>
              </div>
              `;
            }
            total -= parseFloat(course_price.textContent.replace('$',''));
            //console.log(course_price.textContent)
            totalPrice.textContent = '$' + Math.round(total * 100)/100;
    }
}
) 
// console.log(courses)

// console.log(total)
//gan tong tien

var totalPrice = document.getElementById('total');
totalPrice.textContent = '$' + Math.round(total * 100)/100;

//thanh toan
var checkOut = document.getElementById('checkout');
checkOut.onclick = function() {
  alert('successful purchase');
  const purchasedCourses = [];
  for(let i = 1; i<= index ; i++) {

    let courses = document.getElementsByClassName('course'+i)
    purchasedCourses.push('<div class="d-flex gap-4 justify-content-between border p-3 flex-column flex-md-row">' + courses[0].innerHTML + '</div>');
    courses[0].remove();
    courses[0].remove();
  }
  console.log(purchasedCourses)
  localStorage.setItem(user_emails[0].textContent,JSON.stringify(purchasedCourses))
  cart.innerHTML = `
              <p class="m-3 text-black-50">
              Your cart is empty.
            </p>
            <a class="text-decoration-none" href="#">Keep shopping</a>
              `;

              cart_container.innerHTML = `
              <h3 class="fw-normal">0 Courses in Cart</h3>
              <div class="w-100 border d-flex flex-column align-items-center p-4">
                  <img class="w-25" src="../images/Cart/empty-shopping-cart-v2.jpg" alt="">
                  <p>Your cart is empty. Keep shopping to find a course!</p>
                  <a href="../account/account.html">
                      <button style="background-color: #a435f0 !important;" class="text-white fw-semibold bg-warning border-0 p-3">Keep shopping</button>
                  </a>
              </div>
              `;
  
}