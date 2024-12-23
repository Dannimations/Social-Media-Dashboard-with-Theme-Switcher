const checkbox = document.getElementById('toggle');
const body = document.body;

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        body.classList.remove('lightMode')
        body.classList.add('darkMode');
    } else {
        body.classList.remove('darkMode');
        body.classList.add('lightMode');
    }
});