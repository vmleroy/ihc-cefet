import React from "react";

import * as Icon from "react-feather";

import { CreatePost } from "../../components/CreatePost";
import { Post } from "../../components/Post";
import { HorizontalDivider } from "../../components/Divider";
import { FriendList } from "../../components/FriendList";

import { postMock, friendMock } from "../../utils";

export const Home = () => {
  return (
    <div className="h-full w-full overflow-auto p-5">
      <div className="flex justify-center">
        <div className="flex w-3/4 flex-col gap-8">
          <div id="friend-list" className="flex w-full">
            <FriendList friends={friendMock} />
          </div>
          <div id="create-post" className="flex w-full">
            <CreatePost icon={<Icon.Image size={24} />} size={"w-full"} />
          </div>
          <div
            id="posts"
            className="flex w-full flex-col gap-5 rounded-b-lg rounded-t-lg bg-light-background p-2 dark:bg-dark-background"
          >
            {postMock.map((post, index) => (
              <div
                className="flex h-fit w-full flex-col gap-5"
                key={`post-${post._id}`}
              >
                <Post post={post} />
                {postMock.length > 1 && index < postMock.length - 1 && (
                  <HorizontalDivider />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
