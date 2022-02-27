var content = document.getElementById("content")

var playerAlice = document.getElementById("playerAlice");
playerAlice.addEventListener("mouseout", function(){
    this.src ="picture/palyerA.png";
})
playerAlice.addEventListener("mouseover", function(){
    this.src = "picture/palyerA2.png";
})
playerAlice.addEventListener("click", function(){
    content.innerHTML=content.innerHTML+`
    <video class="zhuanchang" autoplay>
    <source src="./zhuanchang.mp4">
    </video>
    `
})

var playerBob = document.getElementById("playerBob");
playerBob.addEventListener("mouseout", function(){
    this.src ="picture/palyerB.png";
})
playerBob.addEventListener("mouseover", function(){
    this.src = "picture/palyerB2.png";
})
playerBob.addEventListener("click", function(){
    content.innerHTML=content.innerHTML+`
    <video class="zhuanchang" autoplay>
    <source src="./zhuanchang.mp4">
    </video>
    `
})

var playerHack = document.getElementById("playerHack");
playerHack.addEventListener("mouseout", function(){
    this.src ="picture/palyerH.png";
})
playerHack.addEventListener("mouseover", function(){
    this.src = "picture/palyerH2.png";
})
playerHack.addEventListener("click", function(){
    content.innerHTML=content.innerHTML+`
    <video class="zhuanchang" autoplay>
    <source src="./zhuanchang.mp4">
    </video>
    `
})

