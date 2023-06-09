import React from "react";
import * as Icon from "react-feather";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { friendMock } from "../../utils";

export const Search = () => {
  return (
    <div className="h-full w-full overflow-auto p-5">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex w-3/4 flex-row gap-2">
          <Input
            icon={<Icon.Search size={18} />}
            id="search"
            type="text"
            name="search"
            placeholder="Pesquisar"
            customStyles={"w-full"}
            onChangeFunction={() => {}}
          />
          <Button
            label="Pesquisar"
            customStyles={
              "w-fit p-2 bg-light-primary text-white dark:text-light-background hover:brightness-75 dark:hover:brightness-75"
            }
            onClick={() => {}}
          />
        </div>
        <div className="flex w-3/4 flex-col gap-5">
          {friendMock.map((friend) => (
            <div key={friend._id} className="flex flex-row items-center gap-2 rounded-lg bg-light-background dark:bg-dark-background p-2">
              <img
                src={friend.profilePictureSrc}
                alt="profile picture"
                className="h-10 w-10 border-2 border-black object-contain"
              />
              <div className="flex w-full flex-col">
                <h1>{friend.name}</h1>
                <h2>{friend.username}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
