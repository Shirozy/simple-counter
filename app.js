let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

console.log(btns);

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = '#a3be8c';
        }
        if (count < 0) {
            value.style.color = '#bf616a';
        }
        if (count === 0) {
            value.style.color = '#2e3440';
        }
        value.textContent = count;
    });
});
