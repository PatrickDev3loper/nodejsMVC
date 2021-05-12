const express = require('express');
const router = express.Router()
const controller = require('../controllers/quadros.controller');

router.get('/', controller.listarQuadros)
router.get('/adicionar-quadro', controller.adicionarQuadrosGet)
router.post('/adicionar-quadro', controller.adicionarQuadrosPost)
router.get('/editar-quadro/:id', controller.editarQuadrosGet)
router.post('/editar-quadro/:id', controller.editarQuadrosPost)
router.get('/deletar/:id', controller.deletarQuadros)

module.exports = router;