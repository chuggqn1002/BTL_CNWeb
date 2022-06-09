const navbar = document.querySelectorAll(".nav-link")
let navChild = document.getElementById('pills-course-tab')

console.log(navChild)

for(let i = 0; i < navbar.length; i++){
    navbar[i].addEventListener('click', function(){
        if(navbar[i].classList.contains('active') && navbar[i].id != navChild.id){
            navChild.classList.add('link-dark')
            navbar[i].classList.remove('link-dark')
            navChild = navbar[i]
        }
    })
    
}
