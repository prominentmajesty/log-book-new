$(document).ready(function(){
    const form_text = document.querySelector('.form-text');
    const rg_n = document.getElementById('registration_number');
    const fr_m = document.view_q_students; 
    const display_result = document.querySelector('.display_result');
    var data_ = null;

    form_text.style.display = 'none';

    const validate_input = () => {
        if(rg_n.value === '' || rg_n.value.trim() === ''){
            rg_n.classList.add('is-invalid');
            form_text.textContent = '';
            form_text.textContent = 'Failed! cannot verify student without value.'
            form_text.style.display = 'block';
            return false;
        }
        rg_n.classList.remove('is-invalid');
        form_text.textContent ='';
        form_text.style.display = 'none';
        return true;
    }

    var return_val = (value) => { 
        return value;
    }

    fr_m.addEventListener('submit', (e) => {
        e.preventDefault();
        if(validate_input()){
            $.ajax({
                method : 'POST',
                url : '/admin/student_credentials',
                data : {get_value : return_val(fr_m.rg_.value)},
                statusCode :  {
                    400 : function(msg, status, jqXHR){ 
                        console.log(status);
                    },
                    500 : function(msg, status, jqXHR){ 
                        console.log(status);
                    },
                    200 : function(msg, status, jqXHR){
                        console.log(status);
                    }
                }
            }).done((msg, status, jqXHR) => {
                console.log(jqXHR); 
                data_ = jqXHR.responseJSON.data;
                if(data_ && data_ != null){
                    display_result.innerHTML = '\
                        \<div class="perent_display">\
                            \<div class="row" id="reg_number_1_row">\
                                \<div class="reg_number_1_label IT">Registration Number : </div>\
                                \<div class="reg_number_1_value _siwes" id="_siwes" style="margin-left : 4px">'+ data_.mat_number +'</div>\
                            </div>\
                            \<div class="row" id="email_row">\
                                \ <div class="email_Label IT">email :</div>\
                                \ <div class="email_value _siwes" id="_siwes" style="margin-left : 4px">'+ data_.email +'</div>\
                            </div>\
                            \<div class="row" id="first_name_row">\
                                \<div class="first_name_label IT">First Name : </div>\
                                \<div class="first_name_value _siwes" id="_siwes" style="margin-left : 4px">'+ data_.first_name +'</div>\
                            </div>\
                            \<div class="row" id="last_name_row">\
                                \<div class="last_name_label IT">Last Name : </div>\
                                \<div class="last_name_value _siwes" id="_siwes" style="margin-left : 4px">'+ data_.last_name +'</div>\
                            </div>\
                            \<div class="row" id="department_row">\
                                \<div class="department_label IT">Department : </div>\
                                \<div class="department_value _siwes" id="_siwes" style="margin-left : 4px">'+ data_.department +'</div>\
                            </div>\
                            \<div class="row" id="college_row">\
                                \<div class="college_label IT">college : </div>\
                                \<div class="collage_value _siwes" id="_siwes" style="margin-left : 4px">'+ data_.college +'</div>\
                            </div>\
                            \<div class="row" id="phone_number_row">\
                                \<div class="phone_number_label IT">Phone Number : </div>\
                                \<div class="phone_number_value _siwes" id="_siwes" style="margin-left : 4px">'+ data_.phone_number +'</div>\
                            </div>\
                            \<div class="row" id="date_of_siwes_row">\
                                \<div class="date_of_siwes_label IT">Date of siwes : </div>\
                                \<div class="date_of_siwes_value _siwes" id="_siwes" style="margin-left : 4px">'+ data_.date_of_siwes +'</div>\
                            </div>\
                            \<div class="row" id="status_row">\
                                \<div class="status_label IT">Status : </div>\
                                \<div class="status_value _siwes" id="_siwes" style="margin-left : 4px">'+ data_.status +'</div>\
                            </div>\
                            \<div class="row" id="approved_row">\
                                \<div class="approved_label IT">Approved : </div>\
                                \<div class="approved_value _siwes" id="_siwes" style="margin-left : 4px">'+ data_.approved +'</div>\
                                \
                                <div class="form-check" style = "padding-left : 25px" >\
                                    \<input type="checkbox" class="form-check-input" id="ckeck_box_approved">\
                                    \<label class="form-check-label" for="exampleCheck1"></label>\
                                </div>\
                            </div>\
                            \<button type="button" onclick="myFunction()" class="btn btn-secondary id="button_sub" btn-sm" style = "margin-top : 10px; margin-left : -15px">Approve for siwes</button>\
                        </div>\
                    ';
                    rg_n.value = '';
                    form_text.style.display = 'none';   
                    rg_n.classList.remove('is-invalid');
                }

            if(data_.approved === false){
                    
                document.getElementById('ckeck_box_approved').removeAttribute('checked');
                
            }else{

                document.getElementById('ckeck_box_approved').setAttribute('checked', 'checked');
            }
            }).fail((msg, status, jqXHR) => { 
                console.log(msg);
                form_text.textContent = '';
                form_text.textContent = msg.responseJSON.msg;
                form_text.style.display = 'block';
                rg_n.classList.add('is-invalid');
                var get_class_= document.querySelector('.perent_display');
                get_class_.style.display = 'none'; 
            });
        }
    });
    // if(data_ === null){
    //     console.log('This is null'); 
    // }else{
    //     const button_sub = document.getElementById('button_sub');
    //     button_sub.addEventListener('click', function(){
    //     console.log('Yeaa!!');
    //     });
    // }
   
});