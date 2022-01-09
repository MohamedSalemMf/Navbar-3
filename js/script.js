// window.alert("Hello")    //Test

/* -------------------------------------------------------------------------- */
/* navbar-3  */

let zero = 0;
$(document).ready(function(){
    $(window).on('scroll' , function(){
        $('.nav').toggleClass('hide' , $(window).scrollTop() > zero);
        zero = $(window).scrollTop()
    })
})

/* end navbar-3  */
/* -------------------------------------------------------------------------- */

let sidenav = () => {
    const menu = document.querySelector('.menu-icon');
    const navUl = document.querySelector('.navUl');
// console.log(navUl);
    menu.addEventListener('click', () => {
        menu.classList.toggle('menu-icon-active');
        navUl.classList.toggle('nav-active');
    });
}

sidenav();



// active
$(document).on('click' ,'.navUl li' , function(){
    $(this).addClass('active-link').siblings().removeClass('active-link')
})

// $(document).on('click' ,'.menu-icon' , function(){
//     $(this).addClass('menu-icon-active').siblings().removeClass('menu-icon-active')
//     // $(this).addClass('nav-active').siblings().removeClass('nav-active')
//     // window.alert("hjvdhjk")
// })
