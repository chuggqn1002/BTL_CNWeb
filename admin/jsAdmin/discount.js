var menu = document.querySelector(".menuBtn");
menu.addEventListener("click",function(){
    menu.classList.toggle("click")
    document.querySelector("#sidebarAdmin").classList.toggle("showSidebar")
    document.querySelector("#sidebarAdmin").classList.toggle("d-none")
})


const checkbox = document.querySelectorAll(".course-check")
const btn = document.getElementById("course-del")
console.log(btn)

btn.addEventListener("click", function () {
    document.querySelectorAll(".course-check").forEach(e => {
        if (e.checked)
            e.parentNode.parentNode.remove();
    })
});