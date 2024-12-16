"use server"

import db from "@/db/db";



export async function addProduct(formData:FormData){
    const data:any = {};
    formData.forEach((value,key)=>data[key]=value)
    await db.product.create({data:{
        name:String(data.product),
        priceInCents:Number(data.priceInCents),

    }})
    
}

//CHANGED FOR NEW PRODUCTION BRANCH
export async function getProducts(){

    const allData =await db.product.findMany({
        select:{
            id:true,
            name:true,
            priceInCents:true,
            createdAt:true,
            updatedAt:true,

        },
        orderBy:{id:'asc'}
    })
    return allData; 
}

export async function deleteProduct(id:string){
    await db.product.delete({where:{id}});

}