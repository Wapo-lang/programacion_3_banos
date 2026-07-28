// src/components/SearchWithEffect.tsx

import { useState, useEffect } from 'react'

const MOCK_DB: Record<string, string> = {
  react:      'Biblioteca para invocar interfaces desde el más allá.',
  typescript: 'JavaScript maldito con tipos estáticos.',
  vite:       'Herramienta de invocación frontend ultrarrápida.',
  hooks:      'Conjuros que permiten usar estado y efectos en la cripta.',
}

export default function SearchWithEffect() {
  const [query,  setQuery]  = useState('')
  const [result, setResult] = useState<string | null>(null)

  useEffect(() => {
    const normalized = query.toLowerCase().trim()

    if (!normalized) {
      setResult(null)
      return
    }

    const found = MOCK_DB[normalized]
    result: setResult(found ?? 'Ningún espíritu responde a esa búsqueda.')
  }, [query])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 340 }}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Busca: react, typescript, vite, hooks..."
        style={{
          padding: '8px 12px',
          border: '1px solid #374151',
          borderRadius: 6,
          fontSize: 14,
          backgroundColor: '#0b0f19',
          color: '#d1d5db',
          boxSizing: 'border-box',
        }}
      />
      {result && (
        <p style={{ margin: 0, fontSize: 14, color: '#34d399', padding: '8px 12px', background: '#131c2e', border: '1px solid #374151', borderRadius: 6 }}>
          {result}
        </p>
      )}
    </div>
  )
}