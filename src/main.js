//hamburger menu
$( document ).ready(function() {
$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "fast", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});
$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "fast", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});
});
//end hamburger menu



const colorButton = document.querySelectorAll('#colorGrid section button');
const numberButton1 = document.querySelectorAll('#colorGrid2 section button');
const numberButton2 = document.querySelectorAll('#colorGrid3 section button');

const colorSection = document.querySelector('#colorGrid');
const numberSection1 = document.querySelector('#colorGrid2');
const numberSection2 = document.querySelector('#colorGrid3');







function wrapper() {

  const transition1 = () => {
    colorSection.classList.toggle('colorChange1');
  };

  const loopThrough = () => {
    let thisButtonText = this.childNodes[0].nodeValue;
    let thisButtonLength = thisButtonText.length;

    for (let i = 0; i < thisButtonLength * 2; i++) {
      setTimeout(function() { 
        transition1();
      }, i * 1000);
    }

    setTimeout(function() {
      colorSection.classList.add('hide');
      numberSection1.classList.remove('hide');
      numberSection1.classList.add('show');
    },thisButtonLength * 2000);

  };
  loopThrough();
};








function wrapper2() {

  const transition2 = () => {
    numberSection1.classList.toggle('colorChange2');
  };

  const loopThrough2 = () => {
    let thisNumber = this.childNodes[0].nodeValue;
    //nodeValue will be returned as a string, so we need to interpret it as a number value
    let numberValue = Number(thisNumber);

    for (let i = 0; i < numberValue * 2; i++) {
      setTimeout(function() { 
        transition2();
      }, i * 1000);
    }

    setTimeout(function() {
      numberSection1.classList.add('hide');
      numberSection1.classList.remove('show');
      numberSection2.classList.remove('hide');
      numberSection2.classList.add('show');
    },numberValue * 2000);

  };
  loopThrough2();
};







function wrapper3() {

  const transition3 = () => {
    numberSection2.classList.toggle('colorChange2');
    numberSection2.classList.toggle('colorChange3');
  };

  const loopThrough3 = () => {
    let thisNumber = this.childNodes[0].nodeValue;
    //nodeValue will be returned as a string, so we need to interpret it as a number value
    let numberValue = Number(thisNumber);

    for (let i = 0; i < numberValue * 2; i++) {
      setTimeout(function() { 
        transition3();
      }, i * 1000);
    }

    setTimeout(function() {
      numberSection2.classList.add('hide');
      numberSection2.classList.remove('show');
      //then tell fortune to appear here!


    },numberValue * 2000);

  };
  loopThrough3();
};











//event 1
for(let i = 0; i < colorButton.length; i++) {
  colorButton[i].addEventListener('click', wrapper);
};
//event 2
for(let i = 0; i < numberButton1.length; i++) {
  numberButton1[i].addEventListener('click', wrapper2);
};
//event 3
for(let i = 0; i < numberButton2.length; i++) {
  numberButton2[i].addEventListener('click', wrapper3);
};




