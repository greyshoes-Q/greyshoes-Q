var content = document.getElementById("content")
var playerAlice = document.getElementById("playerAlice");
playerAlice.addEventListener("mouseout", function(){
    this.src ="picture/palyerA.png";
})
playerAlice.addEventListener("mouseover", function(){
    this.src = "picture/palyerA2.png";
})

var playerBob = document.getElementById("playerBob");
playerBob.addEventListener("mouseout", function(){
    this.src ="picture/palyerB.png";
})
playerBob.addEventListener("mouseover", function(){
    this.src = "picture/palyerB2.png";
})

var playerHack = document.getElementById("playerHack");
playerHack.addEventListener("mouseout", function(){
    this.src ="picture/palyerH.png";
})
playerHack.addEventListener("mouseover", function(){
    this.src = "picture/palyerH2.png";
})


playerAlice.addEventListener("click", function(){
    content.innerHTML=content.innerHTML+`
	<video class="zhuanchang" autoplay muted>
		<source src="./zhuanchang.mp4">
	</video>
	<div class="player">
		<img src="./picture/A.svg" style="float: left;"/>
		<h1 id="Ah1">Alice的視角</h1>
		<p>請輸入完整密碼的前2位數：</p>
		<select id="first" onchange="mima1(this)">
			<option value="xuanzemima" selected disabled><strong>選擇🗝</strong></option>
			<option value="0">0</option>
			<option value="1">1</option>
		</select>
		<select id="second" onchange="mima2(this)">
			<option value="xuanzemima" selected disabled><strong>選擇🗝</strong></option>
			<option value="0">0</option>
			<option value="1">1</option>
		</select>
		<span><button class="primary small" id="queren" onclick="querenmima()">確認 > </button></span>
		<p>目前有可能的完整密碼：</p>
		<div style="font-size: 2rem;">
			<span id="mima000">000</span><span id="mima001">001</span><span id="mima010">010</span><span id="mima100">100</span><br/>
			<span id="mima011">011</span><span id="mima101">101</span><span id="mima110">110</span><span id="mima111">111</span>
		</div>
		<span><button id="answerbtn" class="primary large" style="margin-top: 3%;" onclick="answerbtn()">確認3位數完整密碼答案 > </button></span>
		<div id="bg-xunxichuan">
			<div><img id="alice" src="./picture/alice.png"/></div>
			<div id="text-xunxi"><strong style="color: black; font-size: 2rem;"><u>訊息串</u></strong></div>
			<img id="zhibiao1" src="./picture/zhibiao.png"/>
			<p id="A1"><公告> 請選擇密碼0或1</p>
			<div id="inner-xunxichuan">
			</div>
		</div>
	</div>		
    `
})

playerBob.addEventListener("click", function(){
    content.innerHTML=content.innerHTML+`
    <video class="zhuanchang" autoplay>
    <source src="./zhuanchang.mp4">
    </video>
	<div class="player">
		<img src="./picture/A.svg" style="float: left;"/>
		<h1 id="Ah1">Alice的視角</h1>
		<p>請輸入完整密碼的前2位數：</p>
		<select id="third" onchange="mima3(this)">
			<option value="xuanzemima" selected disabled><strong>選擇🗝</strong></option>
			<option value="0">0</option>
			<option value="1">1</option>
		</select>
		<span><button class="primary small" id="querenB" onclick="querenmimaB()">確認 > </button></span>
		<p>目前有可能的完整密碼：</p>
		<div style="font-size: 2rem;">
			<span id="mima000">000</span><span id="mima001">001</span><span id="mima010">010</span><span id="mima100">100</span><br/>
			<span id="mima011">011</span><span id="mima101">101</span><span id="mima110">110</span><span id="mima111">111</span>
		</div>
		<span><button id="answerbtn" class="primary large" style="margin-top: 3%;" onclick="answerbtn()">確認3位數完整密碼答案 > </button></span>
		<div id="bg-xunxichuan">
			<div><img id="alice" src="./picture/bob.png"/></div>
			<div id="text-xunxi"><strong style="color: black; font-size: 2rem;"><u>訊息串</u></strong></div>
			<img id="zhibiao1" src="./picture/zhibiao.png"/>
			<p id="B1"><公告> 請選擇密碼0或1</p>
			<div id="inner-xunxichuan">
			</div>
		</div>
	</div>		
    `
})

playerHack.addEventListener("click", function(){
    content.innerHTML=content.innerHTML+`
    <video class="zhuanchang" autoplay>
    <source src="./zhuanchang.mp4">
    </video>
    `
})