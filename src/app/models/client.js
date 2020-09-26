const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    nome: String,
    telefone: String,
    invoice:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Invoice',
    }
});

module.exports = mongoose.model("clientes", clientSchema);