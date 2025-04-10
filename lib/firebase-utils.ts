import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
  serverTimestamp,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
import { db } from "./firebase";

// Type definitions (replacing Prisma types)
export interface Post {
  id: string;
  title: string;
  content: string;
  createdAt?: Date;
}

// Convert Firestore document to Post type
export const postConverter = {
  toFirestore(post: Post): DocumentData {
    return {
      title: post.title,
      content: post.content,
      createdAt: serverTimestamp(),
    };
  },
  fromFirestore(snapshot: QueryDocumentSnapshot): Post {
    const data = snapshot.data();
    return {
      id: snapshot.id,
      title: data.title,
      content: data.content,
      createdAt: data.createdAt?.toDate(),
    };
  },
};

// Collection references
export const postsCollection = collection(db, "posts");

// Post operations
export async function getAllPosts(): Promise<Post[]> {
  const querySnapshot = await getDocs(postsCollection);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    title: doc.data().title,
    content: doc.data().content,
    createdAt: doc.data().createdAt?.toDate(),
  }));
}

export async function createPost(
  title: string,
  content: string
): Promise<string> {
  const docRef = await addDoc(postsCollection, {
    title,
    content,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function deletePostById(id: string): Promise<void> {
  const postRef = doc(db, "posts", id);
  await deleteDoc(postRef);
}

export async function getPostById(id: string): Promise<Post | null> {
  const postRef = doc(db, "posts", id);
  const postSnap = await getDoc(postRef);

  if (!postSnap.exists()) {
    return null;
  }

  const data = postSnap.data();
  return {
    id: postSnap.id,
    title: data.title,
    content: data.content,
    createdAt: data.createdAt?.toDate(),
  };
}
