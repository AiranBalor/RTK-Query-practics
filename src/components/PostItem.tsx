import React from 'react'
import { IPost } from '../store/models/postTypes'
import ModuleBtn from './ModuleBtn'

interface IPostItemProps {
  post: IPost,
  remove: (post: IPost) => void,
  update: (post: IPost) => void
}

export const PostItem: React.FC<IPostItemProps> = ({post, remove, update}) => {

  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post)
  }

  const handleUpdate = (event: React.MouseEvent) => {
    const newData = prompt() || "";
    update({...post, title: newData, body: newData})
  }

  return (
    <div onClick={handleUpdate}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <ModuleBtn remove={handleRemove} onClick={handleRemove}>Удалить пост</ModuleBtn>
    </div>
  )
}
