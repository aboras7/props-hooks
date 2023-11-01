import React from 'react'
import Card from './components/card/Card'
import Contador from './contador/Contador'
import Tarefa from './components/tarefa/Tarefa'

function App() {
  return (
    <>
    <Card titulo='Anime' descricao= 'Dragon Ball' />
    <Contador />
    <Tarefa />
    </>
  )
}

export default App