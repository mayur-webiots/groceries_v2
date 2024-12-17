import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import StoreTable from './_components/storeTable'
import { addStore } from '../_actions/store'

export default function Stores() {
    return (
        <div>
            <div className="form">
                <form action={addStore} className="form  p-5">
                    <div className='flex justify-between' >
                        <div className="input w-3/4 mx-2">
                        <Input type="text" placeholder='Enter Store Name' id='store' name='storeName' />
                        </div>
                        <div className="button ">
                            <Button type='submit' className='bg-lime-500' >Submit</Button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="category-table">
                <StoreTable />
            </div>
        </div>
    )
}
