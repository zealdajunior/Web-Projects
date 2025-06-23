let a = prompt("Enter a num1");
let b = prompt("Enter num2");
a = parseFloat(a);
b = parseFloat(b)
if(num2 == 0){
    console.log("No place for $(num2)");
}
let operator = prompt("Enter operator (+ , - , x , /)");
if (operator == '+'){
    let answer = a + b;
    console.log(`$(a) + $(b)`);
}
else if(operator == '-'){
    let answer = a - b;
    console.log(`$(a) + $(b) = $(answer)`);
}
else if(operator == '*'){
    let answer = a * b;
    console.log(`$(a) x $(b)`);
}
else if(`operator == '/'`){

    let answer = a/b;
    console.log(`$(a)/$(b) = $(answer)`);
}