-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_packagelabels" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "filename" TEXT NOT NULL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "hash" TEXT NOT NULL DEFAULT '',
    "fileUrl" TEXT,
    "userId" TEXT NOT NULL,
    CONSTRAINT "packagelabels_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_packagelabels" ("createdAt", "fileUrl", "filename", "hash", "id", "userId") SELECT "createdAt", "fileUrl", "filename", coalesce("hash", '') AS "hash", "id", "userId" FROM "packagelabels";
DROP TABLE "packagelabels";
ALTER TABLE "new_packagelabels" RENAME TO "packagelabels";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
