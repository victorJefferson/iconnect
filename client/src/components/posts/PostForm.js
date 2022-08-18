import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  return (
    <div className='post-form'>
      <form
        className='form mb-4'
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addPost({ text }));
          setText('');
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Create a post'
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

export default PostForm;
