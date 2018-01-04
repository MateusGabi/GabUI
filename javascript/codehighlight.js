$(document).ready(function () {

    var Code = $("pre code");

    Code.each(function () {
        var code = $(this).html();

        $(this).text(code);
    });

});