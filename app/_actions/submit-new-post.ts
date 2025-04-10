"use server";

import { createPost } from "@/lib/firebase-utils";
import { revalidatePath } from "next/cache";

export async function submitNewPost(data: FormData) {
  const title = data.get("title") as string;
  const content = data.get("content") as string;

  await createPost(title, content);

  revalidatePath("/");
}
