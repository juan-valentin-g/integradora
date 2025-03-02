const model = require('../models/major');

exports.insertMajor = async(req, res) => {
    try{
        const dataMajor = new model(req.body);

        const saveMajor = await dataMajor.save();

        res.status(201).json({message: 'Major save', dataMajor});
    } catch (err) {
        res.statur(500).json({message: 'Error al guardar',details: err});
    }
}