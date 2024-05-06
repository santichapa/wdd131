let firstName = 'Santiago';
let lastName = 'Chaparro';

// // function declaration / definition
// function fullName(first, last) {
//     return `${first} ${last}`;
// }

// console.log(fullName(firstName, lastName));

// // function expression
// const fullName = function (first, last) {
//     return `${first} ${last}`;
// }

// console.log(fullName(firstName, lastName));

const fullName = (first, last) => {
    return `${first} ${last}`;
}

console.log(fullName(firstName, lastName));

document.querySelector("#fullName").innerHTML = fullName(firstName, lastName);