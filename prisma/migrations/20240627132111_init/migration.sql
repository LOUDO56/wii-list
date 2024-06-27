-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_wiigames" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "day" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "genre" TEXT NOT NULL,
    "developer" TEXT NOT NULL,
    "synopsis" TEXT NOT NULL,
    "owned" BOOLEAN NOT NULL,
    "wish" BOOLEAN NOT NULL,
    "owned_when" DATETIME
);
INSERT INTO "new_wiigames" ("day", "developer", "genre", "id", "month", "owned", "owned_when", "synopsis", "title", "wish", "year") SELECT "day", "developer", "genre", "id", "month", "owned", "owned_when", "synopsis", "title", "wish", "year" FROM "wiigames";
DROP TABLE "wiigames";
ALTER TABLE "new_wiigames" RENAME TO "wiigames";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
