// src/components/CatalogProductItem.tsx
// Sin cambios respecto a la página 3 — el componente ya era correcto

interface CatalogProductItemProps {
  id: number
  name: string
  price: number
  onAddToCart: (id: number, name: string, price: number) => void
}

export default function CatalogProductItem({
  id,
  name,
  price,
  onAddToCart,
}: CatalogProductItemProps) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 0',
        borderBottom: '1px solid #4b5563',
        color: '#f9fafb',
      }}
    >
      <div>
        <p style={{ margin: 0, fontWeight: 500 }}>{name}</p>
        <p style={{ margin: 0, fontSize: 13, color: '#cbd5e1' }}>${price.toFixed(2)}</p>
      </div>
      <button
        onClick={() => onAddToCart(id, name, price)}
        style={{
          backgroundColor: '#4b5563',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          padding: '6px 14px',
          cursor: 'pointer',
        }}
      >
        + Registrar
      </button>
    </div>
  )
}