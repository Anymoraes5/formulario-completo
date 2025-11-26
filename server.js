//criar api de usuarios
import express from 'express';

const app = express(); //variavel chamndo uma função express
app.use(express.json()); //habilitar o uso de json no express

const users = []; //array vazio para guardar os usuarios

//ROTAS: tipo/ metodo HTTP -> ENDEREÇO

app.listen(3000); //porta onde o servidor vai rodar

app.post('/users', (req, res) => {
    users.push(req.body); //adiciona o usuario no array
    res.status(201).json(req.body)  
});

app.get('/users', (req, res) => {  
    res.status(200).json(users);
}) //lista

/* anacaroline
    casinhaQuadrada06 */

// app.post('/users') //cria
// app.put('/users') //atualiza
// app.delete('/users') //deleta
