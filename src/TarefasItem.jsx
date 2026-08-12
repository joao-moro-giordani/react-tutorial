import React from 'react'

const TarefasItem = ({ tarefa }) => {
  return (
    <li>{ tarefa.texto }</li>
  )
}

export default TarefasItem