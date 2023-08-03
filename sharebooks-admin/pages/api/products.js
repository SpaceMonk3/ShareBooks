import { Product } from "@/models/Product";


export default async function handle(req, res){
    const {method} = req;

    if(method === 'POST' ){
        const {title, description, price} = req.body;
        const productDoc = await Product.create({
            title, description, price,
        })
        res.json(productDoc);
    }
}