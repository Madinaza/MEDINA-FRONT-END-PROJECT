$(document).ready(function(){
$(".aCardHeader").click(function(){
   

    if($(this).next(".card-body").hasClass("active")){
        $(this).next(".aCardBody").removeClass("active").slideUp()
        $(this).children("span").removeClass("fa-minus").addClass("fa-plus")
        $(this).children(".aCardHeader").css( "background-color", 'transparent')
            
    }
    else{
       
        
        $(".aCard .aCardBody").slideUp()
        $(".aCard .aCardHeader span").removeClass("fa-minus").addClass("fa-plus");
        $(this).next(".aCardBody").addClass("active").slideDown()
        $(this).children("span").removeClass("fa-plus").addClass("fa-minus")
        
    

    }
})

$(".aCardHeader").hover(function(){
    if($(this).next(".card-body").hasClass("active")){
        $(this).children("span").removeClass("fa-minus").addClass("fa-plus")
        $(this).children(".aCardHeader").css( "background-color", 'transparent')
            
    }
    else{
        $(".aCard .aCardHeader span").removeClass("fa-minus").addClass("fa-plus");
        $(this).children("span").removeClass("fa-plus").addClass("fa-minus")
        
    }
})

})

let acHeader=document.querySelector(".aCardHeader")

acHeader.onclick=((Select)=>{
    if(Select.target.classList.contains("item")){
        acHeader.querySelector(".active").classList.remove("active");
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
                saveLocalStorage()

                
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





