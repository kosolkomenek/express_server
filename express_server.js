const express = require('express');
const app = express();
// Allow any method from any host and log requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
})
// Handle POST requests that come in formatted as JSON
app.use(express.json())
// A default hello word route
app.get('/', (req, res,next) => {
    res.send(
    {item1:{
    	name:'phet',
    	hobby:'Tennis',
    	age:'18'
    },
    item2:{
    	name: 'heng',
    	hobby:'soccer',
    	age:'23'
    },
    item3:{
    	name: 'bell',
    	hobby:'basketball',
    	age:'20'
    }});
});
app.post('/test', function(req, res, next){
    console.log(req.body);
 });
// start our server on port 4201
app.listen(4201, '127.0.0.1', function() {
    console.log("Server now listening on 4201");
});
