// let controls=document.querySelector(".controls-container")
// controls.forEach(control=>{
//     control.addEventListener("click",()=>{
//         let idx=[...controls].findIndex(c=>c===control);
//         activeSlide=idx;
//         changeSlides();
//         clearInterval(int);
//         int-setInterval(changeSlides,4000)
//     })
// })












$(document).ready(function(){
    $('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});
   
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:true,
        autoplayTimeout: 2500,
    });



    $(window).scroll(function(){
        if(window.scrollY >= 350){
            $(".nav2").slideDown();
            $(".nav2").addClass("sticky-top");
        }else if(window.scrollY < 350)
        {
            $(".nav2").slideUp("fast");
        }
        if(window.scrollY<=100){
            $(".nav2").addClass("d-none");
        }else{
            $(".nav2").removeClass("d-none")
        }
    });




}) 


const filteritem=document.querySelector(".items");
const filterimg=document.querySelectorAll(".image");

window.onload=()=>{
    filteritem.onclick=(selecteditem)=>{
        if(selecteditem.target.classList.contains("item")){
            filteritem.querySelector(".active").classList.remove("active");
            selecteditem.target.classList.add("active");

            let filterId=selecteditem.target.getAttribute("data-id");
            
            filterimg.forEach((image)=> {
                    let filterImages = image.getAttribute("data-id");
                    if ((filterImages == filterId) || filterId == "ALL") {
                        image.classList.add("show");
                        image.classList.remove("hide");


                    }
                    else {
                        image.classList.add("hide");
                        image.classList.remove("show");

                    }

                });
        }
   
 }
}













let addBasketButtons = document.querySelectorAll(".addToCart");

if (localStorage.getItem("basket") === null) {
  localStorage.setItem("basket", JSON.stringify([]));
}

addBasketButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

   
    let basket = JSON.parse(localStorage.getItem("basket"));
    let price = this.parentElement.children[1].innerText;
    let model = this.parentElement.children[0].innerText;
    let image = this.parentElement.previousElementSibling.children[0].src;
    let Id = this.parentElement.parentElement.parentElement.getAttribute("product-id");
    console.log(basket)
    

  let existedProduct=basket.find((p)=>p.Id==Id)

    if (existedProduct == undefined) {
      let product = {
        Id,
        price,
        model,
        image,
        count: 1,
      };
      basket.push(product);
    } else {
      existedProduct.count++;
    }

    localStorage.setItem("basket", JSON.stringify(basket));
    // productCount();
    // totalPrice();
  });
});

// productCount();

// function productCount() {
//   let basket = JSON.parse(localStorage.getItem("basket"));
//   let countElement = document.querySelector(".countProduct");
//   let count = 0;

//   basket.forEach((p) => {
//     count += p.count;
//   });
//   countElement.innerText = count;
// }
// totalPrice();

// function totalPrice() {
//   let basket = JSON.parse(localStorage.getItem("basket"));
//   let priceElement = document.querySelector(".totalPrice");
 

//   let total = basket.reduce((total, p) => {
//     return (total += p.price * p.count);
//   }, 0);
//   priceElement.innerText = total;
// }

let shopButton = document.querySelector(".shopListButon ");


// Toggle();
// function Toggle() {
//     shopListButon.addEventListener("click", function () {
//     cartList.classList.toggle("d-none");
//   });
// }
