const img = document.querySelector(".image-slider img"),
        left = document.querySelector("#left"),
        right = document.querySelector("#right");
        hamburger = document.querySelector(".hamburger");
        cancel = document.querySelector(".cancel");
        modal = document.querySelector(".modal");
        console.log(hamburger);
        

    const src = [   "./images/desktop-image-hero-1.jpg",
                    "./images/desktop-image-hero-2.jpg",
                    "./images/desktop-image-hero-3.jpg"
                ];
// src[0] = "./images/desktop-image-hero-1.jpg";
// src[1] = "./images/desktop-image-hero-2.jpg";
// src[2] = "./images/desktop-image-hero-3.jpg";

let i = 0;

let autoSlide = true;
let autoInterval;


left.addEventListener("click", ()=>{
    i--;
    if(i < 0){
        i = 0;
    }
    // img.src = src[i];
    img.setAttribute("src", src[i]);
    if(autoSlide){
    
        clearInterval(autoInterval)
        auto()
    }
})

right.addEventListener("click", ()=>{
    i++;
    if(i > src.length-1){
        i = 0;
    }
    // img.src = src[i];
    img.setAttribute("src", src[i]);

    if(autoSlide){

        clearInterval(autoInterval)
        auto()
    }
})


hamburger.addEventListener("click", showmodal);

function showmodal(){
    modal.style.display = "block";
    hamburger.style.display = "none";

}
cancel.addEventListener("click", closemodal);

function closemodal(){
    modal.style.display = "none";
    hamburger.style.display = "block";

}

if(autoSlide){
    function auto() {
        
        autoInterval = setInterval(() => {
            i++;
            if(i > src.length-1){
                i = 0;
            }
            // img.src = src[i];
            img.setAttribute("src", src[i]);
        }, 5000);
    }
}

auto()