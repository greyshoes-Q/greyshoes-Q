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

next.addEventListener("click", function(){
    
    num = num+1
    alert(num);

    if (num == 3) {
        this.value="you have complete all questions";
    } 
    else if(num !==3) {
        this.value="next >";
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
