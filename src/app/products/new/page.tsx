"use client"
import { addProduct } from '@/app/_actions/products'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'

export default function NewProduct() {
    const [priceInCents,setPriceInCents] = useState(0)
    
    return (
        <div >
            <form action={addProduct} className="form  p-5">
                <div className="input mt-3">
                    <Label  htmlFor='product'>Product Name</Label>
                    <Input type="text" id='product' name='product' />
                </div>
                <div className="input mt-3">
                    <Label  htmlFor='priceInCents'>Price In Cents</Label>
                    <Input type="number" id='priceInCents' name='priceInCents' onChange={(e)=>setPriceInCents(()=>Number(e.target.value)||0)} />
                    <div className="mt-2 text-muted-foreground">${priceInCents/100}</div>

                </div>
                {/* <div className="input mt-3">
                    <Label  htmlFor='image'>Image</Label>
                    <Input type="file" id='image' name='image' />
                </div> */}
                <div className="button mt-4 right-0 float-end">
                <Button type='submit' className='bg-rose-300' >Submit</Button>
                </div>
                

            </form>
        </div>
    )
}
