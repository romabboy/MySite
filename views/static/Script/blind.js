
const burger__menu = document.querySelector(".burger__menu");
const blind__black = document.querySelector(".blind__black");
const blind = document.querySelector(".blind");
const html = document.documentElement;
const heigthWindow = window.innerHeight;
let lastElem = document.querySelectorAll(".blind__item");
lastElem = lastElem[lastElem.length-1]


window.addEventListener("scroll",function(event){
    
    if(html.scrollTop > heigthWindow) burger__menu.classList.add("fixed")
    else burger__menu.classList.remove("fixed")
})


burger__menu.addEventListener("click",function(event){
    document.body.classList.add("noscroll")
    burger__menu.style.opacity = "0";
    blind__black.style.left = "-70%";
    blind.style.right = "0";

    blind.querySelector(".blind__close").addEventListener("click",blindClose);
    blind__black.addEventListener("click",blindClose)
    lastElem.addEventListener("click",blindClose)

    function blindClose(){
        burger__menu.style.opacity = "1";
        blind__black.style.left = "-100%";
        blind.style.right = "-100%";
        document.body.classList.remove("noscroll")

        blind.querySelector(".blind__close").removeEventListener("click",blindClose);
        blind__black.removeEventListener("click",blindClose);

    }
})

