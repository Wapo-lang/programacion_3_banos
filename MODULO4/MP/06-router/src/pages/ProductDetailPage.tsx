// src/pages/ProductDetailPage.tsx

import { useParams, Link } from 'react-router-dom'

// Define el tipo de los parámetros de la URL
interface ProductParams {
  id: string   // los params siempre son string — convierte si necesitas número
}

export default function ProductDetailPage() {
  const { id } = useParams<ProductParams>()

  // Convierte a número cuando lo necesites
  const productId = Number(id)

  if (!id || isNaN(productId)) {
    return <p style={{ color: '#f87171', padding: 24, textAlign: 'center' }}>ID de ofrenda inválido en el panteón.</p>
  }

  return (
    <div style={{ backgroundColor: '#0b0f19', color: '#d1d5db', padding: 24, borderRadius: 10, border: '1px solid #374151' }}>
      <Link
        to="/products"
        style={{ fontSize: 13, color: '#a78bfa', textDecoration: 'none', fontWeight: 600 }}
      >
        ← Volver a las ofrendas
      </Link>
      <h1 style={{ marginTop: 12, fontSize: 24, fontWeight: 700, color: '#f3f4f6' }}>Ofrenda Espectral #{productId}</h1>
      <p style={{ color: '#9ca3af', lineHeight: 1.6 }}>
        Aquí reposan los detalles sagrados de la ofrenda con ID {productId} dentro del panteón digital.
      </p>
    </div>
  )
}