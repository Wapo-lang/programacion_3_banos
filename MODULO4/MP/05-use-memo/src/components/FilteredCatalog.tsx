// src/components/FilteredCatalog.tsx

import { useState, useMemo } from 'react'

interface Product {
  id:       number
  name:     string
  category: string
  price:    number
  active:   boolean
  stock:    number
}

const CATALOG: Product[] = [
  { id:  1, name: 'Ofrenda de Teclado mecánico',    category: 'Periféricos', price:  89.99, active: true,  stock: 15 },
  { id:  2, name: 'Monitor 27" espectral',         category: 'Pantallas',   price: 349.99, active: true,  stock:  8 },
  { id:  3, name: 'Mouse de ultratumba',         category: 'Periféricos', price:  29.99, active: false, stock:  0 },
  { id:  4, name: 'Webcam del más allá',            category: 'Cámaras',     price:  59.99, active: true,  stock: 22 },
  { id:  5, name: 'Auriculares BT espectrales',    category: 'Audio',       price: 149.99, active: true,  stock:  6 },
  { id:  6, name: 'Micrófono de ultratumba',      category: 'Audio',       price: 199.99, active: true,  stock:  3 },
  { id:  7, name: 'Hub USB-C maldito 7 puertos',  category: 'Periféricos', price:  44.99, active: false, stock:  0 },
  { id:  8, name: 'Monitor 32" 4K fantasmal',     category: 'Pantallas',   price: 699.99, active: true,  stock:  4 },
  { id:  9, name: 'SSD NVMe 2TB de la cripta',    category: 'Almacenamiento',price:149.99,active: true,  stock: 11 },
  { id: 10, name: 'Cámara mirrorless espectral',  category: 'Cámaras',     price: 899.99, active: true,  stock:  2 },
]

type SortKey = 'name' | 'price' | 'stock'

export default function FilteredCatalog() {
  const [search,    setSearch]    = useState('')
  const [onlyActive,setOnlyActive]= useState(true)
  const [category,  setCategory]  = useState('Todas')
  const [sortBy,    setSortBy]    = useState<SortKey>('name')

  // useMemo 1 — filtrar (depende de search, onlyActive, category)
  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return CATALOG.filter(p =>
      (!onlyActive || p.active) &&
      (category === 'Todas' || p.category === category) &&
      (p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
    )
  }, [search, onlyActive, category])

  // useMemo 2 — ordenar (depende de filtered y sortBy)
  const sorted = useMemo(
    () => [...filtered].sort((a, b) =>
      sortBy === 'name'  ? a.name.localeCompare(b.name)  :
      sortBy === 'price' ? a.price - b.price             :
                           b.stock - a.stock             // stock desc
    ),
    [filtered, sortBy]
  )

  const categories = useMemo(
    () => ['Todas', ...new Set(CATALOG.map(p => p.category))],
    [] // El catálogo es estático — solo se calcula una vez
  )

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 600, margin: '0 auto', padding: 24, backgroundColor: '#0b0f19', color: '#d1d5db', borderRadius: 10, border: '1px solid #374151' }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4, color: '#f3f4f6' }}>Catálogo Espectral (FilteredCatalog)</h2>
      <p style={{ color: '#9ca3af', fontSize: 14, marginBottom: 20 }}>
        Dos <code>useMemo</code> encadenados bajo conjuros: filtrar → ordenar.
      </p>

      {/* Controles */}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Busca ofrenda..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ flex: 1, minWidth: 140, padding: '6px 10px', border: '1px solid #374151', borderRadius: 6, backgroundColor: '#131c2e', color: '#d1d5db', boxSizing: 'border-box' }}
        />
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          style={{ padding: '6px 10px', border: '1px solid #374151', borderRadius: 6, backgroundColor: '#131c2e', color: '#d1d5db' }}
        >
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value as SortKey)}
          style={{ padding: '6px 10px', border: '1px solid #374151', borderRadius: 6, backgroundColor: '#131c2e', color: '#d1d5db' }}
        >
          <option value="name">A–Z</option>
          <option value="price">Precio ↑</option>
          <option value="stock">Stock ↓</option>
        </select>
        <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, cursor: 'pointer', color: '#9ca3af' }}>
          <input
            type="checkbox"
            checked={onlyActive}
            onChange={e => setOnlyActive(e.target.checked)}
          />
          Solo activos
        </label>
      </div>

      <p style={{ fontSize: 13, color: '#9ca3af', marginBottom: 12 }}>
        {sorted.length} de {CATALOG.length} ofrendas en la cripta
      </p>

      {/* Lista */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {sorted.map(p => (
          <div key={p.id} style={{
            display:        'flex',
            justifyContent: 'space-between',
            alignItems:     'center',
            padding:        '10px 14px',
            background:     p.active ? '#131c2e' : '#1f2937',
            borderRadius:   8,
            border:         '1px solid #374151',
            opacity:        p.active ? 1 : 0.6,
          }}>
            <div>
              <span style={{ fontWeight: 600, fontSize: 14, color: '#f3f4f6' }}>{p.name}</span>
              <span style={{ marginLeft: 8, fontSize: 12, color: '#a78bfa' }}>{p.category}</span>
            </div>
            <div style={{ textAlign: 'right', fontSize: 13 }}>
              <div style={{ fontWeight: 700, color: '#34d399' }}>${p.price.toFixed(2)}</div>
              <div style={{ color: p.stock < 5 ? '#f87171' : '#9ca3af' }}>
                Stock: {p.stock}
              </div>
            </div>
          </div>
        ))}
        {sorted.length === 0 && (
          <p style={{ textAlign: 'center', color: '#9ca3af', padding: 24 }}>
            Ningún espíritu coincide con esa búsqueda.
          </p>
        )}
      </div>
    </div>
  )
}