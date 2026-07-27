// src/components/FetchUser.tsx

import { useState, useEffect } from 'react'

interface User {
  id:       number
  name:     string
  email:    string
  username: string
  address: any
  website: string
}

export default function FetchUser() {
  const [userId,  setUserId]  = useState(1)
  const [user,    setUser]    = useState<User | null>(null)
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState<string | null>(null)

  useEffect(() => {
    // Flag de cancelación — evita race conditions y
    // actualizaciones de estado en componentes desmontados
    let cancelled = false

    async function fetchUser() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        )
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`)

        const data: User = await res.json()

        // Solo actualiza si el componente sigue montado
        if (!cancelled) setUser(data)
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Error desconocido')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchUser()

    return () => { cancelled = true }
  }, [userId])

  return (
    <div style={{ maxWidth: 420 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {[1, 2, 3,4,5].map((id) => (
          <button
            key={id}
            onClick={() => setUserId(id)}
            style={{
              padding: '6px 14px',
              borderRadius: 6,
              border: '1px solid #374151',
              background: userId === id ? '#7c3aed' : '#131c2e',
              color:      userId === id ? '#fff'    : '#d1d5db',
              cursor: 'pointer',
              fontWeight: userId === id ? 600 : 400,
            }}
          >
            Alma {id}
          </button>
        ))}
      </div>

      {loading && (
        <p style={{ color: '#9ca3af', fontSize: 14 }}>Invocando alma...</p>
      )}
      {error && (
        <p style={{ color: '#fca5a5', fontSize: 14 }}>Error espectral: {error}</p>
      )}
      {user && !loading && (
        <div style={{ padding: 14, border: '1px solid #374151', borderRadius: 8, backgroundColor: '#131c2e' }}>
          <p style={{ margin: '0 0 4px', fontWeight: 600, color: '#a78bfa' }}>{user.name}</p>
          <p style={{ margin: '0 0 4px', fontSize: 13, color: '#9ca3af' }}>
            @{user.username}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: '#9ca3af' }}>
            {user.email}
          </p>
           <p style={{ margin: 0, fontSize: 13, color: '#9ca3af' }}>
            {user.address.street}
          </p>
           <p style={{ margin: 0, fontSize: 13, color: '#9ca3af' }}>
            {user.address.city}
          </p>
           <p style={{ margin: 0, fontSize: 13, color: '#9ca3af' }}>
            {user.website}
          </p>
           <p style={{ margin: 0, fontSize: 13, color: '#9ca3af' }}>
            {user.address.geo.lat}
          </p>
        </div>
      )}
    </div>
  )
}