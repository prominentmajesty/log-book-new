$(document).ready(function(){
    $(function () {
        $('input, select').on('focus', function () {
            $(this).parent().find('.input-group-text').css('border-color', '#80bdff');
        });
        $('input, select').on('blur', function () {
            $(this).parent().find('.input-group-text').css('border-color', '#ced4da');
        });
    });

    //Alert variable for qualified student form
    var alert_role = document.getElementById('alert_role');
    var field_div = document.getElementById('field_div');

    //Alert variable for Curs-Adviser loggin form
    var adviser_restrictor_alert = document.getElementById('adviser_restrictor_alert');

    //alert variable for admin loggin form 
    var admin_restrictor_alert = document.getElementById('admin_restrictor_alert');

    //var for Dives/layouts that holds Forms(Navigator variables)
    var f_curse_adviser = document.getElementById('f_curse_adviser');
    var f_admin = document.getElementById('f_admin');
    var qualified_students = document.getElementById('qualified_students');
    
    //navigation buttons 
    var btn_adviser_navigator = document.getElementById('btn_adviser_navigator');
    var btn_admin_navigator = document.getElementById('btn_admin_navigator');

    //var for Forms
    var qualified_student_form = document.qualified_student_form;
    var admin_login_form = document.admin_login_form;
    var curse_adviser_login_form = document.curse_adviser_login_form;
    
    //var for Curse Adviser Input Fields
    const  email_curs_adviser = document.getElementById('email_curs_adviser')
    const  password_curs_adviser = document.getElementById('password_curs_adviser');
    
    // var for Admin Input Fields
    const email_admin = document.getElementById('email_admin');
    const password_admin = document.getElementById('password_admin');

    //var for Qualified Student Input Fields
    var student_first_name = document.getElementById('student_first_name');
    var student_last_name = document.getElementById('student_last_name');
    var student_email = document.getElementById('student_email');
    var student_reg_number = document.getElementById('student_reg_number');
    var student_phone_number = document.getElementById('student_phone_number');
    var college = document.getElementById('college');
    var department = document.getElementById('department');
    var date = document.getElementById('datepicker');

    //submit buttons
    var curse_adviser_submit = document.getElementById('curse_adviser_submit_btn');
    var admin_submit_btn = document.getElementById('admin_submit_btn');
    var qualified_student_submit_btn = document.getElementById('qualified_student_submit_btn');

    f_curse_adviser.style.display = 'block';
    f_admin.style.display = 'none';
    qualified_students.style.display = 'none';
    field_div.style.display = 'none';
    alert_role.style.display = 'none';

    btn_admin_navigator.addEventListener('click', () => {
        f_admin.style.display = 'none';
        qualified_students.style.display = 'none'
        f_curse_adviser.style.display = 'block';
    })

    btn_adviser_navigator.addEventListener('click', () => {
        f_curse_adviser.style.display = 'none';
        qualified_students.style.display = 'none'
        f_admin.style.display = 'block';
    })

    /*curse_adviser_submit.addEventListener('click', function(e){
        e.preventDefault();
        f_curse_adviser.style.display = 'none';
        f_admin.style.display = 'none';
        qualified_students.style.display = 'block';
    });*/

    function loadDepartment(college){
        $('#department option:not(:first)').remove();
        var url = `/assets/colleges/${college.toLowerCase()}.json`;
        $.getJSON(url, function (data) {
            var department = qualified_student_form.department; 
            for (var prop in data) {
                var dept = document.createElement('option');
                dept.innerHTML = data[prop];
                department.appendChild(dept);
            } 
        });
    }
    college.addEventListener('change', (event) =>{
        loadDepartment(event.target.value);
    });
    // Regex for validation(STOP HACKING AND CATCH THE HACKER); user strict
    var regex_For_Name = /^[a-zA-Z0-9\-_]{1,}$/;
    var regex_For_Reg_Number = /^(MOUAU)\/[0-9]{2}\/[0-9]{5}$/
    var regex_For_Phone_Number = /^[\d]{9,11}$/;
    var regex_ForEmail_Addres = /^([a-z\d]{2,})@([a-z]{2,7})\.([a-z]{2,3})(\.[a-z]{2,3})?/;
    var regex_ForCard_Number = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
    var regex_For_Expiring_Date = /^(0[1-9]|1[0-2]|[1-9])\/(1[4-9]|[2-9][0-9]|20[1-9][1-9])$/;
    var Regex_Card_Code = /^[0-9]{3}$/;

    function check_dviser_empty_email(){
        if(email_curs_adviser.value === '' || email_curs_adviser.value.trim() === ''){
            email_curs_adviser.classList.remove('is-valid');
            email_curs_adviser.classList.add('is-invalid');
            adviser_restrictor_alert.textContent = 'Empty field !! Enter your email address';
            adviser_restrictor_alert.style.display = 'block';
            email_curs_adviser.focus();
            return false;
        }else{
            email_curs_adviser.classList.remove('is-invalid');
            email_curs_adviser.blur();
            adviser_restrictor_alert.textContent = '';
            adviser_restrictor_alert.style.display = 'none';
            return true;
        }
    }

    function check_adviser_empty_password(){
        if(password_curs_adviser.value === '' || password_curs_adviser.value.trim() === ''){
            password_curs_adviser.classList.remove('is-valid');
            password_curs_adviser.classList.add('is-invalid');
            password_curs_adviser.focus();
            adviser_restrictor_alert.textContent = 'Empty field !! Enter your Id';
            adviser_restrictor_alert.style.display = 'block';
            return false;
        }else{
            password_curs_adviser.classList.remove('is-invalid');
            password_curs_adviser.blur();
            adviser_restrictor_alert.textContent = '';
            adviser_restrictor_alert.style.display = 'none';
            return true;
        }
    }

    function check_admin_empty_email(){
        if(email_admin.value === '' || email_admin.value.trim() === ''){
            email_admin.classList.remove('is-valid');
            email_admin.classList.add('is-invalid');
            admin_restrictor_alert.textContent = 'Empty field !! enter your email';
            admin_restrictor_alert.style.display = 'block';
            email_admin.focus();
            return false;

        }else{
            email_admin.classList.remove('is-invalid');
            email_admin.blur();
            admin_restrictor_alert.style.display = 'none';
            admin_restrictor_alert.textContent = '';
            return true;
        }
    }

    function check_admin_password_empty(){
        if(password_admin.value === '' || password_admin.value.trim() === ''){
            password_admin.classList.remove('is-valid');
            password_admin.classList.add('is-invalid');
            admin_restrictor_alert.textContent = 'Empty field !! enter your password';
            admin_restrictor_alert.style.display = 'block';
            password_admin.focus();
            return false;
        }else{
            password_admin.classList.remove('is-invalid');
            password_admin.blur();
            admin_restrictor_alert.textContent = '';
            admin_restrictor_alert.style.display = 'none';
            return true;
        }
    }

    student_first_name.addEventListener('keyup', (e__) => {
        if(!regex_For_Name.test(e__.target.value)){
            e__.target.classList.remove('is-valid');
            e__.target.classList.add('is-invalid');
            alert_role.textContent = '';
            alert_role.textContent = 'This field accepts only letters,numbers, underscore or hyphen and should not be empty';
            alert_role.style.display = 'block';
        }else{
            e__.target.classList.remove('is-invalid');
            e__.target.classList.add('is-valid');
            alert_role.textContent = '';
            alert_role.style.display = 'none';
        }
    });

    student_last_name.addEventListener('keyup', (__) => {
        if(!regex_For_Name.test(__.target.value)){
            __.target.classList.remove('is-valid');
            __.target.classList.add('is-invalid');
            alert_role.textContent = '';
            alert_role.textContent = 'This field accepts only letters,numbers, underscore or hyphen and should not be empty';
            alert_role.style.display = 'block';
        }else{
            __.target.classList.remove('is-invalid');
            __.target.classList.add('is-valid');
            alert_role.textContent = '';
            alert_role.style.display = 'none';
        }
    });

    student_email.addEventListener('keyup', function(event) {
        if(!regex_ForEmail_Addres.test(event.target.value)){
            event.target.classList.remove('is-valid');
            event.target.classList.add('is-invalid');
            alert_role.textContent = '';
            alert_role.textContent = 'This field Accepts email address only e.g benbruse@gmail.com';
            alert_role.style.display = 'block';
        }else{
            event.target.classList.remove('is-invalid');
            event.target.classList.add('is-valid');
            alert_role.textContent = '';
            alert_role.style.display = 'none'
        }
    })

    student_reg_number.addEventListener('keyup', function(e){
        if(!regex_For_Reg_Number.test(e.target.value)){
            e.target.classList.remove('is-valid');
            e.target.classList.add('is-invalid');
            alert_role.textContent = '';
            alert_role.textContent = 'This field Accepts value of this format : MOUAU/17/78455';
            alert_role.style.display = 'block';
        }else{
            e.target.classList.remove('is-invalid');
            e.target.classList.add('is-valid');
            alert_role.textContent = '';
            alert_role.style.display = 'none';
        }
    })

    student_phone_number.addEventListener('keyup', function(e){
        if(!regex_For_Phone_Number.test(e.target.value)){
            e.target.classList.remove('is-valid');
            e.target.classList.add('is-invalid');
            alert_role.textContent = '';
            alert_role.textContent = 'This field accepts 11 digit phone number e.g 08136719587'
            alert_role.style.display = 'block';
        }else{
            e.target.classList.remove('is-invalid');
            e.target.classList.add('is-valid');
            alert_role.textContent = '';
            alert_role.style.display = 'none';
        }
    });

    college.addEventListener('change', function(e){
        e.target.classList.remove('is-invalid');
        e.target.classList.add('is-valid');
    });

    department.addEventListener('change', function(event){
        event.target.classList.remove('is-invalid');
        event.target.classList.add('is-valid')
    })

    date.addEventListener('change', function(e){
        e.target.classList.remove('is-invalid');
        e.target.classList.add('is-valid')
    });

    function validate_first_name(){
        if(!regex_For_Name.test(student_first_name.value)){
            student_first_name.classList.remove('is-valid');
            student_first_name.classList.add('is-invalid');
            field_div.textContent = '';
            field_div.style.display = 'none';
            field_div.textContent = 'First name field accepts only letters,numbers, underscore or hyphen e.g ben-diy_y or gen and should not be empty';
            field_div.style.display = 'block';
            student_first_name.focus();
            return false;
        }else{
            student_first_name.classList.remove('is-invalid');
            student_first_name.classList.add('is-valid');
            field_div.textContent = '';
            field_div.style.display = 'none';
            student_first_name.blur();
            return true;
        }
    }

    function validata_last_name(){
        if(!regex_For_Name.test(student_last_name.value)){
            student_last_name.classList.remove('is-valid');
            student_last_name.classList.add('is-invalid')
            field_div.textContent = '';
            field_div.style.display = 'none';
            field_div.textContent = 'Last name field accepts only letters,numbers, underscore or hyphen e.g ben-diy_y or gen and should not be empty ';
            field_div.style.display = 'block';
            student_last_name.focus();
            return false;
        }else{
            student_last_name.classList.remove('is-invalid');
            field_div.textContent = '';
            field_div.style.display = 'none';
            student_last_name.blur();
            return true;
        }
    }

    function validate_student_email(){
        if(!regex_ForEmail_Addres.test(student_email.value)){
            student_email.classList.remove('is-valid');
            student_email.classList.add('is-invalid');
            field_div.textContent = '';
            field_div.style.display = 'none';
            field_div.textContent = 'Email field accepts only valid email address e.g odoemene@gmail.com';
            field_div.style.display = 'block';
            student_email.focus();
            return false;
        }else{
            student_email.classList.remove('is-invalid');
            field_div.textContent = '';
            field_div.style.display = 'none';
            student_email.blur();
            return true;
        }
    }

    function validate_reg_number(){
        if(!regex_For_Reg_Number.test(student_reg_number.value)){
            student_reg_number.classList.remove('is-valid');
            student_reg_number.classList.add('is-invalid');
            field_div.textContent = '';
            field_div.style.display = 'none';
            field_div.textContent = 'Registration number field accepts only this format MOUAU/13/25255';
            field_div.style.display = 'block';
            student_reg_number.focus();
            return false;
        }else{
            student_reg_number.classList.remove('is-invalid');
            field_div.textContent = '';
            field_div.style.display = 'none';
            student_reg_number.blur();
            return true;
        }
    }

    function validate_phone_number(){
        if(!regex_For_Phone_Number.test(student_phone_number.value)){
            student_phone_number.classList.remove('is-valid');
            student_phone_number.classList.add('is-invalid');
            field_div.textContent = '';
            field_div.style.display = 'none';
            field_div.textContent = 'Phone number field accept only valid 11 digit phone numbers e.g 08136729587';
            field_div.style.display = 'block';
            student_phone_number.focus();
            return false;
        }else{
            student_phone_number.classList.remove('is-invalid');
            field_div.textContent - '';
            field_div.style.display = 'none';
            student_phone_number.blur();
            return true;
        }
    }

    function first_name_not_empty(){
        if(student_first_name.value === '' || student_first_name.value.trim() === ''){
            student_first_name.classList.remove('is-valid');
            student_first_name.classList.add('is-invalid');
            field_div.textContent = '';
            field_div.textContent = 'Student first name has no value !!';
            field_div.style.display = 'block';
            return false
         }else{
           //color: #ccc;
            student_first_name.classList.remove('is-invalid');
            student_first_name.classList.add('is-valid');
            field_div.style.display = 'none';
            return true;
        }
    } 

    function last_name_not_empty(){
        if(student_last_name.value === '' || student_last_name.value.trim() === ''){
            student_last_name.classList.remove('is-valid');
            student_last_name.classList.add('is-invalid');
            field_div.textContent = '';
            field_div.textContent = 'Student last name has no value !!';
            field_div.style.display = 'block';
            return false;
        }else{
            student_last_name.classList.remove('is-invalid');
            student_last_name.classList.add('is-valid');
            field_div.style.display = 'none';
            return true;
        }
    }

    function email_not_empty(){
        if(student_email.value === '' || student_email.value.trim() === ''){
            student_email.classList.remove('is-valid');
            student_email.classList.add('is-invalid');
            field_div.textContent = '';
            field_div.textContent = 'Email field has no value !!';
            field_div.style.display = 'block';
            return false;
        }else{
            student_email.classList.remove('is-invalid');
            student_email.classList.add('is-valid');
            field_div.style.display = 'none';
            return true;
        }
    }

    function reg_number_not_empty(){
        if(student_reg_number.value === '' || student_reg_number.value.trim() === ''){
            student_reg_number.classList.remove('is-valid');
            student_reg_number.classList.add('is-invalid');
            field_div.textContent = '';
            field_div.textContent = 'Registration number field is empty';
            field_div.style.display = 'block';
            return false;
        }else{
            student_reg_number.classList.remove('is-invalid');
            field_div.style.display = 'none';
            return true;
        }
    }
    
    function phone_number_not_empty(){
        if(student_phone_number.value === '' || student_phone_number.value.trim() === ''){
            student_phone_number.classList.remove('is-valid');
            student_phone_number.classList.add('is-invalid');
            field_div.textContent = '';
            field_div.textContent = 'Phone number field is empty';
            field_div.style.display = 'block';
            return false
        }else{
            student_phone_number.classList.remove('is-invalid');
            field_div.style.display = 'none';
            return true;
        }
    }

    function college_not_empty(){
        if(college.value === '' || college.value.trim() === ''){
            college.classList.remove('is-valid');
            college.classList.add('is-invalid');
            field_div.textContent = '';
            field_div.textContent = 'College field is empty';
            field_div.style.display = 'block';
            return false;
        }else{
            college.classList.remove('is-invalid');
            field_div.style.display = 'none';
            return true;
        }
    }

    function department_not_empty(){
        if(department.value === '' || department.value.trim() === ''){
            department.classList.remove('is-valid');
            department.classList.add('is-invalid');
            field_div.textContent = '';
            field_div.textContent = 'Department field is empty';
            field_div.style.display = 'block';
            return false;
        }else{
            department.classList.remove('is-invalid');
            field_div.style.display = 'none';
            return true;
        }
    }

    function date_not_empty(){
        if(date.value === '' || date.value.trim() === ''){
            date.classList.remove('is-valid');
            date.classList.add('is-ivalid');
            field_div.textContent = '';
            field_div.textContent = 'Date field should not be empty';
            field_div.style.display = 'block';
            return false;
        }else{
            date.classList.remove('is-invalid');
            field_div.style.display = 'none';
            return true;
        }
    }

    qualified_student_form.addEventListener('submit', function(e){
        e.preventDefault();
        if(first_name_not_empty() && last_name_not_empty() && email_not_empty() && reg_number_not_empty() && phone_number_not_empty() && college_not_empty() && department_not_empty() && date_not_empty()){
            if(validate_first_name() && validata_last_name() && validate_student_email() && validate_reg_number() && validate_phone_number()){
                alert('Hey man That Me');
            }
        }

    });

    curse_adviser_login_form.addEventListener('submit', (e) => {
        e.preventDefault();
        if(check_dviser_empty_email() && check_adviser_empty_password()){
            alert('Hey I worked');
        }
    });

    admin_login_form.addEventListener('submit', (e__)=> {
        e__.preventDefault();
        if(check_admin_empty_email() && check_admin_password_empty()){
            alert('Yea You Are Set To Logg in')
        }
    });
});