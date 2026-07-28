// src/components/MemoizedList.tsx

import { useState, useCallback, memo } from 'react'

interface Task {
  id:        number
  text:      string
  completed: boolean
}

const INITIAL_TASKS: Task[] = [
  { id: 1, text: 'Ofrenda: Diseñar la cripta',     completed: false },
  { id: 2, text: 'Invocación de hooks espectrales', completed: true  },
  { id: 3, text: 'Escribir sortilegios de prueba',   completed: false },
  { id: 4, text: 'Auditar accesibilidad del panteón', completed: false },
  { id: 5, text: 'Ritual de deploy en producción',   completed: false },
]

// ─── Fila memoizada ──────────────────────────────────────────────────────
let rowRenderCount = 0

const TaskRow = memo(function TaskRow({
  task,
  onToggle,
  onDelete,
}: {
  task:     Task
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}) {
  rowRenderCount++
  const count = rowRenderCount

  return (
    <div style={{
      display:        'flex',
      alignItems:     'center',
      gap:            10,
      padding:        '10px 14px',
      background:     task.completed ? '#13221c' : '#131c2e',
      borderRadius:   8,
      border:         '1px solid',
      borderColor:    task.completed ? '#059669' : '#374151',
    }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        style={{ cursor: 'pointer', width: 16, height: 16 }}
      />
      <span style={{
        flex:              1,
        fontSize:          14,
        textDecoration:    task.completed ? 'line-through' : 'none',
        color:             task.completed ? '#6ee7b7' : '#f3f4f6',
      }}>
        {task.text}
      </span>
      <span style={{ fontSize: 11, color: '#9ca3af' }}>render #{count}</span>
      <button
        onClick={() => onDelete(task.id)}
        style={{
          padding:      '2px 8px',
          borderRadius: 4,
          border:       '1px solid #7f1d1d',
          background:   '#450a0a',
          color:        '#fca5a5',
          cursor:       'pointer',
          fontSize:     12,
        }}
      >
        ✕
      </button>
    </div>
  )
})

// ─── Padre ───────────────────────────────────────────────────────────────
export default function MemoizedList() {
  const [tasks,   setTasks]   = useState<Task[]>(INITIAL_TASKS)
  const [counter, setCounter] = useState(0)

  // useCallback: onToggle y onDelete tienen referencia estable
  // TaskRow no re-renderiza cuando solo cambia `counter`
  const handleToggle = useCallback((id: number) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }, []) // sin dependencias externas — setTasks es estable

  const handleDelete = useCallback((id: number) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }, [])

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 520, margin: '0 auto', padding: 24, backgroundColor: '#0b0f19', color: '#d1d5db', borderRadius: 10, border: '1px solid #374151' }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4, color: '#f3f4f6' }}>Cripta Memoizada (MemoizedList)</h2>
      <p style={{ color: '#9ca3af', fontSize: 14, marginBottom: 20 }}>
        <code>React.memo</code> + <code>useCallback</code> — las almas de las filas no re-renderizan por un conjuro de contador ajeno.
      </p>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20 }}>
        <button
          onClick={() => setCounter(c => c + 1)}
          style={{ padding: '6px 16px', borderRadius: 6, border: '1px solid #4b5563', backgroundColor: '#131c2e', color: '#f3f4f6', cursor: 'pointer', fontWeight: 500 }}
        >
          Canalizar contador ({counter})
        </button>
        <span style={{ fontSize: 13, color: '#9ca3af' }}>
          ← no debe re-renderizar las filas espectrales
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {tasks.map(task => (
          <TaskRow
            key={task.id}
            task={task}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <p style={{ marginTop: 16, fontSize: 12, color: '#9ca3af' }}>
        Render total de filas en el panteón: {rowRenderCount}
        {' '}(debería crecer solo al invocar toggle o purgar, no al canalizar el contador)
      </p>
    </div>
  )
}