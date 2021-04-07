
let succes = document.getElementById("success");
let danger = document.getElementById("danger");
let danger_text = document.getElementById("danger-text");
let success_text = document.getElementById("success-text");
let result = document.getElementById("result");


document.getElementById("number").onfocus = () =>{
    result.innerHTML= "";
}


const reverse = () => {
    let number = document.getElementById("number").value;
    
    if(number == ""){
        danger.style.display="block";
        danger_text.innerHTML = "Debe ingresar una secuencia de numeros";
        setTimeout(() => {
            danger.style.display="none";
        }, 3000);
    }else if(number == 0){
        danger.style.display="block";
        danger_text.innerHTML = "No puedes ingresar 0 debes ingresar una secuencia";
        setTimeout(() => {
            danger.style.display="none";
        }, 3000);
    }else if(number < 10){
        danger.style.display="block";
        danger_text.innerHTML = "Debes ingresar al menos dos digitos";
        setTimeout(() => {
            danger.style.display="none";
        }, 3000);
    }else {
        success.style.display = "block";
        success_text.innerHTML = "Bien hecho, haz invertido el numero: "+number;
        while(parseInt(number /10) != 0){
            result.innerHTML += (number % 10)
            number = parseInt(number /10)

            if(parseInt(number / 10) == 0){
                result.innerHTML += (number % 10)
            }
        }
        setTimeout(() => {
            success.style.display="none";
        }, 6000);
        document.getElementById("number").value = "";    
    }
};