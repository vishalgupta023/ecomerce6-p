const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please Enter poroduct name"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "please Enter poroduct description"],
    },
    price: {
        type: Number,
        required: [true, "please Enter products price"],
        maxlength: [8, "price cannot exeed the 8 chracter"]
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category:{
        type:String,
        required:[true,"Please Enter category"]
    },
    stock:{
        type:Number,
        required:[true,"Please Enter Stock"],
        maxlength:[4,"Stock not exceed to 4 character"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model("products",productSchema)