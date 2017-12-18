var slides = [
    {
        image: "images/image1.jpg",
        caption: "I want it."
    },
    {
        image: "images/image2.jpg",
        caption: "I want iiiiiit"
    },
     {
        image: "images/image3.jpg",
        caption: "Hold it"
    },
     {
        image: "images/image4.jpg",
        caption: "Bye"
    },
     {
        image: "images/image5.jpg",
        caption: "Finaly i'll be able to sleep"
    }

];

for (var i = 0; i < slides.length; i++){
    var slide = slides[i];
    var slideElem = document.createElement("div");
    slideElem.className = "pic";
    var img = new Image();
    var caption = document.createElement("p");

    img.src = slide.image;
    caption.textContent = slide.caption;

    slideElem.appendChild(img);
    slideElem.appendChild(caption);

    document.body.appendChild(slideElem);
}




