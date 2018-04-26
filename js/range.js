var rangeInput = document.querySelector(".js-range");
var beforeImg = document.querySelector(".js-before");
var afterImg = document.querySelector(".js-after");
var sliderGradient = document.querySelector(".js-gradient");

rangeInput.oninput = function() {

  var value = (rangeInput.value - 50);
  var Bvalue = 46 - value;
  var Avalue = 50 + value;

  beforeImg.style.clipPath = "inset(0 " + Bvalue + "% 0 0)";
  afterImg.style.clipPath = "inset(0 0 0 " + Avalue + "%)";
  sliderGradient.style.backgroundImage = "linear-gradient(90deg, #f2f2f2 " + Avalue + "%, #eaeaea " + rangeInput.value + "%, #eaeaea)";

}

window.addEventListener("resize", resize, false);

function resize() {
  if (window.innerWidth < 768) {
    beforeImg.style.clipPath = "inset(0 0 0 0)";

    afterImg.style.clipPath = "inset(0 0 0 0)";
    sliderGradient.style.backgroundImage = "linear-gradient(90deg, #f2f2f2 100%, #eaeaea 100%, #eaeaea)";;
  } else {
    beforeImg.style.clipPath = "inset(0 46% 0 0)";
    afterImg.style.clipPath = "inset(0 0 0 50%)";
    sliderGradient.style.backgroundImage = "linear-gradient(90deg, #f2f2f2 50%, #eaeaea 50%, #eaeaea)";;

  }
}
