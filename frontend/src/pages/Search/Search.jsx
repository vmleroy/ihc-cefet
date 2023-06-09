import React from "react";
import * as Icon from "react-feather";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

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
            customStyles={"w-fit p-2 bg-light-primary text-white dark:text-light-background hover:brightness-75 dark:hover:brightness-75"}
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}