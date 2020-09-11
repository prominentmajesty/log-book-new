$(document).ready(function(){
    $(function () {
        $('input, select').on('focus', function () {
            $(this).parent().find('.input-group-text').css('border-color', '#80bdff');
        });
        $('input, select').on('blur', function () {
            $(this).parent().find('.input-group-text').css('border-color', '#ced4da');
        });
    });

    //var for Dives/layouts that holds Forms(Navigator variables)
    var f_curse_adviser = document.getElementById('f_curse_adviser');
    var f_admin = document.getElementById('f_admin');
    var qualified_students = document.getElementById('qualified_students');
    
    //navigation buttons 
    var btn_adviser_navigator = document.getElementById('btn_adviser_navigator');
    var btn_admin_navigator = document.getElementById('btn_admin_navigator');

    //var for Forms
    var qualified_student_form = document.qualified_student_form;
    
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
    var date = document.getElementById('date');

    //submit buttons
    var curse_adviser_submit = document.getElementById('curse_adviser_submit_btn');
    var admin_submit_btn = document.getElementById('admin_submit_btn');
    var qualified_student_submit_btn = ducument.getElementById('qualified_student_submit_btn');
    f_curse_adviser.style.display = 'block';
    f_admin.style.display = 'none';
    qualified_students.style.display = 'none'

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

    curse_adviser_submit.addEventListener('click', function(e){
        e.preventDefault();
        f_curse_adviser.style.display = 'none';
        f_admin.style.display = 'none';
        qualified_students.style.display = 'block';
    });

    const college = qualified_student_form.college;
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

});