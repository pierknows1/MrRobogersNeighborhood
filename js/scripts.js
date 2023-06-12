//business logic 

function beepBoop (n) {
    let numbers = [];
}
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
    } 
    else {
        numbers.push(i)
    };
    }
    return numbers;

