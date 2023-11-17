var image = document.getElementsByClassName("img3");
new simpleParallax(image, {
   orientation:"left",
    scale:1.4
});

var par=document.getElementsByClassName("img2");
new simpleParallax(par,{
  orientation:"up",
    scale:1.0
    
});
var par=document.getElementsByClassName("img1");
new simpleParallax(par,{
  orientation:"down",
    scale:1.9
    
});