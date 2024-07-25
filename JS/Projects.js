$(document).ready(function() {
    $("#github-icon").hover(function() {
        const classList = $(this).attr("class").split(/\s+/);

        if (classList.includes("fa-beat")) {
            $(this).removeClass("fa-beat");
        } else {
            $(this).addClass("fa-beat");
        }
    });
});