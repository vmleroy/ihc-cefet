import React from "react";
import { createBrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "../pages/Layout";
import { NotFound } from "../pages/NotFound";

import { Login } from "../pages/Login";

const Root = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate replace to="/login"/>} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export const NavRouter = createBrowserRouter([{ path: "*", Component: Root }]);
