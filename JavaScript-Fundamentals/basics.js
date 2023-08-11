"use strict";

console.log("Hello, World!")

// Variable Declaration Tutorial
    let message = 'Hello'; // Assign a String to the variable
    // alert(message); // Shows the variable content
    let user = 'John', age = 25; // Declaring multiple variables
    const myBirthday = '08.08.1999'; // Constant variable

    // Tutorial Tasks
        let admin;
        let name;
        name = 'John';
        admin = name;
        // alert(admin);

        const PLANET_NAME = 'Earth'; // Planet name is known before execution and does not change
        let currentUserName; // Stores the name of the website's current visitor 

// Arithmetic Operators W3 Schools
    // +    Addition
    // -    Subtraction
    // *    Multiplication
    // **   Exponentiation
    // /    Division
    // %    Modulus (Remainder)
    // ++   Increment
    // --   Decrement

    // Precedence Order
        // () => * & / => + & -
        // When two operators have the same precedence, they are read from left to right

    // Operands: Numbers the operations are performed on
    // Operator: Arithmetic symbols

    // Most of this is common sense, so I didn't bother typing it out. 
    // With that being said, I need to work on my understanding of the modulus operator
    // and its potential uses

    // Exponentiation
    let x = 5;
    let z = x ** 2; // 5^2
    // alert('5 raised to the second power = ' + z);
    z = Math.pow(x,2); // 5^2
    // alert('This is a different way of getting the same answer: ' + z);

// The Odin Project Assignments
    console.log(23 + 97)

    let sum = 1 + 2 + 3 + 4 + 5 + 6;
    console.log('Sum = ' + sum)

    console.log((4 + 6 + 9) / 77)

    const max = 57;
    let actual = max - 13;
    let percentage = actual / max;