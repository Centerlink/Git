// Lecture: variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

// Lecture: variables 2
/*
var name = 'John';
var age = 26;
//console.log(name + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? '
+ isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? '
+ isMarried + '.');

//var lastName = prompt('What is the last name?');
//console.log(lastName);



alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? '
+ isMarried + '.');


// Lecture: operators
var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;
//2016 - 52
//1964

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26 
//ageJohn = 26

ageJohn++;
ageMark *= 2;


console.log(ageJohn);
console.log(ageMark);
*/


// Lecture: if/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
    console.log(name + ' is married!');
} else {
    console.log(name + ' will hopefully marry soon :)');
}


isMarried = true;

/*
if(isMarried) {
    console.log('YES!');
} else {
    console.log('No!');
}



if(isMarried) {
    console.log('YES!');
}

if (23 === "23") {
    console.log('Something to print...');
}




///////////////////////////////////////////////////////////////////Lecture: boolean logic and switch


var age = 20;

if(age < 20 ) {
    console.log('John is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log('John is a young man');
    
} else {
    console.log('John is a man.')
}


var job = 'teacher';

job = prompt('What does john do');

switch (job) {
    case 'teacher':
        console.log('John teaches kids. ');
        break;
    case 'driver':
        console.log('john drives a cab in Lisbon');
        break;
    case 'Cop':
        console.log('John helps to fight crime.');
        break;
    default:
        console.log('John does something else.');
        
}



////////////////////////////////////////////////////////// CODING CHALLENGE 1


var jScore = (120 + 5 * 18);
var fScore = (145 + 5 * 21);
var bScore = (198 + 5 * 87);

var array1 = [jScore, fScore, bScore];

var max = array1.reduce(function(a, b) {
    return Math.max(jScore, fScore, bScore);
});

if (jScore > fScore && jScore > bScore) {
    console.log("John is the winner with a score of " + max);
} else if (fScore > jScore && fScore > bScore) {
    console.log("Francis is the winner with a score of " + max);
} else if (bScore > jScore && bScore > fScore) {
    console.log("Bradley is the winner with a score of " + max);
} else if (jScore == fScore && jScore != bScore) {
    console.log("John and Francis tied with a score of " + max);
} else if (bScore == fScore && bScore != jScore) {
    console.log("Bradely and Francis tied with a score of " + max);
} else {
    console.log("All three players tied with a score of " + max);
}


console.log('Johns Score is ' + jScore);
console.log('Francis Score is ' + fScore);
console.log('Bradleys Score is ' + bScore);



/////////////////////////////////////////////////////////////////////////// Lecture: Functions


function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);



function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if(retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' years.');
    } else {
        console.log(name + ' has already retired');
    }
   
    
    
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);



/////////////////////////////////////////////////////////////////////////// Lecture: Statements and expressions

function someFun(par) {
    //code
}

var someFun = function(par) {
    // code
}

//Expressions

3+4;
var x = 3;

//statements
if (x ===5) {
   //do something 
}



/////////////////////////////////////////////////////////////////////////// Lecture: Arrays

var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue'); //Adds an element to the end of an array
john.unshift('Mr.'); //Adds an element to the beginning of an array
john.pop(); // Removes and element from the end of an array
john.shift(); // Removes an element from the beginning of an array
console.log(john);


if (john.indexOf('teacher') === -1) { //indexOf Finds out if an element is inside an array
    console.log('John is Not a teacher.');
    
}



//////////////////////////////////////////////////////////////////////////// Lecture: Objects

var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] ='programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);

*/

//////////////////////////////////////////////////////////////////////////// Lecture: Objects and Methods
//ver 1.0
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        return 2016 - this.yearOfBirth;
    }
};


//console.log(john.calculateAge(1970));
//console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);


// v2.0


var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};


john.calculateAge();
console.log(john);


var mike = {
    yearOfBirth: 1950,
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};


mike.calculateAge();
console.log(mike);

*/
/*
/////////////////////////////////////////////////////////////////////////////// Lecture: Loops

for (var i = 0; i < 10; i++) {
    console.log(i);
}

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];



for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}


for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}


var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
    
}
    

for (var i = 1; i <= 5; i++) {
    console.log(i)
    
    if (i === 3) {
        break;
    }
}

for (var i = 1; i <= 5; i++) {
    
    
    if (i === 3) {
        continue;
    }
    
    console.log(i)
}

*/




/*

var years = ['1983', '2004', '1994', '2001', '1995'];

var array1 = [];

var i = 0;

while(i < years.length) {
    array1.push(years[i]);
    i++;
}


var currentYear = 2017;

var f = 0;

while (f < years.length) {
    
    if 
    (currentYear - array1[f] >= 18) 
    console.log(array1[f] + " Is an Adult");
    
    else if 
    (currentYear - array1[f] < 18) 
    console.log(array1[f] + " Is an Child");
    f++;
    
    
    }


var j = 0;

var array2 = [];


    while (j < years.length) {
        
        if 
        (currentYear - years[j] >= 18)
        array2.push("True");
        
        
        else if
        (currentYear - years[j] < 18)
        array2.push("False");
        j++;
    }



    
console.log(array2);

*/



function printFullAge (full_1,full_2) {
    
    var years = ['1983', '2004', '1994', '2001', '1995'];
    
    var array3 = [];

    var currentYear = 2017;
    
    for (m = 0; m < years.length; m++) {
        
        if 
        (currentYear - years[m] < 18)
        array3.push(years[m]);
        
       
        
        else if
        (currentYear - years[m] >= 18)
        array3.push(years[m]);
        }
    
    
    
    console.log(array3);
    
    array3.length = 0
    
    
    for (j = 0; j < years.length; j++) {
        
        if 
        (currentYear - years[j] < 18)
        array3.push("false");
    
        else if 
        (currentYear - years[j] >= 18)
        array3.push("true");
    }
    
    console.log(array3);
    
    
    
    
    
            
}

printFullAge();





























