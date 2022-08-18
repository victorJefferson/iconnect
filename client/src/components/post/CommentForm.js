import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../../actions/post';

export const CommentForm = ({ postId }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  return (
    <div className='post-form'>
      <form
        className='form mb-4'
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addComment(postId, { text }));
          setText('');
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Add a comment'
          value={text}
          onChange={(e) => setText(e.target.value)}
          className='mb-2 text-area-shadow'
          required
        ></textarea>
        <input
          type='submit'
          className='btn btn-success btn-lg'
          value='Submit'
        />
      </form>
    </div>
  );
};
