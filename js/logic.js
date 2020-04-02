// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function () {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  cloneArrayOfObjects: function (todos) {
    return todos.map(function (todo) {
      return JSON.parse(JSON.stringify(todo));
    });
  },

  //Add Function 

  addTodo: function (todos, newTodo) {
    var newarr2 = this.cloneArrayOfObjects(todos);
    if (!checkdup(newarr2, newTodo)) {
      var newarr = this.cloneArrayOfObjects(todos);
      let id1 = this.generateId();
      newObj = { id: id1, description: newTodo, done: false }
      newarr.push(newObj);
      return this.sortTodos(newarr);
    }
return todos;

  },
  // Delete Function
  deleteTodo: function (todos, idToDelete) {


    var newarr = this.cloneArrayOfObjects(todos);
    newarr = newarr.filter(function (obj) {
      return obj.id != idToDelete;
    });
    return newarr
  },
// Mark (Check) Function
  markTodo: function (todos, idToMark) {
    var newarr = this.cloneArrayOfObjects(todos);
    newarr = newarr.map((obj) => {
      if (obj.id == idToMark) {
        if (obj.done != true) {
          obj.done = true;
        } else obj.done = false;
      }
      return obj;
    });

    return newarr;

  },

  sortTodos: function (todos, sortFunction) {
    var newarr = this.cloneArrayOfObjects(todos)
    newarr = newarr.sort(sortFunction);
    return newarr;

  },
};
function checkdup(todos, newstr) {
  
  var newstr=newstr.toUpperCase();
  console.log("checkfunc");
  return todos.filter(function(val){
    return val.description.toUpperCase()==(newstr);
  }).length>0;


}


function sortFunction(a, b) { return (a.description < b.description); }
// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details: 
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}
