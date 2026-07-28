// src/components/CssGlobalDemo.tsx

import '../styles/global.css'

export default function CssGlobalDemo() {
  return (
    <div className="globalCard" style={{ backgroundColor: '#131c2e', color: '#d1d5db', padding: 24, borderRadius: 10, border: '1px solid #374151', maxWidth: 480, margin: '0 auto' }}>
      <h3 className="globalTitle" style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, color: '#f3f4f6' }}>CSS Global Espectral</h3>
      <p style={{ margin: 0, color: '#34d399', fontSize: 14, lineHeight: 1.6 }}>
        Clases definidas en un archivo <code>.css</code> importado en el componente dentro del panteón.
        Scope global — pueden colisionar si dos ánimas usan el mismo nombre de clase.
      </p>
    </div>
  )
}