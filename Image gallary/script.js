var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
var currentImgIndex = 0;

var images = [
    "D:\\vs code projects\\Task1\\images\\img1.jpg", 
    "D:\\vs code projects\\Task1\\images\\img2.jpg" ,
    "D:\\vs code projects\\Task1\\images\\img3.jpg" ,
    "D:\\vs code projects\\Task1\\images\\img4.jpg" ,
    "D:\\vs code projects\\Task1\\images\\img5.jpg" ,
    "D:\\vs code projects\\Task1\\images\\img7.jpg" ,
    "D:\\vs code projects\\Task1\\images\\img8.jpg" ,
    "D:\\vs code projects\\Task1\\images\\img9.jpg" ,
    "D:\\vs code projects\\Task1\\images\\img10.jpg" ,
    "D:\\vs code projects\\Task1\\images\\img11.jpg" ,
    "D:\\vs code projects\\Task1\\images\\img12.jpg" ,
    "D:\\vs code projects\\Task1\\images\\img13.jpg" ,
    "D:\\vs code projects\\Task1\\images\\img14.jpg" ,
    "D:\\vs code projects\\Task1\\images\\img15.jpg" ,
    "D:\\vs code projects\\Task1\\images\\img16.jpg" ,
    "D:\\vs code projects\\Task1\\images\\img17.jpg" 
];

function openFullImg(index) {
    currentImgIndex = index;
    fullImgBox.style.display = "flex";
    setTimeout(() => {
        fullImgBox.classList.add("show");
    }, 10); 
    fullImg.src = images[currentImgIndex];
}

function closeFullImg() {
    fullImgBox.classList.remove("show");
    setTimeout(() => {
        fullImgBox.style.display = "none";
    }, 500); 
}

function changeImg(direction) {
    currentImgIndex += direction;
    if (currentImgIndex < 0) {
        currentImgIndex = images.length - 1;
    } else if (currentImgIndex >= images.length) {
        currentImgIndex = 0;
    }
    fullImg.style.transform = "scale(0.9)";
    setTimeout(() => {
        fullImg.src = images[currentImgIndex];
        fullImg.style.transform = "scale(1)";
    }, 250); 
}
