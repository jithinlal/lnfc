const express = require('express');
const router = express.Router();

const {base}Controller = require('../Controllers/{base}.controller');

router.get('/', {base}Controller.get{Base}s);
router.get('/:id', {base}Controller.get{Base});
router.post('/', {base}Controller.store{Base});
router.put('/:id', {base}Controller.update{Base});
router.delete('/:id', {base}Controller.delete{Base});

module.exports = router;
