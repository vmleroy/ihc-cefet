import React from "react";

import * as Icon from "react-feather";
import { IconButton } from "../../components/IconButton";

import { CreatePost } from "../../components/CreatePost";
import { Post } from "../../components/Post";
import { HorizontalDivider } from "../../components/Divider";
import { FriendList } from "../../components/FriendList";

import { Button } from "../../components/Button";
import { EditProfileModal } from "../../components/EditProfileModal";

import { useParams } from "react-router-dom";
import { useUser, useUsers } from "../../api/user";
import { usePosts } from "../../api/post";

export const Profile = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const { userId } = useParams();

  const { data: user } = useUser(userId, {
    initialData: {},
  });
  const { data: friends } = useUsers(
    {
      _id: {
        $in: user.friends,
      },
    },
    {
      initialData: [],
    }
  );
  const [status, setStatus] = React.useState("initial");
  const currentPage = React.useRef(1);
  const [localPosts, setLocalPosts] = React.useState([]);
  const { refetch } = usePosts(
    {
      userId: userId,
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
          if (status === "initial" || status === "fetching") {
            if (!localPosts.some((p) => p._id === post._id)) {
              setLocalPosts((prev) => [...prev, post]);
            }
            setStatus("fetched");
          }
        });
      },
    }
  );

  const localUser = JSON.parse(localStorage.getItem("user"));
  const isMyProfile = localUser._id === userId;
  const isMyFriend = localUser.friends.includes(userId);

  return (
    <div className="h-full w-full overflow-auto pb-10">
      {isMyProfile && isModalOpen && (
        <EditProfileModal closeModal={() => setIsModalOpen(false)} />
      )}
      <div id="main-profile" className="pb-14">
        <img
          id="background-image"
          className="h-80 w-full"
          src={user.bannerImageSrc}
          alt={user.name}
        />
        <div className="mx-32 -mt-44 flex items-end gap-5">
          <img
            id="profile-picture"
            className="h-64 w-64 rounded-lg border-4 border-light-secondary shadow-2xl dark:border-dark-secondary"
            src={user.profilePictureSrc}
            alt={user.name}
          />
          <div className="flex h-20 items-center gap-5">
            <p className="my-auto text-6xl font-bold">{user.name}</p>
            {isMyProfile ? (
              <IconButton
                icon={<Icon.Edit size={24} />}
                haveTooltip={false}
                onClickFunction={() => setIsModalOpen(true)}
              />
            ) : isMyFriend ? (
              <IconButton
                icon={<Icon.MinusCircle size={24} />}
                tooltip="Remover Amigo"
                colorOnHover={"hover:text-red-700"}
                onClickFunction={() => console.log("remove", userId)}
              />
            ) : (
              <IconButton
                icon={<Icon.PlusCircle size={24} />}
                tooltip="Adicionar Amigo"
                onClickFunction={() => console.log("add", userId)}
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex w-3/4 flex-col gap-8">
          <div id="friend-list" className="flex w-full">
            <FriendList friends={friends} />
          </div>
          {isMyProfile && (
            <div id="create-post" className="flex w-full">
              <CreatePost
                icon={<Icon.Image size={24} />}
                size={"w-full"}
                setLocalPosts={setLocalPosts}
              />
            </div>
          )}
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
