// function keyEvent(event) {
//   if (event.key === 'Enter') {
//     addTodo();
//   }
// }
// const todoList = [{
//   name: 'wash cloth',
//   dueDate: '2024-14-10'
// }, {
//   name: 'eat dinner',
//   dueDate: '2024-14-10'
// }];


// function renderTodoList() {

//   let todoListHTML = '';

//   for(let i = 0; i < todoList.length; i++) {
//     const todoObject  = todoList[i];
//    // const name = todoObject.name;
//     // const dueDate = todoObject.dueDate;
//     const { name, dueDate } = todoObject;
//     const html = `
//     <div>
//     ${name}
//     </div>
//     <div>
//      ${dueDate} 
//      </div>
//      <button onclick = "
//      todoList.splice(${i}, 1);
//      renderTodoList();
//      " class = "delete-button">Delete</button>
//     `;
//     todoListHTML += html;
//   }
//   document.querySelector('.js-todo').innerHTML = todoListHTML;
// }
// renderTodoList();

// function addTodo() {
//   const inputElem = document.querySelector('.js-name-input');
//   const name = inputElem.value

//   const dateInputElem = document.querySelector('.js-date-input');
//   const dueDate = dateInputElem.value;

//   todoList.push({
//     name,
//     dueDate
//     });

//   inputElem.value = '';
//   renderTodoList();
// }




function keyEvent(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
}

const todoList = [
  { name: 'wash cloth', dueDate: '2024-10-14', completed: false },
  { name: 'eat dinner', dueDate: '2024-10-14', completed: false }
];

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate, completed } = todoObject;

    const html = `
      <div class="todo-item ${completed ? 'completed' : ''}">
        <input type="checkbox" 
          ${completed ? 'checked' : ''} 
          onchange="toggleComplete(${i})">
        <span>${name}</span>
      </div>
      <div>${dueDate}</div>
      <button onclick="deleteTodo(${i})" class="delete-button">Delete</button>
    `;

    todoListHTML += html;
  }

  document.querySelector('.js-todo').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElem = document.querySelector('.js-name-input');
  const name = inputElem.value.trim();

  const dateInputElem = document.querySelector('.js-date-input');
  const dueDate = dateInputElem.value;

  if (name !== '' && dueDate !== '') {
    todoList.push({ name, dueDate, completed: false });
    inputElem.value = '';
    renderTodoList();
  }
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
}

function toggleComplete(index) {
  todoList[index].completed = !todoList[index].completed;
  renderTodoList();
}

renderTodoList();
