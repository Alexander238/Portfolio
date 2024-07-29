export class ElementBuilder {
    static buildAndInsertHeader() {
        const headerHTML = `
            <header class="header">
                <a href="#" class="logo">
                    <span class="name-span">Alex</span>ander
                </a>
                <nav class="navbar">
                    <a href="../HTML/index.html">Portfolio</a>
                    <a href="../HTML/projects.html">Projekte</a>
                    <a href="../HTML/way-of-working.html">Arbeitsweise</a>
                </nav>
            </header>`;

        $('body').prepend(headerHTML);

        const currentLocation = window.location.href;
        console.log("Current location: ", currentLocation);
        $('.navbar a').each(function() {
            let href = $(this).attr('href');
            href = href.slice(2);
            if (currentLocation.includes(href)) {
                $(this).addClass('active');
            } else if (currentLocation.includes('project') && href.includes('project')) {
                $(this).addClass('active');
            }
        });

        $('.navbar a').on('click', function(event) {
            event.preventDefault();
            const href = $(this).attr('href');
            $('.navbar a').removeClass('active');
            $(this).addClass('active');
            window.location.href = href;
        });
    }

    static buildAndInsertParallaxBackground() {
        const parallaxBackgroundHTML = `
            <div class="parallax-container">
                <div class="parallax-background"></div>
            </div>`;

        $('body').prepend(parallaxBackgroundHTML);


        this.addParallaxEffect();
    }

    static addParallaxEffect() {
        document.addEventListener('scroll', function() {
            const parallax = document.querySelector('.parallax-background');
            const scrollPosition = window.scrollY;
            const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollPosition > pageHeight) {
                console.log("Scroll position is greater than page height");
                return;
            }
            //console.log("Scroll position: ", scrollPosition);
            //console.log("Page height: ", pageHeight);
            parallax.style.transform = `translateY(${-scrollPosition * 0.03}px)`;
        });
    }

    static init() {
        this.buildAndInsertHeader();
        this.buildAndInsertParallaxBackground();
    }
}