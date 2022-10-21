
const arr = ['one', 'two', 'three'];

function listItemTemplate(item){   
    return `<li>${item}</li>`;
}

const htmlStrings = arr.map(listItemTemplate);
// console.log(htmlStrings);

const ListElement = document.querySelector('#myList');
const html = htmlStrings.join('');
// console.log(html);

ListElement.innerHTML = html;

const letterGrades = ['A','B','C'];
function MakeGrade(listOfGrades){
    let grade = 0;
        switch(listOfGrades){
            case 'A':
                grade = 4.0;
                break;
            case 'B':
                grade = 3.0;
                break;
            case 'C':
                grade = 2.0;
                break;
            case 'D':
                grade = 1.0;
                break;
            case 'F':
                grade = 0.0;
                break;
        }
    return grade;
}
const gpaPoints = letterGrades.map(MakeGrade);
console.log(gpaPoints);

function sumPoints(total, current){
    return total+current;
}
const average = gpaPoints.reduce(sumPoints, 0)/gpaPoints.length;
console.log(average.toFixed(2));   


const meals = [
    {name:"curry", 
    catagory: "Indian", 
    prepTime: "20min", 
    cooktime: "20min", 
    imgSrc: "/mission/byui-logo_blue.webp",
    url: ""},

    {name:"Tacos", 
    catagory: "Mexican", 
    prepTime: "10min", 
    cooktime: "10min", 
    imgSrc: "/mission/byui-logo_blue.webp",
    url: ""},

    {name:"Chicken Alfredo", 
    catagory: "Italian", 
    prepTime: "10min", 
    cooktime: "25min", 
    imgSrc: "/mission/byui-logo_blue.webp",
    url: ""},
]

function mealTemplate(meal){
    return `<li class= "mealCard">
        <img src=${meal.imgSrc}>
        <h2>${meal.name}</h2>
        <p class="catagory">${meal.catagory}</p>
        <p>PrepTime: ${meal.prepTime}</p>
        <p>Cook Time: ${meal.cooktime}</p>
    </li>`;
}
function renderMeals(){
    const htmlMeals = meals.map(mealTemplate);
    const newUL= document.createElement('ul');
    newUL.classList.add("meal-list");
    newUL.insertAdjacentHTML("afterBegin", htmlMeals.join(''));
    document.querySelector("main").insertAdjacentElement("beforeend", newUL);
}

renderMeals();


// function lessThanSixLetters(word){
//     if(word.length >= 6) return true;
//     else return false;
// }
// const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
// newList = fruits.log(lessThanSixLetters);
// console.log(newList);
