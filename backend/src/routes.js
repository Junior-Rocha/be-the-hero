const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// Route Session
routes.post('/sessions', SessionController.create);

// Routes Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// Routes ProfileController
routes.get('/profile', ProfileController.index);

// Routes Incidents
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;
