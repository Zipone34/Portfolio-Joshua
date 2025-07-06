const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const scrollBtn = document.getElementById("scrollUpBtn");


hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



// Close the navigation menu when a link is clicked
const toggleButton = document.getElementById('toggle-dark');
const body = document.body;

// Load mode from localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '🌙'; // Moon icon
} else {
    toggleButton.textContent = '🌞'; // Sun icon
}

// Toggle dark mode and icon
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '🌙';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        toggleButton.textContent = '🌞';
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Show the button after scrolling 200px
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

// Scroll to top when clicked
scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

