
let names = document.getElementById('names');
let codestackEmail = document.getElementById('codestackEmail');
let personalEmail = document.getElementById('personalEmail');
let personBtn = document.getElementById('personBtn')
let previousStudentsList = document.getElementById('previousStudents');
let previousStudents = [];
let maxPreviousStudents = 5;

function getStudentData(){
   return fetch('../data/data.json')
    .then( response => response.json())
    .then( data => {
        console.log(data)
        return data.people
    })    
}

getStudentData();

function getRandomPerson(people){
    let randomIndex =  Math.floor(Math.random() * people.length);
    console.log([randomIndex]);
    return people[randomIndex];
} 
personBtn.addEventListener('click', () => {
    getStudentData().then( people => {
        let randomStudent = getRandomPerson(people);
        console.log(randomStudent);
        names.innerText = randomStudent.names;
        codestackEmail.innerText = randomStudent.codestackEmail
        personalEmail.innerText = randomStudent.personalEmail
        updatePreviousStudents(randomStudent);
    })
});


function updatePreviousStudents(newStudent) {
    if (previousStudents.length >= maxPreviousStudents) {
        previousStudents.pop();
    }
    
    previousStudents.unshift(newStudent);
    
  
    previousStudentsList.innerHTML = previousStudents.map((student, index) => 
        `<li>
            ${index + 1}. ${student.names}<br>
            CodeStack Email: ${student.codestackEmail}<br>
            Personal Email: ${student.personalEmail}
        </li>`
    ).join('');
}
