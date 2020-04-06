function add(){

   var email= document.getElementById("email").value
   var password= document.getElementById("pass").value
    
    firebase.auth().createUserWithEmailAndPassword(email, password).then(res=>{
        window.location.href = "signIn.html"
         
Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been Done',
    showConfirmButton: false,
    timer: 1500
  })
    })

}
// function cursor(){
//     document.getElementById("img").style.height="300px"
//     document.getElementById("img").style.width="300px"
// }
// function mouse(){
//     document.getElementById("img").style.height="150px"
//     document.getElementById("img").style.width="150px"
// }

function signIn(){
    
      
    var email= document.getElementById("email").value
   var password= document.getElementById("password").value

   firebase.auth().signInWithEmailAndPassword(email, password).then(res=>{
        
Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been Done',
    showConfirmButton: false,
    timer: 1500
  })
   }).catch(error=>{
        
Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: error.message,
    footer: '<a href>Why do I have this issue?</a>'
  })
   })
    
}
