// pages/posts/[id].tsx
"use client";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
          const data: Post = await response.json();
          setPost(data);
        } catch (error) {
          console.error('Error fetching post:', error);
        }
      };

      fetchPost();
    }
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={() => router.back()}>Back to list</button>
    </div>
  );
};

export default PostDetail;
