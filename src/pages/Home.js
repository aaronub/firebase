import React from 'react';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '../Firebase-config';

const Home = ({isAuth}) => {
  const [postList, SetPostList] = React.useState([]);
  const postCollectionRef = collection(db, 'posts');
  //Have to be in front of React.useEffect, cause its the dependencies of of that??!!!
  const deletePost = async (id) => {
    const postDoc = doc(db, 'posts', id);
    await deleteDoc(postDoc);
  };

  React.useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      SetPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, [deletePost]);



  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div key={post.id} className="post">
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && <button
                  onClick={() => {
                    deletePost(post.id);
                  }}
                >
                  &#128465;
                </button>}
              </div>
            </div>
            <div className="postTextContainer"> {post.postText} </div>
            <h3>{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
