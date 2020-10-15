console.log("If Conditions");

//Break
//after 500 the loop breaks out we wonyt see the rest
const num = [10,12,20,30,500,16,19]
for (let i = 0;i<num.length;i++){
console.log(num[i])
if(num[i] === 500){
    console.log('You got hte top',num[i])
    break;
}
}
console.log('New loop begans')
//continue
const scores = [10,20,30,0,40,50,60]
for(let result =0;result<scores.length;result++){
    if(scores[result] === 0){
        console.log('we will give a chance this time ',scores[result])
        continue
       
    }
console.log(scores[result])
}

//Function declaration
console.log("Function declaration")
function coding(){
    console.log('Daily 1 hour')
}
coding()
//Function expression
console.log("Function Expression")
const type = function(){
console.log('Use shortcuts to type fast')
};
type()

//Argument and parameter
function speak(name,time){
    console.log(`Good ${time} , ${name}!`)
}
speak('Ali','Night')
//Argument and parameter Default value
function speak(name='Ali',time='Morning'){
    console.log(`Good ${time} , ${name}!`)
}
speak()
speak('Muhammad','Afternoon')

//Returning something from function
console.log('Returning something from function')
const family = function(members){
    return members
};
const mem = family(10)
console.log(mem)

//Arrow  Function
const calArea = (radius)=>{
    return 3.14 * radius **2;
};
const answer = calArea(5)
console.log('Areaa is : ',answer)

//Short hand arrow function
console.log('Arrow function short hand')
const ashref = () => 'Ameer Basha';
const readNames = ashref()
console.log(readNames)

//Functions
console.log('------------------------')
const readNames2 = () => 'Masha Allah';
const answer2 = readNames2()
console.log(answer2)
//Method
let son = 'muhammad'
let sonUp = son.toUpperCase()
console.log(sonUp)