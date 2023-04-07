const express = require('express'),
      router = express.Router();

const homeController = require('../controllers/homeController')


module.exports = function(){


   router.get('/', homeController.prueba)
    return router;
}