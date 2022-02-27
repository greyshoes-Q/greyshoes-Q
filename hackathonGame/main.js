var next = document.getElementById("next")
var num = 0
var button = document.getElementById("button")
var anniu = document.getElementById("anniu")
var fourfour = document.getElementById("fourfour")
var crow = document.getElementById("row")
var ccolumn = document.getElementById("column")
var csquare = document.getElementById("square")

var list1 = []
var list2 = []
var list3 = []
var list4 = []
var list5 = []
var list6 = []
var list7 = []
var list8 = []
var list9 = []
var list10 = []
var list11 = []
var list12 = []
var list13 = []
var list14 = []
var list15 = []
var list16 = []

var box1 = document.getElementById("box1")
var box2 = document.getElementById("box2")
var box3 = document.getElementById("box3")
var box4 = document.getElementById("box4")
var box5 = document.getElementById("box5")
var box6 = document.getElementById("box6")
var box7 = document.getElementById("box7")
var box8 = document.getElementById("box8")
var box9 = document.getElementById("box9")
var box10 = document.getElementById("box10")
var box11 = document.getElementById("box11")
var box12 = document.getElementById("box12")
var box13 = document.getElementById("box13")
var box14 = document.getElementById("box14")
var box15 = document.getElementById("box15")
var box16 = document.getElementById("box16")

function AllowDrop(event){
    event.preventDefault();
}
function Drag(event){
    event.dataTransfer.setData("text",event.currentTarget.id);
}
// Drop function
function Drop(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
}
function Drop1(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    list1=["1-A",data]
}
function Drop2(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    list2=["1-B",data]
}
function Drop3(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    list3=["1-C",data]
}
function Drop4(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    list4=["1-D",data]
}
function Drop5(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    list5=["2-A",data]
}
function Drop6(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    list6=["2-B",data]
}
function Drop7(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    list7=["2-C",data]
}
function Drop8(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    list8=["2-D",data]
}
function Drop9(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    list9=["3-A",data]
}
function Drop10(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    list10=["3-B",data]
}
function Drop11(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    list11=["3-C",data]
}
function Drop12(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    list12=["3-D",data]
}
function Drop13(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    list13=["4-A",data]
}
function Drop14(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    list14=["4-B",data]
}
function Drop15(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    list15=["4-C",data]
}
function Drop16(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    list16=["4-D",data]
}

crow.addEventListener("change", function(){
    crow_value = this.value;
    alert(crow_value)
    if(crow_value == "1-A"){
        box1.style.backgroundColor = "#CA8EFF"
    }
    else{
        box1.style.backgroundColor = "red"
    }
})

ccolumn.addEventListener("change", function(){
    ccolumn_value = this.value;
})

csquare.addEventListener("change", function(){
    csquare = this.value;
})

next.addEventListener("click", function(){
    
    num = num+1

    if (num >= 4) {
        this.value="you have complete all ✔";
        this.style.width="400px"
        button.disabled="disabled"
        button.style.color="#0E0B16"
        button.style.backgroundColor="#0E0B16"
        alert("\n You have already compelete all questions.\n \n😆😆HAVE FUN ~");
    } 
    else if(num == 1) {
        this.value="next >";
        alert("Question"+num);
        fourfour.innerHTML = `
        <div class="object">
            <div id="Box1" style="background-color: #0E0B16"><img class="timu" src="picture/Identity1.jpg" draggable="false"></div>
	    	<div id="Box2" ondrop="Drop2(event)" ondragover="AllowDrop(event)"></div>
		    <div id="Box3" style="background-color: #0E0B16"><img class="timu" src="picture/Hadamard1.jpg" draggable="false"></div>
    		<div id="Box4" ondrop="Drop4(event)" ondragover="AllowDrop(event)"></div>
	    	<div id="Box5" ondrop="Drop5(event)" ondragover="AllowDrop(event)"></div>
		    <div id="Box6" style="background-color: #0E0B16"><img class="timu" src="picture/PauliX0.jpg" draggable="false"></div>
    		<div id="Box7" ondrop="Drop7(event)" ondragover="AllowDrop(event)"></div>
	    	<div id="Box8" ondrop="Drop8(event)" ondragover="AllowDrop(event)"></div>
		    <div id="Box9" ondrop="Drop9(event)" ondragover="AllowDrop(event)"></div>
    		<div id="Box10" ondrop="Drop10(event)" ondragover="AllowDrop(event)"></div>
	    	<div id="Box11" style="background-color: #0E0B16"><img class="timu" src="picture/PauliX0.jpg" draggable="false"></div>
		    <div id="Box12" style="background-color: #0E0B16"><img class="timu" src="picture/Hadamard1.jpg" draggable="false"></div>
    		<div id="Box13" style="background-color: #0E0B16"><img class="timu" src="picture/PauliZ1.jpg" draggable="false"></div>
	    	<div id="Box14" style="background-color: #0E0B16"><img class="timu" src="picture/PauliX1.jpg" draggable="false"></div>
		    <div id="Box15" ondrop="Drop15(event)" ondragover="AllowDrop(event)"></div>
		    <div id="Box16" ondrop="Drop16(event)" ondragover="AllowDrop(event)"></div>
					
		    <div style="clear:both;"></div>
        </div>
        `
    }
    else if(num == 2){
        this.value="next >";
        alert("Question"+num);
    }
    else if(num == 3){
        this.value="next >";
        alert("Question"+num);
    }

})



// clear.addEventListener("click", function(){
//     this.src ="#";
// })

// function ran(){
//     function wrapper(x){
//         alert(x)
//     }
//     eel.ran()(wrapper)
//     alert(x)
// }
