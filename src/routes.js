import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import ErrorPage from "./pages/ErrorPage";
import CadastroRotas from "./pages/CadastroRotas";
import ExemploTabela from "./componentes/Table";

export default function Rotas() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/cadastrorotas" element={<CadastroRotas />}></Route>
          <Route path="/tabelateste" element={<ExemploTabela />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
