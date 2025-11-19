import React, { useState, useEffect } from 'react'

const initialStates = {
  login: { email: '', senha: '' },
  pessoa: { nome: '', email: '', senha: '' },
  endereco: { cep: '', rua: '', numero: '', cidade: '', estado: '' }
}

export default function Form(){
  const [type, setType] = useState('pessoa')
  const [form, setForm] = useState(initialStates.pessoa)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setForm(initialStates[type] || {})
  }, [type])

  function handleChange(e){
    const { name, value } = e.target
    setForm(prev => ({...prev, [name]: value}))
  }

  function handleReset(){
    setForm(initialStates[type])
  }

  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    const payload = { type, data: form }
    try {
      const res = await fetch('http://localhost:8001/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const json = await res.json()
      alert('Resposta da API: ' + JSON.stringify(json))
      handleReset()
    } catch (err) {
      alert('Erro: ' + (err.message || err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="react-form">
      <div className="row">
        <label htmlFor="type-select">Tipo</label>
        <select id="type-select" value={type} onChange={e=>setType(e.target.value)}>
          <option value="pessoa">Pessoa</option>
          <option value="endereco">Endereço</option>
          <option value="login">Login</option>
        </select>
      </div>

      {type === 'login' && (
        <>
          <div className="row">
            <label htmlFor="email-login">Email</label>
            <input id="email-login" name="email" type="email" placeholder="seu.email@dominio.com" value={form.email} onChange={handleChange} required />
          </div>

          <div className="row">
            <label htmlFor="senha-login">Senha</label>
            <input id="senha-login" name="senha" type="password" placeholder="Sua senha" value={form.senha} onChange={handleChange} required />
          </div>

          <small className="helper">Não tem conta? <a className="helper-link" href="#">Cadastre-se</a></small>
        </>
      )}

      {type === 'pessoa' && (
        <>
          <div className="row">
            <label htmlFor="nome">Nome</label>
            <input id="nome" name="nome" type="text" placeholder="Seu nome completo" value={form.nome} onChange={handleChange} required />
          </div>

          <div className="row">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="exemplo@dominio.com" value={form.email} onChange={handleChange} required />
          </div>

          <div className="row">
            <label htmlFor="senha">Senha</label>
            <input id="senha" name="senha" type="password" placeholder="mínimo 8 caracteres" minLength={8} value={form.senha} onChange={handleChange} required />
          </div>
        </>
      )}

      {type === 'endereco' && (
        <>
          <div className="row">
            <label htmlFor="cep">CEP</label>
            <input id="cep" name="cep" type="text" placeholder="00000-000" value={form.cep} onChange={handleChange} required />
          </div>

          <div className="row">
            <label htmlFor="rua">Rua</label>
            <input id="rua" name="rua" type="text" placeholder="Nome da rua" value={form.rua} onChange={handleChange} required />
          </div>

          <div className="row">
            <label htmlFor="numero">Número</label>
            <input id="numero" name="numero" type="text" placeholder="123" value={form.numero} onChange={handleChange} required />
          </div>

          <div className="row compact">
            <div>
              <label htmlFor="cidade">Cidade</label>
              <input id="cidade" name="cidade" type="text" placeholder="Cidade" value={form.cidade} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="estado">Estado (UF)</label>
              <select id="estado" name="estado" value={form.estado} onChange={handleChange} required>
                <option value="">UF</option>
                <option>SP</option>
                <option>RJ</option>
                <option>MG</option>
                <option>BA</option>
                <option>PR</option>
              </select>
            </div>
          </div>
        </>
      )}

      <div className="actions">
        <button type="button" className="btn-ghost" onClick={handleReset}>Limpar</button>
        <button type="submit" className="btn-primary" disabled={loading}>{loading? 'Enviando...':'Salvar'}</button>
      </div>
    </form>
  )
}
