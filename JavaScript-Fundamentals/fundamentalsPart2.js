// JavaScript Data Types from JavaScript.Info

    // Dynamically Typed: JS contains data types, but variables are not bound to them
    // TypeOf Operator: Used to tell the type of a variable
    let a = 457;
    console.log(typeof a) // "number"

    // Number: Integer and Floating Point Numbers
    let n = 123;
    n = 12.345;
        // Special Numeric Valus
        n = Infinity;   // Infinity
        n = NaN;        // Not a Number

    // BigInt: Values to large for the Number data type
    const bigInt = 125404798723907504901759417509250946690475n; // 'n' denotes a BigInt

    // String: Must be surrounded by quotes
    let str1 = "Double Quotes work";
    let str2 = 'Single Quotes work too';
    let str3 = `Backticks also work`;       // Backticks allow us to embed variables into a string
        // Embeding variables and expressions
        let name = "Maxwell";
        console.log(`Hello, my name is ${name}`)
        console.log(`The result is ${5 ** 2}`)

    // Boolean: True or False
    let nameFieldChecked = true;
    let isGreater = 4 > 1;

    // Null: Represents 'Nothing'
    let age = null;

    // Undefined: Represents 'Value is not assigned'
    age = undefined;    // Not recommended to assign a variable as undefined
    console.log(`age = ${age}`)

    // Object: Store collections of data and more complex entities

    // Symbol: Creates unique identifiers for objects

// Handling Text - Strings in JavaScript

// JavaScript String Methods - W3 Schools

    // Length
    let text = "Apple, Banana, Kiwi, Kiwi";
    console.log(text.length)

    // Slice: Takes in the start and end position (non-inclusive)
    let part = text.slice(7,13); // Banana
    console.log(part)
    part = text.slice(7); // Banana, Kiwi
    console.log(part)
    part = text.slice(-12); // Banana, Kiwi (starts from end)
    console.log(part)
    part = text.slice(-12, -6); // Banana
    console.log(part)

    // Substring: Start and End values less than 0 are treated as 0
    part = text.substring(-12, 13); // Apple, Banana
    console.log(part)

    // SubStr: Takes in the start position and the length of extraction
    part = text.substr(7, 6); // Banana
    console.log(part)
    part = text.substr(7); // Banana, Kiwi
    console.log(part)
    part = text.substr(-4); // Kiwi (starts from end)
    console.log(part)

    // Replace: Replaces a value with a different value
        // Case sensitive and only replaces the first match
    part = text.replace("Kiwi", "Grape");  
    console.log(part)
    part = text.replace(/KIWI/i, "Grape"); // This makes it not case sensitive 
    console.log(part)
    part = text.replace(/Kiwi/g, "Grape"); // Replaces all matches
    console.log(part)

    // Upper and Lower Case
    part = text.toUpperCase();
    console.log(part)
    part = text.toLowerCase();
    console.log(part)

    // String Padding
    text = "Maxwell";
    text = text.padStart(4,"-").padEnd(4,"-");
    console.log(text)

// Comparisons

    // True = 1, False = 0
    // === strict comparison (no type changing)

// Conditionals - MDN Web Docs
