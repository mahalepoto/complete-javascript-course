/* Section 2
NOTE- JS has dynamic typing so data types are automatically assigned to variables.
console.log('Hello World!!!');
var firstName = 'Mushtaq';
console.log(firstName);

var job;
console.log(job);
job = 'teacher';
console.log(job);
*/

// lecture 9 mutation data type coercion

/*Below is an example of how JS converts data types
like firstName is string and age is the number

var firstName = 'John';
var age = 32;
console.log(firstName + ' ' + age);

// example two of type coercion
var job, isMerried;
job = 'teacher';
isMerried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he merried? ' + isMerried);

// Variable mutation
// Changing variable's value and data type is called variable mutation.
age = 'twenty eight';
job = 'driver';
alert (firstName + ' is a ' + age + ' years old ' + job + '. Is he merried? ' + isMerried);

// Taking input from the user or asking a question? Can be done as bellow.
var lastName = prompt ('Whats ' + firstName + 's last name? ');
console.log (firstName + ' ' + lastName);
// End lecture 9
*/

// Lecture 10 ***Basic Operators***
/* = , + , - , * , /
var myBirthYear;
var myAge = 36;
myBirthYear = 2019 - myAge;
console.log(myBirthYear);

// *** Logical Operators ***
var year, birthYearJohn, birthYearMark, currentYear;
  currentYear = 2019;
  ageJohn = 28;
  ageMark = 36;
birthYearJohn = currentYear - ageJohn;
birthYearMark = currentYear - ageMark;
console.log(birthYearMark);

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// 'typeof' operator - 'typeof' is the keyword to check on type of data.

var name = 'Ali';
var height;

console.log (typeof name);
console.log(typeof height);
console.log(typeof ageJohn);
console.log(typeof johnOlder);
*/

// Lecture 11 *** operator precedence*** i.e which operator is executed 1st
/*
var now = 2019;
var yearJohn = 1989;
var fullAge = 18;
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);
 So according to precedence preference 1st substraction then
greater than equal to and thirdly assignment operator will be executed.


var ageJohn = now - yearJohn;
var ageMark = 35;
/* NB- var average = ageJohn + ageMark /2; we cant do this as / has more
precedence than addition, hence we have to group theme
var average = (ageJohn + ageMark) /2;
console.log(average);
*/

/* ***Coding chellenge 1- Section 2- Lecture 12.***
Calculating body mass index.
Formula: BMI = mass / height * height
(mass is in kg and height in meter)


 var marksHeight = 1.524; // meters
 var marksMass = 75; //kg
 var johnheight = 1.828; // meters
 var johnMass = 80; // kg

var marksBmi = marksMass / (marksHeight * marksHeight);
console.log(marksBmi);

var johnBmi = johnMass / (johnheight * johnheight);
console.log(johnBmi);

var whoseFat = johnBmi < marksBmi;
console.log(whoseFat);


// Section 2 Lecture 14 ***if and else conditonal statement***

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
  console.log(firstName + ' is married');
}
  else {
    console.log(firstName + ' will be married soon');
  }

*/

// Section 2 Lecture 15
/* Bolean Logic *** i.e AND &&, OR ||, and NOT ! ***

var firstName = 'John';
var age = 12;

if (age < 13) {
  console.log(firstName + ' is a boy.');
}
  else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
  }
  else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
  }
  else {
    console.log(firstName + ' is a man');
  }
  */

  // Section 2 Lecture 16
  /* Ternary operator and
  Switch statement
  */

  // Ternary Operator Syntax:- ** Boolean expression ? statement execute if true : statement execute if false **
  //var firstName = 'John';
  // var age = 29;
    //age < 13 ? console.log(firstName + ' is a boy.') : console.log(firstName + ' is older than a boy age.');
    //(age >= 13 && age < 20) ? console.log(firstName + ' is a teenager') : console.log(firstName + ' is older than teenager');
    //(age >= 20 && age < 30) ? console.log(firstName + ' is a young man' ) : console.log(firstName + ' is a man');

    // *** We can also write as below!
  // var ageCheck;
    /* ageCheck = age < 13 ? firstName + ' is a boy' : firstName + ' is older than a boy';
    console.log (ageCheck); */
    /* ageCheck = (age >= 13 && age < 20) ? (firstName + ' is a teenager.') : (firstName + ' is older than a teenager.');
    console.log(ageCheck); */

    // ** Switch statement using string comparison

/*  var job = prompt ('What\'s '+firstName+ '\'s job');
    switch (job) {
      case 'teacher':
      console.log(firstName + ' teaches kids coding.');
      break;

      // ** we can also write double case expressions for a single statement.
      case 'doctor':
      case 'madic':
      console.log(firstName + ' works at NHS.');
        break;

        case 'driver':
        console.log(firstName + ' drives a uber cab in London.');
        break;

      default: // if no cases match we can just default it
      console.log(firstName + ' does something else.');

    }

    // ** Switch statement using Boolean expression comparison
      var age = prompt ('Enter'+firstName+ '\'s age.');
      switch (true) {
        case age < 13:
        console.log(firstName + ' is a boy.');
        break;

        case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;

        case age >= 20 && age < 30:
          console.log(firstName + ' is a young man.');
          break;

        default:
          console.log(firstName + ' is a man');
      }
*/

