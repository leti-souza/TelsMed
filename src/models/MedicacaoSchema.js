const mongoose = require('mongoose');

const MedicacaoSchema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    nome: {
        type: String,
        required: true
    },
    fabricante: {
        type: String,
        required: true
    },
    quantidade_embalagem: {
        type: String,
        required: false
    },
    quantidade_a_ser_tomada: {
        type: String,
        required: false
    },
    miligramas: {
        type: String,
        required: false
    },
    vezes_ao_dia: {
        type: Number,
        required: true
    },
    duracao_tratamento: {
        type: String,
        required: true
    },
    etiquetas: {
        cores: {
            type: String,
            required: true
        },
        horarios: {
            type: Number,
            required: true
        },
        figura_e_horario: {
            type: String,
            required: true
        }
    },
    Para_que_serve: {
        type: Array,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('medicacao', MedicacaoSchema);
