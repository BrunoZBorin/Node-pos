const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    email: String,
    password: String,
});

module.exports = mongoose.model("costumer", productSchema);