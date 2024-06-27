-- CreateTable
CREATE TABLE "wiigames" (
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
    "owned_when" DATETIME NOT NULL
);
