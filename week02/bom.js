const input = document.querySelector('#favechap');
const button = document.querySelectro('button');
const list = document.querySelector('______');
const li = document.createElement('li');
const deleteButton = document.createElement('button')
deleteButton.textContent = '❌';
li.textContent = input.value;
li.append(deleteButton);
list.append(li);
input.value = '';