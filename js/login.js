let email=document.querySelector("#email")
let pass=document.querySelector("#pwd")
let getEmail=localStorage.getItem("email")
let getPass=localStorage.getItem("pass")

let signBtn=document.querySelector("#sign-in")

signBtn.addEventListener("click",function(e){
e.preventDefault()
if(email.value===""||pass.value===""){
    alert("Please Fill all the fields")
}
else{
    if(getEmail.trim()===email.value && getPass.trim()===pass.value){
        setTimeout(()=>{
            window.location="index.html"
        },1500)
    }
    else{
    alert("Wrong password or Email ")

    }
}
})