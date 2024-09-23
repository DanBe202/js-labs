// Alerts

alert("I'm JavaScript!");

// Variables
// Task 1

let admin;
let name = "John";

admin = name;

alert(admin);

// Task 2

let ourPlanetName = "Earth";
let currentUserName = "John";

// Data types

let name = "Ilya";

alert(`hello ${1}`); // hello 1

alert(`hello ${"name"}`); // hello name

alert(`hello ${name}`); // hello Ilya

// Interaction: alert, prompt, confirm

let name = prompt("What is your name?", "");
alert(name);

// Basic operators, maths
// Task 1

let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1

// Task 2

let a = 2;

let x = 1 + (a *= 2);

// Task 3
/*
"" + 1 + 0 = "10"
"" - 1 + 0 = -1
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5"
"  -9  " - 5 = -14
null + 1 = 1
undefined + 1 = NaN
" \t \n" - 2 = -2
 */

let a = Number(prompt("First number?", 1));
let b = +prompt("Second number?", 2);

alert(a + b); // 3

// Comparisons

/*
5 > 4 = true
"apple" > "pineapple" = false
"2" > "12" = true
undefined == null = true
undefined === null = false
null == "\n0\n" = false
null === +"\n0\n" = false
 */

//Conditional branching: if, '?'
//Task 1

/*
if ("0") { // Any string exept empty passes)
    alert( 'Hello' );
}
 */

// Task 2

let value = prompt('What is the "official" name of JavaScript?', '');

if (value === 'ECMAScript') {
    alert('Right!');
} else {
    alert("You don't know? ECMAScript!");
}

// Task 3

let value = prompt('Type a number', 0);

if (value > 0) {
    alert(1);
} else if (value < 0) {
    alert(-1);
} else {
    alert(0);
}

// Task 4

let result;

a + b < 4 ? result = 'Below' : result = 'Over';

// Task 5
let message = (login === 'Employee') ? 'Hello' :
    (login === 'Director') ? 'Greetings' :
        (login === '') ? 'No login' :
            '';

// Logical operators

// Task 1

alert(null || 2 || undefined); // 2

// Task 2

alert(alert(1) || 2 || alert(3)); // 1 -> 2

// Task 3

alert(1 && null && 2); // null

// Task 4

alert(alert(1) && alert(2)); // 1 -> undefined

// Task 5

alert(null || 2 && 3 || 4); // 3

// Task 6

if (age >= 14 && age <= 90) ;

// Task 7

if (!(age >= 14 && age <= 90)) ;
// or
if (age < 14 || age > 90) ;

// Task 8

/*
if (-1 || 0) alert( 'first' ); nein
if (-1 && 0) alert( 'second' ); ya
if (null || -1 && 1) alert( 'third' ); ya
 */

// Task 9

let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

    let pass = prompt('Password?', '');

    if (pass === 'TheMaster') {
        alert('Welcome!');
    } else if (pass === '' || pass === null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }

} else if (userName === '' || userName === null) {
    alert('Canceled');
} else {
    alert("I don't know you");
}

// Loops: while and for
// Task 1