// Section 2 Lecture 17
/*
** TOPIC:- Truthy and Falsey values and Equality operator
*/
// Falsey values are - undefined, null, 0, '', NaN.
// Truthy values are - Basically all values excluding falsey values.

/*
//Example 1 of Undefined
var height;

if (height) {
  console.log('Example 1 undefined: variable is defined')

} else {
  console.log("Example 1 undefined: variable is not defined");
}

//Example 2 of Undefined
var height = 2;

if (height) {
  console.log('Example 2 undefined: variable is defined')

} else {
  console.log("Example 2 undefined: variable is not defined");
}

// Example of empty-string
var height = '';

if (height) {
  console.log('Example 1 empty-string: variable is defined')

} else {
  console.log("Example 1 empty-string: variable is not defined");
}

// Exaple 2 of empty-string
var height = 'tall';

if (height) {
  console.log('Example 2 undefined: variable is defined')

} else {
  console.log("Example 2 undefined: variable is not defined");
}

// Example of null
var height = null; // even though it is defined and given value of null BUT ***null is a falsey value**

if (height) {
  console.log('Example of null: variable is defined')

} else {
  console.log("Example of null: variable is not defined");
}

// Example 1 of 0
var height = 0;

if (height) {
  console.log('Example 1 of zero: variable is defined')

} else {
  console.log("Example 1 of zero: variable is not defined"); //prints this as 0 is a falsey value.

}

// Example 2 of 0
var height = 0;

if (height || height ===0) {
  console.log('Example 2 of zero: variable is defined')

} else {
  console.log("Example 2 of zero: variable is not defined");
}
*/

//Section 2 Coding chellenge 2

var johnTeamAv = (110+10+139) /3;
    mikeTeamAv = (110+2+130) /3;
    maryTeamAv = (97+134+105) /3;
console.log('John scored '+johnTeamAv+' Mike scored '+mikeTeamAv+' Mary scored '+maryTeamAv);

/*if (johnTeamAv > mikeTeamAv && johnTeamAv > maryTeamAv) {
  console.log ('John team is the winner, they scored ' + johnTeamAv );
} else if (johnTeamAv === mikeTeamAv && johnTeamAv === maryTeamAv) {
  console.log('The match is drawn as the scores are level, scores are '+'John\'s team '+johnTeamAv+'Mike\'s team '+mikeTeamAv+' and Mary\'s team scored '+maryTeamAv);
} else if (maryTeamAv > johnTeamAv && maryTeamAv > mikeTeamAv) {
  console.log('Mary\'s team is the winner, they scored '+maryTeamAv);
} else {
  console.log('Mike team is the winner, they scored ' + mikeTeamAv);
}
switch (true) {
  case (johnTeamAv > mikeTeamAv && johnTeamAv > maryTeamAv):
  console.log('John won, John score is');
  break;
  case (johnTeamAv === mikeTeamAv && johnTeamAv === maryTeamAv):
  console.log('The match is drawn and scores are level');
  break;
  case (maryTeamAv > johnTeamAv && maryTeamAv > mikeTeamAv):
  console.log('Mary\'s team is the winner');
  break;
  case (maryTeamAv === mikeTeamAv && maryTeamAv === johnTeamAv):
  console.log('The match is drawn as scores are leveled');
  default:
  console.log('Mike\'s team has won the match');

}
*/

// Section 2 Lecture 20
// Topic- Functions

function calculateAge (birthYear) {
  return  2019 - birthYear ;
}
//birthYear = prompt ('Whats your birthe year');

var aminaAge = calculateAge (1980);
var myAge = calculateAge (1982);
var friendAge = calculateAge (1976);
console.log(myAge, aminaAge, friendAge);

// another function to calculate retirement years remaining

function yearsToRetirement (years, firstName) {
  var age = calculateAge (years);
  var retirement = 65 - age;
  console.log(firstName + ' retires in ' + retirement + ' years.');
}
yearsToRetirement(1982, 'Mushtaq');
yearsToRetirement(1980, 'Amina');
yearsToRetirement(1976, 'Friend');


// *** Function statements and Expression ***

/*  ** function declaration is
  function nameOfFunction (parameter, parameter) {
  }



NB - Difference between statements and expressions is, statement performs action but not immidiate results
while expression is piece of code which performs action and give results
*/

// Function Expression

var whatDoYouDo = function (job, firstName) {
  switch (job) {
    case 'teacher':
    return firstName + ' teaches kids how to code';

    case 'driver':
    return firstName + ' drives cab in London';

    case 'designer':
    return firstName + ' makes beatiful websites';

    default:
    return firstName + ' does something else';

  }
}

console.log (whatDoYouDo ('teacher', 'John'));
console.log (whatDoYouDo ('driver', 'Mike'));
console.log (whatDoYouDo ('designer', 'Jolly'));
console.log (whatDoYouDo ('Painter', 'Danny'));
