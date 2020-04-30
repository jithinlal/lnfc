const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const {base}Schema = new Schema({});

const {base} = mongoose.model('{Base}', {base}Schema);

module.exports = {base};
