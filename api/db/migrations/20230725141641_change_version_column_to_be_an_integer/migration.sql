/*
  Warnings:

  - You are about to alter the column `version` on the `packagelabels` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_packagelabels" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "filename" TEXT NOT NULL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "hash" TEXT NOT NULL DEFAULT '',
    "fileUrl" TEXT,
    "version" INTEGER DEFAULT 1,
    "userId" TEXT NOT NULL,
    CONSTRAINT "packagelabels_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_packagelabels" ("createdAt", "fileUrl", "filename", "hash", "id", "userId", "version") SELECT "createdAt", "fileUrl", "filename", "hash", "id", "userId", "version" FROM "packagelabels";
DROP TABLE "packagelabels";
ALTER TABLE "new_packagelabels" RENAME TO "packagelabels";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
