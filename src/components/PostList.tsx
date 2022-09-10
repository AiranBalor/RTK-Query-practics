import React, { useState } from 'react'

import { postsApi } from '../services/postsService';
import { IPost } from '../store/models/postTypes';
import { PostItem } from './PostItem';

const PostList: React.FC = () => {
  const [limit, setLimit] = useState(50)
  const {data: posts, error, isLoading, refetch} = postsApi.useGetAllPostsQuery(limit)
  const [createPost, {}] = postsApi.useCreatePostMutation()
  const [updatePost, {}] = postsApi.useUpdatePostMutation()
  const [deletePost, {}] = postsApi.useDeletePostMutation()

  const handleCreate = async () => {
    const title = prompt()
    await createPost({ title, body: title} as IPost)
  }

  const handleRemove = (post: IPost) => {
    deletePost(post)
  }

  const handleUpdate = (post: IPost) => {
    updatePost(post)
  }
  
  return (
    <div>
      <button onClick={() => handleCreate()}>Создать пост</button>
      {isLoading && <h2>Выполняется запрос...</h2>}
      {error && <h2>Произошла ошибка</h2>}
      {posts && posts.map(post => 
        <PostItem remove={handleRemove} update={handleUpdate} post={post}/>  
      )}
    </div>
  )
}

export default PostList;