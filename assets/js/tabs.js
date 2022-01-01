let tabs=document.querySelector(".tabs");
let tabHeader=tabs.querySelector(".tab-header");
let tabBody=tabs.querySelector(".tab-body");
let tabHeaderNodes=tabs.querySelectorAll(".tab-header > div")
let tabBodyNodes=tabs.querySelectorAll(".tab-body >div")


for (let i = 0; i < tabHeaderNodes.length; i++) {
    tabHeaderNodes[i].addEventListener("click",function(){
        tabHeader.querySelector(".active").classList.remove("active");
        tabHeaderNodes[i].classList.add("active");
        tabBody.querySelector(".active").classList.remove("active");
        tabBodyNodes[i].classList.add("active");
    })   
}
tabHeader.onclick=((Select)=>{
    if(Select.target.classList.contains("item")){
        tabHeader.querySelector(".active").classList.remove("active");
        Select.target.classList.add("active");
    }
    })
 
    let tabs2=document.querySelector(".tabs2");
let tabHeader2=tabs2.querySelector(".tab-header2");
let tabBody2=tabs2.querySelector(".tab-body2");
let tabHeaderNodes2=tabs2.querySelectorAll(".tab-header2 > div")
let tabBodyNodes2=tabs2.querySelectorAll(".tab-body2 >div")
22

for (let i = 0; i < tabHeaderNodes2.length; i++) {
    tabHeaderNodes2[i].addEventListener("click",function(){
        tabHeader2.querySelector(".active").classList.remove("active");
        tabHeaderNodes2[i].classList.add("active");
        tabBody2.querySelector(".active").classList.remove("active");
        tabBodyNodes2[i].classList.add("active");
    })   
}
tabHeader2.onclick=((Select)=>{
    if(Select.target.classList.contains("item")){
        tabHeader2.querySelector(".active").classList.remove("active");
        Select.target.classList.add("active");
    }
    })


let tabs3=document.querySelector(".tabs3");
let tabHeader3=tabs3.querySelector(".tab-header3");
let tabBody3=tabs3.querySelector(".tab-body3");
let tabHeaderNodes3=tabs3.querySelectorAll(".tab-header3 > div")
let tabBodyNodes3=tabs3.querySelectorAll(".tab-body3 >div")


for (let i = 0; i < tabHeaderNodes3.length; i++) {
    tabHeaderNodes3[i].addEventListener("click",function(){
        tabHeader3.querySelector(".active").classList.remove("active");
        tabHeaderNodes3[i].classList.add("active");
        tabBody3.querySelector(".active").classList.remove("active");
        tabBodyNodes3[i].classList.add("active");
    })   
}
tabHeader.onclick=((Select)=>{
    if(Select.target.classList.contains("item")){
        tabHeader.querySelector(".active").classList.remove("active");
        Select.target.classList.add("active");
    }
    })


    let tabs4=document.querySelector(".tabs4");
    let tabHeader4=tabs4.querySelector(".tab-header4");
    let tabBody4=tabs4.querySelector(".tab-body4");
    let tabHeaderNodes4=tabs4.querySelectorAll(".tab-header4 > div")
    let tabBodyNodes4=tabs4.querySelectorAll(".tab-body4 >div")
    
    
    for (let i = 0; i < tabHeaderNodes4.length; i++) {
        tabHeaderNodes4[i].addEventListener("click",function(){
            tabHeader4.querySelector(".active").classList.remove("active");
            tabHeaderNodes4[i].classList.add("active");
            tabBody4.querySelector(".active").classList.remove("active");
            tabBodyNodes4[i].classList.add("active");
        })   
    }
    tabHeader.onclick=((Select)=>{
        if(Select.target.classList.contains("item")){
            tabHeader.querySelector(".active").classList.remove("active");
            Select.target.classList.add("active");
        }
        })



        const cartCounter=document.querySelector(".cart__counter")
const cartDOM=document.querySelector(".cart__items")
const addToCart=document.querySelectorAll(".addToCart")
const totalCounter=document.querySelector(".total__counter")
const totalCost=document.querySelector(".total__cost")
const checkOutBtn=document.querySelector(".check_out_btn")

let cartItems= (JSON.parse(localStorage.getItem("cart__items")) || []);

document.addEventListener("DOMContentLoaded",loadData)

