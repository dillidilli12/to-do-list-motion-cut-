const newTask = document.getElementById('new-task');
const addTask = document.getElementById('add-task');
const tasks = document.getElementById('tasks');

addTask.addEventListener('click', () => {
  if (!newTask.value.trim()) {
    alert('Please enter a task');
    return;
  }

  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'checkbox-' + tasks.children.length;

  const label = document.createElement('label');
  label.htmlFor = checkbox.id;
  label.textContent = newTask.value;

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('edit');

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete');

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(editButton);
  li.appendChild(deleteButton);

  tasks.appendChild(li);
  newTask.value = '';
});

tasks.addEventListener('click', (e) => {
  if (e.target.classList.contains('edit')) {
    const li = e.target.parentNode;
    const label = li.querySelector('label');
    const checkbox = li.querySelector('input[type="checkbox"]');

    if (checkbox.checked) {
      label.style.textDecoration = 'line-through';
    } else {
      label.style.textDecoration = 'none';
    }

    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.value = label.textContent;
    newInput.style.display = 'inline';
    label.style.display = 'none';

    li.insertBefore(newInput, label);
    newInput.focus();

    newInput.addEventListener('blur', () => {
      label.textContent = newInput.value;
      label.style.display = 'inline';
      li.removeChild(newInput);
    });
  } else if (e.target.classList.contains('delete')) {
    const li = e.target.parentNode;
    tasks.removeChild(li);
  }
});
