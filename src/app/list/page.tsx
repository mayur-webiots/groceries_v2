import React from 'react'
import { getList } from '../_actions/list'
import ListCard from '../products/_components/listCard'

export default async function page() {
    const groceryList = await getList()
    return (
        <div>

            {groceryList.length ? groceryList.map((item: any) =>
                <div className='w-3/4 mx-auto' key={item.id}>
                    <ListCard item={item} ></ListCard>
                </div>
            )
        :
        <div  className='text-center'>
            No Items Added Yet
        </div>
        }
        </div>
    )
}
