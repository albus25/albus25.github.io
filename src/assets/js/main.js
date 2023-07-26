document.addEventListener("DOMContentLoaded", function () {
    let element = document.querySelector('.page-loader');

    function fadeOut(el) {
        let opacity = 1; // Initial opacity
        let interval = setInterval(function () {
            if (opacity > 0) {
                opacity -= 1;
                el.style.opacity = opacity;
            } else {
                clearInterval(interval); // Stop the interval when opacity reaches 0
                el.style.display = 'none'; // Hide the element
            }
        }, 2000);
    }

    fadeOut(element);

    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('icon-menu')) {
            document.querySelector('.responsive-sidebar-menu').classList.add('active');
        }
    });

    let overlaySidebarMenu = document.querySelectorAll(".responsive-sidebar-menu .overlay");
    overlaySidebarMenu.forEach((element) => {
        element.addEventListener("click", () => {
            document.querySelector(".responsive-sidebar-menu").classList.remove("active");
        });
    });

    let liMenuScrollTo = document.querySelectorAll(".menu li .scroll-to");
    liMenuScrollTo.forEach((element) => {
        element.addEventListener("click", () => {
            document.querySelector(".responsive-sidebar-menu").classList.remove("active");
        });
    });
});
