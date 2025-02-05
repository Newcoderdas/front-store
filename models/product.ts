import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String ,required:true},
    price: { type: Number, required: true },
    discount: { type: Number },
    media: { type: String },
    createdAt:{type:Date, default:Date.now}
    
})
export default mongoose.models.product || mongoose.model("product", productSchema);