const UserSchema = require('../models/UserSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET;

const login = (request, response) => {
    try {
        UserSchema.findOne({ email: request.body.email }, (error, user) => {
            console.log("O Usuário está correto!", user)
            if (!user) {
                return res.status(404).send({
                    message: 'Usuário não encontrado!',
                    email: `${request.body.email}`
                });
            }
            const validPassword = bcrypt.compareSync(request.body.senha, user.senha)
            console.log("A senha está correta?", validPassword)

            if (!validPassword) {
                return response.status(401).send({
                    message: "Lamento, mas sua senha esta incorreta!",
                    statusCode: 401
                })
            }

            // jwt.sign(nome do usuário, SEGREDO)
            const token = jwt.sign({ nome: user.nome }, SECRET);
            console.log("TOKEN CORRETO", token)

            response.status(200).send({
                message: "Olá, voce esta logada!",
                token
            })
        })
    } catch (err) {
        console.error(err)
    }
};

module.exports = {
    login
};