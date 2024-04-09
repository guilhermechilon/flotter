import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import Cadastro from "./pages/CadastroRotas";
import ErrorPage from "./pages/ErrorPage";
import RegistroMaquina from "./pages/RegistroMaquina";

export default function Rotas() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cadastro />}></Route>
          <Route path="/cadastro" element={<Cadastro />}></Route>
          <Route path="/registromaquina" element={<RegistroMaquina />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
