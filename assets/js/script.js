document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('scroll', function (e) {
        position = window.scrollY;

        const header = document.querySelector('.header');

        if (position > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });
})