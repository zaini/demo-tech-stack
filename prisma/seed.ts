// seed for posts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const posts = await prisma.post.createMany({
    data: [
      { title: "Post 1", content: "Content 1" },
      { title: "Post 2", content: "Content 2" },
      { title: "Post 3", content: "Content 3" },
      { title: "Post 4", content: "Content 4" },
    ],
  });
}

main()
  .then(() => {
    console.log("Database seeded successfully");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
