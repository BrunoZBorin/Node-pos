const express = require('express');
const router = express.Router();
const costumerController = require('../controllers/costumer-controller')

const mongoose = require('mongoose');


router.post('/', costumerController.post);

router.get('/', costumerController.getAll);

router.get('/:costumerId', costumerController.getById )

router.put('/:costumerId', costumerController.put)

router.delete('/:costumerId', costumerController.delete);
module.exports = router;