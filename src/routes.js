import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import ErrorPage from "./pages/ErrorPage";
import CadastroRotas from "./pages/CadastroRotas";

export default function Rotas() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/cadastrorotas" element={<CadastroRotas />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
