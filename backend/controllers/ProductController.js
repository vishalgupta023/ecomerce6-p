const Product = require("../models/ProductModel");
const ErrorHandle = require("../utils/ErrorHandle");
const {tryCatch}=require("../middleware/trycatch");
const ApiFeature = require("../utils/Features");


// create Product =====>>>Admin
exports.createProdcut = tryCatch(async (req, resp) => {
        const product = await Product.create(req.body);
        resp.status(201).json({
            sucess: true,
            product
        })
})

// Get All products
exports.getAllProducts =tryCatch( async (req, res) => {
    const productPerPage=5;
    const apifeature=new  ApiFeature(Product,req.query).search().filter().pagination(productPerPage);
    const products =await apifeature.query;
    res.status(200).json({ sucess: true, products });
});

// update product=====>>>>Admin
exports.updateProduct =tryCatch( async (req, resp,next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
       return next(new ErrorHandle(404,"Not Found!"))
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body);
    resp.status(200).json({
        sucess: true,
        messege: "product upadted Sucessfull!",
        product
    })
})

// Delete Product===>>Admin
exports.deleteProduct =tryCatch(async (req, resp, next) => {
    let product =await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandle(404,"Not Found!"))
    }
    product=await Product.findByIdAndDelete(req.params.id);
    resp.status(200).json({
     sucess:true,
     messege:"product deleted Sucessfull!",
     product
    })

})

// get product
exports.getProduct=tryCatch(async(req,resp,next)=>{
    let product=await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandle(404,"Not Found!"))
    }
    resp.status(200).json({
        sucess:true,
        messege:"product find Sucessfull!",
        product
       })
})