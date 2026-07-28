// src/components/FruitList.tsx

interface Fruit {
  name: string
  emoji: string
  calories: number
  inSeason?: boolean
}

interface FruitListProps {
  fruits: Fruit[]
  title?: string
  inSeason?: boolean 
}

export default function FruitList({ fruits, title = 'Lápidas' }: FruitListProps) {
  if (fruits.length === 0) {
    return <p style={{ color: '#999' }}>No hay recuerdos en este sendero.</p>
  }
  const sorted = [...fruits].sort((a, b) => a.calories - b.calories)
  return (
    <div>
      <h3 style={{ marginBottom: 8 }}>{title}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {fruits.map((fruit, i) => (
          <li
            key={i}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: 'none',
            }}
          >
            <span>{fruit.emoji}{fruit.inSeason && '�'} {fruit.name}</span>
            {sorted && (
            <span style={{ color: '#888', fontSize: 13 }}>{fruit.calories} pasos</span>)}
          </li>
        ))}
      </ul>
    </div>
  )
}