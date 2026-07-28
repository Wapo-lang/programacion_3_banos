// src/components/ThemePanel.tsx

import { useTheme } from '../theme/ThemeContext'

export default function ThemePanel() {
  const { theme, toggleTheme } = useTheme()

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
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <h3 style={{ margin: 0, color: '#34d399', fontWeight: 800, fontSize: 18 }}>
          Theming Espectral con Context + CSS variables
        </h3>
        <button
          onClick={toggleTheme}
          style={{
            padding:      '6px 14px',
            border:       '1px solid #374151',
            borderRadius: 8,
            background:   '#0b0f19',
            color:        '#f3f4f6',
            cursor:       'pointer',
            fontWeight:   600,
            fontSize:     13,
            transition:   'background 0.2s',
          }}
        >
          {theme === 'light' ? '🌙 Modo sombra profunda' : '☀️ Modo cripta abierta'}
        </button>
      </div>

      <p style={{ margin: '0 0 16px', color: '#9ca3af', fontSize: 14, lineHeight: 1.6 }}>
        El atributo <code>data-theme</code> en el contenedor raíz activa el bloque
        CSS correspondiente en el panteón. Todos los componentes heredan las variables sin
        necesidad de props ni contexto adicional.
      </p>

      {/* Paleta visual de las variables activas */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {['--bg', '--card', '--border', '--text', '--accent', '--muted'].map(v => (
          <div
            key={v}
            style={{
              padding:      '4px 10px',
              background:   `var(${v})`,
              border:       '1px solid #374151',
              borderRadius: 6,
              fontSize:     12,
              fontWeight:   600,
              color:        v === '--bg' || v === '--card' ? '#d1d5db' : '#0b0f19',
            }}
          >
            {v}
          </div>
        ))}
      </div>
    </div>
  )
}