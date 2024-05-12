// Selectors
const header = document.querySelector("#header");

const popularSwiper = document.querySelector(".popular_container");

const accoItems = document.querySelectorAll(".value-acco-item");

const sections = document.querySelectorAll('section[id]');

const scrollUpElement = document.querySelector(".scroll-up")

// Value Toggle Itmes
accoItems.forEach((item) => {
    const acooHeader = item.querySelector(".value-acco-header");
    acooHeader.addEventListener("click", () => {

        const openItem = document.querySelector(".acco-open");
        toggleItems(item);

        if (openItem && openItem !== item) {
            toggleItems(openItem);
        }
    })
})

// Scroll Activity
window.addEventListener("scroll", scrollAction);

// Changing Nav BackgroundColor
window.addEventListener("scroll", scrollHeader);

// Scroll Up Activity
window.addEventListener("scroll", scrollUp);

// Functions 

// Toggling Items Function
function toggleItems(i) {
    const accoContent = i.querySelector(".value-acco-content");

    if (i.classList.contains('acco-open')) {

        accoContent.removeAttribute('style');

        i.classList.remove("acco-open");

    } else {

        accoContent.style.height = accoContent.scrollHeight + 'px';

        i.classList.add("acco-open");

    }
}

// Nav Header Scroll Function
function scrollHeader() {
    if (this.scrollY >= 50) {

        header.classList.add("scroll-header")

    }
}

// Scroll Function
function scrollAction() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

// Scroll Up Function 
function scrollUp() {
    if (this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

// Swiper For Popular
var swiper = new Swiper(popularSwiper, {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Scroll Reveal Animate
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
});

sr.reveal(`.home-title, .popular-container, .subscribe-container, .footer-container`);
sr.reveal(`.home-desc, .footer-info`, { delay: 500 });
sr.reveal(`.home-search`, { delay: 600 });
sr.reveal(`.home-value`, { delay: 700 });
sr.reveal(`.home-images`, { delay: 800, origin: 'bottom' });
sr.reveal(`.logos-img`, { interval: 100 })
sr.reveal(`.value-images, .contact-content`, { origin: 'left' });
sr.reveal(`.value-content, .contact-images`, { origin: 'right' });

// ========================= Dark Mode =========================

const themeButton = document.getElementById("theme-button")
const darkTheme = "dark-theme"
const iconTheme = 'bx-sun'

const SelectedTheme = localStorage.getItem("selected-theme")
const SelectedIcon = localStorage.getItem("selected-icon")

const currentTheme = () => { document.body.classList.contains(darkTheme) ? 'dark' : 'light' }
const currentIcon = () => { themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun' }

if (SelectedTheme !== null) {
    document.body.classList[SelectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[SelectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', currentTheme())
    localStorage.setItem('selected-icon', currentIcon())
})


function redirectToRegistration(event) {
    event.preventDefault();
    window.location.href = 'signup.html';
}

 // login

 const form = document.getElementById('form');
 const username = document.getElementById('username');
 const email = document.getElementById('email');
 const password = document.getElementById('password');
 const password2 = document.getElementById('password2');
 
 form.addEventListener('submit', e => {
     e.preventDefault();
 
     validateInputs();
 });
 
 const setError = (element, message) => {
     const inputControl = element.parentElement;
     const errorDisplay = inputControl.querySelector('.error');
 
     errorDisplay.innerText = message;
     inputControl.classList.add('error');
     inputControl.classList.remove('success')
 }
 
 const setSuccess = element => {
     const inputControl = element.parentElement;
     const errorDisplay = inputControl.querySelector('.error');
 
     errorDisplay.innerText = '';
     inputControl.classList.add('success');
     inputControl.classList.remove('error');
 };
 
 const isValidEmail = email => {
     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(String(email).toLowerCase());
 }
 
 const validateInputs = () => {
     const usernameValue = username.value.trim();
     const emailValue = email.value.trim();
     const passwordValue = password.value.trim();
     const password2Value = password2.value.trim();
 
     if(usernameValue === '') {
         setError(username, 'Username is required');
     } else {
         setSuccess(username);
     }
 
     if(emailValue === '') {
         setError(email, 'Email is required');
     } else if (!isValidEmail(emailValue)) {
         setError(email, 'Provide a valid email address');
     } else {
         setSuccess(email);
     }
 
     if(passwordValue === '') {
         setError(password, 'Password is required');
     } else if (passwordValue.length < 8 ) {
         setError(password, 'Password must be at least 8 character.')
     } else {
         setSuccess(password);
     }
 
     if(password2Value === '') {
         setError(password2, 'Please confirm your password');
     } else if (password2Value !== passwordValue) {
         setError(password2, "Passwords doesn't match");
     } else {
         setSuccess(password2);
     }
 
 };
 
 
 
 function redirectToHome() {
     const usernameValue = username.value.trim();
     const emailValue = email.value.trim();
     const passwordValue = password.value.trim();
     const password2Value = password2.value.trim();
 
     // Check if all fields are successfully validated
     if (
         username.parentElement.classList.contains('success') &&
         email.parentElement.classList.contains('success') &&
         password.parentElement.classList.contains('success') &&
         password2.parentElement.classList.contains('success')
     ) {
         // All fields are validated, redirect to home page
         window.location.href = 'index.html';
     } else {
         // If any field is not validated, prevent redirection
         console.log('Validation not complete.');
     }
 }
 

