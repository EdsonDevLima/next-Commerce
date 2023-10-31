import { productType } from "../types/productType"
type productProps  = {
    product:productType
}
export default function Product({product}:productProps){
    return (
    <div className="flex flex-col shadow-lg h-96 bg-slate-800 text-gray-300">
       <div className="relative h-72 flex-1">{product.image}</div> 
       <div className="flex flex-row justify-between font-bold m-3">{product.title}</div> 
       <button className="rouded-md bg-teal-600 text-white px-3.5 py-2.5 text-center">Adicionar ao carrinho</button>
    </div>
    )
}