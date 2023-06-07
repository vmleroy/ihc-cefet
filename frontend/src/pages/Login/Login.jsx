import React from "react";

import loginPageCollage from "../../assets/images/login-page-collage.png";

export const Login = () => {

  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col w-1/2 h-full items-center justify-center">
        <img src={loginPageCollage} alt="collage" className="w-1/2" />
        <div className="w-full mt-5">
          <p className="font-balooChettan text-center text-3xl font-medium">
            <span className="text-light-primary dark:text-light-primary">COMPARTILHE</span> E DESCUBRA
          </p>
        </div>
      </div>
      <div className="flex flex-col w-1/2 h-full items-center justify-center">
        Teste
      </div>
    </div>
  );
}