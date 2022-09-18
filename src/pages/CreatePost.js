import React from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../Firebase-config';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = React.useState('');
  const [postText, SetPostText] = React.useState('');
  const navigate = useNavigate();

  const postCollectionRef = collection(db, 'posts');
  // console.log('CreatePost component, postCollectionRef:', postCollectionRef);
  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate('/');
  };

  React.useEffect(() => {
    if (!isAuth) {
      navigate('/');
    }
  }, []);
  
  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create a Post</h1>
        <div className="inputGp">
          <label>Title:</label>
          <input
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label>Post:</label>
          <textarea
            placeholder="Post..."
            onChange={(event) => {
              SetPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