checkOutBtn.addEventListener("click",()=>{
    if(confirm("Are you sure to clear the cart?")){
        clearCartItems();
    }
  

})



cartCounter.addEventListener("click",()=>{
    cartDOM.classList.toggle("active");
})
addToCart.forEach(btn=>{
    btn.addEventListener("click",function(){
        let parentElement=btn.parentElement;
        const product={
            Id : parentElement.parentElement.parentElement.querySelector("#product__id").value,
            model : parentElement.children[0].innerText,
            image : parentElement.previousElementSibling.children[0].src,
             price : parentElement.children[1].innerText.replace("$",""),
             quantity:1,
        }
        console.log(product)


   let isInCart=cartItems.filter(item=>item.Id===product.Id).length>0;
   if(!isInCart){
       addItemToTheDOM(product)
   }else{
       alert("product already in the cart")
       return;
   }

   const cartDOMItems=document.querySelectorAll(".cart__item")
   cartDOMItems.forEach(individualItem =>{
       if(individualItem.querySelector("#product__id").value === product.Id){
           increaseItem(individualItem,product)
           decreaseItem(individualItem,product)
         removeItem(individualItem,product)
       }
   })






   cartItems.push(product)
   calculateTotal();
   saveLocalStorage();
 
   
    })
})
function saveLocalStorage(){
    localStorage.setItem("cart__items",JSON.stringify(cartItems))
}

function addItemToTheDOM(product){
    cartDOM.insertAdjacentHTML("afterbegin", `
    <div class="cart__item">
    <input type="hidden" name="" id="product__id" value="${product.Id}">
    <img src="${product.image}" alt="" id="product__"> 
    <h4 class="product__name">${product.model}</h4>
    <a  class="btn__small" action="decrease">&minus;</a>
<h4 class="product__quantity">
   ${product.quantity}
</h4>
<a  class="btn__small"action="increase" >&plus;</a>
<span class="product__price">${product.price}</span>
<a   class="btn__small btn__remove" action="remove">&times;</a>

   
 `)
}

function  calculateTotal(){
    let total=0;
    cartItems.forEach(item=>{
        total+=item.quantity*item.price;
    });
    totalCost.innerText=total;
    totalCounter.innerText=cartItems.length;

}
function increaseItem(individualItem,product){
    individualItem.querySelector("[action='increase']").addEventListener("click",()=>{
        cartItems.forEach(cartItem=>{
            if(cartItem.Id===product.Id){
                individualItem.querySelector(".product__quantity").innerText=++cartItem.quantity;
                calculateTotal();
                saveLocalStorage()
            }
        })
    })

}
function decreaseItem(individualItem,product){
    individualItem.querySelector("[action='decrease']").addEventListener("click",()=>{
        cartItems.forEach(cartItem=>{
            if(cartItem.Id===product.Id){
                if(cartItem.quantity>1){
                    individualItem.querySelector(".product__quantity").innerText=--cartItem.quantity;
                }
                else{
                    cartItems=cartItems.filter(newElements=>newElements.Id!==product.Id);
                    individualItem.remove()
                }
              
                calculateTotal();
                saveLocalStorage()
               
            }
        })
    })

}

function removeItem(individualItem,product){
    individualItem.querySelector("[action='remove']").addEventListener("click",()=>{
        cartItems.forEach(cartItem=>{
            if(cartItem.Id===product.Id){

                    cartItems=cartItems.filter(newElements=>newElements.Id!==product.Id);
                    individualItem.remove()
                calculateTotal();
            }
        })
    })
}

function loadData(){
 if(cartItems.length>0){
    cartItems.forEach(product=>{
        addItemToTheDOM(product);

        const cartDOMItems=document.querySelectorAll(".cart__item")
   cartDOMItems.forEach(individualItem =>{
       if(individualItem.querySelector("#product__id").value === product.Id){
           increaseItem(individualItem,product)
           decreaseItem(individualItem,product)
         removeItem(individualItem,product)
       }
   });
    });
    calculateTotal()
    saveLocalStorage()
 }
}

function clearCartItems(){
    localStorage.clear();
    cartItems=[];
    document.querySelectorAll(".cart__items").forEach(item=>{
        item.querySelectorAll(".cart__item").forEach(node=>{
            node.remove();
        })
    })
    calculateTotal()
}
