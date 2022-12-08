const mongoose = require("mongoose");
const PacienteSchema = require("../models/PacienteSchema")
const UserSchema = require("../models/UserSchema");
const bcrypt = require('bcrypt')

const criarUsuario = async (request, response) => { // ok
    const hashedPassword = bcrypt.hashSync(request.body.senha, 10)
    request.body.senha = hashedPassword

    const emailExists = await UserSchema.exists({ email: request.body.email })

    if (emailExists) {
        return response.status(409).send({
            message: 'Email já cadastrado em nosso sistema!',
        })
    }

    try {
        const newUser = new UserSchema(request.body)

        const savedUser = await newUser.save()

        response.status(201).send({
            message: 'Usuário criado com suscesso!',
            savedUser,
        })
    } catch (err) {
        console.error(err)
        response.status(500).send({
            message: err.message,
        })
    }
}
const getAll = async (req, res) => {  //ok
    UserSchema.find(function (err, users) {
      if (err) {
        res.status(500).send({ message: err.message })
      }
      res.status(200).send(users)
    })
  };
const criarPaciente = async (request, response) => { //ok
    const { id, nome, cpf, nascimento, sexo, estado, cidade, telefone, comorbidades} = request.body;

    const buscaCidade = await PacienteSchema.find({ cidade: cidade })
   
    let ExisteCidade = buscaCidade.filter((paciente) => paciente.cidade === cidade)
    
    let nomeExisteCidade = ExisteCidade.find((paciente) => paciente.nome === nome)
    if (nomeExisteCidade) {
        return response.status(404).json({ 
        message: `Não é possível cadastrar este paciente, nome de cidade já existente em nosso sistema!` });
    }
    const buscaCpf = await PacienteSchema.find({ cpf })
    if (buscaCpf.length !== 0) {
        return response.status(400).json({ 
        message: `Número de CPF já existente em nosso sistema!` });
    }
    try {
        const paciente = new PacienteSchema({
            id: id,
            nome: nome,
            cpf: cpf,
            nascimento: nascimento,
            sexo: sexo,
            estado: estado,
            cidade: cidade,
            telefone: telefone,
            comorbidades: comorbidades
        })
        const salvarPaciente = await paciente.save();
        response.status(201).json({
            Prezados: "Paciente cadastrado com sucesso!",
            salvarPaciente
        })

    } catch (error) {
        response.status(400).json({
            message: error.message
        })
    }
}
const buscarTodosPacientes = async (request, response) => {
    try {
        const paciente = await PacienteSchema.find()

        if (paciente.length > 1) {
            return response.status(200).json({ Prezades: `Encontramos ${paciente.length} pacientes em nosso sistema.`, paciente })
        } else if (paciente.length == 1) {
            return response.status(200).json({ Prezades: `Encontramos ${paciente.length} paciente.`, paciente })
        } else {
            return response.status(404).json({ Prezades: `Nenhum pacienete encontrado em nosso sistema.`})
        }

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}
const buscarPacienteId = async (request, response) => { //ok 
    const { id } = request.params
    try {
        if (id.length < 24 || id.length > 24) {
            return response.status(404).json({
                message: `Por favor, digite o id correto do paciente`
            })
        }
        const paciente = await PacienteSchema.find({ id })
        if (paciente.length == 0) {
            return response.status(200).json({
                 message: `paciente não encontrado(a).` })
        }
        response.status(200).json(paciente)

    } catch (error) {
        response.status(500).json({
            message: error.message
        })
    }
}
const atualizarPaciente = async (request, response) => { //OK
    const { id } = request.params
    const { nome, cpf, nascimento, sexo, estado, cidade, telefone, comorbidades} = request.body;
    
    try {
        const PacienteAtualizado = await PacienteSchema.find({ id }).updateOne({
            nome, cpf, nascimento, sexo, estado, cidade, telefone, comorbidades
        })
        const cadastroAtualizado = await PacienteSchema.find({ id });
        
        if (cadastroAtualizado.length == 0) {
            return response.status(404).json({
              Prezado: `Paciente não foi encontrado.`,
            })
          }
          response.status(200).send({
            Prezado: "Paciente atualizado com sucesso",
            cadastroAtualizado,
          })

        } catch (error) {
          response.status(500).json({
            message: error.message,
          });
        }
}
const deletarPaciente = async (request, response) => { //ok
    const { id } = request.params
    const { nome, cpf, nascimento, sexo, estado, cidade, telefone, comorbidades} = request.body;
    try {
        const PacienteDeletado = await PacienteSchema.find({ id }).updateOne({
            nome, cpf, nascimento, sexo, estado, cidade, telefone, comorbidades
        })
        const cadastroDeletado = await PacienteSchema.find({ id });
    
        if (cadastroDeletado.length == 0) {
            return response.status(404).json({
              Prezado: `Paciente não foi encontrado.`,
            })
          }
          response.status(200).send({
            Prezado: "Paciente delatado com sucesso",
            cadastroDeletado,
          })
          
        } catch (error) {
            response.status(500).json({
              message: error.message,
            });
          }
  }
  module.exports = {
    criarUsuario,
    getAll,
    criarPaciente,
    buscarTodosPacientes,
    buscarPacienteId,
    atualizarPaciente,
    deletarPaciente
  }