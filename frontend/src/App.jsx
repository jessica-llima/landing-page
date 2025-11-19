import React from 'react'
import Form from './components/Form'

export default function App(){
  return (
    <div className="app-root">
      <header style={{textAlign:'center', margin:'36px 0'}}>
        <h1>Central de Cadastros — React</h1>
        <p className="lead">Uma versão em React consumindo a API FastAPI (scaffold).</p>
      </header>

      <main style={{maxWidth:960, margin:'0 auto', padding:'0 16px'}}>
        <Form />
      </main>
    </div>
  )
}
