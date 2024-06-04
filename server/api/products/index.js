import Product from "~/server/models/Product";

export default defineEventHandler(async()=>{
    try{
        const res = await Product.find();
        return res;
    } catch(err){
        console.log(err);
    }
})