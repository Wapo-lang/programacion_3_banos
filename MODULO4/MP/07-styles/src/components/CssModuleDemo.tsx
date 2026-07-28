// src/components/CssModuleDemo.tsx

import styles from '../styles/card.module.css'

export default function CssModuleDemo() {
  return (
    <div className={styles.card} style={{ backgroundColor: '#131c2e', color: '#d1d5db', padding: 24, borderRadius: 10, border: '1px solid #374151', maxWidth: 480, margin: '0 auto' }}>
      <h3 className={styles.title} style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, color: '#f3f4f6' }}>Módulos Espectrales (CSS Modules)</h3>
      <p style={{ margin: '0 0 16px', color: '#9ca3af', fontSize: 14, lineHeight: 1.6 }}>
        Cada clase recibe un nombre único generado en build time para proteger los componentes de la cripta.
        Elimina colisiones sin necesitar BEM ni prefijos manuales.
      </p>
      <button className={styles.btn} style={{ backgroundColor: '#7c3aed', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: 6, fontWeight: 600, cursor: 'pointer' }}>Invocación modular</button>
    </div>
  )
}