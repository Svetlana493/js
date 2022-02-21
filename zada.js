/**
 * 8*. Написать функцию которая принимает массив с цифрами,
 * получить целое число и прибавить 1,
 * результат вернуть в виде массива
 */

// [1,2,9] это ввод
// [1,3,0] это вывод

function plusOne(numbersArr) {
    // створити змінну для масива
    // з масиву зробити одну string( використовуючи метод join) 
    let newNumber = numbersArr.join("");
    // console.log(newNumber);
    //   перетворити string y Number і додати 1
    newNumber = Number(newNumber) + 1;
    // number перетворюємо в string  Метод ToString ()
    // newNumber = newNumber.toString();
    // // console.log(typeof newNumber);
    // // розбити string за допомогою метода split 
    // newNumber = newNumber.split("");
    // //    повернути результат у вигляді масиву
    // newNumber = newNumber.map(number => Number(number));

    // newNumber = newNumber.map(function(x) { return Number(x) });

    return newNumber.toString().split("").map(number => Number(number));
}
console.log(plusOne([1, 2, 9]));
console.log(plusOne([9, 9, 9]))