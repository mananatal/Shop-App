import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import axios from "axios"
import ProductItem from "../components/ProductItem";



export default function Home()
{
    const API_URL = "https://fakestoreapi.com/products";

    const [loading,setLoading]=useState(false);
    const [products,setProducts]=useState([]);

    async function fetchData()
    {
        setLoading(true);

        try{
            const result=await axios.get(API_URL);
            console.log(result)
            setProducts(result.data)
        }
        catch(e)
        {
            console.log("Gadbad ho gyi");
            setProducts([]);
        }

        setLoading(false);
    }

    useEffect(()=>{
        fetchData();
    },[])
    
    return (
        <div>
            {
                loading?
                (<Spinner/>)
                :
                (
                    
                        products.length>0?
                        (
                            <div className="grid xs:gridcols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                                {
                                     products.map((product)=>(
                                        <ProductItem key={product.id} product={product} />
                                    ))
                                }
                            </div>
                           
                        ):
                        (
                            <div>
                                No posts found
                            </div>
                        )
                    
                )
            }
        </div>
    );
}