//login_user
$(document).ready(()=>{
    const login_user =  document.login_user;
    const alert_Login_email = document.getElementById('alert_Login_email');
    const alert_Login_password = document.getElementById('alert_Login_password');
    const exampleInputEmail1 = document.getElementById('exampleInputEmail1');
    const exampleInputPassword1 = document.getElementById('exampleInputPassword1');
    
    function email_(){
        if(exampleInputEmail1.value === '' || exampleInputEmail1.value.trim() ===''){
            alert_Login_password.style.display = 'none';
            exampleInputEmail1.classList.add('is-invalid');
            alert_Login_email.textContent = 'Error Please enter your email';
            alert_Login_email.style.display = 'block';
            return false;
        }else{
            alert_Login_email.style.display = 'none'; 
            alert_Login_email.textContent = ''
            exampleInputEmail1.classList.remove('is-invalid');
            return true;  
        }

    }

    function password_(){
        if(exampleInputPassword1.value === '' || exampleInputPassword1.value.trim() ===''){
            alert_Login_email.style.display = 'none';
            alert_Login_password.textContent = 'Error Please enter your password';
            alert_Login_password.style.display = 'block';
            exampleInputPassword1.classList.add('is-invalid'); 
            return false;
        }else{
            alert_Login_password.style.display = 'none';
            alert_Login_password.textContent = '';
            exampleInputPassword1.classList.remove('is-invalid');
            return true;
        }
    }

    login_user.addEventListener('submit', (e)=>{
        e.preventDefault();
        email_() && password_() ? 
           $.ajax({
               method : 'POST',
               url :  '/users/user_login',
               dataType : 'json',
               data : {
                   email : login_user.email.value,
                   password : login_user.password.value 
               },
               statusCode : {
                   404 : function(msg, status, jqXHR){
                       console.log(status);
                   },
                   501 : function(msg, status, jqXHR){
                       console.log(status); 
                   }, 
                   200 : function(msg, status, jqXHR){
                       console.log(status);
                }
            } 
               
           }).done((msg, status, jqXHR) => {
               //console.log(jqXHR);
               alert_Login_email.style.display = 'none';
               alert_Login_email.textContent = '';
               console.log(msg);
               window.location.href = '/users/users';
    
           }).fail((msg, jqXHR, status) => {
            alert_Login_email.textContent = msg.responseJSON.msg;
            alert_Login_email.style.display = 'block'; 
               //console.log(msg);
               //console.log(jqXHR)
           })
        : 
            console.log('this is false');
    })
});