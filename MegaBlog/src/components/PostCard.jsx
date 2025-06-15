import React from 'react'
// import appwriteService from '../appwrite/appwriteService'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({ $id, title, content, featuredImage }) {
  return (
    <div>
      <Link to={`/posts/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img className='rounded-xl' src={service.getFilePreview(featuredImage)} alt={title} />
            </div>
            <h2 className='text-lg font-bold'>{title}</h2>
            <p className='text-sm'>{content}</p>
        </div>
      </Link>
    </div>
  )
}

export default PostCard
