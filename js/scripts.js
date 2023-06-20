//business logic 
function beepBoop (n) {
    const user = inputUser();
    let numbers = [];

for (let i = 0; i <= n; i++) {
    if (i.toString().includes(3)) {
        let i = "Won't you be my neighbor?";
        numbers.push(i);
    } 
    else if (i.toString().includes(2)){
    let i = "Boop";
    numbers.push(i);
    } 
    else if (i.toString().includes(1)){
        let i = "Beep";
        numbers.push(i);
    } else { 
        numbers.push(i)
    };
    }
    return numbers;
}

function inputUser(){
    const user = document.getElementById("name-Input").value;
    return user;
}

//ui logic 

window.addEventListener("load", function(){
    document.getElementById("user-Input").addEventListener("submit", submitForm);

});

function submitForm(event){
    event.preventDefault();
    const user = document.getElementById("name-Input").value;
    let inputNumber = document.getElementById("number-Input").value;
    let h4 = document.getElementById("numbersArray");
    let numbersArr= beepBoop(inputNumber);

    if( user && inputNumber) {
        h4.innerText = numbersArr.join(",");
    }
};
const btn = document.querySelector("#refresh");
    btn.addEventListener("click", function(){
     location.reload();   
});

