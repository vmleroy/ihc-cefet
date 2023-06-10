import React, { useEffect } from "react";
import * as Icon from "react-feather";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useUsers } from "../../api/user";

import { useQueryClient } from "react-query";

export const Search = () => {
  const queryClient = useQueryClient();
  const [search, setSearch] = React.useState({
    text: "",
    isSearching: false,
  });

  const { data: users } = useUsers(
    {
      name: {
        $regex: search.text,
        $options: "i",
      },
    },
    {
      enabled: search.isSearching,
      initialData: [],
      onSuccess: () => {
        setSearch({
          ...search,
          isSearching: false,
        });
      },
    }
  );
  const onSearch = () => {
    setSearch({
      ...search,
      isSearching: true,
    });
  };

  const onClickUser = (user) => {
    console.log("User: ", user._id, user.name, "clicado!");
  };

  useEffect(() => {
    return () => queryClient.invalidateQueries("users");
  }, []);

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
            onChange={(e) => {
              setSearch({
                ...search,
                text: e.target.value,
              });
            }}
          />
          <Button
            label="Pesquisar"
            customStyles={
              "w-fit p-2 bg-light-primary text-white dark:text-light-background hover:brightness-75 dark:hover:brightness-75"
            }
            onClick={() => {
              onSearch();
            }}
          />
        </div>
        <div className="flex w-3/4 flex-col gap-5">
          {users.map((user) => (
            <div
              key={user._id}
              className="flex flex-row items-center gap-2 rounded-lg bg-light-background p-2 hover:brightness-75 dark:bg-dark-background"
              onClick={() => onClickUser(user)}
            >
              <img
                src={user.profilePictureSrc}
                alt="profile picture"
                className="h-10 w-10 border-2 border-black object-contain"
              />
              <div className="flex w-full flex-col">
                <h1>{user.name}</h1>
                <h2>{user.email}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
