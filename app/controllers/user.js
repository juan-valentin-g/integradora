const model = require('../models/user');
const modelMajor = require('../models/major');
const bcrypt = require('bcrypt');



exports.getData = async (req, res) => {
    try{
        const { page = 1, limit = 10} = req.query;

        const options = {
            page: parseInt(page, 10),
            limit: parseInt(limit, 10)
        };
        
        const result = await model.paginate({}, options);

        res.json(result);
    } catch (err){
        res.status(500).json({ error: 'Error al obtener datos', details: err.message });
    }
}

exports.getOne = async (req, res) => {
    try{
        const { email } = req.body;

        const userOne = await model.findOne({ email });

        if(!userOne) {
            return res.status(404).json({ error: 'Usuario no encontrado'});
        }
        res.json({ message: 'Usuario encontrado', userOne});
    } catch (err) {
        res.status(500).json({ error: 'Error al encontrar el usuario', details: err.message });
    }
}

exports.insertData = async (req, res) => {
    try{
        const {apellidoP, apellidoM, name, major, group, email, phone, password, avatar} = req.body;
        const searchMajor = await modelMajor.findOne({name: major});

        if(!searchMajor) {
            return res.status(404).json({error: 'Carrera no encontrada'});
        }

        if(password){
            const salt = await bcrypt.genSalt(10);
            passwordC = await bcrypt.hash(password, salt);
        }

        const newUser = new model({
            apellidoP, apellidoM, name, major:searchMajor._id, group, email, phone, password:passwordC, avatar
        })

        const saveData = await newUser.save();

        res.status(201).json({ message: 'Datos insetados correctamente ',saveData});
    } catch (err) {
        res.status(500).json({ error: 'Error al insetar datos ', details: err.message});    
    }
}

exports.updateSingle = async (req, res) => {
    try{
        const { id } = req.params;
        const updates = req.body;

        if(Object.keys(updates).length === 0){
            return res.status(400).json({ error: 'No hay datos para actualizar.'});
        }

        const updateUser = await model.findByIdAndUpdate( id, updates, { new: true, runValidators: true});

        if(!updateUser){
            return res.status(404).json({ error: 'Usuario no encontrado'});
        }

        res.json({ message: 'Usuario actualizado correctamente', updateUser});
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar el usuario', details: err.message});
    }
}

exports.deleteSingle = async ( req, res) => {
    try {
        const { id } = req.params;

        const deleteUser = await model.findByIdAndDelete(id);

        if(!deleteUser){
            return res.status(404).json({ error: 'Usuario no encontrado'});
        }

        res.json({ message: 'Usuario eliminado correctamente', deleteUser});
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar usuario', details: err.message });
    }
}