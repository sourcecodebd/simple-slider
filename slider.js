let images = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg',
];
let imgIndex = 1;
const imgElement = document.getElementById('img');

setInterval(() => {
    if (imgIndex <= 0 || imgIndex > images.length - 1) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    console.log(imgUrl);
    imgElement.setAttribute('src', imgUrl);
    imgIndex++;
}, 2000);