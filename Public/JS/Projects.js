$(document).ready(function() {
    $("#github-icon").hover(function() {
        const classList = $(this).attr("class").split(/\s+/);

        if (classList.includes("fa-beat")) {
            $(this).removeClass("fa-beat");
        } else {
            $(this).addClass("fa-beat");
        }
    });

    /* enlarge image */
    $('.clickable').click(function(){
        const src = $(this).attr('src');
        $('.enlarged img').attr('src', src);
        $('.enlarged').show().addClass('show');
    });

    $('.show-less, .enlarged img').click(function(){
        $('.enlarged').removeClass('show');

        setTimeout(function() {
            $('.enlarged').hide();
        }, 300);
    });

    $('.enlarged').click(function(e){
        if (e.target !== this) return;
        $(this).removeClass('show');

        setTimeout(function() {
            $('.enlarged').hide();
        }, 300);
    });
});