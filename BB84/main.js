var playerAlice = document.getElementById("playerAlice");
playerAlice.addEventListener("mouseout", function(){
    this.src ="picture/palyerA.png";
})
playerAlice.addEventListener("mouseover", function(){
    this.src = "picture/palyerA2.png";
})
playerAlice.addEventListener("click", function(){
    alert("aa")
})

var playerBob = document.getElementById("playerBob");
playerBob.addEventListener("mouseout", function(){
    this.src ="picture/palyerB.png";
})
playerBob.addEventListener("mouseover", function(){
    this.src = "picture/palyerB2.png";
})
playerBob.addEventListener("click", function(){
    alert("aa")
})

var playerHack = document.getElementById("playerHack");
playerHack.addEventListener("mouseout", function(){
    this.src ="picture/palyerH.png";
})
playerHack.addEventListener("mouseover", function(){
    this.src = "picture/palyerH2.png";
})
playerHack.addEventListener("click", function(){
    alert("aa")
})