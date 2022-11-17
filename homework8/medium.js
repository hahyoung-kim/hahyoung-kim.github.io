// Cited: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random, https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj

const colorMax = 16777215;

function clickButton(){
    const back = document.querySelector('.myBackground');
    var randomColor = '#'+Math.floor(Math.random()*colorMax).toString(16);
    var randomColor2 = '#'+Math.floor(Math.random()*colorMax).toString(16);
    back.style.backgroundColor = randomColor;
    theClick.style.backgroundColor = randomColor2;
    $("#number").html(random);
}
  const theClick = document.querySelector('.myButton');
  theClick.addEventListener('click', clickButton);
  
