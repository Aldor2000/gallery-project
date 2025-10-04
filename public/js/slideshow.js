let slideIndex = 1;
showSlide(slideIndex);

//next/previous controls for the buttons
function plusSlides(n){
    showSlide(slideIndex += n);
}

//thumbnail image controls
function currentSlide(n){
    showSlide(slideIndex = n);
}

//function to show slides
function showSlide(n){
    let i;

    //we get all the slide elements and dots on arrays
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    //if n goes over or under we loop to end or the beginning
    if(n > slides.length) {slideIndex = 1};
    if(n < 1){slideIndex = slides.length};

    //we hide all the slides and remove the active class from the dots
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    //we show the current slide and add the active class to the current dot
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}