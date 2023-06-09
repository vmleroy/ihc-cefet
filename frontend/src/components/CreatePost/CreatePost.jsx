import React from "react";

import { Button } from "../../components/Button";
import { IconButton } from "../../components/IconButton";

export const CreatePost = ({ icon, size }) => {
  
  const localUser = JSON.parse(localStorage.getItem("user"));
  const [value, setValue] = React.useState("")

  let textAreaHeight = "h-12";

  const onInputTextArea = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
    textAreaHeight = `h-[${e.target.scrollHeight}px]`;
    setValue(e.target.value);
  };

  return (
    <div className={`flex flex-col ${size}`}>
      <div
        className={`bg-light-inputFill dark:bg-dark-inputFill resize-[${textAreaHeight}] rounded-t-lg focus-within:border-light-primary`}
      >
        <textarea
          id={`textarea-${localUser.name}`}
          value={value}
          placeholder="O que você está pensando..."
          className="peer w-full resize-none rounded-lg bg-light-inputFill bg-transparent px-4 text-light-secondary placeholder-input-text outline-none"
          onInput={(e) => onInputTextArea(e)}
        />
      </div>
      <div className="flex flex-row ">
        <div className="left-0 flex w-fit flex-row rounded-b-xl bg-light-inputFill dark:bg-dark-inputFill">
          <span
            alt={`input-icon-${localUser.name}`}
            className="flex w-14 items-center justify-center text-input-icon"
          >
            <IconButton icon={icon} tooltip="Adicionar foto" />
          </span>
        </div>
        <div className="w-full" />
        <div className="right-0 flex w-fit flex-row rounded-b-xl bg-light-inputFill dark:bg-dark-inputFill">
          <Button
            label="POSTAR"
            customStyles="w-fit p-2 rounded-t-none bg-light-primary text-white dark:text-light-background hover:brightness-75 dark:hover:brightness-75"
          />
        </div>
      </div>
    </div>
  );
};
