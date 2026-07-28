// src/components/PrimeSieve.tsx

import { useState, useMemo } from 'react'

// Criba de Eratóstenes — complejidad O(n log log n)
function sieve(n: number): number[] {
  if (n < 2) return []
  const isPrime = new Array(n + 1).fill(true)
  isPrime[0] = isPrime[1] = false
  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) isPrime[j] = false
    }
  }
  return isPrime.reduce<number[]>((acc, ok, i) => (ok ? [...acc, i] : acc), [])
}

export default function PrimeSieve() {
  const [limit,   setLimit]   = useState(10_000)
  const [counter, setCounter] = useState(0)

  // useMemo: el cribado solo corre cuando `limit` cambia
  const primes = useMemo(() => sieve(limit), [limit])

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 520, margin: '0 auto', padding: 24, backgroundColor: '#0b0f19', color: '#d1d5db', borderRadius: 10, border: '1px solid #374151' }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4, color: '#f3f4f6' }}>Criba Espectral (PrimeSieve)</h2>
      <p style={{ color: '#9ca3af', fontSize: 14, marginBottom: 20 }}>
        El contador espectral provoca re-renders — la criba de Eratóstenes solo recorre la cripta cuando cambia el límite.
      </p>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 14, color: '#9ca3af' }}>
          Límite Espectral (N)
          <input
            type="range"
            min={1000}
            max={100_000}
            step={1000}
            value={limit}
            onChange={e => setLimit(Number(e.target.value))}
            style={{ width: 200, accentColor: '#7c3aed' }}
          />
          <span style={{ color: '#34d399', fontWeight: 600 }}>{limit.toLocaleString()}</span>
        </label>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 14, color: '#9ca3af' }}>
          Contador del rito (trigger re-renders)
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <button
              onClick={() => setCounter(c => c - 1)}
              style={{ padding: '4px 12px', cursor: 'pointer', backgroundColor: '#131c2e', color: '#d1d5db', border: '1px solid #4b5563', borderRadius: 4 }}
            >−</button>
            <span style={{ minWidth: 32, textAlign: 'center', color: '#f3f4f6', fontWeight: 600 }}>{counter}</span>
            <button
              onClick={() => setCounter(c => c + 1)}
              style={{ padding: '4px 12px', cursor: 'pointer', backgroundColor: '#131c2e', color: '#d1d5db', border: '1px solid #4b5563', borderRadius: 4 }}
            >+</button>
          </div>
        </div>
      </div>

      <div style={{
        display:      'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap:          12,
        marginBottom: 20,
      }}>
        {[
          { label: 'Primos en la cripta', value: primes.length.toLocaleString() },
          { label: 'Límite',             value: limit.toLocaleString() },
          { label: 'Mayor primo',        value: (primes.at(-1) ?? 0).toLocaleString() },
        ].map(({ label, value }) => (
          <div key={label} style={{
            padding:    12,
            background: '#131c2e',
            borderRadius: 8,
            fontSize:   13,
            border:     '1px solid #374151',
          }}>
            <div style={{ color: '#9ca3af', marginBottom: 4 }}>{label}</div>
            <div style={{ fontWeight: 700, fontSize: 18, color: '#34d399' }}>{value}</div>
          </div>
        ))}
      </div>

      <details style={{ fontSize: 13, color: '#9ca3af' }}>
        <summary style={{ cursor: 'pointer', color: '#a78bfa', fontWeight: 600 }}>
          Primeros 20 números primos espectrales
        </summary>
        <div style={{ marginTop: 8, color: '#d1d5db', lineHeight: 1.8, backgroundColor: '#131c2e', padding: 12, borderRadius: 6, border: '1px solid #374151' }}>
          {primes.slice(0, 20).join(', ')}
        </div>
      </details>
    </div>
  )
}