const images= ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

// 전달해 준 인자로 태그 만들어 줌
// <img> 태그 생성
const refImage = document.createElement("img");  


// <img> 태그를 가리키는 refImage의 src 속성 추가
refImage.src = `image/${chosenImage}`;

document.body.appendChild(refImage);