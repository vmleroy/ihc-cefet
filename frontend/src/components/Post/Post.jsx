import React from "react";

import * as Icon from "react-feather";
import { IconButton } from "../IconButton";
import { CommentTextArea } from "../CommentTextArea";
import { Button } from "../Button";

export const Post = ({ post }) => {
  const localUser = JSON.parse(localStorage.getItem("user"));
  const date = new Date(post.timestamp).toLocaleString();
  const alreadyLiked = post.likes.some(
    (like) => like.user.__id === localUser.__id
  );

  const [newComment, setNewComment] = React.useState("");

  const onClickLike = (object) => {
    console.log("Liked!", object);
  };
  const onClickComment = () => {
    console.log("Commented!", newComment);
  };

  return (
    <div className="h-fit w-full">
      <div id="user" className="flex h-fit w-full flex-row items-center gap-2">
        <img
          src={post.user.profilePictureSrc}
          alt="profile picture"
          className="h-16 w-16 border-2 border-black object-contain"
        />
        <div className="flex w-full flex-col">
          <h1>{post.user.name}</h1>
          <h2>{date}</h2>
        </div>
      </div>
      <div
        id="content"
        className="flex h-fit w-full flex-col items-center pt-2"
      >
        <div className="flex w-full flex-row items-center">
          <div className="w-full pl-4">{post.text}</div>
          <div className="flex flex-row items-center gap-2">
            <IconButton
              id={`like-${post._id}`}
              icon={<Icon.Heart size={18} />}
              haveTooltip={false}
              colorOnHover={"hover:text-red-700"}
              customButtonStyles={alreadyLiked ? "text-red-700" : ""}
              onClickFunction={() => onClickLike(post)}
            />
            <p>{post.likes.length}</p>
          </div>
        </div>
        {post.imageSrc && <img src={post.imageSrc} alt="post" className="w-full p-4 object-contain" />}
      </div>
      <div
        id="comment"
        className="flex h-fit w-full flex-row items-center gap-2"
      >
        <CommentTextArea
          writable={true}
          value={newComment}
          setValue={setNewComment}
        />
        <Button
          label="Comentar"
          customStyles="w-fit p-2 bg-light-primary text-white dark:text-light-background hover:brightness-75 dark:hover:brightness-75"
          onClick={onClickComment}
        />
      </div>
      <div id="users-comment" className="mt-4 flex h-fit w-full">
        {post.comments.map((comment) => (
          <div
            key={`comment-${comment.index}`}
            className="flex h-fit w-full flex-col items-center pl-4 pt-2"
          >
            <div
              id={`user-${comment.index}`}
              className="flex h-fit w-full flex-row items-center gap-2"
            >
              <img
                src={post.user.profilePictureSrc}
                alt="profile picture"
                className="h-8 w-8 border-2 border-black object-contain"
              />
              <div className="flex w-full flex-col">
                <h1>{post.user.name}</h1>
                <h2>{date}</h2>
              </div>
            </div>
            <div
              id={`comment-${comment.index}`}
              className="flex h-fit w-full flex-row gap-2"
            >
              <CommentTextArea writable={false} value={post.text} />
              <div className="flex flex-row items-center gap-2">
                <IconButton
                  id={`like-${comment.index}`}
                  icon={<Icon.Heart size={18} />}
                  haveTooltip={false}
                  colorOnHover={"hover:text-red-700"}
                  customButtonStyles={alreadyLiked ? "text-red-700" : ""}
                  onClickFunction={() => onClickLike(comment)}
                />
                <p>{comment.likes.length}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
