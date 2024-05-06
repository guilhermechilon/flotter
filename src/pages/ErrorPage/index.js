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
          padding: "40px",
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
          textDecoration: "underline",
          color: "#0000EE",
        }}
      >
        Voltar para o início
      </a>
    </>
  );
}

export default ErrorPage;
