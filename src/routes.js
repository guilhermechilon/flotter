import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import ErrorPage from "./pages/ErrorPage";
import CadastroRotas from "./pages/CadastroRotas";
import Table from "./componentes/Table";

export default function Rotas() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/cadastrorotas" element={<CadastroRotas />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
          <Route path="/tabelateste" element={<Table />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
