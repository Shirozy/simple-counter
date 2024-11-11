let count = 0;

if (localStorage.getItem('count') !== null) {
    count = Number(localStorage.getItem('count'));
}

const value = document.querySelector('#value .number');
const btns = document.querySelectorAll('.btn');

const ml4 = {
  opacityIn: [0, 1],
  scaleIn: [0.2, 1],
  scaleOut: 3,
  durationIn: 100,
  durationOut: 75,
  delay: 250
};

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const styles = e.currentTarget.classList;
      let newValue;
  
      disableButtons();
  
      if (styles.contains('decrease')) {
        count--;
        newValue = count;
      } else if (styles.contains('increase')) {
        count++;
        newValue = count;
      } else {
        count = 0;
        newValue = count;
      }
      localStorage.setItem('count', count);

      animateCountChange(newValue);
    });
  });

function animateCountChange(newValue) {
  const oldValue = value.textContent;

  const newValueElement = document.createElement('span');
  newValueElement.textContent = newValue;
  newValueElement.classList.add('letters');
  value.parentElement.appendChild(newValueElement);

  anime.timeline({ loop: false })
    .add({
      targets: value,
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: "easeInExpo",
    })
    .add({
      targets: newValueElement,
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn,
      easing: "easeOutQuad",
      offset: '-=200'
    })
    .add({
      targets: value,
      scale: 1,
      duration: 0,
      complete: function () {
        value.textContent = newValue;
        value.style.opacity = 1;
        newValueElement.remove();

        enableButtons();
      }
    });
}

function disableButtons() {
  btns.forEach(function (btn) {
    btn.style.pointerEvents = 'none';
  });
}

function enableButtons() {
  btns.forEach(function (btn) {
    btn.style.pointerEvents = 'auto';
  });
}