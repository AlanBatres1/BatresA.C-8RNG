
let name = document.getElementById('name');

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


//Create a function that will display the data onto the DOM
personBtn.addEventListener('click', () => {
    getStudentData().then( people => {
        let randomStudent = getRandomPerson(people);
        console.log(randomStudent);
        name.innerText = randomStudent.name;
        
    })
});