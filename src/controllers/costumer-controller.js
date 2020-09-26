const Costumer = require('../app/models/costumer');
const repository = require("../repositories/costumer-repository");

exports.post = async (req,res) => {
    try{
        await repository.post({
            name: req.body.name,
            email : req.body.email,
            password : req.body.password
        });
        res.status(201).send({message: 'Cliente inserido com sucesso'});
    }catch(error){
        console.log(error)
        res.status(500).send({message: 'Falha ao processar'});
    }
};

exports.getAll = async(req,res)=>{
    try{
        const data = await repository.getAll();
        res.status(200).send(data)
    }catch(error){
        res.status(500).send({
            message:"Falha ao processar requisição",
            erro:error
        });
    }
};

exports.getById = async (req, res) =>{
    try{
        const id = req.params.costumerId;
        const data = await repository.getById(id);
        res.status(200).send(data)
    }catch(error){
        res.status(500).send({
            message:"falha ao processar requisição",
            erro:error
        });
    }
}

exports.put = async (req, res)=>{
    try{
        const id = req.params.costumerId;
        const data = await repository.put(id, req.body)
        res.status(200).send({
            message:"Cliente atualizado",
            dados: data
        })
    }catch(error){
        res.status(500).send({
            message: "Falha",
            erro:error
        })       
    }
}

exports.delete = async(req,res)=>{
    try{
        const id = req.params.costumerId;
        await repository.delete(id)
        res.status(200).send({
            message:"Cliente deletado"
        });

    }catch(error){
        res.status(500).send({
        message:"Cliente não deletado",
        erro:error 
        });  
    }
}

