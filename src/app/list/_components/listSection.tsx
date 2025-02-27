import { removePurchaedItems } from '@/app/_actions/list'
import { modifyGroceryListData } from '@/app/_utils/dataModification'
import ListCard from '@/app/products/_components/listCard'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function ListSection({ allGroceryList }: any) {
    let groceries = modifyGroceryListData({ allGroceryList })
    return (
        <div className='text-center'>
            <Button  className='bg-red-500' onClick={removePurchaedItems}>Remove Purchased</Button>
            {Object.keys(groceries).map((store) => {
                return <div key={store} className='text-center my-3'>
                    <h3 className="font-bold">{store}</h3>
                    {groceries[store].map((item: any) => 
                        <div className='w-3/4 mx-auto' key={item.id}>
                            <ListCard item={item} ></ListCard>
                        </div>
                    )}
                </div>
            })}
        </div>
    )
}
