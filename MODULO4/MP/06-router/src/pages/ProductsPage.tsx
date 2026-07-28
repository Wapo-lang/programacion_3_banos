// src/pages/ProductsPage.tsx

import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

interface Product {
  id:        number
  name:      string
  category: string
  price:    number
}

const PRODUCTS: Product[] = [
  { id: 1, name: 'Ánima Mecánica (Teclado)', category: 'reliquias',   price: 89  },
  { id: 2, name: 'Espejo Espectral 27"',    category: 'portales',    price: 349 },
  { id: 3, name: 'Orbe Inalámbrico (Mouse)',category: 'reliquias',   price: 29  },
  { id: 4, name: 'OJO HD (Cámara del más allá)', category: 'visiones', price: 59  },
  { id: 5, name: 'Ecos del Inframundo (Auriculares)', category: 'resonancias', price: 149 },
]

export default function ProductsPage() {
  // useSearchParams sincroniza filtros con la URL
  // ?q=ánima&category=reliquias queda en la barra del navegador
  const [searchParams, setSearchParams] = useSearchParams()

  const query    = searchParams.get('q')        ?? ''
  const category = searchParams.get('category') ?? ''

  function handleQueryChange(value: string) {
    setSearchParams(
      (prev) => {
        if (value) prev.set('q', value)
        else       prev.delete('q')
        return prev
      },
      { replace: true }
    )
  }

  function handleCategoryChange(value: string) {
    setSearchParams(
      (prev) => {
        if (value) prev.set('category', value)
        else       prev.delete('category')
        return prev
      },
      { replace: true }
    )
  }

  const filtered = useMemo(() =>
    PRODUCTS
      .filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
      .filter((p) => !category || p.category === category),
    [query, category]
  )

  const categories = [...new Set(PRODUCTS.map((p) => p.category))]

  return (
    <div style={{ backgroundColor: '#0b0f19', color: '#d1d5db', padding: 24, borderRadius: 10, border: '1px solid #374151' }}>
      <h1 style={{ fontSize: 22, marginBottom: 16, color: '#f3f4f6', fontWeight: 700 }}>Catálogo de Ofrendas</h1>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
        <input
          value={query}
          onChange={(e) => handleQueryChange(e.target.value)}
          placeholder="Buscar ofrenda en la cripta..."
          style={{ flex: 1, minWidth: 200, padding: '10px 12px', border: '1px solid #374151', borderRadius: 6, backgroundColor: '#131c2e', color: '#d1d5db', outline: 'none' }}
        />
        <select
          value={category}
          onChange={(e) => handleCategoryChange(e.target.value)}
          style={{ padding: '10px 12px', border: '1px solid #374151', borderRadius: 6, backgroundColor: '#131c2e', color: '#d1d5db', outline: 'none' }}
        >
          <option value="">Todas las naturalezas</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {filtered.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '12px 16px', border: '1px solid #374151', borderRadius: 8,
              backgroundColor: '#131c2e', transition: 'border-color 0.2s',
            }}>
              <div>
                <p style={{ margin: 0, fontWeight: 600, color: '#f3f4f6' }}>{product.name}</p>
                <p style={{ margin: 0, fontSize: 12, color: '#a78bfa' }}>{product.category}</p>
              </div>
              <span style={{ fontWeight: 700, color: '#34d399' }}>${product.price.toFixed(2)}</span>
            </div>
          </Link>
        ))}
        {filtered.length === 0 && (
          <p style={{ color: '#9ca3af', textAlign: 'center', padding: 24 }}>Ninguna ofrenda coincide con los filtros del panteón.</p>
        )}
      </div>
    </div>
  )
}