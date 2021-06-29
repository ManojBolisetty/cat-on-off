function switchOn() {
    document.getElementById("bulbimage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catimage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("text").textContent = "Switched On";
    document.getElementById("on").style.backgroundColor = "#cbd2d9";
    document.getElementById("off").style.backgroundColor = "#e12d39";
}

function switchOff() {
    document.getElementById("bulbimage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catimage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("text").textContent = "Switched Off";
    document.getElementById("off").style.backgroundColor = "#cbd2d9";
    document.getElementById("on").style.backgroundColor = "#22c55e";
}