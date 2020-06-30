let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let modalNoButton = document.querySelector('.modal__action--negative')
let planButtons = document.querySelectorAll('.plan button');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');

for (let i = 0; i < planButtons.length; i++) {
    planButtons[i].addEventListener('click', () => {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = 'open'; // will overwrite css string with classes entirely.
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

backdrop.addEventListener('click', () => {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', () => {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})