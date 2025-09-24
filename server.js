import express from 'express';
import { converterParaBinario } from './pratica.js';

const app = express(); 
const port = 3000;

function somar(a,b,callback){
    const resultado = a + b
    callback(resultado)
}

app.get('/',(req,res) => {
    res.send(somar(10,20,(resultado)=>{console.log(resultado)}))
})

app.get('/erro',(req,res) => {
    try{
        throw new Error('deu erro')
    }catch(erro){
        console.log(erro)
}
    res.send('endpoint com erro')
})

app.listen(port,() => {
    console.log('http//localhost:'+port)
})

console.log(converterParaBinario(10))