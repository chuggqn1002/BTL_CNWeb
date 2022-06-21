// const navbar = document.querySelectorAll(".nav-link")
// let navChild = document.getElementById('pills-course-tab')

// console.log(navChild)

// for(let i = 0; i < navbar.length; i++){
//     navbar[i].addEventListener('click', function(){
//         if(navbar[i].classList.contains('active') && navbar[i].id != navChild.id){
//             navChild.classList.add('link-dark')
//             navbar[i].classList.remove('link-dark')
//             navChild = navbar[i]
//         }
//     })

// }

// remove

const checkbox = document.querySelectorAll(".course-check")
const btn = document.getElementById("course-del")
console.log(btn)

btn.addEventListener("click", function () {
    document.querySelectorAll(".course-check").forEach(e => {
        if (e.checked)
            e.parentNode.parentNode.remove();
    })
});


// add

var data = [];
var courseNum = 3;

var image_input = document.getElementById("imgFile")
var upload_image = ""

image_input.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        upload_image = reader.result;
        console.log(reader.result)
    })
    reader.readAsDataURL(this.files[0])
})

function add() {
    var course_id = document.getElementById("course-code").value
    var category_id = document.getElementById("category-code").value
    var course_name = document.getElementById("course-title").value
    var content = document.getElementById("inputContent").options[document.getElementById("inputContent").selectedIndex].value
    var author = document.getElementById("author").value
    var price = document.getElementById("pricing").value
    courseNum += 1;
    console.log(courseNum)
    // console.log(course_id)
    // console.log(content)

    var item = {
        courseId: course_id,
        categoryId: category_id,
        Name: course_name,
        Content: content,
        Author: author,
        Price: price,
        Img: upload_image
    }

    data.push(item)
    console.log(data)
    render()
}

function render() {
    table = `<thead class="bg-light">
    <tr>
        <th scope="col">#</th>
        <th scope="col">Change</th>
        <th scope="col">STT</th>
        <th scope="col">Course Code</th>
        <th scope="col">Category Code</th>
        <th scope="col">Course Title</th>
        <th scope="col">Course Content</th>
        <th scope="col">Image</th>
        <th scope="col">Pricing</th>
        <th scope="col">Author</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td scope="row"><input class="form-check-input course-check" type="checkbox" value="1"
                id="flexCheckDefault"></td>
        <td><i class="fa-regular fa-file fs-3"></i></td>
        <td>1</td>
        <td>PYTHON001</td>
        <td>DEVELOPMENT</td>
        <td>Learn Python: The Complete Python Programming Course</td>
        <td>15 sections <br> ( <a href="">Show details</a> )</td>
        <td><img src="../images/container-content/container-1.jpg" alt="" height="135"
                width="240"></td>
        <td>$84.99</td>
        <td>Avinash Jain, The Codex</td>

    </tr>
    <tr>
        <td scope="row"><input class="form-check-input course-check" type="checkbox" value="2"
                id="flexCheckDefault" checked="true"></td>
        <td><i class="fa-regular fa-file fs-3"></i></td>
        <td>2</td>
        <td>PYTHON002</td>
        <td>DEVELOPMENT</td>
        <td>Learn Python: The Complete Python Programming Course</td>
        <td>15 sections <br> ( <a href="">Show details</a> )</td>
        <td><img src="../images/container-content/container-2.jpg" alt="" height="135"
                width="240"></td>
        <td>$84.99</td>
        <td>Avinash Jain, The Codex</td>
    </tr>
    <tr>
        <td scope="row"><input class="form-check-input course-check" type="checkbox" value="3"
                id="flexCheckDefault"></td>
        <td><i class="fa-regular fa-file fs-3"></i></td>
        <td>3</td>
        <td>PYTHON003</td>
        <td>DEVELOPMENT</td>
        <td>Learn Python: The Complete Python Programming Course</td>
        <td>15 sections <br> ( <a href="">Show details</a> )</td>
        <td><img src="../images/container-content/container-3.jpg" alt="" height="135"
                width="240"></td>
        <td>$84.99</td>
        <td>Avinash Jain, The Codex</td>
    </tr>
</tbody>`



    for (let i = 0; i < data.length; i++) {
        
        table += `<tr>
        <td scope="row"><input class="form-check-input course-check" type="checkbox" value="${courseNum}"
                id="flexCheckDefault"></td>
        <td><i class="fa-regular fa-file fs-3"></i></td>
        <td>${courseNum}</td>
        <td>${data[i].courseId}</td>
        <td>${data[i].categoryId}</td>
        <td>${data[i].Name}</td>
        <td>${data[i].Content} sections <br> ( <a href="./content/content.html">Show details</a> )</td>
        <td><img src="${data[i].Img}" alt="" height="135"
                width="240"></td>
        <td>${data[i].Price}</td>
        <td>${data[i].Author}</td>
    </tr>`
    }

    document.getElementById('renderTable').innerHTML = table
}
