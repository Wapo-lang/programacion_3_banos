// src/layouts/DashboardLayout.tsx

import { NavLink, Outlet } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '',         label: 'Resumen de la cripta' },
  { to: 'analytics',  label: 'Analítica espectral'  },
  { to: 'settings',   label: 'Configuración del panteón' },
]

export default function DashboardLayout() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 24, padding: 24, backgroundColor: '#0b0f19', minHeight: '100vh', boxSizing: 'border-box' }}>
      <aside style={{ borderRight: '1px solid #374151', paddingRight: 16 }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: '#a78bfa', marginBottom: 12, letterSpacing: '0.05em' }}>
          PANTEÓN / DASHBOARD
        </p>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {NAV_ITEMS.map(({ to, label }) => (
            <NavLink
              key={label}
              to={to}
              end
              style={({ isActive }) => ({
                padding: '8px 12px', borderRadius: 6,
                textDecoration: 'none', fontSize: 14,
                background: isActive ? '#131c2e' : 'transparent',
                color:      isActive ? '#34d399' : '#9ca3af',
                fontWeight: isActive ? 600 : 400,
                border:     isActive ? '1px solid #374151' : '1px solid transparent',
              })}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <section style={{ backgroundColor: '#0b0f19', color: '#d1d5db' }}>
        <Outlet />  {/* renderiza la sub-ruta activa aquí */}
      </section>
    </div>
  )
}