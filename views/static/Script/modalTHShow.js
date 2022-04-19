export function modalTHShow(a){
    let modalTH;
    modalTH = document.querySelector(".modalTH");
   
    if(!a){
        modalTH.innerHTML = "Щось пішло не так..."
    }

    

    modalTH.style.display = "flex";


    setTimeout(()=>{
        modalTH.style.display = "none";

    },3000)
}
