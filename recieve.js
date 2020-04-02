function add(){
   var data= document.getElementById("email").value
   var pas= document.getElementById("pass").value
    console.log(data)
    console.log(pas)
    var specific= "hsyed2633@gmail.com"
var specific2= "32271147"
if(data===specific&&pas===specific2){
    alert("yes you are correct")
} else {
    alert("your data is incorrect")
}
}
function cursor(){
    document.getElementById("img").style.height="300px"
    document.getElementById("img").style.width="300px"
}
function mouse(){
    document.getElementById("img").style.height="150px"
    document.getElementById("img").style.width="150px"
}