var menu = document.querySelector(".menuBtn");
menu.addEventListener("click",function(){
    menu.classList.toggle("click")
    document.querySelector("#sidebarAdmin").classList.toggle("showSidebar")
    document.querySelector("#sidebarAdmin").classList.toggle("d-none")
})