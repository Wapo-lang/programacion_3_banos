// src/components/UserBadge.tsx

import { useAuth } from '../contexts/AuthContext'

export default function UserBadge() {
  const { state, logout } = useAuth()

  if (!state.user) {
    return (
      <span style={{ fontSize: 13, color: '#9ca3af' }}>
        Alma no autenticada
      </span>
    )
  }

  const initials = state.user.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#d1d5db' }}>
      <div style={{
        width: 34, height: 34, borderRadius: '50%',
        background: '#7c3aed', color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontWeight: 700, fontSize: 13,
      }}>
        {initials}
      </div>
      <div>
        <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: '#f3f4f6' }}>
          {state.user.name}
        </p>
        <p style={{ margin: 0, fontSize: 12, color: '#a78bfa' }}>
          {state.user.role}
        </p>
      </div>
      <button
        onClick={logout}
        style={{
          marginLeft: 8, padding: '4px 10px',
          background: '#1f2937', border: '1px solid #4b5563',
          borderRadius: 6, cursor: 'pointer',
          fontSize: 12, color: '#d1d5db',
        }}
      >
        Despertar / Salir
      </button>
    </div>
  )
}