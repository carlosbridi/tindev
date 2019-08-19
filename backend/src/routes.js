const express = require('express');
const DevController = require('./controllers/DevController')
const LikeController = require('./controllers/LikeController')
const DislikeController = require('./controllers/DislikesController')

const routes = express.Router();


routes.get('/', (req, res) => {
    return res.send({message: `Hello ${req.query.nome}` });
});

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;