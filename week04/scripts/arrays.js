const array1 = ['one', 'two', 'three'];
const newArray1 = array1.map((num) => `<li>${num}</li>`);

document.getElementById("myList").innerHTML = newArray1.join("");

// console.log(newArray1);

const grades = ["A", "B", "A"];

function gradeToPoints(grade){
    let points = 0;

    if(grade == "A") {
        points = 4;
    }
    else if (grade == "B") {
        points = 3;
    }
    return points;
}

const gpaPoints = grades.map(gradeToPoints);
const gpa = gpaPoints.reduce((total, points) => total + points, 0) / gpaPoints.length;

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const longerFruits = fruits.filter((fruit) => fruit.length > 6);

const numbers = [12, 34, 21, 54];
const luckNumber = 21;
let luckyIndex = numbers.indexOf(luckNumber);