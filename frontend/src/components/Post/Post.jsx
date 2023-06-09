import React from "react";

import * as Icon from "react-feather";
import { IconButton } from "../IconButton";
import { CommentTextArea } from "../CommentTextArea";
import { Button } from "../Button";

export const Post = ({ post }) => {
  const localUser = JSON.parse(localStorage.getItem("user"));
  const date = new Date(post.timestamp).toLocaleString();
  const alreadyLiked = post.likes.some(
    (like) => like.user._id === localUser._id
  );

  const [newComment, setNewComment] = React.useState("");
  const onClickComment = () => {
    console.log(newComment);
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
        className="flex h-fit w-full flex-row items-center pl-4 pt-2"
      >
        <div className="w-full">{post.text}</div>
        <div className="flex flex-row items-center gap-2">
          <IconButton
            icon={<Icon.Heart size={18} />}
            haveTooltip={false}
            colorOnHover={"hover:text-red-700"}
            customButtonStyles={alreadyLiked ? "text-red-700" : ""}
          />
          <p>{post.likes.length}</p>
        </div>
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
          customStyles="w-20 bg-light-primary text-white dark:text-light-background hover:brightness-75 dark:hover:brightness-75"
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
              id="user"
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
            <div id="comment" className="flex h-fit w-full flex-row gap-2">
              <CommentTextArea writable={false} value={post.text} />
              <div className="flex flex-row items-center gap-2">
                <IconButton
                  icon={<Icon.Heart size={18} />}
                  haveTooltip={false}
                  colorOnHover={"hover:text-red-700"}
                  customButtonStyles={alreadyLiked ? "text-red-700" : ""}
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
