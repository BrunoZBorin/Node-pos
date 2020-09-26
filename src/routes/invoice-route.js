const express = require('express');
const router = express.Router();
const NotaFiscal = require('../app/models/invoice');
const mongoose = require('mongoose');


router.post('/', function(req,res){
    const nota_fiscal = new NotaFiscal();
    nota_fiscal.numero = req.body.numero;
    nota_fiscal.valor = req.body.valor;
    nota_fiscal.descricao = req.body.descricao;
    nota_fiscal.cliente = req.body.cliente;
    nota_fiscal.save(function(error){
        if(error)
            res.send("Erro ao salvar", error)
            res.status(201).json({message: 'Nota inserida com sucesso'});
    })
})

router.get('/', function(req,res){
    NotaFiscal.find(function(err, nots){
        if(err)
            res.send(err);
        res.status(200).json({
            message:"Retorno ok de todos as notas",
            allNotas:nots
        });
    });
});

router.get('/:invoiceId', function(req, res){
    const id = req.params.invoiceId;
    NotaFiscal.findById(id, function(err, nota_fiscal){
        if(err){
            res.status(500).json({
                message:"erro ao tentar encontrar o nota fiscal; ID mal formado"
            });
        }else if(nota_fiscal == null){
            res.status(400).json({
                message:"nota fiscal nao encontardo com esse id"
            })
        }else{
            res.status(200).json({
                message: "nota fiscal encontrado",
                nota_fiscal: nota_fiscal
            });
        }
    })
})

router.put('/:invoiceId', function(req, res){
    const id = req.params.invoiceId;
    console.log(id)
    NotaFiscal.findById(id, function(err,nota_fiscal){
        if(err){
            res.status(500).json({
                message:"erro ao tentar encontrar o Nota fiscal; ID mal formado"
            });
        }else if(nota_fiscal == null){
            res.status(400).json({
                message:"Nota fiscal nao encontrada com esse id"
            })
        }else{
                nota_fiscal.numero = req.body.numero;
                nota_fiscal.valor = req.body.valor;
                nota_fiscal.descricao = req.body.descricao;

                nota_fiscal.save(function(error){
                    if(error){
                        res.send("erro ao salvar")
                    }
                    res.status(200).json({
                        message:"Nota fiscal atualizada"
                    })
                })
        }
    })
})

router.delete('/:invoiceId', function(req,res){
    NotaFiscal.findByIdAndRemove(req.params.invoiceId, (err, nota_fiscal) => {
        if(err){
            res.status(500).send("Erro ao deletar", err)
        }
        const response = {
            message: "Nota fiscal removida com sucesso",
            id:produto.id
        }
        return res.status(200).send(response);
    });
});
module.exports = router;