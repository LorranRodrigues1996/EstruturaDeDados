import gerenciamentoEstoque from "../services/estoqueService.js";
import fs from 'fs'
const DADOS = './dados.json'
const listaVendas = async (req, res) => {
    console.log("Acessou a fumção listaVenda()")
    try {
        const listar = await gerenciamentoEstoque.listar()
        return res.status(200).json({success: true, listar})
    } catch (error) {
        console.log("Erro de conexão com o banco de dados", error)
    }
    
}

const adicionarProduto = async (req, res) => {
    console.log("Acessou a função adicionarProduto()")
    const { id, nome, quantidade, preco } = req.body
    try {
        const adiciona = await gerenciamentoEstoque.adicionar({
            id: crypto.randomUUID(),
            nome,
            quantidade,
            preco
        })
        return res.status(200).json({success: true, adiciona})
    } catch (error) {
        console.log("Erro de conexão com o banco de dados", error)
    }
}

const editaProduto = async (req, res) => {
    console.log("Acessou a função editaProduto()")
    const  { id } = req.params
    const dadosAtualizados = req.body
    try {
        const buscaProduto = await gerenciamentoEstoque.editar(id, dadosAtualizados)
        if (!buscaProduto) {
            return res.status(404).json({
                success: false,
                message: "Produto não encontrado."
            });
        }
        return res.status(200).json({success: true, buscaProduto})
    } catch (error) {
        console.log("Erro de conexão com o banco de dados", error)
    }
}

const buscaProdutoPeloId = async (req, res) => {
    console.log("Acessou a função buscaProdutoPeloId()")
    const { id } = req.params
    try {
        const buscaProduto = await gerenciamentoEstoque.pegarId(id)
        return res.status(200).json({success: true, buscaProduto})
    } catch (error) {
        console.log("Erro de conexão com o banco de dados", error)
    }
}
const deletarUmProdutoPeloId = async (req, res) => {
    console.log("Acessou a função buscaProdutoPeloId()")
    const { id } = req.params
    try {
        const buscaProduto = await gerenciamentoEstoque.deletar(id)
        return res.status(200).json({success: true, buscaProduto})
    } catch (error) {
        console.log("Erro de conexão com o banco de dados", error)
    }
}

export {
    listaVendas,
    adicionarProduto,
    editaProduto,
    buscaProdutoPeloId,
    deletarUmProdutoPeloId
}