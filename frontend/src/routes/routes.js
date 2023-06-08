import React from "react";
import { createBrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "../pages/Layout";
import { NotFound } from "../pages/NotFound";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

import { LayoutLogged } from "../pages/Layout";
import { Home } from "../pages/Home";

const Root = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<LayoutLogged />}>
        <Route path="home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export const NavRouter = createBrowserRouter([{ path: "*", Component: Root }]);
