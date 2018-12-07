"use strict";

//hamburger menu
$(document).ready(function () {
  $(".cross").hide();
  $(".menu").hide();
  $(".hamburger").click(function () {
    $(".menu").slideToggle("fast", function () {
      $(".hamburger").hide();
      $(".cross").show();
    });
  });
  $(".cross").click(function () {
    $(".menu").slideToggle("fast", function () {
      $(".cross").hide();
      $(".hamburger").show();
    });
  });
});
//end hamburger menu


var colorButton = document.querySelectorAll('#colorGrid section button');
var numberButton1 = document.querySelectorAll('#colorGrid2 section button');
var numberButton2 = document.querySelectorAll('#colorGrid3 section button');

var colorSection = document.querySelector('#colorGrid');
var numberSection1 = document.querySelector('#colorGrid2');
var numberSection2 = document.querySelector('#colorGrid3');

function wrapper() {
  var _this = this;

  var transition1 = function transition1() {
    colorSection.classList.toggle('colorChange1');
  };

  var loopThrough = function loopThrough() {
    var thisButtonText = _this.childNodes[0].nodeValue;
    var thisButtonLength = thisButtonText.length;

    for (var i = 0; i < thisButtonLength * 2; i++) {
      setTimeout(function () {
        transition1();
      }, i * 1000);
    }

    setTimeout(function () {
      colorSection.classList.add('hide');
      numberSection1.classList.remove('hide');
      numberSection1.classList.add('show');
    }, thisButtonLength * 2000);
  };
  loopThrough();
};

function wrapper2() {
  var _this2 = this;

  var transition2 = function transition2() {
    numberSection1.classList.toggle('colorChange2');
  };

  var loopThrough2 = function loopThrough2() {
    var thisNumber = _this2.childNodes[0].nodeValue;
    //nodeValue will be returned as a string, so we need to interpret it as a number value
    var numberValue = Number(thisNumber);

    for (var i = 0; i < numberValue * 2; i++) {
      setTimeout(function () {
        transition2();
      }, i * 1000);
    }

    setTimeout(function () {
      numberSection1.classList.add('hide');
      numberSection1.classList.remove('show');
      numberSection2.classList.remove('hide');
      numberSection2.classList.add('show');
    }, numberValue * 2000);
  };
  loopThrough2();
};

function wrapper3() {
  var _this3 = this;

  var transition3 = function transition3() {
    numberSection2.classList.toggle('colorChange2');
    numberSection2.classList.toggle('colorChange3');
  };

  var loopThrough3 = function loopThrough3() {
    var thisNumber = _this3.childNodes[0].nodeValue;
    //nodeValue will be returned as a string, so we need to interpret it as a number value
    var numberValue = Number(thisNumber);

    for (var i = 0; i < numberValue * 2; i++) {
      setTimeout(function () {
        transition3();
      }, i * 1000);
    }

    setTimeout(function () {
      numberSection2.classList.add('hide');
      numberSection2.classList.remove('show');
      //then tell fortune to appear here!

    }, numberValue * 2000);
  };
  loopThrough3();
};

//event 1
for (var i = 0; i < colorButton.length; i++) {
  colorButton[i].addEventListener('click', wrapper);
};
//event 2
for (var _i = 0; _i < numberButton1.length; _i++) {
  numberButton1[_i].addEventListener('click', wrapper2);
};
//event 3
for (var _i2 = 0; _i2 < numberButton2.length; _i2++) {
  numberButton2[_i2].addEventListener('click', wrapper3);
};