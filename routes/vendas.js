import express from 'express'
import { listaVendas, adicionarProduto, editaProduto, buscaProdutoPeloId, deletarUmProdutoPeloId } from '../controllers/vendasController.js';
const router = express.Router()

router.get('/listar', listaVendas);
router.get('/:id', buscaProdutoPeloId);
router.post('/adiciona', adicionarProduto);
router.put('/editar/:id', editaProduto);
router.delete('/:id', deletarUmProdutoPeloId);

export default router