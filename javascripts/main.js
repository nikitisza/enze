var sendEmail = function(event)

{



    if (request) {
        request.abort();
    }

    var $form = $(this).closest('form');

    var $inputs= $form.find('input, select, button, textarea');

//    var serializedData = $form.serialize();

    $inputs.prop("disabled", true);

    var fullmessage = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
    }

    var request = $.ajax({
        url: 'send.php',
        type: 'post',
        data: fullmessage,
        dataType: 'json'
    });

    request.done(function (response, textStatus, jqXHR) {
        console.log("Response: " + response);
        console.log("textStatus: " + textStatus);
        console.log("jqXHR: " + jqXHR);

    });

    request.fail(function (jqXHR, textStatus, errorThrown){
        console.error(
            "The following error occured: " +
                textStatus, errorThrown
        );
    });

    request.always(function() {
        $inputs.prop('disabled', false);
    })

    event.preventDefault();

}


$(document).ready(function(){
    $('#send_button').on('click', sendEmail);
});

