const Costumer = require('../app/models/costumer');

exports.post = async(data) =>{
    const costumer = new Costumer(data);
    await costumer.save()
}

exports.getAll = async() => {
    const res = await Costumer.find()
    return res;
}

exports.getById = async(id) => {
    const res = await Costumer.findById(id)
    return res;
}

exports.put = async(id, data) => {
    await Costumer.findByIdAndUpdate(id, {
        $set:{
            name:data.name,
            email:data.email,
            password:data.password,
        }
    })
    
}

exports.delete = async(id) =>{
    await Costumer.findByIdAndDelete(id)
}

