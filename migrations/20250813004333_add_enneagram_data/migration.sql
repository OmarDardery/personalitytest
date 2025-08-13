-- CreateTable
CREATE TABLE "public"."EnneagramData" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "one" DOUBLE PRECISION NOT NULL,
    "two" DOUBLE PRECISION NOT NULL,
    "three" DOUBLE PRECISION NOT NULL,
    "four" DOUBLE PRECISION NOT NULL,
    "five" DOUBLE PRECISION NOT NULL,
    "six" DOUBLE PRECISION NOT NULL,
    "seven" DOUBLE PRECISION NOT NULL,
    "eight" DOUBLE PRECISION NOT NULL,
    "nine" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "EnneagramData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EnneagramData_userId_key" ON "public"."EnneagramData"("userId");
