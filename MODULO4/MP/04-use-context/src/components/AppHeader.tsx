// src/components/AppHeader.tsx

import { useTheme } from '../contexts/ThemeContext'
import { useAuth }  from '../contexts/AuthContext'
import ThemeToggle  from './ThemeToggle'
import UserBadge    from './UserBadge'

export default function AppHeader() {
  const { theme }        = useTheme()
  const { state: auth }  = useAuth()

  return (
    <header style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '12px 24px',
      background: theme === 'dark' ? '#0b0f19' : '#131c2e',
      borderBottom: '1px solid #374151',
    }}>
      <div>
        <h1 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#f3f4f6' }}>
          Panteón Espectral
        </h1>
        {auth.user && (
          <p style={{ margin: 0, fontSize: 12, color: '#9ca3af' }}>
            Cripta de {auth.user.role}
          </p>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <ThemeToggle />
        <UserBadge />
      </div>
    </header>
  )
}