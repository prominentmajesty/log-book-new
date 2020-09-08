$(document).ready(function(){
$(function () {
    $('input, select').on('focus', function () {
        $(this).parent().find('.input-group-text').css('border-color', '#80bdff');
    });
    $('input, select').on('blur', function () {
        $(this).parent().find('.input-group-text').css('border-color', '#ced4da');
    });
});

var f_curse_adviser = document.getElementById('f_curse_adviser');
var f_admin = document.getElementById('f_admin');
var btn_adviser_navigator = document.getElementById('btn_adviser_navigator');
var btn_admin_navigator = document.getElementById('btn_admin_navigator');

f_curse_adviser.style.display = 'block';
f_admin.style.display = 'none';

btn_admin_navigator.addEventListener('click', () => {
    f_curse_adviser.style.display = 'block';
    f_admin.style.display = 'none';
})

btn_adviser_navigator.addEventListener('click', () => {
    f_admin.style.display = 'block';
    f_curse_adviser.style.display = 'none';
})

});