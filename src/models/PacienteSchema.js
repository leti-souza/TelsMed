const mongoose = require('mongoose');

const PacienteSchema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: Number,
        required: true
    },
    nascimento: {
        type: String,
        required: false
    },
    sexo: {
        type: String,
        required: false
    },
    estado: {
        type: String,
        required: false
    },
    cidade: {
        type: String,
        required: false
    },
    telefone: {
        type: Number,
        required: false
    },
    comorbidades: {
        type: Array,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('paciente', PacienteSchema);
