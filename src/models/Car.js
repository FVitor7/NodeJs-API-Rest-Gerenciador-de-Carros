const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CarSchema = new mongoose.Schema({
    Modelo:{
        type: String,
        required: true,
    },
    AnoModelo: {
        type: String,
        required: true,
    },
    Marca: {
        type: String,
        required: true,
    },
    Valor: {
        type: String,
        required: true,
    },
    Combustivel: {
        type: String,
        required: true,
    },
    CodigoFipe: {
        type: String,
        required: true,
    },
    MesReferencia: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

CarSchema.plugin(mongoosePaginate);

mongoose.model('Car', CarSchema);