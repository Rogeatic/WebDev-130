
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
    const grade = 0;
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
        if (listOfGrades[i] == 'A'){
            grade.push(100);
        }
        else if(listOfGrades[i] ==  'B'){
            grade.push(90);
        }
        else if(listOfGrades[i] ==  'C'){
            grade.push(80);
        }
        else if(listOfGrades[i] ==  'D'){
            grade.push(70);
        }
        else if(listOfGrades[i] ==  'F'){
            grade.push(60);
        }
    
    return grade
}
console.log(MakeGrade(letterGrades));