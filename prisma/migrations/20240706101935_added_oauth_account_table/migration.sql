-- CreateTable
CREATE TABLE "OauthAccount" (
    "providerId" TEXT NOT NULL,
    "providerUserId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "OauthAccount_pkey" PRIMARY KEY ("providerId","providerUserId")
);

-- AddForeignKey
ALTER TABLE "OauthAccount" ADD CONSTRAINT "OauthAccount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
