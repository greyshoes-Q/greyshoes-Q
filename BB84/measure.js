function measure(mima1,mima2,mima3){
    var circuit = [1,0]
    if(mima1 == 1){
        circuit = [0,1]
    }
    if(mima2 == 1){
        var a = circuit[0]*1/(2**0.5)+circuit[1]*1/(2**0.5)
        var b = circuit[0]*1/(2**0.5)+circuit[1]*(-1)/(2**0.5)
        circuit[0]=a
        circuit[1]=b
    }
    if(mima3 == 1){
        var c = circuit[0]*1/(2**0.5)+circuit[1]*1/(2**0.5)
        var d = circuit[0]*1/(2**0.5)+circuit[1]*(-1)/(2**0.5)
        circuit[0]=c
        circuit[1]=d
    }
    alert(circuit+"密碼："+mima1+mima2+mima3)
    jieguo()
    return circuit
}

function jieguo(){
    var innerxunxichuan= document.getElementById("inner-xunxichuan")
    if(circuit==1,0){
        alert("測量結果爲：|0⟩")
        innerxunxichuan.innerHTML=innerxunxichuan.innerHTML+`
        <p id="B5"><私訊Alice➡Bob> 我的第二位密碼為${mima2}</p>
        `
    }
    else if(circuit==0,1){
        alert("測量結果爲：|1⟩")
        innerxunxichuan.innerHTML=innerxunxichuan.innerHTML+`
        <p id="B5"><私訊Alice➡Bob> 我的第二位密碼為${mima2}</p>
        `
    }
    else if(circuit==1/(2**0.5),1/(2**0.5)){
        alert("測量結果爲：|+⟩")
        innerxunxichuan.innerHTML=innerxunxichuan.innerHTML+`
        <p id="B5"><私訊Alice➡Bob> 我的第二位密碼為${mima2}</p>
        `
    }
    else if(circuit==1/(2**0.5),(-1)/(2**0.5)){
        alert("測量結果爲：|-⟩")
        innerxunxichuan.innerHTML=innerxunxichuan.innerHTML+`
        <p id="B5"><私訊Alice➡Bob> 我的第二位密碼為${mima2}</p>
        `
    }
    else{
        alert("ohhh搞錯了")
    }
}