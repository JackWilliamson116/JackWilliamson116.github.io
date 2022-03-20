function display_image(src, width, height, alt) {
    var a = document.createElement("img");
    a.src = src;
    a.width = width;
    a.height = height;
    a.alt = alt;
    a.display = "block";
    a.style.margin = "0 auto";
    document.body.appendChild(a);
}
display_image('https://JackWilliamson116.github.io/pizza.jpg', 
                 600, 
                 600, 
                 'JavaScriptImage');
