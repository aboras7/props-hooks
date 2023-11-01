import React from 'react'
import { useState } from 'react'

function Contador() {
    const [valor, setValor] = useState(0);

    function somarMaisUm() {
        setValor(valor + 1)
    }
  return (
    <div>
        <p>Curtidas: {valor}</p>
        <button onClick={somarMaisUm}>Curtir</button>
    </div>
  )
}

export default Contador