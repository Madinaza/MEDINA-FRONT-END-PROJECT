var mongoDb__Bar = document.querySelector(".mongoDb__Bar")
var expressJs__Bar = document.querySelector(".expressJs__Bar")
var reactNative__Bar = document.querySelector(".reactNative__Bar")



var percent = document.querySelector(".percent")
var expressnumber = document.querySelector(".expressnumber")
var reactnumber = document.querySelector(".reactnumber")



console.log(percent.dataset.mongopercent)
var countmon = 0
var countex = 0
var countre = 0
var countnod = 0
function mongodbskill(){
    countmon++
    mongoDb__Bar.style.width = `${countmon}%`
    percent.innerHTML = `${countmon}%`
    if(countmon == mongoDb__Bar.dataset.parcent){
        clearInterval(stopmongodb)
    }
}

var stopmongodb = setInterval(function(){
    mongodbskill()
}, 30);
// end mongodb

function expressskill(){
    countex++
    expressJs__Bar.style.width = `${countex}%`
    expressnumber.innerHTML = `${countex}%`
    if(countex == expressJs__Bar.dataset.parcent){
        clearInterval(stopexpress)
    }
}

var stopexpress = setInterval(function(){
    expressskill()
}, 30);
// end express

function reactskill(){
    countre++
    reactNative__Bar.style.width = `${countre}%`
    reactnumber.innerHTML = `${countre}%`
    if(countre == reactNative__Bar.dataset.parcent){
        clearInterval(stopreact)
    }
}

var stopreact = setInterval(function(){
    reactskill()
}, 30);




// var mongoDb__Bar2 = document.querySelector(".mongoDb__Bar2")
// var expressJs__Bar2 = document.querySelector(".expressJs__Bar2")
// var reactNative__Bar2 = document.querySelector(".reactNative__Bar2")



// var percent2 = document.querySelector(".percent2")
// var expressnumber2 = document.querySelector(".expressnumber2")
// var reactnumber2 = document.querySelector(".reactnumber2")



// console.log(percent.dataset.mongopercent)
// var countmon = 0
// var countex = 0
// var countre = 0
// var countnod = 0
// function mongodbskill(){
//     countmon++
//     mongoDb__Bar2.style.width = `${countmon}%`
//     percent2.innerHTML = `${countmon}%`
//     if(countmon == mongoDb__Bar2.dataset.parcent2){
//         clearInterval(stopmongodb2)
//     }
// }

// var stopmongodb2 = setInterval(function(){
//     mongodbskill()
// }, 30);
// // end mongodb

// function expressskill(){
//     countex++
//     expressJs__Bar2.style.width = `${countex}%`
//     expressnumber2.innerHTML = `${countex}%`
//     if(countex == expressJs__Bar2.dataset.parcent2){
//         clearInterval(stopexpress2)
//     }
// }

// var stopexpress2 = setInterval(function(){
//     expressskill()
// }, 30);
// // end express

// function reactskill(){
//     countre++
//     reactNative__Bar2.style.width = `${countre}%`
//     reactnumber2.innerHTML = `${countre}%`
//     if(countre == reactNative__Bar2.dataset.parcent2){
//         clearInterval(stopreact2)
//     }
// }

// var stopreact2 = setInterval(function(){
//     reactskill()
// }, 30);



