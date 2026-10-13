import express from 'express'
import vendas from './routes/vendas.js'
const app = express();
app.use(express.json());
app.use('/api/vendas', vendas);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
// {
//     // let estoque = [
//     //     {
//     //         "id": 1,
//     //         "nome": "Lorran",
//     //         "idade": 30
//     //     },
//     //     {
//     //         "id": 2,
//     //         "nome": "Antonio",
//     //         "idade": 45
//     //     },
//     //     {
//     //         "id": 3,
//     //         "nome": "Goku",
//     //         "idade": 47
//     //     },
//     // ]
//     // const promise1 = new Promise((resolve, reject) => {
//     //   setTimeout(() => {
//     //     resolve("foo");
//     //   }, 300);
//     // });
    
//     // promise1.then((value) => {
//     //   console.log(value);
//     //   // Expected output: "foo"
//     // });
    
//     // console.log(promise1);
//     // Expected output: [object Promise]
    
//     // const promise = new Promise((resolve) => {
//     //     setTimeout(() => {
//     //         resolve(
//     //             estoque.forEach(element => {
//     //                 console.log(element)
//     //             })
//     //         )
//     //     }, 1000)
//     // })
//     // promise.then((data) => {
    
//     // })
//     // const gerenciamentoEstoque = {
//     //     async listar(){
//     //         await new Promise((resolve) => {
//     //             setTimeout(() => {
//     //                 resolve(
//     //                     estoque.forEach(element => {
//     //                         console.log(element)
//     //                     })
//     //                 )
//     //             })
//     //         })
//     //         return estoque
//     //     }
//     // }
//     // console.log(gerenciamentoEstoque.listar())

// }