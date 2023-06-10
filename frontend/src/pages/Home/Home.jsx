import React from "react";

import * as Icon from "react-feather";

import { CreatePost } from "../../components/CreatePost";
import { Post } from "../../components/Post";
import { HorizontalDivider } from "../../components/Divider";
import { FriendList } from "../../components/FriendList";

import { postMock, friendMock } from "../../utils";
import { usePosts } from "../../api/post";

import { useUsers } from "../../api/user";

export const Home = () => {
  const localUser = JSON.parse(localStorage.getItem("user"));
  const { data: friends } = useUsers(
    {
      _id: {
        $in: localUser.friends,
      },
    },
    {
      initialData: [],
    }
  );

  const [status, setStatus] = React.useState("initial");
  const [localPosts, setLocalPosts] = React.useState([]);
  const currentPage = React.useRef(1);
  const { refetch } = usePosts(
    {
      userId: {
        $in: [...localUser.friends, localUser._id],
      },
      options: {
        page: currentPage.current,
        size: 2,
        user: true,
      },
    },
    {
      initialData: [],
      onSuccess: (data) => {
        if (data.length === 0) {
          setStatus("done");
        }
        data.forEach((post) => {
          if (status) {
            if (!localPosts.some((p) => p._id === post._id)) {
              setLocalPosts((prev) => [...prev, post]);
            }
            setStatus("fetched");
          }
        });
      },
    }
  );

  return (
    <div className="h-full w-full overflow-auto p-5">
      <div className="flex justify-center">
        <div className="flex w-3/4 flex-col gap-8">
          <div id="friend-list" className="flex w-full">
            <FriendList friends={friends} />
          </div>
          <div id="create-post" className="flex w-full">
            <CreatePost icon={<Icon.Image size={24} />} size={"w-full"} />
          </div>
          <div
            id="posts"
            className="flex w-full flex-col gap-5 rounded-b-lg rounded-t-lg bg-light-background p-2 dark:bg-dark-background"
          >
            {localPosts.map((post, index) => (
              <div
                className="flex h-fit w-full flex-col gap-5"
                key={`post-${post._id}`}
              >
                <Post post={post} setLocalPosts={setLocalPosts} />
                {localPosts.length > 1 && index < localPosts.length - 1 && (
                  <HorizontalDivider />
                )}
              </div>
            ))}
          </div>
          {status === "fetching" && (
            <div className="mx-auto">Carregando...</div>
          )}
          {status === "done" && (
            <div className="mx-auto">Não há mais posts para carregar</div>
          )}
          {status === "fetched" && (
            <button
              onClick={async () => {
                currentPage.current = currentPage.current + 1;
                setStatus("fetching");
                await new Promise((resolve) => setTimeout(resolve, 1000));
                refetch();
              }}
            >
              Carregar mais posts
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
