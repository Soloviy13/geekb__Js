var a = 1,
    b = 1,
    c, d;
c = ++a;
alert(c); /* ++a означает что мы к переменной а прибавляем единицу */
d = b++;
alert(d); /* ++ после переменной означает, что мы прибавляем единицу, но выводим предыдущее 		 значение переменной */
c = (2 + ++a);
alert(c); /* так как в первом примере мы прибавили единицу в переменную ее значение стало равно 2 потом добавили еще 1 и стало 3 потом сложили и ответ 5 */
d = (2 + b++);
alert(d);
/* в втором примере мы прибавили единицу в переменную b ее значение стало равно 	
2 в этом  примере прибавляем еще единицу и а становится равно 3  но выводим 			
предыдущее значение это 2 отсюда получаем 4 */

alert(a); /* прибавили 1 в примере первом и в примере втором 3 */
alert(b); /* прибавили 1 в втором примере и в примере 4 */








// let a = 2
// let x = 1 + (a *= 2)
//     x = 5 (х будет равен 5 )


let a = 10
let b = 20

if (a > -1 && b > -1) {
    x = a - b
    console.log(x)
} else if (a < -1 && b < -1) {
    x = a + b
    console.log(x)
} else if (a > -1 && b < -1 || a < -1 && b > -1) {
    x = a + b;
    console.log(x);
}




let numberSpan = 5
switch (numberSpan) {
    case
    0:
        console.log(5)
        break;
    case
    1:
        console.log(5)
        break;
    case
    2:
        console.log(5)
        break;
    case
    3:
        console.log(5)
        break;
    case
    4:
        console.log(5)
        break;
    case
    5:
        console.log(5)
        break;
    case
    6:
        console.log(5)
        break;
    case
    7:
        console.log(5)
        break;
    case
    8:
        console.log(5)
        break;
    case
    9:
        console.log(5)
        break;
    case
    10:
        console.log(5)
        break;
    case
    11:
        console.log(5)
        break;
    case
    12:
        console.log(5)
        break;
    case
    13:
        console.log(5)
        break;
    case
    14:
        console.log(5)
        break;
    case
    15:
        console.log(5)
        break;

}



let numOne = 5
let numTwo = 6

function division(numOne, numTwo) {
    return numOne / numTwo
}

function multiplication(numOne, numTwo) {
    return numOne * numTwo
}

function subtraction(numOne, numTwo) {
    return numOne - numTwo
}

function addition(numOne, numTwo) {
    return numOne + numTwo
}




function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'addition':
            return arg1 + arg2;
            break;
        case 'subtraction':
            return arg1 - arg2;
            break;
        case 'division':
            return arg1 / arg2;
            break;
        case 'multiplication':
            return arg1 * arg2;
            break;
    }
}