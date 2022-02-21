// function findLongestWord(string) {
//     //  розбити рядок на окремі слова і зберегти в масиві
//     const words = string.split(" ");
//     console.log('words = ', words);
//     // створити змінну для найдовшого слова
//     let longWord = words[0];
//     console.log('longWord = ', longWord);
//     //  пребрати масив слів words
//     for (let i = 1; i < words.length; i += 1) {
//         console.log('i = ', i);
//         console.log(`words[${i}].length = `, words[i].length);
//         // знайти найдовше слово і зберегти його у змінну longWord
//         if (words[i].length > longWord.length) {
//             console.log('longWord.length = ', longWord.length);
//             longWord = words[i];
//         }
//     }
//     // повернути змінну з найдовшим словом
//     console.log(longWord);
//     return longWord;
// }

// findLongestWord('Как international дела, чем занимаешся ты сейчас?')

// function getEvenNumbers(start, end) {

//     for (let i = start; i = end; i++) {
//         if (i % 2 === 0);
//         console.log(getEvenNumbers(2, 5));
//     }


// }
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log(2 && 1 && null && 0 && undefined);
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function toCamelCase(str) {
//     // return str.split('-').map((word,i)=>i>0?word.charAt(0).toUpperCase():word).join('');
//     let word = [];
//     if (str.includes("-")) word = str.split("-");
//     if (str.includes("_")) word = str.split("_");
//     for (let i = 1; i < word.length; i++) {
//         word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
//     }
//     return word.join("");
// }
// console.log(toCamelCase("Вывод-строки-раз-два"));
// console.log(toCamelCase("Вывод_строки_раз_два"));
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const myStr = "FirstLine\n\t\SecondLine\nThirdLine";
// function reusableFunction() {
//     console.log("Hi World");
// }
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function functionWithArgs(a,b){
//     console.log(a + b);
// }

// functionWithArgs(1,2)
// functionWithArgs(7,9)

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function timesFive(a){
//     return a * 5;
//     }
//     const answer = timesFive(25);


!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// // Вкажіть змінну myGlobal під цим рядком
// const myGlobal = 10;

// function fun1() {
//     // Призначте 5 oopsGlobal тут
//     oopsGlobal = 5;
// }

// // Змініть код лише над цим рядком

// function fun2() {
//     var output = "";
//     if (typeof myGlobal != "undefined") {
//         output += "myGlobal: " + myGlobal;
//     }
//     if (typeof oopsGlobal != "undefined") {
//         output += " oopsGlobal: " + oopsGlobal;
//     }
//     console.log(output);
// }

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function myLocalScope() {
//     // Змініть код лише під цим рядком
//   const myVar = myLocalScope;
//     console.log('inside myLocalScope', myVar);
//   }
//   myLocalScope();

//   // Запустіть та перевірте консоль
//   // myVar не визначений за межеми myLocalScope
//   console.log('outside myLocalScope', myVar);

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function nextInLine(arr, item) {
//     // Змініть код лише під цим рядком
//     arr.push(item);
//     var item = arr.shift();
//     return item;
//     // Змініть код лише над цим рядком
// }

// // Налаштування
// const testArr = [1, 2, 3, 4, 5];

// // Відобразити код
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));


// Створіть оператора
// if всередині функції, щоб повернути Yes, that was true, якщо параметр wasThatTrue є true та повернути No, that was false у протилежному випадку.
// function trueOrFalse(wasThatTrue) {
//     // Змініть код лише під цим рядком
//   if (wasThatTrue){
//     return "Yes, that was true";
//   }
//   return "No, that was false";

//     // Змініть код лише над цим рядком

//   }


// function testLogicalAnd(val) {
//     // Змініть код лише під цим рядком

//     if (val <= 50 && val >= 25) {
//         return "Yes";

//     }

//     // Змініть код лише над цим рядком
//     return "No";
//   }

//   testLogicalAnd(10);


// function testElse(val) {
//     let result = "";
//     // Змініть код лише під цим рядком

//     if (val > 5) {
//       result = "Bigger than 5";
//     } else {
//        result = "5 or Smaller";
//     }



//     // Змініть код лише над цим рядком
//     return result;
//   }

// if (strokes == 1) {
//     return "Hole-in-one!";
//     }
//     else if (strokes <= par - 2) {
//     return "Eagle";
//     }
//     else if (strokes == par - 1) {
//       return "Birdie";
//     }
//     else if (strokes == par) {
//       return "Par";
//     }
//     else if (strokes == par + 1) {
//       return "Bogey";
//     }
//     else if (strokes == par + 2) {
//       return "Double Bogey";
//     }
//     else if (strokes >= par + 3) {
//       return "Go Home!";
//     }

// Напишіть команду switch, щоб встановити answer за наступних умов:
// 1 - alpha
// 2 - beta
// 3 - gamma
// 4 - delta
function caseInSwitch(val) {
    let answer = "";
    // Змініть код лише під цим рядком
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    // Змініть код лише над цим рядком
    return answer;
}

caseInSwitch(1);


!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Напишіть команду switch, щоб встановити answer за наступних умов:
// a - apple
// b - bird
// c - cat
// default - stuff
function switchOfStuff(val) {
    let answer = "";
    // Змініть код лише під цим рядком
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    // Змініть код лише над цим рядком
    return answer;
}

switchOfStuff(1);
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Запис інструкції перемикача для установки answer для наступних діапазонів:
// 1-3 - Low
// 4-6 - Mid
// 7-9 - High

// Note: Ви повинні мати case для кожного числа в діапазоні.
function sequentialSizes(val) {
    let answer = "";
    // Змініть код лише під цим рядком
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }


    // Змініть код лише над цим рядком
    return answer;
}

sequentialSizes(1);
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!