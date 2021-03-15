const db = require('./db');

const Aluno = db.sequelize.define('alunos', {
    nome: {
        type: db.Sequelize.STRING
    }
});

module.exports = Aluno;