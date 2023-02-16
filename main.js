const toggleButton = document.getElementsByClassName('toggle-button')[0];
const pages = document.getElementsByClassName('pages')[0];

toggleButton.addEventListener('click', () => {
  pages.classList.toggle('active');
});