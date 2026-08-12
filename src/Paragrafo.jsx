import { useState } from "react";

const Paragrafo = ({ nome }) => {
  const [pontos, setPontos] = useState(0);

  const aumentarPontos = () => {
    setPontos(pontos + 1);
  };

  const diminuirPontos = () => {
    if (pontos <= 0) return
    setPontos(pontos - 1);
  };

  return (
    <div>
      <button onClick={diminuirPontos}>-</button>
      <p>
        {nome} tem {pontos} pontos.
      </p>
      <button onClick={aumentarPontos}>+</button>
    </div>
  );
};

export default Paragrafo;
