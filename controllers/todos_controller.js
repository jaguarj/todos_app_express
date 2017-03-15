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

module.exports = router;