import React from 'react'
import Card from './_components/product_card'
// import { FaArrowUp } from "react-icons/fa";
import ProductList from './_components/productList';
import { getProducts } from '../_actions/products';


export default async function Products() {
    const products  =await getProducts();
    console.log('all the products are',products)
    return (
        <div className='relative'>
            <div className="page flex">
                <div className="products grid grid-col-3 lg:grid-cols-3">
                    {products.map(product=>
                    <Card product={product} key={product.id}></Card>

                    )}
                </div>
                
            </div>
            <ProductList/>

        </div>
    )
}
