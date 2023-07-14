import React from 'react';
import BlogCard from './blog/BlogCard';
import { createSlug } from '@/utils';

const blogData = [
  {
    title: 'What is Virtual Environment',
    excerpt: 'A virtual environment is a networked application that allows a user to interact with both the computing environment and the work of other users. Email, chat, and web-based document sharing applications are all examples of virtual environments. Simply put, it is a networked common operating space.',
    date: '24 August, 2023',
    tags: ['Python']
  },
  {
    title: 'What is WebRTC',
    excerpt: 'WebRTC is a free and open-source project providing web browsers and mobile applications with real-time communication via application programming.',
    date: '20 March, 2023',
    tags: ['Javascript']
  },
  {
    title: 'What is Socket Programming',
    excerpt: 'A socket is a communications connection point (endpoint) that you can name and address in a network. Socket programming shows how to use socket APIs to establish communication links between remote and local processes.',
    date: '10 October, 2022',
    tags: ['Python']
  },
];

const HomePage = () => {
  return (
    <div className='min-h-[calc(100vh-182px)] w-[calc(100vw-32px)] sm:w-full flex flex-col space-y-10'>
      {blogData.map(blog => (
        <BlogCard
          key={createSlug(blog.title)}
          title={blog.title}
          excerpt={blog.excerpt}
          date={blog.date}
          tags={blog.tags}
        />
      ))}
    </div>
  );
};

export default HomePage;