"use server";

import db from "@/db/db";
import { revalidatePath } from "next/cache";

export async function getStores() {
  const allStores = await db.store.findMany({
    select: {
      id: true,
      name: true,
      productList: true,
    },
  });
  return allStores;
}

export async function addStore(formData: FormData) {
  let data: any = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

  let storeAdded = await db.store
    .create({
      data: {
        name: data.storeName,
      },
    })
    .catch((error: any) => {
      console.log("there was an error while addding the store: ", error);
    });

  revalidatePath("/", "layout");
}

export async function deleteStore(id: string) {
  let storeDeleted = await db.store
    .delete({ where: { id } })
    .catch((error: any) => {
      console.log("There was an error while deleting the store: ", error);
    });
}
