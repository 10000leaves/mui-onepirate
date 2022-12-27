import React from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Home";
import Privacy from "./pages/Privacy";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Terms from "./pages/Terms";

function Router() {
  return (
    <Routes>
      {/* 通常の最上位ルート */}
      <Route path="/" element={<Index />} />
      {/* 通常のルート */}
      <Route path="privacy" element={<Privacy />} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="terms" element={<Terms />} />
      {/* 404 */}
      <Route path="*" element={<p>NotFound</p>} />
    </Routes>
  );
}

export default Router;