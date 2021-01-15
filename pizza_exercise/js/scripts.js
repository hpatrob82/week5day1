$(document).ready(function() {
    $(".tablehead").click(function() {
        $(this).next("div").slideToggle("slow");
    });
});