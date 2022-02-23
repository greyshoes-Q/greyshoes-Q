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
