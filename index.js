// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names, event) {
   return  names.map(name=> `Thank you, ${name}, for the wonderful ${event} gift!`)
}

console.log(writeCards(names, "birthday"))



function countDown(){
    for (let count = 10; count >= 0; count--) {
        console.log(count);
    }
}

