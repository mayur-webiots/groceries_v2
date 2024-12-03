import { Button } from '@/components/ui/button'
import React from 'react'

export default function Card({product}:any) {
    return (    
        <div className="mx-auto  mt-11 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 ">
            <img className="h-48 w-full object-cover object-center" src={product.imagePath} alt="Product Image" />
            <div className="p-4 text-center">
                <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{product.name}</h2>
                <div className="flex items-center justify-between">
                    <Button className="ml-auto text-base font-medium text-rose-500">Minus</Button>
                    <p className="mx-auto text-lg font-semibold text-gray-900 dark:text-white">0</p>
                    <Button className="ml-auto text-base font-medium text-green-500" >Add</Button>
                </div>
            </div>
        </div>
    )
}