// src/components/InlineStyleDemo.tsx

import type { CSSProperties } from 'react'

export default function InlineStyleDemo() {
  // CSSProperties tipa el objeto — TypeScript detecta errores al escribir
  const card: CSSProperties = {
    border:         '1px solid #374151',
    background:     '#131c2e',
    borderRadius: 10,
    padding:        24,
  }

  const title: CSSProperties = {
    margin:     '0 0 12px 0',
    color:      '#34d399',
    fontWeight: 800,
    fontSize:   18,
  }

  const card1: CSSProperties = {
    border:         '1px solid #7c3aed',
    background:     '#131c2e',
    borderRadius: 15,
    padding:        24,
    backgroundColor: '#1a103c',
  }

  const title1: CSSProperties = {
    margin:     '0 0 12px 0',
    color:      '#a78bfa',
    fontWeight: 700,
    fontSize:   18,
  }

  return (
    <div style={{ maxWidth: 480, margin: '0 auto', color: '#d1d5db' }}>
      <div style={card}>
        <h3 style={title}>Estilos en línea (Inline Styles) Espectrales</h3>
        <p style={{ margin: 0, color: '#9ca3af', fontSize: 14, lineHeight: 1.6 }}> 
          Estilos como objetos JS dentro del componente. Útil para valores dinámicos
          pero sin soporte de pseudo-clases (<code>:hover</code>) ni media queries.
        </p>
      </div>
      <br />
      <div style={card1}>
        <h3 style={title1}>Tributo del Panteón — Estilo Personal</h3>
        <p style={{ margin: 0, color: '#f3f4f6', fontSize: 14, lineHeight: 1.6 }}>  
          Este estilo es propiedad de Carlos Baños y estoy haciendo una práctica
          para tener un punto(<code>:extra</code>) para alcanzar el 10 en la cripta.
        </p>
      </div>
    </div>
  )
}