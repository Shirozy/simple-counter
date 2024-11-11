const toggleButton = document.querySelector('.toggle');

if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
  toggleButton.textContent = 'Light Mode';
}

toggleButton.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Light Mode';
    localStorage.setItem('darkMode', 'enabled');
  } else {
    toggleButton.textContent = 'Dark Mode';
    localStorage.setItem('darkMode', 'disabled');
  }
});
