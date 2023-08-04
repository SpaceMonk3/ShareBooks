import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";


export default async function handle(req, res){
    const {method} = req;
    await mongooseConnect();

    if(method === 'GET'){
        if(req.query?.id){
            res.json(await Prouct.findOne({_id:req.query.id}));
        }
        else{
            res.json(await Product.find());
        }
    }

    if(method === 'POST' ){
        const {title, description, price} = req.body;
        const productDoc = await Product.create({
            title, description, price,
        })
        res.json(productDoc);
    }
}