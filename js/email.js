$(document).ready(function() {
    $('#sendemail').click(function() {
        alert();
        $('#contact_us_form').attr('action',
                       'mailto:esaandhan.info@gmail.com?subject=' +
                       $('#contact_us_name').val() + " - " + $('#contact_us_ph').val() + '&body=' + $('#contact_us_message').val());
        $('#contact_us_form').submit();
    });
});
