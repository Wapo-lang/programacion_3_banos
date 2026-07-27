// src/components/WindowSize.tsx

import { useState, useEffect } from 'react'

interface WindowDimensions {
  width:  number
  height: number
}

export default function WindowSize() {
  const [dimensions, setDimensions] = useState<WindowDimensions>({
    width:  0,
    height: 0,
  })

  useEffect(() => {
    function handleResize() {
     console.log('resize detectado en la cripta');
      setDimensions({
        width:  window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <p style={{ fontFamily: 'monospace', fontSize: 14, color: '#34d399' }}>
      Cripta (Ventana): {dimensions.width} × {dimensions.height} px
    </p>
  )
}