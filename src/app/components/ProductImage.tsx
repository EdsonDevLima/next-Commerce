"use client"
import Image from "next/image"
import { useState } from "react"
import { productType } from "../types/productType"
type productImageProp = {
    product:productType,
    fill:boolean
}
export default function ProductImage({product,fill}:productImageProp){
    const [loading,setLoading ] = useState(true)
    return fill ? (<Image className={`object-cover ${loading ? "scale-110 blur-3xl grayscale":"scale-100 blur-0 grayscale-0" }`} alt={product.title} fill src={product.image} onLoadingComplete={()=>{setLoading(false)}}   />):(<Image width={400} height={700} className={`object-cover ${loading ? "scale-110 blur-3xl grayscale":"scale-100 blur-0 grayscale-0" }`} alt={product.title} fill src={product.image} onLoadingComplete={()=>{setLoading(false)}}   />)
}