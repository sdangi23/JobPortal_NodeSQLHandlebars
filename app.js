const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes/gig');

const db = require('./config/database');

  //test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

const app = express();

//HandleBars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//set public as static folder
app.use(express.static(path.join(__dirname, 'public')));

//index route
app.get('/' , (req, res) => {
    res.render('index' , { layout : 'landing'})
})

app.use('/gigs' , routes);

app.listen(3000, console.log("server started on port 3000"));


