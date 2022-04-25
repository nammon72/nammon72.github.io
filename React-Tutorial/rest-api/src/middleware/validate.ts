
export const checkProductData = async (req, res, next) => {
    const { title, description, price, category, image } = req.body;

    const errors = [];
    // for..in, for..of, for..each
    for (const key in req.body) {
        if (!req.body[key]) {
            errors.push(`Please add product ${key}.`)
        }
    }

    if (errors.length > 0)
        return res.status(401).json({ msg: errors })
    
    next();
}