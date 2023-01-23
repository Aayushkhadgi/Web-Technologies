//console.log("Hello world");
/*let a=6;
console.log(typeof(a));
let b=7;
let sum=a+b;
console.log(sum)*/
/*var a=4;
var b=2;
var multiply=a*b;
console.log("The multiplication of a and b is: "+ multiply);
//Area of circumference
const PI=3.14;
let radius=window.prompt("Enter the radius: ");
let circumference= 2*PI*radius
console.log("The circumference of the circle is: " +circumference);*/
/*function dog_age(){
    var age=window.prompt("Enter the dog's age: ")
if (age<=10){
console.log("The dog is young")
}
else{
    console.log("The dog is old")
}
}
function sleep(){
    var age=window.prompt("Enter the dog's age: ")
    if (age>=10){
        console.log("The dog sleeps very fast")
    }
    else{
        console.log("The dog sleeps late")
    }
}
dog_age()
sleep()*/
let name=alert("Hello, My name is Introvert")
document.getElementById("button").onclick = function(){
let radius = document.getElementById("ok").value;
console.log(radius);
const PI = 3.14;
let circumference = 2 * PI * radius;
document.getElementById("circumference").innerHTML = circumference +"";
//document.getElementById("circumference").append(circumference);
}