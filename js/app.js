document.addEventListener('DOMContentLoaded', function() {

    const nav = document.querySelector('.page-nav-list');
    const btn = document.querySelector('.page-nav-burger');

    const navMobile = nav.cloneNode(true);
    navMobile.classList.remove('page-nav-list');
    navMobile.classList.add('page-nav-list-mobile');
    document.body.appendChild(navMobile);

    btn.addEventListener('click', function () {
        document.body.classList.toggle('show-nav');
    })
});
