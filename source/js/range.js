var rangeInput = document.querySelector(".js-range");
var beforeImg = document.querySelector(".js-before");
var afterImg = document.querySelector(".js-after");
var sliderGradient = document.querySelector(".js-gradient");

rangeInput.oninput = function() {

  let value= (rangeInput.value -50);
  let Bvalue= 46 - value;
  let Avalue= 50 + value;


  beforeImg.style.clipPath =  "inset(0 " + Bvalue +"% 0 0)";

  afterImg.style.clipPath="inset(0 0 0 " + Avalue +"%)";
  sliderGradient.style.backgroundImage ="linear-gradient(90deg, #f2f2f2 " + Avalue + "%, #eaeaea "+ rangeInput.value + "%, #eaeaea)";

}
