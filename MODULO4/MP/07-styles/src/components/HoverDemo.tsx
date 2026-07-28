// src/components/HoverDemo.tsx

import { useHover } from '../hooks/useHover'

export default function HoverDemo() {
  const btn1 = useHover(
    {
      padding: '10px 20px', background: '#7c3aed', color: 'white',
      border: 'none', borderRadius: 8, cursor: 'pointer',
      fontWeight: 600, transition: 'all 0.2s',
    },
    {
      background: '#6d28d9',
      transform:  'translateY(-2px)',
      boxShadow:  '0 4px 12px rgba(124,58,237,0.4)',
    }
  )

  const btn2 = useHover(
    {
      padding: '10px 20px', background: 'transparent', color: '#34d399',
      border: '1px solid #34d399', borderRadius: 8, cursor: 'pointer',
      fontWeight: 600, transition: 'all 0.2s',
    },
    { background: '#34d399', color: '#0b0f19' }
  )

  const card = useHover(
    {
      border: '1px solid #374151', background: '#131c2e',
      borderRadius: 10, padding: 24, transition: 'all 0.2s', cursor: 'default',
    },
    {
      borderColor: '#7c3aed',
      boxShadow:   '0 4px 16px rgba(0,0,0,0.4)',
    }
  )

  return (
    <div {...card.hoverProps} style={{ ...card.style, color: '#d1d5db', maxWidth: 480, margin: '0 auto' }}>
      <h3 style={{ margin: '0 0 12px', color: '#34d399', fontWeight: 800, fontSize: 18 }}>
        Hook useHover — Aura Espectral al pasar el cursor
      </h3>
      <p style={{ margin: '0 0 16px', color: '#9ca3af', fontSize: 14, lineHeight: 1.6 }}>
        Pasa el cursor sobre la cripta-tarjeta y sobre los botones para ver los efectos arcanos.
        El hook devuelve <code>hoverProps</code> y el <code>style</code> mezclado.
      </p>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <button {...btn1.hoverProps} style={btn1.style}>Hover elevación</button>
        <button {...btn2.hoverProps} style={btn2.style}>Hover relleno</button>
      </div>
    </div>
  )
}