import React, { ReactNode } from "react";
import "../Home.css";

interface PostContainerProps {
  children: ReactNode;
  onPostClick: () => void;
}

const PostContainer: React.FC<PostContainerProps> = ({
  children,
  onPostClick,
}) => {
  return (
    <div onClick={onPostClick} className="post-container">
      {children}
    </div>
  );
};

export default PostContainer;
