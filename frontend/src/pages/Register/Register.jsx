import React from "react";

import * as Icon from "react-feather";
import avatar from "../../assets/images/avatar.png";

import useDarkMode from "../../hooks/useDarkMode";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { IconButton } from "../../components/IconButton";


export const Register = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [darkMode, setDarkMode] = useDarkMode();
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log("Dark Mode: ", darkMode);
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-3/4 flex-col items-center justify-center gap-5">
        <div className="flex w-full flex-col items-center justify-center text-center">
          <p className="text-[50px] font-bold text-light-primary">
            CADASTRE-SE
          </p>
          <p className="text-[20px] text-light-secondary dark:text-dark-secondary">
            Apenas a um clique de se <span className="underline">conectar</span>
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-5">
          <div className="relative w-1/5">
            <div className="absolute right-0">
              <IconButton
                icon={<Icon.HelpCircle size={24} />}
                tooltip="Selecione uma foto de perfil clicando na imagem"
                customButtonStyles="bg-light-primary dark:bg-dark-primary rounded-full dark:text-light-background"
              />
            </div>
            <img src={avatar} alt="logo" className="object-contain p-3" />
          </div>
          <div className="flex w-1/2 flex-col gap-2">
            <Input
              icon={<Icon.User size={22} />}
              type="text"
              placeholder="Nome Completo"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              name="name"
              customStyles={"w-full"}
            />
            <Input
              icon={<Icon.AtSign size={22} />}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              name="email"
              customStyles={"w-full"}
            />
            <Input
              icon={<Icon.Key size={22} />}
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              name="password"
              customStyles={"w-full"}
            />
          </div>
          <div className="flex w-1/2 flex-row items-center justify-center gap-2">
            <Button label="REGISTRAR" customStyles="w-1/2" />
            <Button label="VOLTAR" customStyles="w-1/2" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-0 w-16 bg-light-secondary dark:bg-dark-secondary rounded-r-md shadow-xl">
        {darkMode ? (
          <IconButton
            icon={<Icon.Sun size={24} />}
            tooltip="Light Mode"
            onClickFunction={handleDarkMode}
            customTootlipStyles="left-16"
          />
        ) : (
          <IconButton
            icon={<Icon.Moon size={24} />}
            tooltip="Dark Mode"
            onClickFunction={handleDarkMode}
            customTootlipStyles="left-16"
          />
        )}
      </div>
    </div>
  );
};
