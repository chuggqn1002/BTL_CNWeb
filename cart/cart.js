var cart = document.getElementById('cart');
var cart_container  =document.getElementById('cart-container');
var total = 0;
courses = JSON.parse(localStorage.getItem('courses')) ? JSON.parse(localStorage.getItem('courses')) : [];
if (courses.length != 0 || courses.some((course) => {
    return (user_emails[0].textContent == course.email)
})) {
    cart.innerHTML = '';
    courses.forEach((course, i) => {
        total+=parseFloat(course.price.replace('$',''));
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
    if(i==0) {
        cart_container.innerHTML = '';
        cart_container.innerHTML += `
        <div class="col-8">
        <h3 class="fw-normal">0 Courses in Cart</h3>
        <div class="d-flex gap-4 justify-content-between border p-3">
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
              22 total hours cefewfewewew
            </p>
          </div>
          <div class="removeCourse">
            <a style="color: #a435f0;" href="">Remove</a>
          </div>
          <div class="fw-bolder">
            `+ course.price +`
          </div>
        </div>
      </div>
      <div class="col-4">
        <h3 class="fw-normal">Total:</h3>
        <h1 id="total">$169.98</h1>
        <button style="background-color: #a435f0;" class="w-100 p-4 text-white border-0">Check out</button>
        <div class="mt-3">Promotions</div>
        <form action="" class="mt-3">
          <input style="margin-right: -0.5rem;" class="p-2 w-75" type="text" placeholder="Enter coupon" name="" id="">
          <span><button style="background-color: #a435f0;" class="py-2 w-25 text-white border-0">Apply</button></span>
        </form>
      </div>
        `;
    }
    else{
       //s console.log(cart_container.firstElementChild)
        cart_container.firstElementChild.innerHTML += `        <div class="d-flex gap-4 justify-content-between border p-3">
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
              22 total hours cefewfewewew
            </p>
          </div>
          <div class="removeCourse">
            <a style="color: #a435f0;" href="">Remove</a>
          </div>
          <div class="fw-bolder">
            `+ course.price +`
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


var removeCourseBtns = document.querySelectorAll('.removeCourse');
removeCourseBtns.forEach((removeCourseBtn) => {
        removeCourseBtn.onclick = (e) => {
            e.preventDefault();
            removeCourseBtn.parentElement.remove();
    }
}
) 

console.log(total)
//gan tong tien

var totalPrice = document.getElementById('total');
totalPrice.textContent = total;