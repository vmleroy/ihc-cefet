import React from "react";
import { Routes, Route } from "react-router-dom";

import { AccessPage } from "../pages/AccessPage";

export function NavRoutes() {
  return (
    <Routes>
      { /* Public Routes */}
      <Route path="/" element={<AccessPage />}>
        <Route path="login" element={<div>Login</div>} />
        <Route path="register" element={<div>Register</div>} />
      </Route>
    </Routes>
  );
}