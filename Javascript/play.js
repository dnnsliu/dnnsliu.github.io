
const form = document.forms["playnow"]

const username = form["name"]
const email = form["email"]
const password = form["password"]
const confirm_password = form["confirm_password"]
const gender = form["gender"]
const tos = form["tos"]


form.addEventListener("submit",function (btn){

    let flag = false;

    if(username.value.length < 10){
        alert("Name must contains Min 10 characters");
        flag = true;
    }

    if(checkEmail(email.value)==false && flag == false){
        alert("Wrong Email");
        flag = true;
    }
    
    if((password.value.length < 5 || password.value.length > 20)
         && flag == false){
        alert("Password must contains 5 until 20 characters");
        flag = true;
    }

    if((password.value != confirm_password.value) && flag==false){
        alert("Password must be same");
        flag = true;
    }

    if(gender.value == "" && flag == false){
        alert("Gender must be choose");
        flag = true;
    }

    if(tos.checked == false && flag == false ){
        alert("You must accept the terms and conditions");
        flag = true;
    }


    if(flag == true){
        btn.preventDefault();
    }
});

function checkEmail(x){
    if((x.startsWith('@') === true)){
        return false;
    }
    else if(x.includes('@') === true){
        if((x.includes("gmail") === true) || (x.includes("yahoo") === true)  ){
            if(x.endsWith('.com') === true) return true; //kalo ada .com alert ga muncul
            else if(x.endsWith('.co.id') === true) return true;
            else if(x.endsWith('.net') === true) return true;
            else return false;
        }
        else return false;
    }
    return false;
};

