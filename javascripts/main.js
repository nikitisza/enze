var sendEmail = function(event) {
    event.preventDefault();
    $.get('send.php');

}

$(document).ready(function(){
    $('#send_button').on('click', sendEmail);
});

