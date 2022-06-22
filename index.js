//Reading of numbers in the program
const num1 = parseFloat(prompt('Enter Num1:'));//convert string to number
//Reading of operators in the program
const Operator = prompt('Enter operator to use:(+, -, *, /)');
const Num2 = parseFloat(prompt('Enter Num2: '));//convert string to number to perform

let result = 0;
if(isNaN(num1) || isNaN(Num2)){
    alert('wrong input! Refresh and try again.');
}else{
    if(Operator == '+'){
        result = num1 + Num2;
    }else if(Operator == '-'){
        result = num1 - Num2;
    }else if (Operator == '*'){
        result = num1 * Num2;
    }else if (Operator == '/'){
        result= num1 / Num2;
    }
    alert(num1 + ''+ Operator + ''+ Num2 + '=' + result)
}