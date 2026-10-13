let estoque = []
import { readFile, writeFile } from 'node:fs/promises';
import fs from 'fs'
const filePath = new URL('../dados.json', import.meta.url);

async function adicionarProduto(data) {
    console.log("DADOS RECEBIDOS: ", data)
    try {
        const contents = await readFile(filePath, 'utf8');
        const produtos = JSON.parse(contents);
        produtos.push(data);
        await writeFile(
            filePath,
            JSON.stringify(produtos, null, 2),
            'utf8'
        );
        return data;
    } catch (err) {
        console.error(err.message);
    }
}
async function listarProdutos() {
    try {
        const contents = await readFile(filePath, { encoding: 'utf8' });
        return contents
    } catch (err) {
        console.error(err.message);
    }
}
async function pegaIdDoProduto(id) {
    try {
        const busca = await readFile(filePath, { encoding: 'utf8' })
        const produto = JSON.parse(busca)
        const encontrado = produto.find(p => p.id === id)
        console.log(encontrado)
        return encontrado
    } catch (error) {
        console.log("Erro ao buscar usuários: ", error)
    }
}
async function editaProduto(id, dadosAtualizados) {
    console.log("ID: ", id, "DADOS: ", dadosAtualizados)
    try {
        const busca = await readFile(filePath, 'utf8');
        const produtos = JSON.parse(busca);
        const indice = produtos.findIndex(p => p.id === id);
        if (indice === -1) {
            console.log('Produto não encontrado.');
            return null;
        }
        produtos[indice].nome = dadosAtualizados.nome;
        produtos[indice].preco = dadosAtualizados.preco;
        produtos[indice].quantidade = dadosAtualizados.quantidade;
        await writeFile(
            filePath,
            JSON.stringify(produtos, null, 2),
            'utf8'
        );
        console.log('Produto atualizado com sucesso!');
        return produtos[indice];
    } catch (error) {
        console.error('Erro ao editar produto:', error);
        throw error;
    }
}
async function deletaProduto(id) {
    try {
        const busca = await readFile(filePath, 'utf8');
        const produtos = JSON.parse(busca);
        const indice = produtos.findIndex(p => p.id === id);
        if (indice === -1) {
            console.log('Produto não encontrado.');
            return null;
        }
        //desestruturação do array
        const [produtoRemovido] = produtos.splice(indice, 1);
        await writeFile(
            filePath,
            JSON.stringify(produtos, null, 2),
            'utf8'
        );
        console.log('Produto removido:', produtoRemovido);
        return produtoRemovido;
    } catch (error) {
        console.log("Erro ao buscar usuários: ", error)
    }
}
const gerenciamentoEstoque = {
    async listar() {
        const list = await listarProdutos()
        return list
    },
    async adicionar(dados) {
        const add = await adicionarProduto(dados)
        return add
    },
    async pegarId(id) {
        console.log("ID RECUPERADO: ", id)
        const buscaProduto = await pegaIdDoProduto(id)
        return buscaProduto
    },
    async editar(id, dadosAtualizados) {
        console.log("ID RECUPERADO: ", id)
        const buscaProduto = await editaProduto(id, dadosAtualizados)
        return buscaProduto
    },
    async deletar(id) {
        console.log("ID RECUPERADO: ", id)
        const buscaProduto = await deletaProduto(id)
        return buscaProduto
    }
}

export default gerenciamentoEstoque