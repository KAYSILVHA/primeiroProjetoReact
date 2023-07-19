import React from "react";
import {Paragrafo, HeaderNav, } from '../home/style';

function Home (){
  return(
    <div>
      <HeaderNav>
        <nav>
          <ul>
            <li>Home</li>
            <li>Contatos</li>
            <li>Informações</li>
          </ul>
        </nav>
      </HeaderNav>
      <Paragrafo>Roi</Paragrafo>
    </div>
  )
}

export default Home

