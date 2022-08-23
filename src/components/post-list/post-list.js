import React from 'react';

import PostListItem from '../post-list-item';

import './post-list.css';

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {

  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className='list-group-item'>
        <PostListItem
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLiked={() => onToggleLiked(id)} />
      </li>
      // label={item.label}
      // important={item.important} /> 
    ) // Спред оператор это тоже самое, что и закоментированные строки выше
  }); // Чтобы приходящие данные с сервера преобразовывались в верстку динамически

  return (
    <ul className='app-list list-group'>
      {elements}
    </ul>
  )
}

export default PostList;