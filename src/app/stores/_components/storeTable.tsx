import { deleteStore, getStores } from '@/app/_actions/store';
import { Button } from '@/components/ui/button';
import { revalidatePath } from 'next/cache';
import React from 'react'

export default async function StoreTable() {
    const stores = await getStores();
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {stores.map((store) =>
                        <tr className="bg-white dark:bg-gray-800" key={store.id}>
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {store.name}
                            </td>


                            <td>
                                <Button className='bg-red-400' onClick={async () => {
                                    "use server"
                                    await deleteStore(store.id)
                                    revalidatePath('/', 'layout')
                                }}>Delete</Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}