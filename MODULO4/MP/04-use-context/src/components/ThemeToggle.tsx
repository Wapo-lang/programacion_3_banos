// src/components/ThemeToggle.tsx
// No recibe ninguna prop — lee el contexto directamente

import { useTheme } from '../contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '8px 16px',
        borderRadius: 20,
        border: '1px solid #374151',
        background: theme === 'dark' ? '#131c2e' : '#1f2937',
        color:      theme === 'dark' ? '#34d399' : '#f9fafb',
        cursor: 'pointer',
        fontWeight: 500,
        fontSize: 14,
      }}
    >
      {theme === 'light' ? '👻 Modo espectral' : '☀️ Modo normal'}
    </button>
  )
}