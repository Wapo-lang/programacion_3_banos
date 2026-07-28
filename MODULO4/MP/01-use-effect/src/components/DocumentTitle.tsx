import { useEffect } from 'react'

export default function DocumentTitle() {
  const randomNumber = Math.random();
  useEffect(() => {
    document.title = 'Cementerio - Domenica Carrera'
    console.log('efecto ejecutado en la cripta')
    console.log('Número espectral',randomNumber)

    // Limpieza: restaurar el título al desmontar
    return () => {
      document.title = 'Cripta React App'
      console.log('limpieza ejecutado')
    }
  }, [randomNumber])

  return (
    <p style={{ fontSize: 14, color: '#9ca3af' }}>
      🪦 El título de la cripta cambió al montar este componente espectral.
    </p>
  )
}