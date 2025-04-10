"use server";

import { deletePostById } from "@/lib/firebase-utils";
import { revalidatePath } from "next/cache";

export async function deletePost(postId: string) {
  await deletePostById(postId);

  revalidatePath("/");
}
