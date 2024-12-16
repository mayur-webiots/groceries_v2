import React from 'react'
import { getProducts } from '../_actions/products';
import AllProducts from './_components/allProducts';
import ProductList from './_components/productList';

export default async function Products() {
    const allProducts = await getProducts();

    return (
        <div >
            
            <div className="flex ">
                <AllProducts allProducts={allProducts} />
                <ProductList />

            </div>
        </div>
    )
}
