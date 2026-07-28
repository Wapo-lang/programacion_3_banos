// src/components/WelcomeBanner.tsx

type WelcomeProps = {
  subtitle?: string
}

export default function WelcomeBanner({subtitle}: WelcomeProps) {
  return (
    <div style={{ background: '#1f2937', color: '#f5f5f4', padding: '20px 24px', borderRadius: 8, border: '1px solid #6b7280' }}>
      <h1 style={{ margin: 0, fontSize: 32 }}>Bienvenido al cementerio</h1>
      <p style={{ margin: '6px 0 0', opacity: 0.8 }}>Un lugar de calma y recuerdos.</p>
      <p style={{ margin: '6px 0 0', opacity: 0.8 }}> {subtitle ?? 'Panteón de los Recuerdos'}</p>
    </div>
  )
}