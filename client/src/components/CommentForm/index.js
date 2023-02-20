import axios from 'axios';
import React, { useState } from 'react';
import { useUser } from '../../hooks/useUser';

const CommentForm = ({ articleId, onArticleUpdated }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const { user } = useUser();

  const addComment = async () => {
    const response = await axios.post(`/api/articles/${articleId}/comments`, {
      postedBy: name,
      text: text,
    });
    const updatedArticle = response.data;
    console.log('addComment  updatedArticle', updatedArticle);
    onArticleUpdated(updatedArticle);
    setName('');
    setText('');
  };
  return (
    <div id="add-comment-form">
      <h3>Add a Comment</h3>
      {user && <p>{user.email}</p>}
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addComment}>Add comment</button>
    </div>
  );
};

export default CommentForm;
