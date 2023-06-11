import React from "react";

import * as Icon from "react-feather";
import { IconButton } from "../../components/IconButton";

import { CreatePost } from "../../components/CreatePost";
import { Post } from "../../components/Post";
import { HorizontalDivider } from "../../components/Divider";
import { FriendList } from "../../components/FriendList";

import { postMock, friendMock } from "../../utils";
import { Button } from "../../components/Button";

export const MyProfile = ({name = "John Doe", profilePictureSrc = "https://i.pravatar.cc/300", backgroundImageSrc = "https://i.pravatar.cc/300"}) => {
  const [editPopup, setEditPopup] = React.useState(false);

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
              !editPopup && 
              (
                <IconButton
                  icon={<Icon.Edit size={24} />}
                  haveTooltip={false}
                  onClickFunction={() => setEditPopup(true)}
                />
              )
            }
          </div>
        </div>
      </div>

      { 
        editPopup && 
        (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="bg-light-background rounded-lg p-8 shadow-2xl dark:bg-dark-background">
              <div className="flex items-center pb-6 gap-96">
                <p className="text-3xl font-bold">Editar Perfil</p>
                <IconButton
                  icon={<Icon.X size={24} />}
                  haveTooltip={false}
                  onClickFunction={() => setEditPopup(false)}
                />
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="profile-picture">Foto de Perfil</label>
                  <input id="profile-picture" type="file" className="bg-light-inputFill rounded-lg p-2 dark:bg-dark-inputFill" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="background-image">Foto de Fundo</label>
                  <input id="background-image" type="file" className="bg-light-inputFill rounded-lg p-2 dark:bg-dark-inputFill" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Nome</label>
                  <input id="name" type="text" placeholder="Atualizar o seu Nome" className="bg-light-inputFill rounded-lg p-2 dark:bg-dark-inputFill" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="profile-picture">E-mail</label>
                  <input id="profile-picture" type="text" placeholder="Digite um novo E-mail" className="bg-light-inputFill rounded-lg p-2 dark:bg-dark-inputFill" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="profile-picture">Senha</label>
                  <input id="profile-picture" type="text" placeholder="Digite uma nova Senha" className="bg-light-inputFill rounded-lg p-2 dark:bg-dark-inputFill" />
                </div>
              </div>
              <div className="flex justify-center pt-8">
                <Button
                  label="Atualizar"
                  customStyles="w-fit p-2 bg-light-primary text-white dark:text-light-background hover:brightness-75 dark:hover:brightness-75"
                  onClick={() => setEditPopup(false)}
                />
              </div>
            </div>
          </div>
        )
      }
      
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
