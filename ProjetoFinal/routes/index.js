var express = require('express');
var router = express.Router();
const app = express();
app.use(express.json());
const usersController = require('../src/controllers/usercontroller')


/* GET home page. */
// Página inicial
router.get('/', (req, res) => {
  res.render('Login');
});

// Rotas de login
router.get('/Login', (req, res) => {
  res.render('Login');
});

router.post('/Login', (req, res) => {
  res.redirect('/TelaPrincipal');
});

// Rotas de cadastro
router.get('/cadastro', (req, res) => {
  res.render('cadastro');
});

router.post('/cadastro', async (req, res) => {
  try {
    const result = await usersController.store(req);
    if (result.success) {
      return res.redirect('/TelaPrincipal');
    } else {
      return res.status(500).send(result.error);
    }
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    return res.status(500).send('Erro ao cadastrar usuário');
  }
});

// Tela principal
router.get('/TelaPrincipal', (req, res) => {
  res.render('TelaPrincipal');
});


//telaperfil

router.get('/Perfil', (req, res) => {
  res.render('Perfil');
});


// Rotas para novas tarefas
router.get('/novasTarefas', (req, res) => {
  res.render('novasTarefas');
});

// Rotas para tarefas
router.get('/Tarefas', (req, res) => {
  res.render('Tarefas');
});

// Rotas para tarefas específicas (se necessário)
router.get('/Tarefa', (req, res) => {
  res.render('Tarefa');
});

module.exports = router;