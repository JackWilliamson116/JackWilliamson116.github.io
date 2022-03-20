var imgObj = null;
            
function init() {
  imgObj = document.createElement("img");
  imgObj.src = "https://JackWilliamson116.github.io/pizza.jpg"
  imgObj.style.position= 'relative';
  imgObj.style.left = '0px'; 
}
function moveRight() {
  imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}
            
window.onload = init;
for (let i = 0; i < 70; i++) {
  moveRight();
}
