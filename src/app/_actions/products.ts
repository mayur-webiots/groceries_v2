"use server"

import db from "@/db/db";
import fs from "fs/promises";

export async function addProduct(formData:FormData){
    let data = {};
    formData.forEach((value,key)=>data[key]=value)
    await fs.mkdir('public/products',{recursive:true});
    const filePath = `products/${crypto.randomUUID()}-${data.image.name}`
    await fs.writeFile(`public/${filePath}`,Buffer.from(await data.image.arrayBuffer()))
    console.log('coming after the filepath')
    await db.product.create({data:{
        name:String(data.product),
        priceInCents:Number(data.priceInCents),
        imagePath:filePath        

    }})
    // console.log('products data:',allData)
    //revalidatePath('/products/new')
    
}

export async function getProducts(){

    const allData =await db.product.findMany({
        select:{
            id:true,
            name:true,
            priceInCents:true,
            createdAt:true,
            imagePath:true,
            updatedAt:true,

        },
        orderBy:{name:'asc'}
    })
    return allData; 
}

export async function deleteProduct(id:string){
    const product = await db.product.delete({where:{id}});
    await fs.unlink(product.imagePath)

}