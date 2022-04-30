// /**
//  * 8*. Написать функцию которая принимает массив с цифрами,
//  * получить целое число и прибавить 1,
//  * результат вернуть в виде массива
//  */

// // [1,2,9] это ввод
// // [1,3,0] это вывод

// function plusOne(numbersArr) {
//     // створити змінну для масива
//     // з масиву зробити одну string( використовуючи метод join) 
//     let newNumber = numbersArr.join("");
//     // console.log(newNumber);
//     //   перетворити string y Number і додати 1
//     newNumber = Number(newNumber) + 1;
//     // number перетворюємо в string  Метод ToString ()
//     // newNumber = newNumber.toString();
//     // // console.log(typeof newNumber);
//     // // розбити string за допомогою метода split 
//     // newNumber = newNumber.split("");
//     // //    повернути результат у вигляді масиву
//     // newNumber = newNumber.map(number => Number(number));

//     // newNumber = newNumber.map(function(x) { return Number(x) });

//     return newNumber.toString().split("").map(number => Number(number));
// }
// console.log(plusOne([1, 2, 9]));
// console.log(plusOne([9, 9, 9]))




// 5.Для объекта zoo написати функцію addAnimal и removeAnimal
// Додати таких тваринок як Elephant, Lion, Tiger.
// Видалити Lion
// Вивести в консоль
// const zoo = {
//     animals: [],
//     addAnimal(animalName) {
//         this.animals.push(animalName);
//     },
//     removeAnimal(animalName) {
//         const index = this.animals.indexOf(animalName);
//         if (index !== -1) {
//             this.animals.splice(index, 1);
//         }
//     }
// };
// zoo.addAnimal('Elephant');
// zoo.addAnimal('Lion');
// zoo.addAnimal('Tiger');
// zoo.removeAnimal('Lion');
// console.log(zoo.animals);


const atTheOldToad = {
    potions: [
        { name: "Speed potion", price: 460 },
        { name: "Dragon breath", price: 780 },
        { name: "Stone skin", price: 520 },
    ],

    getPotions() {
        return this.potions;
    },

    addPotion(newPotion) {
        console.log(newPotion);
        for (const { name }
            of this.potions) {
            if (newPotion.name === name) {
                return `Error! Potion ${newPotion.name} is already in your inventory!`;
            }
        }

        this.potions.push(newPotion);
    },

    removePotion(potionName) {
        for (let i = 0; i < this.potions.length; i += 1) {
            if (potionName === this.potions[i].name) {
                this.potions.splice(i, 1);
                return;
            }
        }

        return `Potion ${potionName} is not in inventory!`;
    },

    updatePotionName(oldName, newName) {
        for (const potion of this.potions) {
            if (potion.name === oldName) {
                potion.name = newName;
            }
        }
        return `Potion ${oldName} is not in inventory!`;

    },

};

console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
console.log(atTheOldToad.getPotions());

console.log(atTheOldToad.removePotion('Invisibility'));
console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.removePotion('Invisibility'));
console.table(atTheOldToad);