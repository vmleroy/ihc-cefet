import React from "react";
import * as Icon from "react-feather";

import loginPageCollage from "../../assets/images/login-page-collage.png";
import logoLight from "../../assets/images/logoLight.png";
import logoDark from "../../assets/images/logoDark.png";

import useDarkMode from "../../hooks/useDarkMode";
import { VerticalDivider as Divider } from "../../components/Divider/";
import { Input } from "../../components/Input/";
import { Button } from "../../components/Button";
import { IconButton } from "../../components/IconButton";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [darkMode, setDarkMode] = useDarkMode();
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log("Dark Mode: ", darkMode);
  };

  return (
    <div className="flex h-full w-full">
      <div className="flex h-full w-1/2 flex-col items-center justify-center">
        <img
          src={loginPageCollage}
          alt="collage"
          className="w-2/3 object-contain"
        />
        <div className="mt-5 flex w-1/2 flex-wrap items-center justify-center">
          <p className="text-center font-balooChettan font-extrabold sm:text-[calc(0.4*56px)] md:text-[calc(0.6*56px)] lg:text-[calc(0.8*56px)] ">
            <span className="text-light-primary dark:text-light-primary">
              COMPARTILHE
            </span>{" "}
            E DESCUBRA
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <Divider customStyles="h-4/5" />
      </div>
      <div className="flex h-full w-1/2 flex-col items-center justify-center">
        <div className="mb-10 w-1/2">
          <img src={darkMode ? logoDark : logoLight } alt="logo" className="object-contain" />
        </div>
        <div className="flex w-1/2 flex-col items-center justify-center gap-3">
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
          <div className="flex w-full items-center justify-center">
            <Button label="LOGIN" customStyles="w-1/2" />
          </div>
          <div
            onClick={() => {
              console.log("resgiter");
            }}
            className="w-2/3 overflow-hidden text-center text-light-primary hover:underline"
          >
            Não Possui uma conta? Registre-se
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-0 w-16 rounded-r-md bg-light-secondary shadow-xl dark:bg-dark-secondary">
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
