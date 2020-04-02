var test = require('tape');
var logic = require('/logic.js');
arr1 = [{
  id: 0,
  description: 'smash avocados',
  done: false,
}
]

arr2=[{
  id: 0,
  description: 'smash avocados',
  done: false,
}, {
  id: 1,
  description: 'gym',
  done: false,
}];


test('addTodo Output', function (t) {
  var actual = logic.addTodo(arr1, 'gym');
  var expected = [{
    id: 0,
    description: 'smash avocados',
    done: false,
  }, {
    id: 1,
    description: 'gym',
    done: false,
  }];

  t.deepEqual(actual, expected, 'check if add function works ');
  t.end();
});



test('deleteTodo Output', function (t) {
  var actual = logic.deleteTodo(arr2,0);
  var expected = [{
    id: 1,
    description: 'gym',
    done: false,
  }];

  t.deepEqual(actual, expected, 'check if delete function works ');
  t.end();
});



test('markTodo Output', function (t) {
  var actual = logic.markTodo(arr2,0);
  var expected = [{
    id: 0,
    description: 'smash avocados',
    done: true,
  }, {
    id: 1,
    description: 'gym',
    done: false,
  }];


  t.deepEqual(actual, expected, 'check if mark function works ');
  t.end();
});



test('sort Output', function (t) {
  var actual = logic.sortTodos(arr2,0);
  var expected = [{
    id: 0,
    description: 'smash avocados',
    done: false,
  }, {
    id: 1,
    description: 'gym',
    done: false,
  }];


  t.deepEqual(actual, expected, 'check if sort function works ');
  t.end();
});