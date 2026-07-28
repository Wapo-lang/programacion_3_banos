// src/components/OrderMetrics.tsx

import { useState, useMemo } from 'react'

interface Order {
  id:        number
  customer:  string
  amount:    number
  status:    'pending' | 'paid' | 'refunded'
  createdAt: string
}

const ORDERS: Order[] = [
  { id: 1, customer: 'Ana García (Ánima)',   amount:  120.00, status: 'paid',     createdAt: '2024-01-15' },
  { id: 2, customer: 'Luis Pérez (Alquimista)', amount:  340.50, status: 'paid',     createdAt: '2024-01-18' },
  { id: 3, customer: 'María López (Banshee)',   amount:   89.99, status: 'pending',  createdAt: '2024-01-20' },
  { id: 4, customer: 'Carlos Ruiz (Espectro)',  amount:  560.00, status: 'refunded', createdAt: '2024-01-22' },
  { id: 5, customer: 'Ana García (Ánima)',   amount:  210.00, status: 'paid',     createdAt: '2024-02-01' },
  { id: 6, customer: 'Sofía Torres (Sombra)',  amount:   75.00, status: 'pending',  createdAt: '2024-02-05' },
  { id: 7, customer: 'Luis Pérez (Alquimista)', amount: 1100.00, status: 'paid',     createdAt: '2024-02-08' },
  { id: 8, customer: 'Elena Díaz (Vampiro)',   amount:  290.00, status: 'paid',     createdAt: '2024-02-10' },
]

export default function OrderMetrics() {
  const [statusFilter, setStatusFilter] = useState<Order['status'] | 'all'>('all')
  const [minAmount,    setMinAmount]    = useState(0)

  // Filtrado base — depende de statusFilter y minAmount
  const visibleOrders = useMemo(
    () => ORDERS.filter(o =>
      (statusFilter === 'all' || o.status === statusFilter) &&
      o.amount >= minAmount
    ),
    [statusFilter, minAmount]
  )

  // Métricas — cada una depende de visibleOrders
  const total   = useMemo(() => visibleOrders.reduce((s, o) => s + o.amount, 0), [visibleOrders])
  const average = useMemo(() => visibleOrders.length ? total / visibleOrders.length : 0, [total, visibleOrders.length])
  const maxOrder = useMemo(
    () => visibleOrders.reduce<Order | null>((max, o) => (!max || o.amount > max.amount) ? o : max, null),
    [visibleOrders]
  )
  const byStatus = useMemo(
    () => ({
      paid:     visibleOrders.filter(o => o.status === 'paid').length,
      pending:  visibleOrders.filter(o => o.status === 'pending').length,
      refunded: visibleOrders.filter(o => o.status === 'refunded').length,
    }),
    [visibleOrders]
  )

  const STATUS_COLORS: Record<Order['status'], string> = {
    paid:     '#34d399',
    pending:  '#fbbf24',
    refunded: '#a78bfa',
  }

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 580, margin: '0 auto', padding: 24, backgroundColor: '#0b0f19', color: '#d1d5db', borderRadius: 10, border: '1px solid #374151' }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4, color: '#f3f4f6' }}>Métricas del Panteón (OrderMetrics)</h2>
      <p style={{ color: '#9ca3af', fontSize: 14, marginBottom: 20 }}>
        Múltiples <code>useMemo</code> independientes derivados de un filtro base espectral.
      </p>

      {/* Controles */}
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 24 }}>
        <label style={{ fontSize: 14, display: 'flex', flexDirection: 'column', gap: 4, color: '#9ca3af' }}>
          Estado espectral
          <select
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value as typeof statusFilter)}
            style={{ padding: '6px 10px', border: '1px solid #374151', borderRadius: 6, backgroundColor: '#131c2e', color: '#d1d5db' }}
          >
            <option value="all">Todas las almas</option>
            <option value="paid">Tributo Pagado</option>
            <option value="pending">Ofrenda Pendiente</option>
            <option value="refunded">Alma Reembolsada</option>
          </select>
        </label>

        <label style={{ fontSize: 14, display: 'flex', flexDirection: 'column', gap: 4, color: '#9ca3af' }}>
          Tributo mínimo: ${minAmount}
          <input
            type="range"
            min={0}
            max={500}
            step={50}
            value={minAmount}
            onChange={e => setMinAmount(Number(e.target.value))}
            style={{ width: 160, accentColor: '#7c3aed' }}
          />
        </label>
      </div>

      {/* Métricas */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 12,
        marginBottom: 24,
      }}>
        {[
          { label: 'Pedidos visibles en la cripta', value: visibleOrders.length },
          { label: 'Tributo total',            value: `$${total.toFixed(2)}` },
          { label: 'Promedio espectral',       value: `$${average.toFixed(2)}` },
          { label: 'Mayor tributo',            value: maxOrder ? `$${maxOrder.amount.toFixed(2)} (${maxOrder.customer})` : '—' },
        ].map(({ label, value }) => (
          <div key={label} style={{
            padding: 14,
            background: '#131c2e',
            borderRadius: 10,
            fontSize: 13,
            border: '1px solid #374151',
          }}>
            <div style={{ color: '#9ca3af', marginBottom: 4 }}>{label}</div>
            <div style={{ fontWeight: 700, fontSize: 16, color: '#f3f4f6' }}>{value}</div>
          </div>
        ))}
      </div>

      {/* Contador por estado */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
        {(Object.entries(byStatus) as [Order['status'], number][]).map(([status, count]) => (
          <span key={status} style={{
            padding:    '4px 12px',
            borderRadius: 999,
            fontSize:   12,
            fontWeight: 600,
            background: '#131c2e',
            border:     `1px solid ${STATUS_COLORS[status]}`,
            color:      STATUS_COLORS[status],
          }}>
            {status}: {count}
          </span>
        ))}
      </div>

      {/* Tabla de pedidos */}
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr>
            {['#', 'Ánima / Cliente', 'Tributo', 'Estado', 'Fecha del rito'].map(h => (
              <th key={h} style={{
                textAlign: 'left',
                padding:   '6px 8px',
                borderBottom: '2px solid #374151',
                color: '#9ca3af',
                fontWeight: 600,
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visibleOrders.map(o => (
            <tr key={o.id} style={{ borderBottom: '1px solid #1f2937' }}>
              <td style={{ padding: '6px 8px', color: '#6b7280' }}>{o.id}</td>
              <td style={{ padding: '6px 8px', fontWeight: 500, color: '#f3f4f6' }}>{o.customer}</td>
              <td style={{ padding: '6px 8px', fontWeight: 700, color: '#34d399' }}>${o.amount.toFixed(2)}</td>
              <td style={{ padding: '6px 8px' }}>
                <span style={{
                  padding:  '2px 8px',
                  borderRadius: 999,
                  fontSize: 11,
                  fontWeight: 700,
                  background: '#131c2e',
                  border: `1px solid ${STATUS_COLORS[o.status]}`,
                  color:      STATUS_COLORS[o.status],
                }}>
                  {o.status}
                </span>
              </td>
              <td style={{ padding: '6px 8px', color: '#9ca3af' }}>{o.createdAt}</td>
            </tr>
          ))}
          {visibleOrders.length === 0 && (
            <tr>
              <td colSpan={5} style={{ textAlign: 'center', padding: 24, color: '#9ca3af' }}>
                Ninguna ánima coincide con estos filtros en el panteón.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}