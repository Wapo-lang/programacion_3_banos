interface PetList {
  id: number
  name: string
  type: string
  age: number
  price: number
}

interface TiendaDeMascotasProps {
  products: PetList[]
  title?: string
}

export default function TiendaDeMascotas({
  products,
  title = 'Tienda de Mascotas',
}: TiendaDeMascotasProps) {
  return (
    <section>
      <h2 style={{ marginBottom: 16 }}>{title}</h2>

      {products.length === 0 && (
        <p style={{ color: '#999' }}>No hay mascotas disponibles.</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <span>
              {product.name}
              <em>
                {product.type}
              </em>
              <span style={{ marginLeft: 8 }}>
                Edad: {product.age}
              </span>
            </span>
            <strong>${product.price.toFixed(2)}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}