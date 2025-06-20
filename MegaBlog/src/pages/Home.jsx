import React ,{useEffect, useState} from 'react'
import { Container } from '../components'
// import PostCard from '../components'
import service from '../appwrite/config'

function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        service.getPosts().then((posts)=>{
            if(posts){
                setPosts(posts.documents);
            }
        })
    },[])

    if(posts.length === 0) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>No posts available</h1>
                        </div>
                    </div>
                    </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8 mt-4'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-full md:w-1/2 lg:w-1/3'>
                            <PostList {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
