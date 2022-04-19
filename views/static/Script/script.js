"use strict"
import { tvBox, Card } from "./createCard.js";
import "./blind.js";
import "./sendForm.js"
import { sendForm1 } from "./sendModal.js";
import { modalTHShow } from "./modalTHShow.js";

const html = document.documentElement;
const btn__up = document.querySelector(".btn__up");
const formBlockInput = document.querySelectorAll(".form-block__block-input input");
const googleMap = document.querySelector(".googleMap");
const page__items = document.querySelector(".page__items.items");
const button__allBox = document.querySelector(".more-item__link");
const background__grey = document.querySelector(".background__grey");
const modalWindow = document.querySelector(".modal");



const windowWidth = html.offsetWidth;
const windowHeight = window.innerHeight;
const scrollWidth = html.clientWidth;


console.log(formBlockInput)



window.addEventListener("scroll",BtnUp)
btn__up.addEventListener("click",scrollUp)
for(let input of formBlockInput){
    input.addEventListener("focus",underlineStright);
    input.addEventListener("blur",underlineBack);
    input.addEventListener("input",labelUp);
}
button__allBox.addEventListener("click",openItems);
button__allBox.addEventListener("click",insertCard);
button__allBox.addEventListener("click", addListenerForBtn)
addListenerForBtn()





// eventLISTENER
function BtnUp(){

            if(document.documentElement.scrollTop>windowHeight) btn__up.classList.add("hidden");          
            else btn__up.classList.remove("hidden");
}

function scrollUp(){
    document.documentElement.scrollTop = 0;
}

function underlineStright(){
    this.parentElement.lastElementChild.style.width = "100%";
}
function underlineBack(){
    this.parentElement.lastElementChild.style.width = "0%";
}

function labelUp(){

    if(!this.value) this.nextSibling.style.bottom = "10px";
    else this.nextSibling.style.bottom = "35px";
}
function openItems(){
    page__items.classList.toggle("open");

    
}

function insertCard(){

    if(page__items.classList.contains("open")){ 

        Object.values(tvBox).forEach(item => item.create())
        addListenerForBtn();
        setTimeout(()=>{
            Card.getAllDomElement().forEach(item => item.style.opacity = "1")
        },0)
    }else{
        Card.getAllDomElement().forEach(item => item.style.opacity = "0")
        Object.values(tvBox).forEach(item => item.remove())

      
    }


}

function addListenerForBtn(){
   let btn__order = document.querySelectorAll(".btn__order");
   btn__order.forEach(item => item.addEventListener("click",showModdleWindow))
}




function showModdleWindow(){

    modalWindow.style.display = "flex";

    let nameItem = this.closest(".findImg").querySelector(".name").innerHTML;
    let price = this.closest(".findImg").querySelector(".price").innerHTML;
    let img = this.closest(".findImg").querySelector("img").getAttribute("src");
    let module__name = document.querySelector(".modal__name"); 
    let module__price = document.querySelector(".modal__price");
    let module__img = document.querySelector(".modal__img img");
    let module__btn = modalWindow.querySelector(".sendForm");

    module__name.innerHTML = nameItem;
    module__price.innerHTML = price;
    module__img.src = img;

    background__grey.style.visibility = "visible";



    setTimeout(()=>{
        background__grey.classList.add("show");
        modalWindow.style.top = "0";
        document.body.classList.add("noscroll");
        
       

    },0)

  

    background__grey.addEventListener("click",removeMiddleWindow)
    module__btn.addEventListener("click",sendForm)




async function sendForm(event){
        event.preventDefault();
    
        let name = modalWindow.querySelector(".name");
        let phone = modalWindow.querySelector(".phone");
    

        

        if(!name.value || !phone.value){
            
            if(!name.value){  
                name.style.borderBottom = "2px solid red";
        
                name.addEventListener("focus",function(){
                name.style.borderBottom = "1px solid #19273431";
            })}
             if(!phone.value){
                phone.style.borderBottom = "2px solid red";
        
                phone.addEventListener("focus",function(){
                    phone.style.borderBottom = "1px solid #19273431";
                })
            }
    
            return;
        }
    


        let obj = {
            "name": name.value,
            "phone": phone.value,
            "price": price,
            "nameItem": nameItem
        }

        let a = await sendForm1(obj)
        console.log(a)
         
        

        let input = background__grey.querySelectorAll(`[type="text"]`);
        input.forEach(item => {
        item.value = "";
        let name = modalWindow.querySelector(".name").style.borderBottom = "1px solid #19273431";
        let phone = modalWindow.querySelector(".phone").style.borderBottom = "1px solid #19273431";
        item.nextSibling.style.bottom = "10px";
                                 })
                                 
        let input__name = background__grey.querySelector(".name")                                 
        let input__phone = background__grey.querySelector(".phone")      
        let label = background__grey.querySelectorAll("label")
        label.forEach(item => {
            item.style.bottom = "10px";
            
        })      
        console.log(label)
        input__name.value = "";                     
        input__phone.value = "";                     
        background__grey.style.visibility = "hidden";
        background__grey.classList.remove("show");
        modalWindow.style.top = "-120%";
        document.body.classList.remove("noscroll");

        
    
        modalTHShow(a);
              
    }
}






function removeMiddleWindow(event){

    let target = event.target;

    // console.log(target)

    if(!target.classList.contains("background__grey")&&!target.classList.contains("modal__close")) return;

    
    let input = background__grey.querySelectorAll(`[type="text"]`);
    input.forEach(item => {
        item.value = "";
        let name = modalWindow.querySelector(".name").style.borderBottom = "1px solid #19273431";
        let phone = modalWindow.querySelector(".phone").style.borderBottom = "1px solid #19273431";
        item.nextSibling.style.bottom = "10px";
    })
    
    background__grey.style.visibility = "hidden";
    background__grey.classList.remove("show");
    modalWindow.style.top = "-120%";
    document.body.classList.remove("noscroll");
}


