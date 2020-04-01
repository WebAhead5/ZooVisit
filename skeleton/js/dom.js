// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'first todo',done:false},
    { id: -2, description: 'second todo',done:false },
    { id: -1, description: 'third todo',done:false },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    todoNode.textContent =todo.description;
    console.log(todoNode.textContent);
    // you will need to use addEventListener
    
    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.innerText='delete'; 

    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    var markTodo=document.createElement('INPUT');
    markTodo.setAttribute("type", "checkbox");
    //markTodo.attributes('id','checkbox')

    markTodo.addEventListener('click', function(event) {
    var newState = todoFunctions.markButton(state, todo.id);
    update(newState)

 });
  todoNode.appendChild(markTodo);

    // add markTodo button

    // add classes for css
  return todoNode;

}
  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      var inPut=document.getElementById('inputid').value;
      var newState=todoFunctions.addTodo(state,inPut);
      console.log(newState);
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();