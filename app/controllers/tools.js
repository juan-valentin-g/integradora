const model = require('../models/tools');
const modelCategory = require('../models/category');

//Optiene todos los datos de las herramientas registradas
exports.getData = async (req, res) => {
    try{
        const { page = 1, limit = 10 } = req.query;

        const options = {
            page: parseInt(page, 10),
            limit: parseInt(limit, 10)
        }; 

        const result = await model.paginate({}, options);

        res.json(result);
    } catch (err){
        res.status(500).json({ error: 'Error al obtener datos', details: err.menssage });
    }
}

//Optiene una herramienta por medio del ID
exports.getOne = async (req, res) => {
    try{
        const { id } = req.params;

        const findOne = await model.findById(id);

        if(!findOne) {
            return res.status(404).json({error: 'Herramienta no encontrada '});
        }

        res.json({message: 'Herramienta encontrada', findOne});
    } catch (err) {
        res.status(500).json({error: 'Error al intentar encontrar la herramienta', details: err.message})
    }
}

//Inserta datos de herramientas
exports.insertTool = async (req, res) => {
    try {
        const {name, description, price, quality, quantity, img, category} = req.body;
        const searchCategory  = await modelCategory.findOne({name: category});

        if(!searchCategory){
            return res.status(404).json({error: 'Categoria no encontrada'});
        }

        const newTool = new model({
            name,
            description,
            price,
            quality, 
            quantity,
            img,
            category: searchCategory._id
        })

        const saveData = await newTool.save();

        res.status(201).json({ message: 'Herramienta ingresada correctamente', saveData});
    } catch (err) {
        res.status(500).json({ error: 'Datos no ingresados', details: err.menssage})
    }
    
}

//Actualiza datos de herramientas
exports.updateTool = async (req, res) => {
    try {
        const { id } = req.params;
        const updTool = req.body;
        
        if(Object.keys(updTool).length === 0){
            return res.status(400).json({error: 'No hay datos que actualizar'});
        }

        const updateTl = await model.findByIdAndUpdate(id, updTool, { new: true, runValidators: true});

        if(!updateTl){
            return res.status(404).json({error: 'Herramienta no encontrada'});
        }

        res.json({message: 'Herramienta actualizada', updateTl});
    } catch (err) {
        res.status(500).json({error: 'Error al actualizar', details: err.message});
    }
}

//Elimina los datos de alguna herramienta por medio del id
exports.deleteTool = async (req, res) => {
    try {
        const { id } = req.params;

        const dltTool = await model.findByIdAndDelete(id);

        if(!dltTool){
            return res.status(404).json({error: 'Herramienta no encontrada'});
        }

        res.json({message: 'Herramienta eliminada correctamente', dltTool});
    } catch (err) {
        res.status(500).json({error: 'Error al actualizar herramienta', details: err.message});
    }
}