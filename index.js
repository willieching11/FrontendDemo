$(document).ready(function() {
    $("input[name$='payment']").click(function() {
        var choice = $(this).val();
        $('.radio-label').removeClass('selected');
        $(this).parent().addClass('selected');
        $("div.desc").hide();
        $("#payment-" + choice).show();
    });
});