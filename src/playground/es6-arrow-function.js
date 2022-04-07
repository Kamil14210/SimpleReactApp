const fullName = "John Smith"

function getFirstName(){
    return fullName.split(' ')[0]
}
//console.log(getFirstName())

const firstName = (fullName) => { return fullName.split(' ')[0]}

const firstName1 = (fullName) =>  fullName.split(' ')[0]

console.log(firstName("Mike Smith"))