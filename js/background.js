const images = ["0.jpg","1.jpg"];

const todayImage =images[Math.floor(Math.random()*images.length)];

const image = document.createElement("img");
image.src=`img/${todayImage}`;
document.body.appendChild(image)


