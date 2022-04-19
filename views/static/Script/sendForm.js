import { modalTHShow } from "./modalTHShow.js";
const sendFormCB = document.querySelector(".form-block__form .sendForm");


sendFormCB.addEventListener("click",async function(event){
    event.preventDefault();


    
    let name = document.querySelector(".form-block__form .name");
    let phone = document.querySelector(".form-block__form .phone");

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
        name: name.value,
        phone: phone.value,
        // price: null,
        // itemName: null
    }


    let a = await fetch("/formCB",{
        method: "POST",
        headers:{
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(obj)
        
    })


    modalTHShow(a.ok)

    let label = this.parentElement.parentElement.querySelectorAll("label");
    
    console.log()

    name.value = "";
    phone.value = "";

    label.forEach(item=>{
        item.style.bottom = "10px";
    })
    
})

