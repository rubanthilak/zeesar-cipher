const e=document.querySelector("#app");let t="",n=[];["z","e","e","s","a","r"," ","c","i","p","h","e","r"].forEach((e=>{t+=`<p class='text'>${e}</p>`})),e.innerHTML=t;function s(t){setTimeout((()=>{e.innerHTML=`<p id="hello">${t}</p>`,setTimeout((()=>{var e;null==(e=document.getElementById("hello"))||e.classList.add("anime")}),1e3),setTimeout((()=>{var e;null==(e=document.getElementById("hello"))||e.classList.add("move-25")}),2e3),setTimeout((()=>{e.innerHTML+="<p class='input'><span id='enter-text'></span><span class=\"cursor\">_</span></p>"}),3e3)}),3e3)}let o=e.querySelectorAll("p");o.forEach(((e,t)=>{setTimeout((()=>{e.classList.add("anime")}),100*t)})),setTimeout((()=>{o.forEach(((e,t)=>{setTimeout((()=>{e.classList.remove("anime")}),100*t)}))}),1500),s("Enter message 📜"),document.addEventListener("keypress",(function(e){var t=e.which||e.keyCode;document.querySelector("#enter-text").innerHTML+=String.fromCharCode(t)})),document.addEventListener("keydown",(function(t){let o=document.querySelector("#enter-text").innerHTML;if((8===t.keyCode||46===t.keyCode)&&o.length>0&&(document.querySelector("#enter-text").innerHTML=o.substr(0,o.length-1)),13===t.keyCode&&o.length>0){n.push(document.querySelector("#enter-text").innerHTML),console.log(n),e.querySelectorAll("p").forEach(((e,t)=>{setTimeout((()=>{e.classList.add("move-100")}),1e3*t)})),n.length<2&&setTimeout((()=>{s("Enter Key 🔐")}),100)}2===n.length&&setTimeout((()=>{let t=((e,t)=>{const n="ABCDEFGHIJKLMNOPQRSTUVWXYZ";let s="";t>26&&(t%=26);let o=0;for(;o<e.length;){if(-1!==n.indexOf(e[o])){const r=n.indexOf(e[o].toUpperCase());s+=n[r+t]?n[r+t]:n[r+t-26]}else s+=e[o];o++}return s})(n[0].toUpperCase(),parseInt(n[1]));e.innerHTML=`<p class="text anime">Encrypted Message = </p><p class="text anime">${t}</p>`}),100)}));
