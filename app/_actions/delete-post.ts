"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deletePost(postId: string) {
  await prisma.post.delete({
    where: { id: postId },
  });

  revalidatePath("/");
}
