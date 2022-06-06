function mima1(element){
    first_value = element.value;
    return first_value
}

function mima2(element){
    second_value = element.value;
    return second_value
}

function mima3(element){
    third_value = element.value;
    return third_value
}

function getRandom(x){
    return Math.floor(Math.random()*x);
};

function querenmima(){
    var mima000 = document.getElementById("mima000")
    var mima001 = document.getElementById("mima001")
    var mima010 = document.getElementById("mima010")
    var mima100 = document.getElementById("mima100")
    var mima011 = document.getElementById("mima011")
    var mima101 = document.getElementById("mima101")
    var mima110 = document.getElementById("mima110")
    var mima111 = document.getElementById("mima111")
    mimaA = first_value+second_value
    alert("你輸入的密碼爲： "+mimaA+"\n（提示：在此過程中無法再次更改密碼）")
    first.disabled="disabled"
    second.disabled="disabled"
    queren.disabled="disabled"
    if(first_value == 0){
        mima100.style.textDecoration = "line-through"
        mima100.style.color = "grey"
        mima110.style.textDecoration = "line-through"
        mima110.style.color = "grey"
        mima101.style.textDecoration = "line-through"
        mima101.style.color = "grey"
        mima111.style.textDecoration = "line-through"
        mima111.style.color = "grey"
    }
    else{
        mima000.style.textDecoration = "line-through"
        mima000.style.color = "grey"
        mima010.style.textDecoration = "line-through"
        mima010.style.color = "grey"
        mima001.style.textDecoration = "line-through"
        mima001.style.color = "grey"
        mima011.style.textDecoration = "line-through"
        mima011.style.color = "grey"
    }
    if(second_value == 0){
        mima010.style.textDecoration = "line-through"
        mima010.style.color = "grey"
        mima011.style.textDecoration = "line-through"
        mima011.style.color = "grey"
        mima110.style.textDecoration = "line-through"
        mima110.style.color = "grey"
        mima111.style.textDecoration = "line-through"
        mima111.style.color = "grey"
    }
    else{
        mima000.style.textDecoration = "line-through"
        mima000.style.color = "grey"
        mima001.style.textDecoration = "line-through"
        mima001.style.color = "grey"
        mima100.style.textDecoration = "line-through"
        mima100.style.color = "grey"
        mima101.style.textDecoration = "line-through"
        mima101.style.color = "grey"
    }
    var xunxichuan= document.getElementById("bg-xunxichuan")
    var zhibiao1 = document.getElementById("zhibiao1")
    zhibiao1.style.display="none"
    xunxichuan.innerHTML=xunxichuan.innerHTML+`
    <p id="A2"><公告> Alice已輸入密碼</p>
    <p id="A3"><公告> Bob（電腦）已隨機產生密碼</p>
    <p id="A4"><公告> Bob（電腦）對密碼電路進行測量</p>
    <p id="A5"><私訊Alice➡Bob> 我的第二位密碼為${second_value}</p>
    <button id="checkv" class="primary small" onclick="checkv(this)">按這裡確認✅</button>
    <img id="zhibiao2" src="./picture/zhibiao.png"/>`
    return mimaA
}

function querenmimaB(){
    var mima000 = document.getElementById("mima000")
    var mima001 = document.getElementById("mima001")
    var mima010 = document.getElementById("mima010")
    var mima100 = document.getElementById("mima100")
    var mima011 = document.getElementById("mima011")
    var mima101 = document.getElementById("mima101")
    var mima110 = document.getElementById("mima110")
    var mima111 = document.getElementById("mima111")
    mimaB = third_value
    alert("你輸入的密碼爲： "+mimaB+"\n（提示：在此過程中無法再次更改密碼）")
    third.disabled="disabled"
    querenB.disabled="disabled"
    if(third_value == 0){
        mima101.style.textDecoration = "line-through"
        mima101.style.color = "grey"
        mima011.style.textDecoration = "line-through"
        mima011.style.color = "grey"
        mima001.style.textDecoration = "line-through"
        mima001.style.color = "grey"
        mima111.style.textDecoration = "line-through"
        mima111.style.color = "grey"
    }
    else{
        mima000.style.textDecoration = "line-through"
        mima000.style.color = "grey"
        mima010.style.textDecoration = "line-through"
        mima010.style.color = "grey"
        mima100.style.textDecoration = "line-through"
        mima100.style.color = "grey"
        mima110.style.textDecoration = "line-through"
        mima110.style.color = "grey"
    }
    var xunxichuan= document.getElementById("bg-xunxichuan")
    var zhibiao1 = document.getElementById("zhibiao1")
    var first_value = getRandom(2)
    var second_value = getRandom(2)
    zhibiao1.style.display="none"
    xunxichuan.innerHTML=xunxichuan.innerHTML+`
    <p id="B2"><公告> Alice（電腦）已隨機產生密碼</p>
    <p id="B3"><公告> Bob已輸入密碼</p>
    <p id="B4"><公告> Bob對密碼電路進行測量</p>
    <button id="measurev" class="primary small" onclick="measure(${first_value}, ${second_value}, ${third_value})">查看測量結果🔜</button>
    <img id="zhibiao2B" src="./picture/zhibiao.png"/>
    `
    mima = first_value+""+second_value+""+third_value
    return mima
}

