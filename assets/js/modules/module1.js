let buttonToToggle = document.getElementById('buttonToToggle');
let closeButton = document.querySelector('.js-close-button');
let counterButtonClicks = 0;


function randomBackgroundColor(){
return 'rgb(' +
           Math.round(Math.random()*255) +
           ',' +
           Math.round(Math.random()*255) +
           ',' +
           Math.round(Math.random()*255) +
         ')';
}

function createDivElementsWithRandomColor() {
   let div = document.createElement('div');
   div.classList.add('my-div');
   div.innerHTML = '<span class="my-div__text">DIV</span>';
   div.style.backgroundColor = randomBackgroundColor();
   let span = document.createElement('span');
   span.innerHTML = "x";
   span.classList.add('js-close-button');
   span.classList.add('my-div__close-button');
   div.append(span);
   let spanCountDivs = document.createElement('span');
   spanCountDivs.classList.add('my-div__countNumberOfElements');
   spanCountDivs.innerHTML = getTheNumberOfButtonClicks();
   div.appendChild(spanCountDivs);
   return div;
}

function fadeIn(el) {
  el.style.opacity = 0;

  var tick = function() {
    el.style.opacity = +el.style.opacity + 0.01;


    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    }
  };
  tick();
}



function getTheNumberOfButtonClicks() {
  counterButtonClicks +=1;
  return counterButtonClicks;
}

function setCounterButtonElement(){
  buttonToToggle.innerHTML += getTheNumberOfButtonClicks();
}

function initAttachedEventListeners(){

  // press button and create divs on the page
  buttonToToggle.addEventListener('click', (e) => {
    e.srcElement.style.backgroundColor = randomBackgroundColor();
    document.body.appendChild(createDivElementsWithRandomColor());

  });



  // close button on elements
  document.body.addEventListener('click', (e) => {
      let spanElement = e.srcElement;
      console.dir(spanElement)
      console.log(spanElement.classList[0]);
      console.log(spanElement.classList[1]);
      if(spanElement.classList[0] == "js-close-button"){
        // I have clicked the span inside div so remove the whole element
        let parentNodeDiv = spanElement.parentNode;
        parentNodeDiv.parentNode.removeChild(parentNodeDiv);
      }
  });


}


{
  initAttachedEventListeners();

}
