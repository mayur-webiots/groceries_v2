import React from 'react'
import { getList } from '../_actions/list'
import ListSection from './_components/listSection'

export default async function page() {
    const allGroceryList = await getList()
    return (
        <div>
            <ListSection allGroceryList={allGroceryList} />
        </div>
    )
}
