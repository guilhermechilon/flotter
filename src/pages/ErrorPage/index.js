import React from "react";

function ErrorPage() {
  return (
    <>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        Página não encontrada
        <br />
      </h1>
      <a
        href="/cadastro"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        Voltar para o início
      </a>
    </>
  );
}

export default ErrorPage;
