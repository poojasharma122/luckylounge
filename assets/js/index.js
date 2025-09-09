// Header JS Start
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
let sidebarOpen = false;

function openSidebar() {
    sidebar.classList.add('open');
    sidebarOpen = true;
    document.body.style.overflow = 'hidden';
    if (menuBtn) menuBtn.innerHTML = '&times;';
    if (menuBtn) menuBtn.setAttribute('aria-label', 'Close menu');
}

function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOpen = false;
    document.body.style.overflow = '';
    if (menuBtn) menuBtn.innerHTML = '&#9776;';
    if (menuBtn) menuBtn.setAttribute('aria-label', 'Open menu');
}

function toggleSidebar() {
    if (sidebarOpen) {
        closeSidebar();
    } else {
        openSidebar();
    }
}

if (menuBtn) {
    menuBtn.addEventListener('click', toggleSidebar);
}

document.addEventListener('click', function (e) {
    if (window.innerWidth <= 991 && sidebarOpen) {
        if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
            closeSidebar();
        }
    }
});

window.addEventListener('resize', function () {
    if (window.innerWidth > 991) {
        closeSidebar();
    }
});
// Header JS End

// AOS JS Start
AOS.init({
    duration: 1200,
});
// AOS JS End



// Slider JS Start
$('.home_games_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 3,       // 👈 base setting
    slidesToScroll: 1, 
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ],
    prevArrow: `<button class="slick-prev custom-arrow custom-prev" aria-label="Previous slide">
                   <svg  viewBox="0 0 32 72" xmlns="http://www.w3.org/2000/svg"><path stroke="#fcee0a" stroke-width="1.5" d="M31 71L1 35 31 1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </button>`,
    nextArrow: `<button class="slick-next custom-arrow custom-next" aria-label="Next slide">
                   <svg  viewBox="0 0 32 72" xmlns="http://www.w3.org/2000/svg"><path stroke="#fcee0a" stroke-width="1.5" d="M1 71l30-36L1 1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </button>`
});
// Slider JS End


