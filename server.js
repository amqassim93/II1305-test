const express = require('express');                                  
const expbs = require('express-handlebars');                         //skapa app och ha express och express-handlebars fom krav
const path = require('path');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const Worker = require('./models/workers')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json())



const dbURI = 'mongodb+srv://dbuser1:proton1337@proton.3n7yz.mongodb.net/hcbealesdb?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology:true })
.then((result) => console.log('beep beep boop boop connected to db'))
.catch((err) => console.log(err));

//=========================================Database configuration ====================================================
app.get('/add-worker', (req, res) => {
    const worker = new Worker({
        name: 'Malin',
        username: 'malin1',
        password: '123abc'
    });

    worker.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) =>{
        console.log(err);
    })
})



app.get('/all-workers', (req, res) => {
    Worker.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) =>{
        console.log(err);
    })
})

// let workerUsername = Worker.findOne({username: 'anton'}).exec();
// console.log(workerUsername);







const hbs = expbs.create({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/mainLayout'),
    partialsDir: path.join(__dirname, 'views/pieces'),

});

app.use(express.static('public'));

app.engine('handlebars', hbs.engine);                                  //säg att express-handlebars är view engine
app.set('view engine', 'handlebars');                               //sätt express-handlebars som view engine som vi använder

//Routing
// app.get('/', (req, res)=> {
//     res.render('homepage', {
//         title: 'Welcome to H C Beales & Co',
//         loggedIn: false
//     });
// });
app.use('/', require('./routes/home'));
app.use('/home', require('./routes/home'));
app.use('/admin', require('./routes/admin'));
app.use('/registration', require('./routes/registraion'));
app.use('/login', require('./routes/login'));

//app.get('/gridtest', (req, res)=> {
//    res.render('gridtest', {
//        title: 'Welcome to H C Beales & Co',
//        loggedIn: false
//    });
//});













//Tutorial stuff-------------------------------------------------------------------------------------------------------------------------
app.get('/other', (req, res) => {                                        //skapas sida
    res.render("index", { 
        title: 'Home Page', 
        name:'Anton Antonsson',
        isDisplayName: true,
        nameList: [
            {firstName: 'då', lastName: 'hej'},
            {firstName: 'bye', lastName: 'good'},
            {firstName: 'wiedersehen', lastName: 'auf'},
        ],
        loggedIn: true
    });                                                             //dokumentet i layout foldern gör att det här funkar
});

app.get('/about', (req, res) => {                                   //skapas ny route "/about"

    res.render("about", { 
        title: 'About',
        loggedIn: true 
    });                        //dokumentet i layout foldern gör att det här funkar
});

app.get('/dvt', (req, res) => {                                   //skapas ny route "/about"

    res.render("dubblevstripple", { title: 'Dubble vs tripple', 
    html1: '<p> hejhej </p>',
    html2: '<p>banan</p>'
 });                        //dokumentet i layout foldern gör att det här funkar

});

app.get('/dashboard', (req, res) => {                                        //skapas sida
    res.render("dashboard", { 
        isListEnabled: false,
        author: {
            firstName: 'Peter',
            lastName: 'James',
            project: {
                name: 'Business Administration App'
            }
        }
    });                                                             //dokumentet i layout foldern gör att det här funkar
});

app.get('/contact', (req, res) => {                                        //skapas sida
    res.render("contact", { 
        people: ["Anton", "Hans", "Malin"],
        user: {
            username: 'eyy',
            age:'yomama',
            phone: '1234567890'

        },
        lists: [
            {
                items: ['Mango', 'Banana', 'Äpple', 'Pinapple']
            },
            
            {
                items: ['Potatoe', 'Manioc', 'Rödbeta', 'Avocado']
            }]
        
    });                                                             //dokumentet i layout foldern gör att det här funkar
});
app.get('/look', (req, res) => {                                   //skapas ny route "/about"

    res.render("lookup", {user: {
        username: ':)',
        age:'666',
        phone: '1234567890'

    }});                        //dokumentet i layout foldern gör att det här funkar
});
app.listen(8888, ()=>{                                              //sätt vilken local server som ska finnas
    console.log('Server is starting at port', 8888);
});

/* 

bra youtube kommentarer:

 If you want to change layout, in views/layouts/about.handlebars or /main.handlebars you can switch layout template with this:
app.get('/', (req, res) => {

    res.render('index', {layout: 'about'});

});

I think now you have to mention if there's no layout for a page. Code:
app.get("/", (req, res) => {
  res.render("index", { layout: false });
});

*/
