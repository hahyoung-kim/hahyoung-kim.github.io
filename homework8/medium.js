// Cited: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random, https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  function clickButton(){
    const back = document.querySelector('.myBackground');
    const tit = document.querySelector('.tit');
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = '#'+Math.floor(Math.random()*16777215).toString(16);
    back.style.backgroundColor = randomColor;
    theClick.style.backgroundColor = randomColor2;
    tit.style.color = randomColor2;
  }
  
  const theClick = document.querySelector('.myButton');
  theClick.addEventListener('click', clickButton);
  