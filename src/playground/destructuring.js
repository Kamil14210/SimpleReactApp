//destructuring.js
/*
const person = {
    name: 'Kamil',
    age: 27,
    location: {
        city: 'Poland',
        temp: 29
    }
}

const {name: firstName = 'Anonymous', age} = person;
console.log(`${firstName} is ${age}.`)

const {city, temp: temperature } = person.location;
if(city && temperature ){
    console.log(`It's ${temperature} in ${city}.`)
}
*/
 /*
const book ={
    title: 'Harry Potter',
    author: 'Shekspir',
    publisher: {
        name: 'Pengiun'
    }
};

const {name: publisherName = 'Self-publisher', title} = book.publisher;
console.log(publisherName)

*/

const item = ['coffe (hot)', "$2", "$3", "$4"]

const [coffe = "Ice tea", , cost = "$$43", ] = item;

console.log(`A medium ${coffe} cost ${cost}`)