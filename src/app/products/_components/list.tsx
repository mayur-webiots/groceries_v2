import React from 'react'
import AddToListButton from './addToListButton'
import RemoveFromListButton from './removeFromListButton'
import MinusFromListButton from './minusFromListButton'
export default function List({ item }: any) {
    return (
        <li className="pb-3 sm:pb-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">

                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {item.product.name}
                    </p>

                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">{item.quantity}</div>
            </div>
            <div className='flex justify-between'>
                <RemoveFromListButton item={item} />
                <MinusFromListButton item={item}/>
                <AddToListButton item={item}/>
                
                
            </div>
        </li>
    )
}
