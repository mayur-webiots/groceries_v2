"use server";

import db from "@/db/db";
import { revalidatePath } from "next/cache";

export async function addProduct(formData: FormData) {
  const data: any = {};
  let success:any = false;
  formData.forEach((value, key) => (data[key] = value));
  const storeExists = await db.store.findFirst({ where: { id: data.store } });
  const cateogryExists = await db.category.findFirst({
    where: { id: data.category },
  });
  if (storeExists && cateogryExists) {
    await db.product.create({
      data: {
        name: String(data.product),
        price: Number(data.price),
        storeId: storeExists.id,
        categoryId: cateogryExists.id,
        storeName:storeExists.name,
        categoryName:cateogryExists.name
      },
    }).then(()=>{success=true}).catch((error:any)=>{success=error});
  } else {
    success = "Either Selected Store or Category doesn't exist."
    console.log("Either Selected Store or Category doesn't exist.");
  }
  revalidatePath("/", "layout");
  return success
}

export async function getProducts() {
  const allData = await db.product.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      createdAt: true,
      updatedAt: true,
      category: true,
      store: true,
      storeName:true,
      categoryName:true
      
    },
    orderBy: { id: "asc" },
  });
  return allData;
}

export async function deleteProduct(id: string) {
  await db.product.delete({ where: { id } });
}

