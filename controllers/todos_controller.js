var express = require('express');
var router = express.Router();
var data = require('../data.js');

/* INDEX TODOS */
router.get('/', function(req,res) {
    res.render('todos/index', {
        todos: data.seededTodos
    });
});

/* CREATE TODO */
router.post('/', function(req, res){
    var newTodo = {
        description: req.body.description,
        urgent: req.body.urgent
    };

    console.log(newTodo);
    data.seededTodos.push(newTodo);
    res.redirect('/todos');
    // res.send("Create a new todo is working!");
});

// new
router.get('/new', function(req, res){
    res.render('todos/new');
});

// show
router.get('/:id', function(req,res) {
    var todo = data.seededTodos[req.params.id];

    res.render('todos/show', {
        todo: todo
    });
});

// edit
router.get('/:id/edit', function(req, res){
  res.render('todos/edit', {
    todo: {
      description: data.seededTodos[req.params.id].description,
      urgent: data.seededTodos[req.params.id].urgent,
      id: req.params.id
    }
  });
});

// update
router.put('/:id', function(req, res) {
  var todoToEdit = data.seededTodos[req.params.id];

  todoToEdit.description = req.body.description;
  todoToEdit.urgent = req.body.urgent;

  res.redirect('/todos');
});

// Delete
router.delete('/:id', function(req, res) {
    data.seededTodos.splice(req.params.id, 1); // remove the item from the array

    res.redirect('/todos');  // redirect back to the index route
});


module.exports = router;
