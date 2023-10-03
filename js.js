const menuBtn = document.getElementById('menuButton');

function toggleMenu() {
    const menuPages = document.getElementById('menuPages');
    menuPages.classList.toggle('active');
}

menuBtn.addEventListener('click', toggleMenu);