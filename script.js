let hr=document.getElementById('hour');
let mm=document.getElementById('min');
let sec=document.getElementById('sec');  

function Clock(){ 
let date = new Date();
let h=date.getHours(); 
let m=date.getMinutes(); 
let s=date.getSeconds(); 
let HRotation=30*h + m/2; 
let MRotation= 6*m; 
let sRotation=6*s; 

hr.style.transform=`rotate(${HRotation}deg)`;
mm.style.transform=`rotate(${MRotation}deg)`;
sec.style.transform=`rotate(${sRotation}deg)`;
} 

setInterval(Clock,1000);