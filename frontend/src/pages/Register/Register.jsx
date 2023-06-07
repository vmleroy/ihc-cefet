import React from "react";

import * as Icon from "react-feather";
import avatar from "../../assets/images/avatar.png";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const Register = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

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
            <div className="absolute right-0 rounded-full bg-light-primary">
              <Icon.HelpCircle size={24} />
            </div>
            <img src={avatar} alt="logo" className="object-contain p-2" />
          </div>
          <div className="flex w-1/2 flex-col gap-2">
            <Input
              icon={<Icon.User size={22} />}
              type="text"
              placeholder="Nome Completo"
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
    </div>
  );
};
