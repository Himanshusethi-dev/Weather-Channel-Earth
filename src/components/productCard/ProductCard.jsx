import React from 'react'
import './style.css'
import { useMutation,useQueryClient } from '@tanstack/react-query'
const ProductCard = ({data,product,deleteProduct,queryVariable}) => {

    const {title,sku,description,id} = product;
  
    // const deleteProduct = (id)=>{

        
    // }
    return (
        <>
            {
                product && (
                    <div className="productCard">
                        <div className="productTitle">
                         {id}.   {title}
                        </div>
                        <div className="description">{description}</div>

                        <button onClick={()=>{deleteProduct(id)}}>Delete</button>
                    </div>
                )
            }

        </>
    )
}

export default ProductCard