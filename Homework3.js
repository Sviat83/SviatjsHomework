// 1

// let numbers = [2, 3, 4, 5];
// let result = 1;
// for (const num of numbers) { //для всіх num в numbers виконується множення і збереження в result
//     result *= num;
// }
// result2 = 1;
// let i = 0;
// while (i < numbers.length) { //проходить (ітерує) цикл по індексам та перемножає елементи і зберігає в результат 2
    // result2 *= numbers[i];
//     i++
// }
// console.log(result)
// console.log(result2)


// 2

// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// for (num in numbers) { //для кожного елементу масиву виконується перевірка
//     if (num % 2 !== 0) { //якщо остача не дорівнює 0 - число непарне
//         console.log(num + '- непарне число')
//     } else { //інакше - парне
//         console.log(num + '- парне число')
//     }
// }


// 3

// function randArray(k) { //оголошую функцію 
//     let someArray = []; //створюю пустий масив
//     for (let i = 0; i < k; i++) { //роблю ітерацій циклом for
//         let num = Math.floor(Math.random() * 500) + 1; //отримую рандомне число до 500, округляю його та зберігаю в num
//         someArray.push(num); //додаю num до масиву 
//     }
//     return someArray;
//     }
// console.log(randArray(15))


// 4

// // Функція для піднесення числа a до степеня b
// function raiseToDegree(a, b) {
//     // Перевірка, чи є a і b цілими числами
//     if (!Number.isInteger(a) || !Number.isInteger(b)) {
//       throw new Error("Обидва числа мають бути цілими!");
//     }

//     // Обчислення a^b
//     return Math.pow(a, b);
//   }

//   // Функція для введення чисел і виклику raiseToDegree
//   function calculatePower() {
//     try {
      
//       const inputA = prompt("Введіть число a (основу):");
//       const inputB = prompt("Введіть число b (степінь):");

//       // Перевірка на скасування або порожній ввід
//       if (inputA === null || inputA === "" || inputB === null || inputB === "") {
//         console.log("Введення скасовано або поле порожнє!");
//         return;
//       }

//       // Перетворення введених значень у числа
//       const a = Number(inputA);
//       const b = Number(inputB);

//       // Перевірка, чи введені значення є числами
//       if (isNaN(a) || isNaN(b)) {
//         console.log("Помилка: Введено нечислове значення!");
//         return;
//       }

//       // Виклик функції raiseToDegree
//       const result = raiseToDegree(a, b);
//       console.log(`Результат: ${result}`);

//       // Додатково виводимо через alert
//       alert(`Результат: ${result}`);
//     } catch (error) {
//       console.log(`Помилка: ${error.message}`);
//       alert(`Помилка: ${error.message}`);
//     }
//   }

//   // Виклик функції для введення чисел
//   calculatePower();

//   // Тестовий виклик із прикладу
//   console.log(raiseToDegree(3, 4)); // 81


// 5

// function findMin() {
//     let min = arguments[0]; //присвоюємо min перший аргумент
//     for (let i = 1; i < arguments.length; i++ ) { //починаємо з першого індексу
//         if (arguments[i] < min) { //якщо поточний аргумент менший за min, виконується if
//             min = arguments[i]; //записуємо нове значення
//         }
//     }
//     return min
// }

// console.log(findMin(20, 1745, -67. -789, 6569))


// 6

// function findUnique(arr) { //Оголошення ф-ції

//     if (!arr || !Array.isArray(arr)) { //перевірка, чи параметр це масив і не пустий
//         return false;
//     }
//     const checking = new Set(arr); // за допомогою new оператора та конструктора set створює новий масив з видаленими копіями(якщо такі є)
//     return checking.size === arr.length;

// }
// console.log(findUnique([154,2380,7765,6855]))


// 7


// function lastElem(arr, quantity = 1) { 

//     if (quantity <= 0 || quantity > arr.length) {
//         return arr.slice(-quantity); //якщо quantity = 1 то повертаємо останній елемент
//     }
//     return quantity === 1 ? arr[arr.length - 1] : arr.slice(-quantity) //якщо quantity > 1, то повертаємо підмасив
  
// }

// console.log(lastElem([976,7697,868,54,8,798,98,455], 5))


// 8

// function firstUpper(str) {
//     if (!str || typeof str != 'string')
//         return str;
//     return str
//     .split(' ')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ');
// }
// console.log(firstUpper('i love java script'))