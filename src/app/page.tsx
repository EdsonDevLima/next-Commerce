import Image from 'next/image'
import { productType } from './types/productType'
import Product from './components/Product'

async function getData(){
   const response = await fetch("https://fakestoreapi.com/products")
   if(!response.ok){
    throw new Error("erro ao fazer request")
   }
    
   return response.json()
}


export default async function Home() {
  const data = await getData()

  return (
<div className='max-w-7xl mx-auto pt-8 px-8 lx:px-0 '>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6'>
    {data.map((product:productType)=><Product product={product}/>)}

  </div>
</div>
  )
}
