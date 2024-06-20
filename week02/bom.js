
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
  if (input.value.trim() !== '') {
    const li = document.createElement('li');

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';

    li.textContent = input.value;

    li.appendChild(deleteButton);

    list.appendChild(li);

    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    input.value = '';
  } else {
    alert('Please enter a chapter title.');
  }

  input.focus();
});
