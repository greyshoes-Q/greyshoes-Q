var nam = document.getElementById("nam");
var message = document.getElementById("message");
var list = document.getElementById("list");
var btn = document.getElementById("btn")




var Today = new Date();
var yy=Today.getFullYear();
var mm=Today.getMonth()+1;
var dd=Today.getDate();

var msg_num=1

function getRandom(x){
    return Math.floor(Math.random()*x)+1;
};

var logo=document.getElementById("logo")
logo.addEventListener("click", function(){
    alert("更多功能將於之後推出")
})


btn.addEventListener("click", function() {
    
    if(message.value=='' || message.value==undefined || message.value==null){
        alert("留言内容不能爲空~");
        return false;
    }

    if(nam.value=='' || nam.value==undefined || nam.value==null){
        nam.value="匿名使用者"
    } 

    var n=getRandom(5)

    if (n==1){
        var Today = new Date();
        var yy=Today.getFullYear();
        var mm=Today.getMonth()+1;
        var dd=Today.getDate();
        var h=Today.getHours();
        var m=Today.getMinutes();
        list.innerHTML = list.innerHTML+`    
        <div class="ms" style="position: relative">
    
            <div>
                <img src="../blog/picture/myicon_light.png" width="50px"style="margin-right:10px;; float:left; border: 1px solid #fff; border-radius:8px; position:relative; bottom:8px"/>
                <h3>${nam.value}</h3>
            </div>
                                                
            <p>${message.value}</p>
            <span>${yy+"年"+mm+"月"+dd+"日"+h+":"+m}</span>
            <br/>
                            
            <hr/>
        </div>
        `;
        msg_num++
        nam.value="";
        message.value="";
        Today = new Date();
    }
    
    else if (n==2){
        var Today = new Date();
        var yy=Today.getFullYear();
        var mm=Today.getMonth()+1;
        var dd=Today.getDate();
        var h=Today.getHours();
        var m=Today.getMinutes();
        list.innerHTML = list.innerHTML+`    
        <div class="ms" style="position: relative">
    
            <div>
                <img src="../blog/picture/myicon_zi.png" width="50px"style="margin-right:10px;; float:left; border: 1px solid #fff; border-radius:8px; position:relative; bottom:8px"/>
                <h3>${nam.value}</h3>
            </div>
                                                
            <p>${message.value}</p>
            <span>${yy+"年"+mm+"月"+dd+"日"+h+":"+m}</span>
            <br/>
                            
            <hr/>
        </div>
        `;
        msg_num++
        nam.value="";
        message.value="";
        Today = new Date();
    }

    else if (n==3){
        var Today = new Date();
        var yy=Today.getFullYear();
        var mm=Today.getMonth()+1;
        var dd=Today.getDate();
        var h=Today.getHours();
        var m=Today.getMinutes();
        list.innerHTML = list.innerHTML+`    
        <div class="ms" style="position: relative">
    
            <div>
                <img src="../blog/picture/myicon_G.png" width="50px"style="margin-right:10px;; float:left; border: 1px solid #fff; border-radius:8px; position:relative; bottom:8px"/>
                <h3>${nam.value}</h3>
            </div>
                                                
            <p>${message.value}</p>
            <span>${yy+"年"+mm+"月"+dd+"日"+h+":"+m}</span>
            <br/>
                            
            <hr/>
        </div>
        `;
        msg_num++
        nam.value="";
        message.value="";
        Today = new Date();
    }

    else if (n==4){
        var Today = new Date();
        var yy=Today.getFullYear();
        var mm=Today.getMonth()+1;
        var dd=Today.getDate();
        var h=Today.getHours();
        var m=Today.getMinutes();
        list.innerHTML = list.innerHTML+`    
        <div class="ms" style="position: relative">
    
            <div>
                <img src="../blog/picture/myicon_29.png" width="50px"style="margin-right:10px;; float:left; border: 1px solid #fff; border-radius:8px; position:relative; bottom:8px"/>
                <h3>${nam.value}</h3>
            </div>
                                                
            <p>${message.value}</p>
            <span>${yy+"年"+mm+"月"+dd+"日"+h+":"+m}</span>
            <br/>
                            
            <hr/>
        </div>
        `;
        msg_num++
        nam.value="";
        message.value="";
        Today = new Date();
    }

    else{
        var Today = new Date();
        var yy=Today.getFullYear();
        var mm=Today.getMonth()+1;
        var dd=Today.getDate();
        var h=Today.getHours();
        var m=Today.getMinutes();
        list.innerHTML = list.innerHTML+`    
        <div class="ms" style="position: relative">
    
            <div>
                <img src="../blog/picture/myicon_buluohe.png" width="50px"style="margin-right:10px;; float:left; border: 1px solid #fff; border-radius:8px; position:relative; bottom:8px"/>
                <h3>${nam.value}</h3>
            </div>
                                                
            <p>${message.value}</p>
            <span>${yy+"年"+mm+"月"+dd+"日"+h+":"+m}</span>
            <br/>
                            
            <hr/>
        </div>
        `;
        msg_num++
        nam.value="";
        message.value="";
        Today = new Date();
    }
})


var huifu = document.getElementsByClassName("huifu");
huifu.addEventListener("click", function() {
    document.write("hello")
})


{/* <p style="position: absolute; right:10px; bottom:-10px">📢回覆</p> */}
// style="opacity:0"

// <div class="group" style="position: absolute; bottom: 0px; right: 5px;">
            
// <span><button class="huifu">📢回覆</button></span>

// </div>


// </div>