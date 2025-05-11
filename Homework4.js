 
// 1

    // function calcRectangleArea(width, height) {
       
    //   if (typeof width !== 'number' || typeof height !== 'number') {
    //     throw new Error('Parameters width and height must be numbers!');
    //   }
       
    //   if (isNaN(width) || isNaN(height)) {
    //     throw new Error('Parameters width and height cannot be NaN!');
    //   }
    
    //   return width * height;
    // }

    
    // try {
    //   Коректні параметри
    //   const area1 = calcRectangleArea(5, 3);
    //   console.log('Area 1:', area1); // Виведе: Area 1: 15

    //  Неправильний параметр (рядок замість числа)
    //   const area2 = calcRectangleArea('5', 3);
    //   console.log('Area 2:', area2); 
    // } catch (error) {
    //   console.error('Error:', error.message);
    //   alert('Error: ' + error.message);
    // }

    // try {
    //  Неправильний параметр (NaN)
    //   const area3 = calcRectangleArea(NaN, 4);
    //   console.log('Area 3:', area3); 
    // } catch (error) {
    //   console.error('Error:', error.message);
    //   alert('Error: ' + error.message);
    // }

    // try {
    //   Коректні параметри з десятковими числами
    //   const area4 = calcRectangleArea(2.5, 3.5);
    //   console.log('Area 4:', area4); // Виведе: Area 4: 8.75
    // } catch (error) {
    //   console.error('Error:', error.message);
    //   alert('Error: ' + error.message);
    // }


    // 2

    // function checkAge() {
    //     try {
          
    //       const age = prompt("Please enter your age:");
  
          
    //       if (!age) {
    //         throw new Error("The field is empty! Please enter your age");
    //       }
  
          
    //       const ageNum = Number(age);
    //       if (isNaN(ageNum)) {
    //         throw new Error("Invalid input! Please enter a numeric value");
    //       }
  
          
    //       if (ageNum < 14) {
    //         throw new Error("You are too young! You must be at least 14 years old");
    //       }
  
          
    //       alert("Access granted! Enjoy the movie!");
    //     } catch (error) {
          
    //       console.error(`Error Name: ${error.name}, Description: ${error.message}`);
    //       alert(`Error Name: ${error.name}\nDescription: ${error.message}`);
    //     }
    //   }
  
      
    //   checkAge();



    // 3


// class MonthException {
//       constructor(message) {
//         this.name = 'MonthException';
//         this.message = message;
//       }

//       toString() {
//         return `${this.name} ${this.message}`;
//       }
//     }

    
//     function showMonthName(month) {
      
//       if (typeof month !== 'number' || !Number.isInteger(month) || month < 1 || month > 12) {
//         throw new MonthException('Incorrect month number');
//       }

      
//       const months = [
//         'January', 'February', 'March', 'April', 'May', 'June',
//         'July', 'August', 'September', 'October', 'November', 'December'
//       ];

//       return months[month - 1];
//     }

    
    // try {
//       // Коректний номер місяця
//       console.log(showMonthName(5)); // May
//       console.log(showMonthName(1)); // January
//       console.log(showMonthName(12)); // December

//       // Некоректний номер місяця
//       console.log(showMonthName(14)); 
//     } catch (error) {
//       console.log(error.toString()); 
//     }

//     try {
//       // Некоректний тип (рядок)
//       console.log(showMonthName("5")); 
//     } catch (error) {
//       console.log(error.toString()); 
//     }

//     try {
//       // Некоректне число (0)
//       console.log(showMonthName(0)); 
//     } catch (error) {
//       console.log(error.toString()); 
//     }

    
//     try {
//       const month = showMonthName(7);
//       alert(`Month: ${month}`);
//     } catch (error) {
//       alert(error.toString());
//     }



// 4



// function showUser(id) {
    
//     if (id < 0) {
//       throw new Error(`ID must not be negative: ${id}`);
//     }
    
//     return { id: id };
//   }

 
//   function showUsers(ids) {
//     const result = [];
//     ids.forEach(id => {
//       try {
//         const user = showUser(id);
//         result.push(user);
//       } catch (error) {
//         console.error(error.message);
//       }
//     });

//     return result;
//   }

  
//   const ids = [7, -12, 44, 22];
//   const users = showUsers(ids);
//   console.log(users); 

  
//   const output = `Error: ${ids
//     .filter(id => id < 0)
//     .map(id => `ID must not be negative: ${id}`)
//     .join('\nError: ')}\nResult: ${JSON.stringify(users)}`;
//   alert(output);