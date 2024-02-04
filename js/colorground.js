const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
 
const body = document.body;
const button = document.querySelector("button");

function gradient() {
    const color1 = pickColor();
    const color2= pickColor();
    body.style=`background:linear-gradient(45deg, ${color1}, ${color2})`;
}

function pickColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}


button.addEventListener("click", gradient);

//버튼에도 색상 추가하고 싶은데 어케 하지?