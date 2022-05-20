var scrollTop = window.pageYOffset;
var sticky = document.querySelector(".sticky");
var hаndlerClick = document.querySelector(".sticky__element");
var openBlock = document.querySelector('.open-block');
var boundaries = document.querySelector('.open-block__main-part');

document.addEventListener("scroll", function () {
    if (window.pageYOffset > 664) {
        openBlock.classList.add('open-block_scrolling')
        if (window.pageYOffset > 1332) {
            sticky.classList.add('sticky_visible')
        }
        else {
            sticky.classList.remove('sticky_visible')
        }
    } else {
        openBlock.classList.remove('open-block_scrolling')
    }
    console.log(window.pageYOffset)
});

document.addEventListener('scroll', () => {
    let hаndlerHeader = document.querySelector('.header');
    if (window.pageYOffset > scrollTop) {
        hаndlerHeader.classList.remove('header_fixed');
    } else {
        hаndlerHeader.classList.add('header_fixed');
    }
    scrollTop = window.pageYOffset;
});

hаndlerClick.addEventListener('click', () => {
    openBlock.classList.add('open-block_fixed');
    sticky.classList.remove('sticky_visible')

});

document.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(boundaries);
    const withinSticky = e.composedPath().includes(hаndlerClick);
    if (!withinBoundaries) {
        if (withinSticky) {
            openBlock.classList.add('open-block_fixed');
        } else {
            openBlock.classList.remove('open-block_fixed');
        }

    }
})



