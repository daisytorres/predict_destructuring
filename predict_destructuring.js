// ---------------------------------------- Assignment: Predict Destructuring ----------------------------------------



//For the following five blocks of code, predict the output. If a line of code will throw an error, state the error.




//------------------- Problem #1 -------------------
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)
//predicted output: 
'Tesla'
'Mercedes'




//------------------- Problem #2 -------------------
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);
//predicted output:
//Error: name is not defined
//since we are taking the property name and assigning it the variable otherName, this will give us Elon (the value of the name property in employee object)
//but when we try to console.log(name), it is not defined in the scope that has been declared a variable (not a property of either/any scope)




//------------------- Problem #3 -------------------
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);
//predicted output: 
'12345'
undefined 
//we get undefined because console.log(hashPassword) is trying to grab property of person and re-assign it's value, but there is no password in this object
//we get '12345' because we set it as a variable so it just logging that variable




//------------------- Problem #4 -------------------
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);
//predicted output:
false
true
//variables become:
first = 2
second = 5
third = 2
//so then for our console.log we are asking:
is 2 = 5 //----> false
is 2 = 2 //---->true




//------------------- Problem #5 -------------------
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
//predicted output:
value
[ 1, 5, 1, 8, 3, 3 ]
1
5
