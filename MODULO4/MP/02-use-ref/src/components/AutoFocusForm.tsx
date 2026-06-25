// src/components/AutoFocusForm.tsx

import { useRef, useEffect } from 'react'

export default function AutoFocusForm() {
  const nameRef  = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  // Foco en el primer campo al montar
  useEffect(() => {
    nameRef.current?.focus()
  }, [])

  function handleNameKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    // Avanza al siguiente campo con Enter
    if (e.key === 'Enter') {
      e.preventDefault()
      emailRef.current?.focus()
    }
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 300 }}>
      <input
        ref={nameRef}
        placeholder="Nombre del alma..."
        onKeyDown={handleNameKeyDown}
        style={{ padding: '8px 12px', border: '1px solid #374151', borderRadius: 6, backgroundColor: '#0b0f19', color: '#d1d5db', boxSizing: 'border-box' }}
      />
      <input
        ref={emailRef}
        type="email"
        placeholder="Correo espectral (Email)"
        style={{ padding: '8px 12px', border: '1px solid #374151', borderRadius: 6, backgroundColor: '#0b0f19', color: '#d1d5db', boxSizing: 'border-box' }}
      />
      <button
        type="submit"
        style={{ padding: '8px', background: '#7c3aed', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 'bold' }}
      >
        Inscribir en la cripta
      </button>
    </form>
  )
}