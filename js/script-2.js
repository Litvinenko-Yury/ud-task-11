let age = document.getElementById('age');
console.log(age);

function showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " + age.value);
}
showUser('Иванов', 'Иван');

/*=========*/
'use strict'

function hello() {
    console.log('функция hello = ' + this);
}

hello();