function AllowDrop(event){
    event.preventDefault();
}
function Drag(event){
    event.dataTransfer.setData("text",event.currentTarget.id);
}
function Drop(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    event.currentTarget.appendChild(document.getElementById(data));
    // alert(data)
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
        alert("HAVE FUN ~");
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
