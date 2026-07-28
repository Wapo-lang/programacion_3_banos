// src/components/InlineEditor.tsx

import { useRef, useState } from 'react'

export default function InlineEditor() {
  const inputRef = useRef<HTMLInputElement>(null)
  const inputRef2 = useRef<HTMLInputElement>(null)
  const [saved, setSaved] = useState('Escribe algo y guarda en la cripta')

  function handleSave() {
    // Se lee el valor directamente del DOM — sin useState intermedio
    const value = inputRef.current?.value ?? ''
    const value2 = inputRef2.current?.value ?? ''
    setSaved(value2.trim() === '' && value.trim() === '' ? '(vacío)' : value + ' ' + value2)
  }

  function handleClear() {
    if (inputRef.current) {
      inputRef.current.value = ''  // muta el DOM directamente
      inputRef.current.focus()
    }
  }

  return (
    <div style={{ maxWidth: 340, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <p style={{ margin: 0, color: '#9ca3af', fontSize: 13 }}>
        Grabado en la lápida: <strong style={{ color: '#34d399' }}>{saved}</strong>
      </p>

      <input
        ref={inputRef}
        defaultValue=""
        placeholder="Escribe epitafio..."
        style={{ padding: '8px 12px', border: '1px solid #374151', borderRadius: 6, backgroundColor: '#0b0f19', color: '#d1d5db', boxSizing: 'border-box' }}
      />

      <input
        ref={inputRef2}
        defaultValue=""
        placeholder="Escribe sin causar re-renders espectrales..."
        style={{ padding: '8px 12px', border: '1px solid #374151', borderRadius: 6, backgroundColor: '#0b0f19', color: '#d1d5db', boxSizing: 'border-box' }}
      />

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={handleSave}
          style={{ flex: 1, padding: '8px', background: '#7c3aed', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 'bold' }}
        >
          Guardar
        </button>
        <button
          onClick={handleClear}
          style={{ padding: '8px 16px', background: '#374151', color: '#d1d5db', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 'bold' }}
        >
          Limpiar
        </button>
      </div>
    </div>
  )
}