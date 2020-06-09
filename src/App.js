import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Carlos Henrique de Faria Araújo</h1>
      <hr />
      <p>
        Rua São Vitório 435- Arthur Alvim - São Paulo - SP - CEP:03561-000 <br></br>
        Telefone: (11) 9428-14438 - Email: chfaria13@gmail.com <br></br>
        17 anos - Solteiro
      </p>
      <p className="Objetivo">
        Objetivo: Emprego na Área de Programação
      </p>
      <h2 className="format">Qualificações</h2>
      <p className="list">
        {
          <ul>
            <li className="space">Experiencia com hardware, conhecimento sobre pacote Office</li>
            <li>Rápida adaptação do local de trabalho, boa comunicação, aprender fácil</li>
          </ul>
        }
      </p>
      <h2 className="format">Formação</h2>
      <p className="list">
        <strong>Curso de Técnico de Informática</strong> – <i>Cursando</i>{" "}
        (Conclusão prevista em novembro de 2020)<br></br>
        <strong>Senac São Paulo (Unidade Tatuapé)</strong>
        <strong>Curso de Inglês finalizado (CNA)</strong>
        <ul>
            <li className="space">
              <strong>Curso de criação de jogos</strong> -
              Escola SAGA – Jogos, arte digital, design<br></br> e efeitos
              visuais <strong>(1 mes) 2018</strong>
            </li>
            <li className="space">
              <strong>
                Curso de Inglês: Inglês Avançado 
              </strong>
            </li>
          </ul>
      </p>
      
      <p className="list">
        {
          
        }
      </p>
      <h2 className="format">Experiência Profissional</h2>
      <p className="list">
       <strong>Somente na área de hardware como autonômo</strong>
      </p>
      <h2 className="format">Idiomas</h2>
      <p className="list">
        <i>Inglês</i> (Avançado)
      </p>
      <h2 className="format">Interesses Gerais</h2>
      <p className="list">Conhecimento musical e edição de vídeo.</p>
    </div>
  );
}

export default App;