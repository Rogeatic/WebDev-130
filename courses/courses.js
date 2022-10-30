const aCourse = {
    code: "CSE121b",
    name: "javascript Language",
    "catalog year": "2022",
    sections:[
    { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    findSection: function(toFind){
        return this.sections.find(function(item){
            section.sectionNum == toFind;
        })
    },
    enrolStudent: function(section){
        const theSection = this.findSection(sectionNum);
        theSection.enrolled++;
    }
};

// c = aCourse['code']
// // aCourse.code   SAME THING

// c = aCourse["catalog year"]

// console.log(aCourse[sections[0].sectionNum])


aCourse.sections.find(function(item){
    aCourse.findSection(item, 1)

})

function setCourseName(course){
    document.querySelector("#courseName").textContent = course.name;
    document.querySelector("#courseCode").textContent = course.code;
}
function sectionTemplate(section){
    return `<tr>
        <td>${section.sectionNum}<td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
    </tr>`;
}

function renderSections(sections){
    document.querySelector("#table")
    const sectionsElement = document.querySelector('#sections');
    const sectionsHtml = sections.map(sectionTemplate);
    sectionsHtml.innerHtml = sectionsHtml.join('');
}


document.querySelector('#enrollStudent').addEventListener('click', function(e){
    const sectionNum = document.querySelector('#sectionNumber').value;
    aCourse.enrolStudent(sectionNum);
    renderSections(aCourse.sections);
})


setCourseName(aCourse);
renderSections(aCourse.sections);

findSection(aCourse)