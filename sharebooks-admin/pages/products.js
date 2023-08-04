import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products').then(response => {
            setProducts(response.data);
        });
    }, [])

    return(
        <Layout>  
            <Link className="bg-blue-900 text-white py-1 px-2 rounded-md" href={'/products/new'}>Add new book</Link>
            <table className="basic mt-2">
                <thead>
                    <tr>
                        <td>Product Name</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {products.map(products => (
                        <tr>
                            <td>{products.title}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    )
}