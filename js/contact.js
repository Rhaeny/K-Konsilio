$('#successAlert').hide();
$('#failedAlert').hide();

var frm = $('#contact-form');

frm.submit(function (e) {

    $('#successAlert').hide();
    $('#failedAlert').hide();

    e.preventDefault();

    $.ajax({
        type: frm.attr('method'),
        url: frm.attr('action'),
        data: frm.serialize(),
        success: function (data) {
            console.log('Submission was successful.');
            console.log(data);
            $('#successAlert').show();
            document.getElementById("submitBtn").disabled = true;
        },
        error: function (data) {
            console.log('An error occurred.');
            console.log(data);
            $('#failedAlert').show();
        },
    });
});