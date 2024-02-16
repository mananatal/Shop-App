import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {add,remove} from "../redux/slices/CartSlice"
import { toast } from 'react-hot-toast';


function ProductItem({product}) {

    const currCart=useSelector((state)=>state);

    const {cart}=currCart;
    const dispatch=useDispatch();
    console.log(currCart)
   

    function handleCartAdd(product)
    {
        dispatch(add(product))
        toast.success("Item Added to Cart");
    }

    function handleCartRemove(productId)
    {
        dispatch(remove(productId));
        toast.error("Item Removed From Cart");
    }

    const desc=product.description.split(" ").slice(0,10).join(" ")+"...";

  return (
    <div className="flex flex-col items-center justify-between bg-white hover:scale-110 transition-all duration-300  ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] "> 
        <div >
            <h2 className="text-gray-700 font-semibold text-lg text-left truncate mt-1 w-40">{product.title}</h2>
        </div>

        <div>
            <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{desc}</p>
        </div>

        <div className="h-[180px]">
            <img src={product.image} className="h-full w-full" />
        </div>

        <div className="flex justify-between items-center w-full mt-5">
            <div>
                <p className="text-green-600 font-semibold">${product.price}</p>
            </div>
            <div>
                {
                    cart.some((p) => p.id == product.id)?
                    (
                        <button onClick={()=>handleCartRemove(product.id)} className="border-2 border-gray-700 text-gray-700 uppercase font-semibold px-3 py-1 rounded-full text-[12px] transition-all duration-300 ease-in hover:text-white hover:bg-gray-700">
                            Remove Item
                        </button>
                    )
                    :
                    (
                        <button onClick={()=>handleCartAdd(product)} className="border-2 border-gray-700 text-gray-700 uppercase font-semibold px-3 py-1 rounded-full text-[12px] transition-all duration-300 ease-in hover:text-white hover:bg-gray-700">
                            Add to cart
                        </button>
                    )
                }
            </div>
        </div>
    </div>
  );
}

export default ProductItem