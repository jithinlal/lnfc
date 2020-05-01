const express = require('express');
const router = express.Router();

--const {mwrname}Middleware = require('../Middlewares/{mwrname}.middleware');--

const {base}Controller = require('../Controllers/{base}.controller');

router.get('/', {Middleware, }{base}Controller.get{Base}s);
router.get('/:id', {Middleware, }{base}Controller.get{Base});
router.post('/', {Middleware, }{base}Controller.store{Base});
router.put('/:id', {Middleware, }{base}Controller.update{Base});
router.delete('/:id', {Middleware, }{base}Controller.delete{Base});

module.exports = router;
