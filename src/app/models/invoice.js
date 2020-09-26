const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
    numero: String,
    valor: Number,
    descricao: String,
    cliente:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Client'
    }
});

module.exports = mongoose.model("nota_fiscal", invoiceSchema);