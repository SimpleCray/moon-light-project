window.addEventListener('scroll', () => {
    let stars = document.getElementById('stars');
    let moon = document.getElementById('moon');
    let mountains_behind = document.getElementById('mountains_behind');
    let mountains_front = document.getElementById('mountains_front');
    let text = document.getElementById('text');
    let btn = document.getElementById('btn');
    let header = document.querySelector('header');
    let value = window.scrollY;
    stars.style.left = `${value * 0.25}px`;
    moon.style.top = `${value * 1.05}px`;
    mountains_behind.style.top = `${value * 0.5}px`;
    text.style.marginRight = `${value * 2.5}px`;
    text.style.marginTop = `${value * 1.5}px`;
    btn.style.marginTop = `${value * 1.5}px`;
    header.style.top = `${value * 0.8}px`;
});

function autoScroll() {
    scrolldelay = setTimeout(autoScroll, 20);
    if (window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollTo({ top: window.pageYOffset + 50, behavior: 'smooth' }); // horizontal and vertical scroll increments
    } else {
        clearTimeout(scrolldelay);
    }
}
