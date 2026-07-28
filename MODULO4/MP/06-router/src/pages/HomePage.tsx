// src/pages/HomePage.tsx

export default function HomePage() {
    return (
        <div style={{ backgroundColor: '#0b0f19', color: '#d1d5db', padding: 24, borderRadius: 10, border: '1px solid #374151' }}>
            <h1 style={{ marginTop: 0, fontSize: 24, fontWeight: 700, color: '#f3f4f6' }}>
                Inicio Espectral
            </h1>
            <p style={{ color: '#34d399', fontWeight: 600, fontSize: 16, marginBottom: 16 }}>
                Bienvenido a la App del Panteón con React Router
            </p>
            <p style={{ color: '#9ca3af', lineHeight: 1.6 }}>
                Explora las ofrendas del catálogo, consulta las métricas de las ánimas o recorre las rutas ocultas de esta cripta digital.
            </p>
        </div>
    )
}