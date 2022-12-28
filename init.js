
function start()
{
    const initPerson = personGenerator.getPerson();
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#patronymOutput').innerText = initPerson.patronym;
    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#professionOutput').innerText = initPerson.profession;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#birthDateOutput').innerText = initPerson.birthDate;
    document.querySelector('#birthYearOutput').innerText = initPerson.birthYear;
};

document.querySelector('#btnRun').addEventListener('click', function() {
    start()
})

document.querySelector('#btnClear').addEventListener('click', function() {
    document.querySelector('#firstNameOutput').innerText = "";
    document.querySelector('#patronymOutput').innerText = "";
    document.querySelector('#surnameOutput').innerText = "";
    document.querySelector('#professionOutput').innerText = "";
    document.querySelector('#genderOutput').innerText = "";
    document.querySelector('#birthDateOutput').innerText = "";
    document.querySelector('#birthYearOutput').innerText = "";
})
