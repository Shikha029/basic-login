import React, { useState } from "react";
import { UserLoginProps } from "../App.tsx";
import bubble from "../assets/bubble.png";
import hand from "../assets/hand.png";
import post from "../assets/post.png";
import profile from "../assets/profile.png";
import "./Home.css";
import Modal from "./Modal.tsx";
import LoginSignupForm from "./sections/LoginSignupForm.tsx";
import PostContainer from "./sections/PostContainer.tsx";

interface Post {
  user: string;
  post: string;
  comments: number;
  isEdited: boolean;
  lastUpdated: string;
}

const Heading = () => (
  <div className="heading">
    <div className="hello">Hello Jane</div>
    <div className="intro">
      How are you doing today? Would you like to share something with the
      community 🤗
    </div>
  </div>
);

const PostBox = ({
  isPost,
  postText,
}: {
  isPost: boolean;
  postText: string;
}) => (
  <div className="comment-container">
    <div>
      <img
        className="hand-img"
        width={15}
        src={isPost ? post : hand}
        alt={isPost ? "post" : "hand"}
      />
    </div>
    <div className="post-text">{postText}</div>
  </div>
);

const Comments = ({ comments }: { comments: string }) => (
  <div className="comment-box">
    <img width={15} src={bubble} alt={bubble} />
    <div className="comment-text">{comments}</div>
  </div>
);

const Home: React.FC<UserLoginProps> = ({
  isUserLoggingIn,
  setIsUserLoggingIn,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [postList] = useState<Post[]>([
    {
      user: "Theresa Webb",
      post: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      comments: 24,
      isEdited: false,
      lastUpdated: "5 min ago",
    },
    {
      user: "Marvin McKinney",
      post: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      comments: 6,
      isEdited: true,
      lastUpdated: "8 min ago",
    },
    {
      user: "Marvin Webb",
      post: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      comments: 17,
      isEdited: false,
      lastUpdated: "15 min ago",
    },
  ]);

  const onPostClick = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  const renderCreatePost = () => (
    <PostContainer onPostClick={onPostClick}>
      <div className="create-post">Create post</div>
      <PostBox isPost={true} postText={"How are you feeling today?"} />
      {renderPostCta()}
    </PostContainer>
  );

  const renderPostCta = () => (
    <div className="post-button">
      <input type="button" onClick={onPostClick} value={"Post"} />
    </div>
  );

  const renderAllPosts = () =>
    postList.map((post: Post, index: number) => {
      return (
        <PostContainer key={index} onPostClick={onPostClick}>
          <div className="post-header">
            <div className="profile">
              <div className="avatar">
                <img width={40} src={profile} alt="profile" />
              </div>
              <div>
                <div className="profile-name">{post.user}</div>
                <div className="last-updated">
                  <div className="last-updated">{post.lastUpdated}</div>
                  {post.isEdited ? <div className="bullet" /> : null}
                  {post.isEdited ? (
                    <div className="last-updated">Edited</div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="dots">...</div>
          </div>
          <PostBox isPost={false} postText={post.post} />
          <Comments comments={`${post.comments} comments`} />
        </PostContainer>
      );
    });

  const renderModal = () =>
    showModal ? (
      <Modal>
        <LoginSignupForm
          setIsUserLoggingIn={setIsUserLoggingIn}
          isUserLoggingIn={isUserLoggingIn}
          onClose={onCloseModal}
        />
      </Modal>
    ) : null;

  return (
    <div className="home-container">
      <div className="home-box">
        <Heading />
        {renderCreatePost()}
        {renderAllPosts()}
        {renderModal()}
      </div>
    </div>
  );
};

export default Home;
