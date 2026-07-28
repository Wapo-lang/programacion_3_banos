// src/components/MultiTagFilter.tsx

import { useState, useMemo } from 'react'

interface Article {
  id:    number
  title: string
  tags:  string[]
  views: number
}

const ARTICLES: Article[] = [
  { id: 1, title: 'Invocación espectral de React Hooks',        tags: ['react', 'hooks', 'tutorial'],     views: 4200 },
  { id: 2, title: 'TypeScript con React en la cripta: guía', tags: ['typescript', 'react', 'guía'], views: 3100 },
  { id: 3, title: 'useMemo y useCallback del más allá',     tags: ['react', 'hooks', 'performance'],views: 2800 },
  { id: 4, title: 'CSS Modules vs Styled Components malditos', tags: ['css', 'estilos', 'react'],       views: 1900 },
  { id: 5, title: 'TanStack Query desde ultratumba',         tags: ['react', 'fetch', 'tutorial'],   views: 5100 },
  { id: 6, title: 'Sortilegios de testing con Vitest',        tags: ['testing', 'react', 'tutorial'], views: 2200 },
  { id: 7, title: 'Performance fantasma en React',           tags: ['react', 'performance', 'hooks'],views: 3600 },
  { id: 8, title: 'TypeScript strict mode en el panteón',    tags: ['typescript', 'guía'],            views: 1500 },
]

export default function MultiTagFilter() {
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set())
  const [sortByViews, setSortByViews] = useState(false)

  // Todos los tags únicos con sus conteos
  const tagCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    ARTICLES.forEach(a => a.tags.forEach(t => { counts[t] = (counts[t] ?? 0) + 1 }))
    return counts
  }, []) // ARTICLES es estático

  // Artículos que tienen TODOS los tags activos
  const filtered = useMemo(() => {
    if (activeTags.size === 0) return ARTICLES
    return ARTICLES.filter(a => [...activeTags].every(t => a.tags.includes(t)))
  }, [activeTags])

  // Ordenar — depende de filtered y sortByViews
  const sorted = useMemo(
    () => sortByViews
      ? [...filtered].sort((a, b) => b.views - a.views)
      : filtered,
    [filtered, sortByViews]
  )

  function toggleTag(tag: string) {
    setActiveTags(prev => {
      const next = new Set(prev)
      next.has(tag) ? next.delete(tag) : next.add(tag)
      return next
    })
  }

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 580, margin: '0 auto', padding: 24, backgroundColor: '#0b0f19', color: '#d1d5db', borderRadius: 10, border: '1px solid #374151' }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4, color: '#f3f4f6' }}>Papiro Espectral (MultiTagFilter)</h2>
      <p style={{ color: '#9ca3af', fontSize: 14, marginBottom: 20 }}>
        Runas múltiples con filtro AND espectral. Conteos memoizados en la cripta — calculados una sola vez.
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
        {Object.entries(tagCounts).map(([tag, count]) => {
          const active = activeTags.has(tag)
          return (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              style={{
                padding:      '4px 12px',
                borderRadius: 999,
                border:       '1px solid',
                borderColor:  active ? '#7c3aed' : '#374151',
                background:   active ? '#7c3aed' : '#131c2e',
                color:        active ? '#fff'    : '#d1d5db',
                fontSize:     13,
                cursor:       'pointer',
                fontWeight:   active ? 700 : 400,
              }}
            >
              {tag} <span style={{ opacity: 0.7 }}>({count})</span>
            </button>
          )
        })}
      </div>

      {/* Controles secundarios */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <span style={{ fontSize: 13, color: '#9ca3af' }}>
          {sorted.length} pergamino{sorted.length !== 1 ? 's' : ''}
          {activeTags.size > 0 && ` (invocado por runas: ${[...activeTags].join(', ')})`}
        </span>
        <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, cursor: 'pointer', color: '#9ca3af' }}>
          <input
            type="checkbox"
            checked={sortByViews}
            onChange={e => setSortByViews(e.target.checked)}
          />
          Canalizar por visitas espectrales
        </label>
      </div>

      {/* Artículos */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {sorted.map(a => (
          <div key={a.id} style={{
            padding:      '12px 16px',
            background:   '#131c2e',
            borderRadius: 10,
            border:       '1px solid #374151',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span style={{ fontWeight: 600, fontSize: 14, color: '#f3f4f6' }}>{a.title}</span>
              <span style={{ fontSize: 12, color: '#34d399', whiteSpace: 'nowrap', marginLeft: 12, fontWeight: 600 }}>
                {a.views.toLocaleString()} almas (vistas)
              </span>
            </div>
            <div style={{ display: 'flex', gap: 6, marginTop: 8, flexWrap: 'wrap' }}>
              {a.tags.map(t => (
                <span
                  key={t}
                  onClick={() => toggleTag(t)}
                  style={{
                    padding:      '2px 8px',
                    borderRadius: 999,
                    fontSize:     11,
                    background:   activeTags.has(t) ? '#5b21b6' : '#1f2937',
                    color:        activeTags.has(t) ? '#e9d5ff' : '#9ca3af',
                    cursor:       'pointer',
                    fontWeight:   activeTags.has(t) ? 700 : 400,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {activeTags.size > 0 && (
        <button
          onClick={() => setActiveTags(new Set())}
          style={{
            marginTop:    16,
            padding:      '6px 16px',
            borderRadius: 6,
            border:       '1px solid #4b5563',
            cursor:       'pointer',
            fontSize:     13,
            background:   '#1f2937',
            color:        '#f87171',
            fontWeight:   600,
          }}
        >
          Disipar sortilegios (limpiar filtros)
        </button>
      )}
    </div>
  )
}