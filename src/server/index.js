const express = require('express');
const applyEndpoints = require('./endpoints');
const applyMiddlewares = require('./middlewares');
const createExpressServer = async app => {
	const server = express();
	server.use(express.json());
	applyMiddlewares(server, app);
	applyEndpoints(server, app);
    
    await app.db.initDB();

	server.get('/', async (req, res) => {
		if(process.env.NODE_ENV === 'develop'){
				res.send('Test Enviroment');
		} else {
		    res.sendStatus(200);
		}
    });

	return server;




	
};

module.exports = createExpressServer;