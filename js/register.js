let firstName=document.querySelector("#firstName");
let lastName=document.querySelector("#lastName");

let email=document.querySelector("#email");
let pass=document.querySelector("#pwd");


let submit=document.querySelector("#sign-up");
submit.addEventListener("click",function(e){
    e.preventDefault()
    if(firstName.value===""||lastName.value===""||email.value===""||pass.value===""){
        alert("Please Fill all the fields")
    }
    else{
        localStorage.setItem("firstName",firstName.value)

        localStorage.setItem("email",email.value)

        localStorage.setItem("pass",pass.value)
        setTimeout(()=>{
            window.location="login.html"
        },1500)

    }

}

)