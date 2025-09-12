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
    slidesToShow: 3,      
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


// Login Form Validation Start

document.getElementById("loginForm").addEventListener("submit", function (e) {
    let isValid = true;


    const email = document.getElementById("login_email").value.trim();
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

 
    const password = document.getElementById("login_password").value.trim();
    const passwordError = document.getElementById("passwordError");

    if (password.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters.";
      isValid = false;
    } else {
      passwordError.textContent = "";
    }


    if (!isValid) {
      e.preventDefault();
    }
  });
// Login Form Validation End


// Signup Form Validation Start
document.getElementById("signupForm").addEventListener("submit", function (e) {
    let isValid = true;
  

    const name = document.getElementById("signup_name").value.trim();
    const nameError = document.getElementById("nameError");
    if (name.length < 3) {
      nameError.textContent = "Name must be at least 3 characters.";
      isValid = false;
    } else {
      nameError.textContent = "";
    }
  

    const username = document.getElementById("signup_username").value.trim();
    const usernameError = document.getElementById("usernameError");
    if (username.length < 4 || /\s/.test(username)) {
      usernameError.textContent = "Username must be at least 4 characters with no spaces.";
      isValid = false;
    } else {
      usernameError.textContent = "";
    }

    const email = document.getElementById("signup_email").value.trim();
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,10}(?:\.[a-zA-Z]{2,10})*$/;
    if (!emailRegex.test(email)) {
      emailError.textContent = "Enter a valid email (e.g. user@gmail.com, john@company.co.in).";
      isValid = false;
    } else {
      emailError.textContent = "";
    }
  

    const phone = document.getElementById("signup_phone").value.trim();
    const phoneError = document.getElementById("phoneError");
    const phoneRegex = /^\+[0-9]{7,15}$/; // + followed by 7–15 digits total
    if (phone && !phoneRegex.test(phone)) {
      phoneError.textContent = "Phone must start with + and contain only digits, total 7–15 digits (e.g. +919876543210).";
      isValid = false;
    } else {
      phoneError.textContent = "";
    }
  

    const password = document.getElementById("signup_password").value.trim();
    const passwordError = document.getElementById("passwordError");
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,20}$/;
    if (!passwordRegex.test(password)) {
      passwordError.textContent = "Password must be 6–20 chars, include 1 uppercase, 1 number, and 1 special character.";
      isValid = false;
    } else {
      passwordError.textContent = "";
    }
  

    const confirmPassword = document.getElementById("signup_confirm_password").value.trim();
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    if (confirmPassword !== password) {
      confirmPasswordError.textContent = "Passwords do not match.";
      isValid = false;
    } else {
      confirmPasswordError.textContent = "";
    }
  

    if (!isValid) {
      e.preventDefault();
    }
  });
// Signup Form Validation End

// Newsletter Validation Start
document.getElementById("newsletterForm").addEventListener("submit", function (e) {
  e.preventDefault(); 

  let isValid = true;

  const nameInput = document.querySelector(".name");
  const nameError = document.getElementById("nameError");
  if (nameInput.value.trim() === "") {
    nameError.classList.remove("d-none");
    isValid = false;
  } else {
    nameError.classList.add("d-none");
  }

  const emailInput = document.querySelector(".email");
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.classList.remove("d-none");
    isValid = false;
  } else {
    emailError.classList.add("d-none");
  }

  if (isValid) {
    this.reset();

    let msg = document.getElementById("successMsg");
    if (!msg) {
      msg = document.createElement("p");
      msg.id = "successMsg";
      msg.className = "text-success mt-3";
      this.appendChild(msg);
    }
    msg.textContent = "Your have been subscribed to our newsletter!";


    setTimeout(() => {
      msg.textContent = "";
    }, 5000);
  }
});


// Newsletter Validation End