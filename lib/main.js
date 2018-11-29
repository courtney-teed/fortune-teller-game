'use strict';

var colorButton = document.querySelectorAll('#colorGrid section button');
var colorSection = document.querySelector('#colorGrid');

function wrapper() {
  var _this = this;

  var changeColor = function changeColor() {
    colorSection.classList.toggle('colorChange');
  };

  var loopThrough = function loopThrough() {
    var thisButtonText = _this.childNodes[0].nodeValue;
    var thisButtonLength = thisButtonText.length;

    for (var i = 0; i < thisButtonLength * 2; i++) {
      setTimeout(function () {
        changeColor();
      }, i * 1000);
    }
  };
  loopThrough();
};

for (var i = 0; i < colorButton.length; i++) {
  colorButton[i].addEventListener('click', wrapper);
};