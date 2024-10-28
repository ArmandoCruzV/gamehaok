document.addEventListener('DOMContentLoaded', function() {

  var canvas = document.querySelector('canvas');
  if (canvas) {
    canvas.style.background = 'white';
    //canvas.style.border = 'solid 3px #624E88';
    canvas.style.alignContent = "center";
    canvas.style.borderRadius = "12px";
  }
  else {
    console.log("nose detecto");
  }

})

