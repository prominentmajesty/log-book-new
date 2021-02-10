$(document).ready(function(){
    var elems_general = [];

    week_1_form = document.week_1_form;
    week_2_form = document.week_2_form;
    week_3_form = document.week_3_form;
    week_4_form = document.week_4_form;
    week_5_form = document.week_5_form;
    const data_id = document.querySelector('.data_id');
    const data_idd = data_id.getAttribute('data-id'); 

    week_1_form.addEventListener('submit', function(e){
        e.preventDefault();
        const week_1_input_reg_number = week_1_form['week_1_input_reg_number'].value;
        const week_1_input_Date = week_1_form['week_1_input_Date'].value;
        const week_1_input_day = week_1_form['week_1_input_day'].value;
        const week_1_input_topic_heading = week_1_form['week_1_input_topic_heading'].value;
        const week_1_department = week_1_form['week_1_department'].value;
        const week_1_input_description = week_1_form['week_1_input_description'].value
        const week_1_summary_study = week_1_form['week_1_summary_study'].value
        elems_general.push({
            week_1_input_reg_number :  week_1_input_reg_number,
            week_1_input_Date : week_1_input_Date,
            week_1_input_day : week_1_input_day,
            week_1_input_topic_heading : week_1_input_topic_heading,
            week_1_department : week_1_department,
            week_1_input_description : week_1_input_description,
            week_1_summary_study : week_1_summary_study
        });

        console.log(elems_general);
        console.log(data_idd);
    });

    week_2_form.addEventListener('submit', function(e){
        e.preventDefault();
        const week_2_input_reg_number = week_2_form['week_2_input_reg_number'].value;
        const week_2_input_Date = week_2_form['week_2_input_Date'].value;
        const week_2_input_day = week_2_form['week_2_input_day'].value;
        const week_2_input_topic_heading = week_2_form['week_2_input_topic_heading'].value;
        const week_2_department = week_2_form['week_2_department'].value;
        const week_2_input_description = week_2_form['week_2_input_description'].value;
        const week_2_summary_study = week_2_form['week_2_summary_study'].value;
        elems_general.push({
            week_2_input_reg_number :  week_2_input_reg_number,
            week_2_input_Date : week_2_input_Date,
            week_2_input_day : week_2_input_day,
            week_2_input_topic_heading : week_2_input_topic_heading,
            week_2_department : week_2_department,
            week_2_input_description : week_2_input_description,
            week_2_summary_study : week_2_summary_study
        });
    console.log(elems_general);

    });

    week_3_form.addEventListener('submit', function(e){
        e.preventDefault();
        const week_3_input_reg_number = week_3_form['week_3_input_reg_number'].value;
        const week_3_input_Date = week_3_form['week_3_input_Date'].value;
        const week_3_input_day = week_3_form['week_3_input_day'].value;
        const week_3_input_topic_heading = week_3_form['week_3_input_topic_heading'].value;
        const week_3_department = week_3_form['week_3_department'].value;
        const week_3_input_description = week_3_form['week_3_input_description'].value
        const week_3_summary_study = week_3_form['week_3_summary_study'].value;
        elems_general.push({
            week_3_input_reg_number :  week_3_input_reg_number,
            week_3_input_Date : week_3_input_Date,
            week_3_input_day : week_3_input_day,
            week_3_input_topic_heading : week_3_input_topic_heading,
            week_3_department : week_3_department,
            week_3_input_description : week_3_input_description,
            week_3_summary_study : week_3_summary_study
        });
        console.log(elems_general);
    });

    week_4_form.addEventListener('submit', function(e){
        e.preventDefault();
        const week_4_input_reg_number = week_4_form['week_4_input_reg_number'].value;
        const week_4_input_Date = week_4_form['week_4_input_Date'].value;
        const week_4_input_day = week_4_form['week_4_input_day'].value;
        const week_4_input_topic_heading = week_4_form['week_4_input_topic_heading'].value;
        const week_4_department = week_4_form['week_4_department'].value;
        const week_4_input_description = week_4_form['week_4_input_description'].value
        const week_4_summary_study = week_4_form['week_4_summary_study'].value;
        elems_general.push({
            week_4_input_reg_number :  week_4_input_reg_number,
            week_4_input_Date : week_4_input_Date,
            week_4_input_day : week_4_input_day,
            week_4_input_topic_heading : week_4_input_topic_heading,
            week_4_department : week_4_department,
            week_4_input_description : week_4_input_description,
            week_4_summary_study : week_4_summary_study
        });
        console.log(elems_general);
    });
    week_5_form.addEventListener('submit', function(e){
        e.preventDefault();
        const week_5_input_reg_number = week_5_form['week_5_input_reg_number'].value;
        const week_5_input_Date = week_5_form['week_5_input_Date'].value;
        const week_5_input_day = week_5_form['week_5_input_day'].value;
        const week_5_input_topic_heading = week_5_form['week_5_input_topic_heading'].value;
        const week_5_department = week_5_form['week_5_department'].value;
        const week_5_input_description = week_5_form['week_5_input_description'].value
        const week_5_summary_study = week_5_form['week_5_summary_study'].value;
        elems_general.push({
            week_5_input_reg_number :  week_5_input_reg_number,
            week_5_input_Date : week_5_input_Date,
            week_5_input_day : week_5_input_day,
            week_5_input_topic_heading : week_5_input_topic_heading,
            week_5_department : week_5_department,
            week_5_input_description : week_5_input_description,
            week_5_summary_study : week_5_summary_study
        });
        console.log(elems_general);
    });
    document.getElementById('submit_log_book').addEventListener('click', function(){
        elems_general.length < 4 || elems_general.length > 5 ? 
        alert(''+toUnicodeVariant('SUBMISSION FAILED!!','bold sans')+' '+toUnicodeVariant('Could not complete log book submission proccess','sans')+'')
        :
        $.ajax({
            method : 'POST', 
            url : '/users/log_book_arrays',
            data : {
                data_idd : data_idd,
                week_1_input_reg_number : elems_general[0].week_1_input_reg_number,
                week_1_input_Date : elems_general[0].week_1_input_Date,
                week_1_input_day : elems_general[0].week_1_input_day,
                week_1_input_topic_heading : elems_general[0].week_1_input_topic_heading,
                week_1_department : elems_general[0].week_1_department,
                week_1_input_description : elems_general[0].week_1_input_description,
                week_1_summary_study  : elems_general[0].week_1_summary_study, 
                
                week_2_input_reg_number : elems_general[1].week_2_input_reg_number,
                week_2_input_Date : elems_general[1].week_2_input_Date,
                week_2_input_day : elems_general[1].week_2_input_day,
                week_2_input_topic_heading : elems_general[1].week_2_input_topic_heading,
                week_2_department : elems_general[1].week_2_department,
                week_2_input_description : elems_general[1].week_2_input_description,
                week_2_summary_study  : elems_general[1].week_2_summary_study,
                
                week_3_input_reg_number : elems_general[2].week_3_input_reg_number,
                week_3_input_Date : elems_general[2].week_3_input_Date,
                week_3_input_day : elems_general[2].week_3_input_day,
                week_3_input_topic_heading : elems_general[2].week_3_input_topic_heading,
                week_3_department : elems_general[2].week_3_department,
                week_3_input_description : elems_general[2].week_3_input_description,
                week_3_summary_study  : elems_general[2].week_3_summary_study,
                
                week_4_input_reg_number : elems_general[3].week_4_input_reg_number,
                week_4_input_Date : elems_general[3].week_4_input_Date,
                week_4_input_day : elems_general[3].week_4_input_day,
                week_4_input_topic_heading : elems_general[3].week_4_input_topic_heading,
                week_4_department : elems_general[3].week_4_department,
                week_4_input_description : elems_general[3].week_4_input_description,
                week_4_summary_study  : elems_general[3].week_4_summary_study,
                
                week_5_input_reg_number : elems_general[4].week_5_input_reg_number,
                week_5_input_Date : elems_general[4].week_5_input_Date,
                week_5_input_day : elems_general[4].week_5_input_day,
                week_5_input_topic_heading : elems_general[4].week_5_input_topic_heading,
                week_5_department : elems_general[4].week_5_department,
                week_5_input_description : elems_general[4].week_5_input_description,
                week_5_summary_study  : elems_general[4].week_5_summary_study 
            },
            statusCode : {
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
         }).done(function(msg, status, jqXHR){
             console.log(jqXHR);
             alert(''+toUnicodeVariant('SUCCESS!!','bold sans')+' '+toUnicodeVariant(jqXHR.responseJSON.msg,'sans')+'')
             const check_mate = document.querySelectorAll(".form-control");
             for(var i = 0; i < check_mate.length; i++){
                 check_mate[1].value = '';
             }
             
         }).fail(function(msg, status, jqXHR){
             console.log(msg);
             console.log(jqXHR);
             alert(''+toUnicodeVariant('SUBMISSION FAILED!!','bold sans')+' '+toUnicodeVariant(jqXHR.responseJSON.err_msg,'sans')+'')
         })
    });

    document.querySelector('.user_logout').addEventListener('click', function(){
        $.ajax({
            method : 'GET',
            url : '/users/logout'
        }).done((jqXHR, status) => {
            window.location.href = '/';
            console.log(jqXHR);
        }).fail((jqXHR, statusCode)=>{
            window.location.href = '/';
            console.log(jqXHR);
        });
    })
});

