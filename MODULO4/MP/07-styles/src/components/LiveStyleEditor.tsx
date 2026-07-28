// src/components/LiveStyleEditor.tsx

import { useStyles } from '../hooks/useStyles'

export default function LiveStyleEditor() {
  const { style, setColor, setSize, setBold, reset, setBackgroundColor } = useStyles({
    backgroundColor: '#1a103c',
    color:      '#34d399',
    fontSize:   16,
    fontWeight: 400,
  })

  return (
    <div style={{
      border:       '1px solid #374151',
      background:   '#131c2e',
      borderRadius: 10,
      padding:      24,
      maxWidth:     480,
      margin:       '0 auto',
      color:        '#d1d5db',
    }}>
      <h3 style={{ margin: '0 0 12px', color: '#a78bfa', fontWeight: 800, fontSize: 18 }}>
        Hook useStyles — Editor Espectral en Tiempo Real
      </h3>

      {/* Controles */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 13, color: '#9ca3af' }}>
          Color del texto
          <input
            type="color"
            defaultValue="#34d399"
            onChange={e => setColor(e.target.value)}
            style={{ width: 48, height: 32, border: '1px solid #374151', borderRadius: 4, cursor: 'pointer', backgroundColor: '#0b0f19' }}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 13, color: '#9ca3af' }}>
          Color de fondo
          <input
            type="color"
            defaultValue="#1a103c"
            onChange={e => setBackgroundColor(e.target.value)}
            style={{ width: 48, height: 32, border: '1px solid #374151', borderRadius: 4, cursor: 'pointer', backgroundColor: '#0b0f19' }}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 13, color: '#9ca3af' }}>
          Tamaño ({style.fontSize}px)
          <input
            type="range"
            min={12}
            max={36}
            defaultValue={16}
            onChange={e => setSize(Number(e.target.value))}
            style={{ accentColor: '#7c3aed' }}
          />
        </label>

        <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#9ca3af', cursor: 'pointer' }}>
          <input
            type="checkbox"
            onChange={e => setBold(e.target.checked)}
            style={{ accentColor: '#7c3aed' }}
          />
          Negrita
        </label>

        <button
          onClick={reset}
          style={{
            padding:      '4px 12px',
            border:       '1px solid #374151',
            borderRadius: 6,
            background:   'transparent',
            color:        '#a78bfa',
            cursor:       'pointer',
            fontSize:     13,
            fontWeight:   600,
            alignSelf:    'flex-end',
            transition:   'background 0.2s',
          }}
        >
          Reset
        </button>
      </div>

      {/* Preview en tiempo real */}
      <div style={{
        padding:      16,
        border:       '1px dashed #4b5563',
        borderRadius: 8,
        background:   '#0b0f19',
      }}>
        <p style={{ margin: 0, ...style, padding: 8, borderRadius: 4 }}>
          Este texto cambia de estilo en tiempo real usando el hook useStyles dentro de la cripta.
        </p>
      </div>
    </div>
  )
}