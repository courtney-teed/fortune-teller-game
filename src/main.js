const colorButton = document.querySelectorAll('#colorGrid section button');
const colorSection = document.querySelector('#colorGrid');

function wrapper() {

  const changeColor = () => {
    colorSection.classList.toggle('colorChange');
  };

  const loopThrough = () => {
    let thisButtonText = this.childNodes[0].nodeValue;
    let thisButtonLength = thisButtonText.length;

    for (let i = 0; i < thisButtonLength * 2; i++) {
      setTimeout(function() { 
        changeColor();
      }, i * 750);
    }

  };
  loopThrough();
};

for(let i = 0; i < colorButton.length; i++) {
  colorButton[i].addEventListener('click', wrapper);
};

