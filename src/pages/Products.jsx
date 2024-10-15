import React, { Fragment, useEffect,useState  } from 'react'
import { productsAPI } from '../services/api'
import { keepPreviousData, useQuery,useMutation,useQueryClient } from '@tanstack/react-query'
import ProductCard from '../components/productCard/ProductCard'
import Pagination from '../components/pagination/Pagination'
import usePagination from '../hooks/usePagination'
import { deleteProducts } from '../services/api'

const Products = () => {
  const {current,skipValue,handlePrev,handleNext} = usePagination();
  const  queryClient = useQueryClient()
  const fetchProducts = async (skip) => {
    const { data } = await productsAPI.get(`?limit=10&skip=${skip}`);
    return data;
  }

  // console.log(product)

  const { data, isPending, isError } = useQuery({
    queryKey: ['products',skipValue],
    queryFn: () => fetchProducts(skipValue),
    placeholderData: keepPreviousData,
    staleTime:20000
  })
  

  const deleteProductMutation = useMutation({
    mutationFn : (id)=> deleteProducts(id),
    onSuccess :  (data,id)=>{
        console.log(data,id,skipValue)
        queryClient.setQueryData(['products',skipValue],(data)=>{
          console.log("inside",data.products)
            const filtered =  data.products.filter((item)=> item.id != id)
            return {...data,products:[...filtered]};
        })
    }
})


   console.log("products", data)

 if (isPending) return <div>
    Loading...
  </div>
  return (

    <>
      <div className="productsContainer">
        {
          data && (
            data?.products.map((product,index,productsList) => (
              <Fragment key={product.sku}>
                <ProductCard  product={product}  deleteProduct={deleteProductMutation.mutate}  />
              </Fragment>
            ))

          )
        }
       
      
      </div>
      <Pagination
        current={current}
        prev={handlePrev} 
        next={handleNext}
        start={1} 
        end={data.total} 
        skip={skipValue}
        limit={10} />
      </>
  )
}

export default Products