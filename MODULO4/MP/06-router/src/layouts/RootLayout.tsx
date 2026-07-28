// src/layouts/RootLayout.tsx

import { Link, NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#0b0f19', color: '#d1d5db', minHeight: '100vh' }}>
      <header style={{
        display: 'flex', alignItems: 'center', gap: 24,
        padding: '12px 24px', borderBottom: '1px solid #374151',
        backgroundColor: '#131c2e',
      }}>
        <Link
          to="/"
          style={{ fontWeight: 700, fontSize: 18, textDecoration: 'none', color: '#f3f4f6' }}
        >
          Cripta App 👻
        </Link>

        <nav style={{ display: 'flex', gap: 16 }}>
          {[
            { to: '/',         label: 'Inicio espectral' },
            { to: '/products', label: 'Ofrendas' },
            { to: '/about',    label: 'Acerca del panteón' },
            { to: '/registration', label: 'Invocación / Registro' },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}  // evita que "/" quede activo en todas las rutas
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontWeight:   isActive ? 600   : 400,
                color:        isActive ? '#34d399' : '#9ca3af',
                borderBottom: isActive ? '2px solid #34d399' : '2px solid transparent',
                paddingBottom: 4,
              })}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main style={{ maxWidth: 720, margin: '32px auto', padding: '0 16px' }}>
        <Outlet />  {/* aquí se renderiza la página activa */}
      </main>
    </div>
  )
}