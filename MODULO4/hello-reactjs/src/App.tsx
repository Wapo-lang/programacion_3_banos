// src/App.tsx (para probar el ejercicio)

import TiendaDeMascotas from './components/MascotasList'

export default function App() {
  return (
    <main style={{ maxWidth: 480, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <TiendaDeMascotas
        products={[
          {
            id: 1,
            name: 'Bobby',
            type: 'Perro',
            age: 2,
            price: 150.00
          },
          {
            id: 2,
            name: 'Whiskers',
            type: 'Gato',
            age: 1,
            price: 120.00
          },
          {
            id: 3,
            name: 'Tweety',
            type: 'Pájaro',
            age: 3,
            price: 80.00
          }
        ]}
      />
    </main>
  )
}
