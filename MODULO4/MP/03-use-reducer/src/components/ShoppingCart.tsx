// src/components/ShoppingCart.tsx

import { useReducer, useMemo } from 'react'

interface CartItem {
  id:       number
  name:     string
  price:    number
  quantity: number
}

interface CartState {
  items:  CartItem[]
  isOpen: boolean
}

type CartAction =
  | { type: 'ADD_ITEM';    item: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; id: number }
  | { type: 'INCREMENT';   id: number }
  | { type: 'DECREMENT';   id: number }
  | { type: 'CLEAR' }
  | { type: 'TOGGLE_CART' }

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const exists = state.items.find((i) => i.id === action.item.id)
      if (exists) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        }
      }
      return {
        ...state,
        items: [...state.items, { ...action.item, quantity: 1 }],
      }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.id),
      }
    case 'INCREMENT':
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      }
    case 'DECREMENT':
      return {
        ...state,
        items: state.items
          .map((i) => i.id === action.id ? { ...i, quantity: i.quantity - 1 } : i)
          .filter((i) => i.quantity > 0),
      }
    case 'CLEAR':
      return { ...state, items: [] }
    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen }
  }
}

const PRODUCTS = [
  { id: 1, name: 'Ofrenda de Teclado mecánico',  price: 89  },
  { id: 2, name: 'Monitor 27" espectral',       price: 349 },
  { id: 3, name: 'Mouse de ultratumba',         price: 29  },
  { id: 4, name: 'Webcam del más allá',         price: 59  },
]

export default function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, { items: [], isOpen: false })

  const total     = useMemo(() => cart.items.reduce((acc, i) => acc + i.price * i.quantity, 0), [cart.items])
  const itemCount = useMemo(() => cart.items.reduce((acc, i) => acc + i.quantity, 0),          [cart.items])

  return (
    <div style={{ maxWidth: 440, fontFamily: 'sans-serif', color: '#d1d5db' }}>

      {/* Catálogo */}
      <div style={{ marginBottom: 16 }}>
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            style={{
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'center', padding: '10px 0',
              borderBottom: '1px solid #374151',
            }}
          >
            <div>
              <p style={{ margin: 0, fontWeight: 500, color: '#f3f4f6' }}>{product.name}</p>
              <p style={{ margin: 0, fontSize: 13, color: '#9ca3af' }}>${product.price}</p>
            </div>
            <button
              onClick={() => dispatch({ type: 'ADD_ITEM', item: product })}
              style={{
                padding: '6px 14px', background: '#7c3aed', color: '#fff',
                border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 'bold',
              }}
            >
              + Agregar alma
            </button>
          </div>
        ))}
      </div>

      {/* Botón carrito */}
      <button
        onClick={() => dispatch({ type: 'TOGGLE_CART' })}
        style={{
          width: '100%', padding: '10px',
          background: itemCount > 0 ? '#7c3aed' : '#374151',
          color:      itemCount > 0 ? '#fff'    : '#d1d5db',
          border: '1px solid #4b5563', borderRadius: 8, cursor: 'pointer',
          fontWeight: 600, marginBottom: 12,
        }}
      >
        {cart.isOpen ? 'Ocultar ofrendas' : `Ver ofrendas (${itemCount} items)`}
      </button>

      {/* Panel del carrito */}
      {cart.isOpen && (
        <div style={{ border: '1px solid #374151', borderRadius: 10, padding: 16, backgroundColor: '#0b0f19' }}>
          {cart.items.length === 0 ? (
            <p style={{ color: '#9ca3af', margin: 0 }}>El panteón de ofrendas está vacío.</p>
          ) : (
            <>
              {cart.items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', padding: '8px 0',
                    borderBottom: '1px solid #1f2937',
                  }}
                >
                  <span style={{ fontSize: 14, flex: 1, color: '#e5e7eb' }}>{item.name}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <button
                      onClick={() => dispatch({ type: 'DECREMENT', id: item.id })}
                      style={qtyBtn}
                    >
                      −
                    </button>
                    <span style={{ minWidth: 20, textAlign: 'center', fontSize: 14, color: '#34d399' }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => dispatch({ type: 'INCREMENT', id: item.id })}
                      style={qtyBtn}
                    >
                      +
                    </button>
                    <span style={{ minWidth: 60, textAlign: 'right', fontSize: 14, color: '#a78bfa' }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.id })}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#f87171' }}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}

              <div style={{ paddingTop: 12, display: 'flex', justifyContent: 'space-between', color: '#f3f4f6' }}>
                <span style={{ fontWeight: 600 }}>Tributo Total</span>
                <span style={{ fontWeight: 700, fontSize: 16, color: '#34d399' }}>${total.toFixed(2)}</span>
              </div>

              <button
                onClick={() => dispatch({ type: 'CLEAR' })}
                style={{
                  marginTop: 12, width: '100%', padding: '8px',
                  background: '#7f1d1d', color: '#fca5a5',
                  border: '1px solid #991b1b', borderRadius: 6, cursor: 'pointer',
                  fontWeight: 'bold',
                }}
              >
                Purgar ofrendas
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}

const qtyBtn: React.CSSProperties = {
  width: 24, height: 24, border: '1px solid #4b5563',
  borderRadius: 4, background: '#1f2937', color: '#d1d5db',
  cursor: 'pointer', fontSize: 14, lineHeight: 1,
}