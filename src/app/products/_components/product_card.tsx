'use client'
import { addToList } from '@/app/_actions/list'
import React from 'react'

export default function Card({product}:any) {
    return (    
        <div onClick={()=>addToList(product)} className="mx-auto mt-2 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 ">
            <div className="p-2 text-center">
                <div className=" text-sm font-medium dark:text-white text-gray-900">{product.name}</div>
                
            </div>
        </div>
    )
}