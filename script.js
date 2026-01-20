// Coding Vibe Particle Effect
VANTA.NET({
  el: "#home", // Yeh aapke hero section ki ID hai
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x3fb8ff, // Aapka blue color
  backgroundColor: 0x0a0f1d, // Dark coding background
  points: 10.00,
  maxDistance: 20.00,
  spacing: 15.00
});





// Initialize AOS Animations
AOS.init({ duration: 1000, once: true,offset:100  });

// Scroll Progress Bar
window.onscroll = () => {
  let winScroll = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.getElementById("scroll-progress").style.width = (winScroll / height) * 100 + "%";
};

// Theme Toggle Logic
const themeBtn = document.getElementById('theme-icon');
themeBtn.onclick = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'light') {
    document.documentElement.removeAttribute('data-theme');
    themeBtn.classList.replace('fa-sun', 'fa-moon');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeBtn.classList.replace('fa-moon', 'fa-sun');
  }
};

// Resume Download & Confetti
document.getElementById('resume-btn').onclick = () => {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#0ea5e9', '#ffffff']
  });
  setTimeout(() => {
    window.open('resume.pdf', '_blank');
  }, 500);
};

// Form Validation
(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        event.preventDefault()
        alert("Success! Message sent.")
      }
      form.classList.add('was-validated')
    }, false)
  })
})()



document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.glow-point:nth-child(3)');
    if(glow) {
        glow.style.left = e.pageX + 'px';
        glow.style.top = e.pageY + 'px';
    }
});

// 1. AOS Animation ko Initialize karna
AOS.init({
    duration: 1000,      // Animation speed 1 second
    offset: 120,         // Kitna scroll hone par animation shuru ho
    easing: 'ease-out-back', // Thoda "bounce" effect ke liye
    once: false,         // Har baar scroll par animate hoga
    mirror: true         // Upar scroll karte waqt bhi reverse animation dikhega
});

// 2. Video Playback Fix
// Kabhi-kabhi browsers autoplay block kar dete hain, ye code use fix karega
window.addEventListener('load', () => {
    const video = document.querySelector('.hero-bg-video');
    if (video) {
        video.play().catch(error => {
            console.log("Autoplay was prevented. User interaction might be needed.");
        });
    }
});

// 3. Navbar Scroll Effect (Optional but Professional)
// Jab aap scroll karein toh navbar thoda transparent ya blur ho jaye
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('navbar-scrolled');
    } else {
        nav.classList.remove('navbar-scrolled');
    }
});


window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});