import Layout from "@/components/Layout";
import { useEffect } from "react";

export default function EditProductPage(){
    const router = useRouter();
    const {id} = router.query;
    useEffect(() => {
        if(!id){
            return;
        }

        axios.get('/api/products?id='+ id).then(response => {
            console.log(response.data);
        });
    }, [id]);

    return(
        <Layout>
            edit here
        </Layout>
    );
}