// src/components/LiveClock.tsx

import { useState, useEffect } from 'react'

export default function LiveClock() {
  // Inicializador perezoso — new Date() se llama una sola vez
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Intervalo espectral');
      setTime(new Date())
      console.log('Intervalo Final en la cripta')
    }, 100)

    // Limpieza obligatoria — detiene el interval al desmontar
    return () => clearInterval(interval)
  }, [])

  return (
    <p style={{ fontFamily: 'monospace', fontSize: 28, margin: 0, letterSpacing: 2, color: '#34d399', textShadow: '0 0 10px rgba(52, 211, 153, 0.4)' }}>
      {time.toLocaleTimeString('en-US', { hour12: true })} 
    </p>
  )
}