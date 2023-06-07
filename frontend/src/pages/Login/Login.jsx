import React from "react";

import loginPageCollage from "../../assets/images/login-page-collage.png";
import { VerticalDivider as Divider } from "../../components/Divider/";

export const Login = () => {
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
        <Divider customStyles="h-3/4" />
      </div>
      <div className="flex h-full w-1/2 flex-col items-center justify-center">
        Teste
      </div>
    </div>
  );
};
