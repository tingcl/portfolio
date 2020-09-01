var submitted = false;

$(document).ready(function(){
    $('#gform').on('submit', function(){
        alert("Response submitted!");
        // Wait for request to be sent
        setTimeout(function() { $("#gform")[0].reset(); }, 150);
    });
});