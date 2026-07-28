// src/pages/LoginPage.tsx

import { useState }    from 'react'
import { useNavigate }  from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [loading,  setLoading]  = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    // Simulación de login
    await new Promise((r) => setTimeout(r, 800))

    // replace: true — reemplaza la entrada en el historial
    // el usuario no puede volver al login con el botón "atrás"
    navigate('/dashboard', { replace: true })
  }

  return (
    <div style={{ maxWidth: 360, margin: '60px auto', padding: 24, backgroundColor: '#131c2e', borderRadius: 10, border: '1px solid #374151' }}>
      <h1 style={{ fontSize: 22, marginBottom: 20, color: '#f3f4f6', fontWeight: 700 }}>Invocación de Acceso (Login)</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico del alma"
          required
          style={inputStyle}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña secreta"
          required
          style={inputStyle}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '10px', background: loading ? '#4b5563' : '#7c3aed',
            color: '#fff', border: 'none', borderRadius: 6,
            cursor: loading ? 'not-allowed' : 'pointer', fontWeight: 600,
            fontSize: 14, transition: 'background 0.2s',
          }}
        >
          {loading ? 'Cruzando el umbral...' : 'Entrar a la Cripta'}
        </button>
      </form>
    </div>
  )
}

const inputStyle = {
  padding: '10px 12px',
  border: '1px solid #374151',
  borderRadius: 6, 
  fontSize: 14,
  backgroundColor: '#0b0f19',
  color: '#d1d5db',
  outline: 'none',
}