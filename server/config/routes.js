var controller = require('../controllers/apps.js');
var path = require('path');



module.exports = function(app) {
    app.get('/getall', function(request, response){
        console.log("reached the route for getall")
        controller.GetAll(request, response);
    });

    app.post('/makeapp', function(request, response){
        console.log("reached the route for makerest")
        controller.add(request, response);
    });

    app.get('/getone/:id', function(request, response) {
        console.log("reached the get one on routes")
        controller.getOne(request, response); 
    });

    app.put('/alter/:id', function(request, response){
        controller.alter(request, response);  
    })

    app.delete('/delete/:id', function(request, response) {
        controller.removepet(request, response); 
    })

    app.patch('/increment/:id', function(request, response) {
        console.log("Reached the increment route")
        controller.addlike(request, response);
    })

    app.get('*', (req, res) => {
        res.sendFile(path.resolve('./MeanApp/dist/index.html'));
    })
}