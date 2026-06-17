// src/components/CurrentDateDisplay.tsx

export default function CurrentDateDisplay() {
  const now = new Date()

  const fecha = now.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const hora = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })

  return (
    <div style={{ fontSize: 14, color: '#555' }}>
      <span style={{ textTransform: 'capitalize' }}>{fecha}</span>
      <span style={{ marginLeft: 12, color: '#999' }}>{hora}</span>
    </div>
  )
}