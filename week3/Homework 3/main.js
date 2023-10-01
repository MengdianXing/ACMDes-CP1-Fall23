let displayDiv = document.getElementById("display-img")
let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let button3 = document.getElementById("button3")
let button4 = document.getElementById("button4")

let changeimg1=function(){
    displayDiv.src = "babymonkey.jpg"
}

let changeimg2=function(){
    displayDiv.src = "blackmonkey.jpg"
}

let changeimg3=function(){
    displayDiv.src = "mirrormonkey.jpg"
}

let changeimg4=function(){
    displayDiv.src = "zhumonkey.jpg"
}

button1.addEventListener("click", changeimg1)
button2.addEventListener("click", changeimg2)
button3.addEventListener("click", changeimg3)
button4.addEventListener("click", changeimg4)

