category_name = JSON.parse(localStorage.getItem('category'))
var category = document.getElementById('category-name')
category.textContent = category_name + ' Course';