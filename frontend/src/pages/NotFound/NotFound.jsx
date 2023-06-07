import React from "react";

export const NotFound = () => {

  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col w-1/2 h-full items-center justify-center">
        <h1 className="text-9xl font-bold text-light-secondary dark:text-dark-secondary">404</h1>
      </div>
      <div className="flex flex-col w-1/2 h-full items-center justify-center">
        <h1 className="text-9xl font-bold text-light-secondary dark:text-dark-secondary">Not Found</h1>
      </div>
    </div>
  )
}