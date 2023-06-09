import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Navbar, Feed, PostDetail, CreatePost, Search , EditPost} from '../components';

const Posts = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='px-2'>
      <div className='bg-gray-50'>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} user={user} />
      </div>
      <div className='h-full'>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/category" element={<Feed />} />
          <Route path="/post-detail/:postId" element={<PostDetail user={user && user} />} />
          <Route path="/post/edit/:postId" element={<EditPost user={user && user} />} />

          <Route path="/create-post" element={<CreatePost user={user && user} />} />

          <Route path="/search" element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
        </Routes>
      </div>
    </div>
  )
}

export default Posts