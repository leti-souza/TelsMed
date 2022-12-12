const mongoose = require("mongoose");
const MedicacaoSchema = require("../models/MedicacaoSchema")
// const UserSchema = require("../models/UserSchema");
const bcrypt = require('bcrypt')

const criarMedicacao = async (request, response) => { //ok
    const { id, nome, fabricante, quantidade_embalagem, quantidade_a_ser_tomada, 
        miligramas, vezes_ao_dia, duracao_tratamento, 
        etiquetas: { cores, horarios, figura_e_horario}, para_que_serve} = request.body;

    const buscaNome = await MedicacaoSchema.find({ nome: nome })
   
    let ExisteNome = buscaNome.filter((medicacao) => medicacao.nome === nome)
    
    let nomeExisteNome = ExisteNome.find((medicacao) => medicacao.nome === nome)
    if (nomeExisteNome) {
        return response.status(404).json({ 
        message: `Não é possível cadastrar esta medicação, nome já existente em nosso sistema!`});
    }
    const buscaFabricante = await MedicacaoSchema.find({ fabricante })
    if (buscaFabricante.length !== 0) {
        return response.status(400).json({ 
        message: `Fabricante já existente em nosso sistema!` });
    }
    try {
        const medicacao = new MedicacaoSchema({
            id: id,
            nome: nome,
            fabricante: fabricante,
            quantidade_embalagem: quantidade_embalagem,
            quantidade_a_ser_tomada: quantidade_a_ser_tomada,
            miligramas: miligramas,
            vezes_ao_dia: vezes_ao_dia,
            duracao_tratamento: duracao_tratamento,
            etiquetas: {
                cores: cores,
                horarios: horarios,
                figura_e_horario: figura_e_horario
                },
            para_que_serve: para_que_serve
        })
        const salvarMedicacao = await medicacao.save();
        response.status(201).json({
            Prezados: "Medicação cadastrada com sucesso!",
            salvarMedicacao
        })

    } catch (error) {
        response.status(400).json({
            message: error.message
        })
    }
}
const buscarTodasMedicacoes = async (request, response) => {
    try {
        const medicacao = await MedicacaoSchema.find()

        if (medicacao.length > 1) {
            return response.status(200).json({ Prezades: `Encontramos ${medicacao.length} medicação em nosso sistema.`, medicacao})
        } else if (medicacao.length == 1) {
            return response.status(200).json({ Prezades: `Encontramos ${medicacao.length} medicação.`, medicacao })
        } else {
            return response.status(404).json({ Prezades: `Nenhuma medicação encontrada em nosso sistema.`})
        }

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}
const buscarMedicacaoId = async (request, response) => {  // ok
    const { id } = request.params
    try {
        if (id.length < 24 || id.length > 24) {
            return response.status(404).json({
                message: `Por favor, digite o ID correto da medicaçao`
            })
        }
        const medicacao = await MedicacaoSchema.find({ id })
        if (medicacao.length == 0) {
            return response.status(200).json({
                 message: `Medicação não encontrada.` })
        }
        response.status(200).json(medicacao)

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}
const atualizarMedicacao = async (request, response) => { //OK
    const { id } = request.params
    const { nome, fabricante, quantidade_embalagem, quantidade_a_ser_tomada, 
        miligramas, vezes_ao_dia, duracao_tratamento, 
        etiquetas: { cores, horarios, figura_e_horario}, para_que_serve} = request.body;
    try {
        if (id.length < 24 || id.length > 24) {
            return response.status(404).json({
                message: `Por favor digite o ID correto da medicação.`
            })
        }
        const medicacaoEncontrada = await MedicacaoSchema.updateOne({
            id, nome, fabricante, quantidade_embalagem, quantidade_a_ser_tomada, 
            miligramas, vezes_ao_dia, duracao_tratamento, 
            etiquetas: { cores, horarios, figura_e_horario}, para_que_serve
        })
        const medicacaoporId = await MedicacaoSchema.find({ id })
        if (medicacaoporId.length == 0) {
            return response.status(404).json({
                message: `Medicação não encontrada.`
            })
        }   
        response.json({medicacaoporId})
        
    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}
const deletarMedicacao = async (request, response) => { //ok
    const { id } = request.params
        try {
            if (id.length < 24 || id.length > 24) {
                return response.status(404).json({
                    message: `Por favor digite o id correto da medicação .`
                })
            }
            const medicacaoEncontrada = await MedicacaoSchema.deleteOne({
                id
            })
            if (medicacaoEncontrada.deletedCount === 1) {
                return response.status(200).send({
                    message: `A medicação foi deletada com sucesso!`
                })
            } else {
                return response.status(404).send({
                    message: "Medicação não encontrada."
                })
            }
    
        } catch (error) {
            response.status(500).json({
                message: error.message
            })
        }
    }

module.exports = {
criarMedicacao,
buscarTodasMedicacoes,
buscarMedicacaoId,
atualizarMedicacao,
deletarMedicacao
}