function checkv(element){
    var mimaB = getRandom(2)
    var innerxunxichuan= document.getElementById("inner-xunxichuan")
    var zhibiao2 = document.getElementById("zhibiao2")
    // alert(mimaB)
    if (second_value == mimaB){
        innerxunxichuan.innerHTML=innerxunxichuan.innerHTML+`<p id="A6yes"><私訊Bob➡Alice> 輸入的密碼與你相同</p>`
        if(second_value == 1){
            mima010.style.textDecoration = "line-through"
            mima010.style.color = "grey"
            mima110.style.textDecoration = "line-through"
            mima110.style.color = "grey"
            mima100.style.textDecoration = "line-through"
            mima100.style.color = "grey"
            mima000.style.textDecoration = "line-through"
            mima000.style.color = "grey"
        }
        else{
            mima011.style.textDecoration = "line-through"
            mima011.style.color = "grey"
            mima111.style.textDecoration = "line-through"
            mima111.style.color = "grey"
            mima101.style.textDecoration = "line-through"
            mima101.style.color = "grey"
            mima001.style.textDecoration = "line-through"
            mima001.style.color = "grey"
        }
    }
    else{
        innerxunxichuan.innerHTML=innerxunxichuan.innerHTML+`<p id="A6yes"><私訊Bob➡Alice> 輸入的密碼與你不相同</p>`    
        if(second_value == 1){
            mima011.style.textDecoration = "line-through"
            mima011.style.color = "grey"
            mima111.style.textDecoration = "line-through"
            mima111.style.color = "grey"
            mima101.style.textDecoration = "line-through"
            mima101.style.color = "grey"
            mima001.style.textDecoration = "line-through"
            mima001.style.color = "grey"
            mima000.style.textDecoration = "line-through"
            mima000.style.color = "grey"
            mima100.style.textDecoration = "line-through"
            mima100.style.color = "grey"
        }
        else{
            mima010.style.textDecoration = "line-through"
            mima010.style.color = "grey"
            mima110.style.textDecoration = "line-through"
            mima110.style.color = "grey"
            mima100.style.textDecoration = "line-through"
            mima100.style.color = "grey"
            mima000.style.textDecoration = "line-through"
            mima000.style.color = "grey"
            mima111.style.textDecoration = "line-through"
            mima111.style.color = "grey"
            mima010.style.textDecoration = "line-through"
            mima010.style.color = "grey"

        }
    }
    zhibiao2.style.display="none"
    element.style.display="none"
    element.disabled="disabled"
    innerxunxichuan.innerHTML=innerxunxichuan.innerHTML+`<p id="A7"><公告> Alice與Bob都已成功獲得密碼關鍵</p>` 
    innerxunxichuan.innerHTML=innerxunxichuan.innerHTML+`<p id="Ahr">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -<p/>
                                                        <p id="A8"> < < 已結束請輸入最終密碼答案 > > </p>` 
    mima = mimaA+mimaB
    return mima
}

function answerbtn(){
    
    if(mima==null){
    }
    else{
        var answer = prompt("請輸入正確密碼（提示：3位密碼且為0或1的組合）");    
        if(answer==mima){
            alert("🎊🎊🎊🎉🎉恭喜（之後會放動畫）")
        }
        else{
            alert("qq失敗了（之後會放動畫）")
        }
    }
}
