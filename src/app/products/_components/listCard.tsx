'use client'
import { toggleItemTaken } from '@/app/_actions/list'
import React from 'react'

export default function ListCard({item}:any) {
    return (    
        <div onClick={()=>toggleItemTaken({item,currentPath:'/list'})} className={`flex justify-between mx-auto mt-2 transform overflow-hidden rounded-lg ${item.itemTaken?"bg-red-100":"bg-white"}   dark:bg-slate-800 shadow-md duration-300 `}>
            <div className="p-2 text-center">
                <div className={`text-sm font-medium dark:text-white text-gray-900 ${item.itemTaken?"line-through":""} `}>{item.product.name}</div>
                
            </div>
            <div className="p-2 text-center">
                <div className={`text-center text-sm font-medium dark:text-white text-gray-900 ${item.itemTaken?"line-through":""}`}>{item.quantity}</div>
                
            </div>
        </div>
    )
}