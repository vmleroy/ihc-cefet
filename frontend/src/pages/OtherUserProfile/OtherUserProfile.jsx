import React from "react";

import * as Icon from "react-feather";
import { IconButton } from "../../components/IconButton";

import { CreatePost } from "../../components/CreatePost";
import { Post } from "../../components/Post";
import { HorizontalDivider } from "../../components/Divider";
import { FriendList } from "../../components/FriendList";

import { postMock, friendMock } from "../../utils";
import { Button } from "../../components/Button";

export const OtherUserProfile = ({name = "John Doe", profilePictureSrc = "https://i.pravatar.cc/300", backgroundImageSrc = "https://i.pravatar.cc/300", isFriend = "true"}) => {
  return (
    <div className="h-full w-full overflow-auto pb-10">
      <div id="main-profile" className="pb-14">
        <img
          id="background-image"
          className="h-80 w-full"
          src={backgroundImageSrc}
          alt={name}
        />
        <div className="flex items-end -mt-44 mx-32 gap-5">
          <img
            id="profile-picture"
            className="h-64 w-64 border-4 border-light-secondary rounded-lg shadow-2xl dark:border-dark-secondary"
            src={profilePictureSrc}
            alt={name}
          />
          <div className="flex items-center h-20 gap-5">
            <p className="text-6xl font-bold my-auto">{name}</p>

            {/*Sinceramente, nao consegui resolver o problema de z-index do icone aparecendo mesmo em cima do popup de editar perfil..
            Entao eu adicionei essa condicional ai para remover ele como solucao temporaria.*/}
            { 
              !isFriend ? 
              (
                <IconButton
                  icon={<Icon.PlusCircle size={24} />}
                  tooltip="Adicionar Amigo"
                  onClickFunction={() => setEditPopup(true)}
                />
              )
              :
              (
                <IconButton
                  icon={<Icon.MinusCircle size={24} />}
                  tooltip="Remover Amigo"
                  colorOnHover={"hover:text-red-700"}
                  onClickFunction={() => setEditPopup(true)}
                />
              )
            }
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex w-3/4 flex-col gap-8">
          <div id="friend-list" className="flex w-full">
            <FriendList friends={friendMock} />
          </div>
          <div id="posts-list" className="flex w-full">
            <p className="text-3xl font-bold">Posts</p>
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
