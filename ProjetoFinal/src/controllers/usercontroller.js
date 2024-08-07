const User = require('../models/Users');

module.exports = {
    // Busca todos os usuários
    async index(req, res) {
        try {
            const usuarios = await User.findAll();
            if (!usuarios || usuarios.length === 0) {
                return res.status(200).send({ message: "Nenhum usuário cadastrado" });
            }
            return res.status(200).send({ usuarios });
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            return res.status(500).send({ error: 'Erro ao buscar usuários' });
        }
    },

    // Cria um novo usuário
    // Exemplo para store
    async store(req, res) {
        const { nome, email, senha } = req.body;

        try {
            const newUser = await User.create({
                NomeUsuario: nome,
                emailUsuario: email,
                SenhaUsuario: senha
            });
            return res.status(201).send(newUser);
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            return res.status(500).send({ error: 'Erro ao criar usuário' });
        }
    },


    // Atualiza um usuário existente
    async update(req, res) {

    },

    // Deleta um usuário existente
    async delete(req, res) {

    },
};
