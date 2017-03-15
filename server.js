/* packages */
var path        = require('path');
var logger      = require('morgan');
var express     = require('express');
var hbs         = require('hbs');
var bodyParser  = require('body-parser');
// include the method-override package
var methodOverride = require('method-override');
/* app settings*/
var app         = express();
var port        = process.env.PORT || 3000;
/* set up the application params*/
var todosController = require('./controllers/todos_controller.js');

// log
app.use( logger('dev'));

/*Views*/
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
// use bodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
// use methodOverride.  We will be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));

app.use('/todos', todosController);


// console.log(req.params.id);

/* HOME */
app.get('/', function(req,res) {
  res.render('welcome');
});

// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});
