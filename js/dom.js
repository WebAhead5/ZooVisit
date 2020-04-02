// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('SubContainer');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'Lion',done:false},
    { id: -2, description: 'Elephant',done:false },
    { id: -1, description: 'Panda',done:false },
    { id: 0, description: 'Griaffe',done:false },,

  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    todoNode.textContent =todo.description;

    

    // Delete Button 

    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.innerText='delete'; 

    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    //MarkFunction

    var markTodo=document.createElement('INPUT');
    markTodo.setAttribute("type", "checkbox");
  
    if (todo.done) {
      markTodo.checked=true;
    }

    markTodo.addEventListener('click', function(event) {
      
    var newState = todoFunctions.markTodo(state, todo.id);
    
    update(newState);
    console.log(newState);

 });
  todoNode.appendChild(markTodo);



  return todoNode;

}


  // Add Function

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      var inPut=document.getElementById('Animalinput').value;
      if (inPut != "") {
        var newState=todoFunctions.addTodo(state,inPut);
        update(newState);
        clearBox('Animalinput');
      }
      else {
        alert('You havent enter an animal');
    
      }
      
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



function clearBox(elementID) {

  document.getElementById(elementID).value ="";
}

