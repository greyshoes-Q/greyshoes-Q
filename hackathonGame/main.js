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
    var list2 = document.getElementById("Box2")
    list2=["1-B",data]
}
function Drop3(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    var list = document.getElementById("Box3")
    list3=["1-C",data]
}
function Drop4(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    var list4 = document.getElementById("Box4")
    list4=["1-D",data]
}
function Drop5(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    var list5 = document.getElementById("Box5")
    list5=["2-A",data]
}
function Drop6(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    var list6 = document.getElementById("Box6")
    list6=["2-B",data]
}
function Drop7(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    var list7 = document.getElementById("Box7")
    list7=["2-C",data]
}
function Drop8(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    var list8 = document.getElementById("Box8")
    list8=["2-D",data]
}
function Drop9(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    var list9 = document.getElementById("Box9")
    list9=["3-A",data]
}
function Drop10(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    var list10 = document.getElementById("Box10")
    list10=["3-B",data]
}
function Drop11(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    var list11 = document.getElementById("Box11")
    list11=["3-C",data]
}
function Drop12(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    var list12 = document.getElementById("Box12")
    list12=["3-D",data]
}
function Drop13(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    var list13 = document.getElementById("Box13")
    list13=["4-A",data]
}
function Drop14(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    var list14 = document.getElementById("Box14")
    list14=["4-B",data]
}
function Drop15(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    var list15 = document.getElementById("Box15")
    list15=["4-C",data]
}
function Drop16(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    var list16 = document.getElementById("Box16")
    list16=["4-D",data]
}


var next = document.getElementById("next")
var num = 0
var button = document.getElementById("button")
var anniu = document.getElementById("anniu")

next.addEventListener("click", function(){
    
    num = num+1

    if (num >= 4) {
        this.value="you have complete ✔";
        this.style.width="400px"
        button.disabled="disabled"
        button.style.color="#0E0B16"
        button.style.backgroundColor="#0E0B16"
        alert("You have already compelete all questions.\n \n😆😆HAVE FUN ~");
    } 
    else if(num <= 3) {
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
