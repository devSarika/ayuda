var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');


var jwt = require('jwt-simple')
var bcrypt = require('bcrypt')
var Volunteer = require('./backend/models/volunteer.js');

app.use(cors()); 
app.use(bodyParser.json());

app.post('/volunteerregister', (req, res) => {

    //validating volunteer data

    var volunteerData = req.body;
    var volunteer = new Volunteer((volunteerData));
    volunteer.save((err, newvolunteer) => {
        if (err)
            return res.status(401).send({ message: 'Error saving ' })
        var payload = { sub: newvolunteer._id }

         var token = jwt.encode(payload, '123')

        res.status(200).send({ token })

    })
})


mongoose.connect('mongodb+srv://saisarika:saisarika@cluster0-o6ntu.mongodb.net/ayuda?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (!err)
        console.log('Connected to DB')
})
port = process.env.PORT || 8000;
app.listen(port);