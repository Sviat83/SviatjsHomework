// 1

// function propsCount(currentObject) {
    
//     if (typeof currentObject !== 'object' || currentObject === null) {
//       return 0; 
//     }
    
//     return Object.keys(currentObject).length;
//   }

  
//   let mentor = { 
//     course: "JS fundamental", 
//     duration: 3,
//     direction: "web-development" 
//   };

  
//   console.log('Number of properties in mentor:', propsCount(mentor)); // Виведе: 3
//   console.log('Number of properties in empty object:', propsCount({})); // Виведе: 0
//   console.log('Number of properties in null:', propsCount(null)); // Виведе: 0
//   console.log('Number of properties in array:', propsCount([1, 2, 3])); // Виведе: 0 (масив не враховуємо як об’єкт із властивостями)

  
//   alert('Number of properties in mentor: ' + propsCount(mentor));



// 2

// class Person {
//     constructor(name, surname) {
//       this.name = name;
//       this.surname = surname;
//     }

   
//     showFullName() {
//       return `${this.surname} ${this.name}`;
//     }
//   }

  
//   class Student extends Person {
//     constructor(name, surname, year) {
//       super(name, surname); 
//       this.year = year; 
//     }

   
//     showFullName(middleName) {
//       return `${this.surname} ${this.name} ${middleName}`;
//     }

    
//     showCourse() {
//       const currentYear = 2025; 
//       const course = currentYear - this.year;

      
//       if (course < 1 || course > 6) {
//         return "Course is not applicable (must be between 1 and 6)";
//       }
//       return course;
//     }
//   }

  
//   const stud1 = new Student("Petro", "Petrenko", 2021);
//   console.log(stud1.showFullName("Petrovych")); 
//   console.log("Current course: " + stud1.showCourse()); 

  
//   const stud2 = new Student("Anna", "Ivanova", 2023);
//   console.log(stud2.showFullName("Ivanivna")); 
//   console.log("Current course: " + stud2.showCourse()); 

  
//   const stud3 = new Student("Oleg", "Sidorov", 2018);
//   console.log(stud3.showFullName("Olegovych")); 
//   console.log("Current course: " + stud3.showCourse()); 

  
//   alert(`
//     Student 1: ${stud1.showFullName("Petrovych")}, Current course: ${stud1.showCourse()}
//     Student 2: ${stud2.showFullName("Ivanivna")}, Current course: ${stud2.showCourse()}
//     Student 3: ${stud3.showFullName("Olegovych")}, Current course: ${stud3.showCourse()}
//   `);


// 3

// class Worker {
    
//     #experience = 1.2;

//     constructor(fullName, dayRate, workingDays) {
//       this.fullName = fullName;
//       this.dayRate = dayRate;
//       this.workingDays = workingDays;
//     }

    
//     showSalary() {
//       const salary = this.dayRate * this.workingDays;
//       console.log(`${this.fullName} salary: ${salary}`);
//       return salary;
//     }

    
//     showSalaryWithExperience() {
//       const salaryWithExp = this.dayRate * this.workingDays * this.#experience;
//       console.log(`${this.fullName} salary: ${salaryWithExp}`);
//       return salaryWithExp;
//     }

   
//     get showExp() {
//       return this.#experience;
//     }

    
//     set setExp(value) {
//       this.#experience = value;
//     }
//   }

  
//   let worker1 = new Worker("John Johnson", 20, 23);
//   let worker2 = new Worker("Tom Tomson", 48, 22);
//   let worker3 = new Worker("Andy Ander", 29, 23);

//   //  worker1
//   console.log(worker1.fullName);
//   worker1.showSalary();
//   console.log("New experience: " + worker1.showExp);
//   worker1.showSalaryWithExperience();
//   worker1.setExp = 1.5;
//   console.log("New experience: " + worker1.showExp);
//   worker1.showSalaryWithExperience();

//   // worker2
//   console.log("\n" + worker2.fullName);
//   worker2.showSalary();
//   console.log("New experience: " + worker2.showExp);
//   worker2.showSalaryWithExperience();
//   worker2.setExp = 1.5;
//   console.log("New experience: " + worker2.showExp);
//   worker2.showSalaryWithExperience();

//   // worker3
//   console.log("\n" + worker3.fullName);
//   worker3.showSalary();
//   console.log("New experience: " + worker3.showExp);
//   worker3.showSalaryWithExperience();
//   worker3.setExp = 1.5;
//   console.log("New experience: " + worker3.showExp);
//   worker3.showSalaryWithExperience();

  
//   console.log("\nSorted salary:");
//   const workers = [worker1, worker2, worker3];
//   workers.sort((a, b) => {
//     const salaryA = a.dayRate * a.workingDays * a.showExp;
//     const salaryB = b.dayRate * b.workingDays * b.showExp;
//     return salaryA - salaryB; 
//   });

  
//   workers.forEach(worker => {
//     const salary = worker.dayRate * worker.workingDays * worker.showExp;
//     console.log(`${worker.fullName}: ${salary}`);
//   });


// 4


// class GeometricFigure {
//     getArea() {
//       return 0;
//     }

//     toString() {
//       return Object.getPrototypeOf(this).constructor.name;
//     }
//   }

//   // Triangle
//   class Triangle extends GeometricFigure {
//     constructor(base, height) {
//       super();
//       this.base = base; 
//       this.height = height; 
//     }

//     getArea() {
//       return 0.5 * this.base * this.height; 
//     }
//   }

//   // Square
//   class Square extends GeometricFigure {
//     constructor(side) {
//       super();
//       this.side = side; 
//     }

//     getArea() {
//       return this.side * this.side; 
//     }
//   }

//   // Circle
//   class Circle extends GeometricFigure {
//     constructor(radius) {
//       super();
//       this.radius = radius; 
//     }

//     getArea() {
//       return Math.PI * this.radius * this.radius; 
//     }
//   }

  
//   function handleFigures(figures) {
    
//     const isValid = figures.every(figure => figure instanceof GeometricFigure);
//     if (!isValid) {
//       throw new Error('All objects must be instances of GeometricFigure or its subclasses!');
//     }

    
//     const result = figures.reduce(
//       (acc, figure) => {
//         const area = figure.getArea();
//         console.log(`Geometric figure: ${figure.toString()} - area: ${area}`);
//         acc.totalArea += area;
//         return acc;
//       },
    //   { totalArea: 0 }
//     );

    
//     return result.totalArea;
//   }

  
//   const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
//   const totalArea = handleFigures(figures);
//   console.log(totalArea); 

  
//   const output = figures
//     .map(figure => `Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`)
//     .join('\n') + `\n${totalArea}`;
//   alert(output);