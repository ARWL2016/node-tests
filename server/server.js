const express =require('express');

var app = express(); 

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found', 
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.status(200).send([{
        name: "Al", 
        age: 10
    }, {
        name: "Doug", 
        age: 5
    }, {
        name: "Bob", 
        age: 1
    }]);
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});

module.exports.app = app; 