const model = require('../models/category');

exports.insertCategory = async(req, res) => {
    try{
        const dataCategory = new model(req.body);

        const saveCategory = await dataCategory.save();

        res.status(201).json({ message: 'Categoria guardada', saveCategory});
    } catch (err) {
        res.status(500).json({ error: 'Datos no ingresados', detaisl: err});
    }
}