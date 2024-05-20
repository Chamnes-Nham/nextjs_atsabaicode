// components/Posts.tsx
"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  body: string;
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link legacyBehavior href={`https://jsonplaceholder.typicode.com/posts/${post.id}`}>
              <a style={{ cursor: 'pointer', color: 'blue' }}> <h1>User ID:</h1> {post.id}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div>Hello</div>
    </div>
  );
};

export default Posts;
