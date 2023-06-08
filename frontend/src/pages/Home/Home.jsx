import React from "react";

import * as Icon from "react-feather";

import { CreatePost } from "../../components/CreatePost";
import { CommentTextArea } from "../../components/CommentTextArea";

export const Home = () => {
  return (
    <div className="w-full h-full">
      <h1 className="text-4xl text-center">Home</h1>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-3/4">
          <CreatePost 
            icon={<Icon.Image size={24} />}
            size={"w-1/2"}
          />
        </div>
      </div>
    </div>
  );
};