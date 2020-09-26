const express = require('express');
const router = express.Router();
const Cliente = require('../app/models/client');
const mongoose = require('mongoose');


router.post('/', function(req,res){
    const cliente = new Cliente();
    cliente.nome = req.body.nome;
    cliente.telefone = req.body.telefone;

    cliente.save(function(error){
        if(error)
            res.send("Erro ao salvar", error)
            res.status(201).json({message: 'cliente inserido com sucesso'});
    })
})

router.get('/', function(req,res){
    Cliente.find(function(err, clis){
        if(err)
            res.send(err);
        res.status(200).json({
            message:"retorno ok de todos os produtos",
            allClients:clis
        });
    });
});

router.get('/:clientId', function(req, res){
    const id = req.params.clientId;
    Cliente.findById(id, function(err, cliente){
        if(err){
            res.status(500).json({
                message:"erro ao tentar encontrar o Cliente; ID mal formado"
            });
        }else if(cliente == null){
            res.status(400).json({
                message:"Cliente nao encontardo com esse id"
            })
        }else{
            res.status(200).json({
                message: "Cliente encontrado",
                cliente: cliente
            });
        }
    })
})

router.put('/:productId', function(req, res){
    const id = req.params.productId;
    console.log(id)
    Cliente.findById(id, function(err,cliente){
        if(err){
            res.status(500).json({
                message:"erro ao tentar encontrar o cliente; ID mal formado"
            });
        }else if(cliente == null){
            res.status(400).json({
                message:"cliente nao encontardo com esse id"
            })
        }else{
                cliente.nome = req.body.nome;
                cliente.telefone = req.body.telefone;

                cliente.save(function(error){
                    if(error){
                        res.send("erro ao salvar")
                    }
                    res.status(200).json({
                        message:"cliente atualizado"
                    })
                })
        }
    })
})

router.delete('/:clientId', function(req,res){
    Cliente.findByIdAndRemove(req.params.productId, (err, cliente) => {
        if(err){
            res.status(500).send("Erro ao deletar", err)
        }
        const response = {
            message: "cliente removido com sucesso",
            id:cliente.id
        }
        return res.status(200).send(response);
    });
});
module.exports = router;