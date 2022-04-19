
const items__body = document.querySelector(".items__body");

export class Card{

    constructor({img,nameItem,priceItem,ram,rom,processor,os,inner = document.body}){
        this.name = nameItem,
        this.price = priceItem;
        this.ram = ram;
        this.rom = rom;
        this.processor = processor;
        this.os = os
        this.img = img;
        this.inner = inner;

    }

    static getAllDomElement(){
        return document.querySelectorAll(".items__column");

    }

    create(){
        let items__column = document.createElement("div");
        items__column.classList.add("items__column");
        this.element = items__column;

        let textHtml = `
        <div class="items__item findImg">
            <div class="items__image image"> 
                <img src="Image/Card/${this.img}.png" alt=""></div>
                <div class="items__text"> 
                <p class="nameItem name">${this.name}</p><p class="priceItem price">${this.price} грн.</p></div>
                <div class="items__characteristics characteristics">
                    <div class="characteristics__body">
                        <ul class="characteristics__list"> 
                            <li class="characteristics__str">
                                <span>Оперативна пам'ять</span>
                                <span>${this.ram} ГБ</span></li>
                            <li class="characteristics__str"> 
                                <span>Внутрішня пам'ять</span>
                                <span>${this.rom} ГБ</span></li>
                            <li class="characteristics__str"> 
                                <span>Процесор </span>
                                <span>${this.processor}</span></li>
                            <li class="characteristics__str"> 
                                <span>Операційна система</span>
                                <span>Android ${this.os}</span></li>
                        </ul></div></div>
                        <div class="items__order btn__order">Замовити</div></div>
        
        `
        items__column.insertAdjacentHTML("afterbegin",textHtml);
        this.itemsColumn = items__column;
        // items__column.querySelector(".btn__order").addEventListener("click",function(event){
        
        //     setTimeout(()=>{
        //         const modal = document.querySelector(".modal");       
                
        //         const btnSendForm = modal.querySelector(".sendForm");

        //         btnSendForm.addEventListener("click",function(event){
        //             event.preventDefault();

        //             const price = modal.querySelector(".modal__price").innerHTML;
        //             const nameItem = modal.querySelector(".modal__name").innerHTML;
        //             const name = modal.querySelector(".name").value;
        //             const phone = modal.querySelector(".phone").value;


        //             console.log(price)
        //             console.log(nameItem)
        //             console.log(name)
        //             console.log(phone)

        //         })
                
        //     },0)
        // })
        this.inner.append(items__column)



    }

    remove(){
        if(this.element){
            this.element.remove();
        }
    }

  
  
}


let x96max = new Card({
    img: "x96max",
    nameItem:"X96 max plus",
    processor:"Amlogic S905X3",
    priceItem: 1600,
    ram: 4,
    rom: 32,
    os: "9.0",  
    inner: items__body
})

let x96miniPlus = new Card({
    img: "x96miniPlus",
    nameItem:"X96 mini plus",
    processor:"Amlogic S905W4",
    priceItem: 1250,
    ram: 2,
    rom: 16,
    os: "9.0",  
    inner: items__body
})

let x96mini = new Card({
    img: "x96mini",
    nameItem:"X96 mini ",
    processor:"Amlogic S905W",
    priceItem: 1100,
    ram: 2,
    rom: 16,
    os: "7.1    ",  
    inner: items__body
})

let x96mate = new Card({
    img: "x96mate",
    nameItem:"X96 mate",
    processor:"Allwinner H616",
    priceItem: 1350,
    ram: 4,
    rom: 32,
    os: "10",  
    inner: items__body
})


let sweetTv = new Card({
    img: "sweetTv",
    nameItem:"Sweet Tv",
    processor:"Allwinner H313",
    priceItem: 700,
    ram: 1,
    rom: 8,
    os: "10",  
    inner: items__body
})

export const tvBox = {
    x96mate,
    x96max,
    x96mini,
    x96miniPlus,
    sweetTv
}