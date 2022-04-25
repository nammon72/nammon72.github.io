import Products from '../models/productModel'


const productCtrl = {
    getProducts: async (req, res) => {
        try {
            console.log(req.query)
            const page = req.query.page * 1 || 1;
            const limit = req.query.limit * 1 || 5;
            const sort = req.query.sort * 1 || 'createdAt';
            const skip = limit * (page -1)
            const products = await Products.find().limit(limit).skip(skip).sort(sort)
            return res.status(200).json(products)
        }   catch (err) {
            return res.status(500).json({msg: err.message})
      }
    },
    getProduct: async (req, res) => {
        try {
            const product = await Products.findById(req.params.id)
            if (!product)
                return res.status(404).json({msg: 'This product does not exist.'})

            return res.status(200).json(product)
        }   catch (err) {
                return res.status(500).json({msg: err.message})
            }
    },
    addProduct: async (req, res) => {
        try {
            const { title, description, price, category, image } = req.body;
            const newProduct = new Products({
                title, description, price, category, image
            })
            await newProduct.save()

            return res.status(200).json(newProduct)
        }   catch (err) {
                return res.status(500).json({msg: err.message})
                }
    },
    updateProduct: async (req, res) => {
        try {
                const { title, description, price, category, image } = req.body;
                const product = await Products.findByIdAndUpdate(req.params.id, {
                    title, description, price, category, image
                }, { new: true })
                if (!product)
                    return res.status(404).json({ mgs: 'This product does not exist.' })
                return res.status(200).json({product})
            }   catch (err) {
                    return res.status(500).json({msg: err.message})
                    }   
    },
    deleteProduct: async (req, res) => {
        try {
                const product = await Products.findByIdAndDelete(req.params.id)
                if (!product)
                    return res.status(404).json({ mgs: 'This product does not exist.' })
                return res.status(200).json({msg: 'Product deleted successfully!'})
            }   catch (err) {
                    return res.status(500).json({msg: err.message})
        }
    }
}

export default productCtrl;