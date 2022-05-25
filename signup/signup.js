var label_fullname = document.querySelector('#exampleInputFullName1 ~ label');
var label_email = document.querySelector('#exampleInputEmail1 ~ label');
var label_password = document.querySelector('#exampleInputPassword1 ~ label');
// var move_label = function(label) {
//     label.classList.add('move-label');

var input_fullname = document.getElementById('exampleInputFullName1');
var input_email = document.getElementById('exampleInputEmail1');
var input_password = document.getElementById('exampleInputPassword1');

input_fullname.onblur = function() {
    if(input_fullname.value.length > 0)
    {
        if(label_fullname.classList.contains('default-label'))
            label_fullname.classList.remove('default-label');
        label_fullname.classList.add('moved-label');
    }
    else{
        if(label_fullname.classList.contains('moved-label'))
            label_fullname.classList.remove('moved-label');
        label_fullname.classList.add('default-label');
    }
}
input_fullname.onfocus = function() {
    if(label_fullname.classList.contains('default-label')) 
        label_fullname.classList.remove('default-label');
    label_fullname.classList.add('moved-label');
}
// 
input_email.onblur = function() {
    if(input_email.value.length > 0)
    {
        if(label_email.classList.contains('default-label'))
            label_email.classList.remove('default-label');
        label_email.classList.add('moved-label');
    }
    else{
        if(label_email.classList.contains('moved-label'))
            label_email.classList.remove('moved-label');
        label_email.classList.add('default-label');
    }
}
input_email.onfocus = function() {
    console.log('focus!');
    if(label_email.classList.contains('default-label')) 
        label_email.classList.remove('default-label');
    label_email.classList.add('moved-label');
}
// 
input_password.onblur = function() {
    if(input_password.value.length > 0)
    {
        if(label_password.classList.contains('default-label'))
            label_password.classList.remove('default-label');
        label_password.classList.add('moved-label');
    }
    else{
        if(label_password.classList.contains('moved-label'))
            label_password.classList.remove('moved-label');
        label_password.classList.add('default-label');
    }
}
input_password.onfocus = function() {
    if(label_password.classList.contains('default-label')) 
        label_password.classList.remove('default-label');
    label_password.classList.add('moved-label');
}

