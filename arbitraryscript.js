var imgObj = null;
            
function init() {
  imgObj = document.createElement("img");
  imgObj.src = 
  imgObj.style.position= 'relative';
  imgObj.style.left = '0px'; 
}
function moveRight() {
  imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}
            
window.onload = init;
for (let i = 0, len = cars.length, text = ""; i < len; i++) {
  moveRight();
}
