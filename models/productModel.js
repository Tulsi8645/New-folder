const mongoose=require("mongoose")
// product schema

const productSchema= mongoose.Schema(
    {
        name:{
            type:String,
            reqired:(true,"Enter a product name")
        },
        quantity:{
            type: Number,
            reqired:true,
            default:0
        },
        price:{
            type: Number,
            required:true
        },
        image:{
            type: String,
            reqired:false
        }
    },
    {
        timestamps:true
    }
)

//product model

const Product=mongoose.model('Product',productSchema);
module.exports=Product;