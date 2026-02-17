// JavaScript Variables

var fullName='Supriya Dangol';
let address= 'Kathmandu,Nepal';
const bloodGroup='B+';

console.log('Full Name:',fullName);
console.log('Address',address);
console.log('Blood Group:',bloodGroup);

//Data Type
let name='Supriya';//String
let age=20;//Number
let isStudent=true;//Boolean
let hobbies=['Coding','Traveling','Cooking'];//Array

console.log(hobbies[0]);

let user={
    name: 'Supriya',
    age: 20,
    isStudent: true,
    hobbies: ['Coding','Traveling','Cooking'],
};//Object:properties

console.log(user['name']);
console.log(user.name);

//Functions
function greet(name){
    console.log('Welcome',name);
}
greet('Supriyaa');

//DOM manipulation
const headingElementByID=document.getElementById('heading-2');
console.log('heading element by id',headingElementByID);

const headingElementByQuery=document.querySelector('#heading-2');
console.log('heading element by query selector',headingElementByQuery);

headingElementByQuery.textContent='Get element by query selector';
headingElementByQuery.style.color='blue';

const buttonElement=document.querySelector('.btn');
buttonElement.addEventListener('click',function(){
    alert('Button Clicked!');
    console.log('Button Clicked');
});