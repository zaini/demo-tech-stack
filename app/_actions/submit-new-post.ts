"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function submitNewPost(data: FormData) {
  const title = data.get("title") as string;
  const content = data.get("content") as string;
  await prisma.post.create({
    data: { title, content },
  });

  revalidatePath("/");
}
