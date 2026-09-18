import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UsuarioDetalhe = () => {
  const { id } = useParams();

  const [usuario, setUsuario] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscarUsuario() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setUsuario(data);
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      } finally {
        setCarregando(false);
      }
    }

    buscarUsuario();
  }, [id]);

  return (
    <div>
      <h2>Detalhes do Usuário</h2>
      {carregando ? (
        <p>Carregando...</p>
      ) : usuario ? (
        <div>
          <p><strong>Nome:</strong> {usuario.name}</p>
          <p><strong>Email:</strong> {usuario.email}</p>
          <p><strong>Telefone:</strong> {usuario.phone}</p>
          <p><strong>Website:</strong> {usuario.website}</p>
        </div>
      ) : (
        <p>Usuário não encontrado.</p>
      )}
    </div>
  );
};

export default UsuarioDetalhe;
