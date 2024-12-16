-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_GroceryList" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "quantity" INTEGER NOT NULL,
    "productId" TEXT NOT NULL,
    "itemTaken" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "GroceryList_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_GroceryList" ("id", "productId", "quantity") SELECT "id", "productId", "quantity" FROM "GroceryList";
DROP TABLE "GroceryList";
ALTER TABLE "new_GroceryList" RENAME TO "GroceryList";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
