import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Youtube from "./assets/Youtube.png";

const Logo = styled.header`
background: red;
`

function App() {
  // Passo 1: Criar estado, responsável por permitir atualização.
  const [modal, setModal] = useState();
  // Passo 2: Criar função (Arrow Function) para meu estado.
  const Modal = () => {
    setModal("");
  };
  return (
    <>
      <Logo>
        <figure>
          <img src={Youtube} alt="" />
        </figure>
      </Logo>
      <section>
        <iframe
          width="200"
          height="250"
          src="https://www.youtube.com/embed/3QXqmk9RCgw?si=-pLD-a98R-Y-h-sE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
}
export default App;
