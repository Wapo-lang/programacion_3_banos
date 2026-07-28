// src/components/antd/AntProgress.tsx

import { Card, Progress, Space, Typography } from 'antd'

const { Title, Text } = Typography

interface GoalProps {
  label: string
  current: number
  target: number
  color: string
}

const GOALS: GoalProps[] = [
  { label: 'Luz de las velas', current: 12, target: 20, color: '#d4b06a' },
  { label: 'Piedras colocadas', current: 48, target: 80, color: '#8fa97d' },
  { label: 'Recuerdos guardados', current: 132, target: 150, color: '#b5b5b5' },
]

export default function AntGoals() {
  return (
    <Card style={{ marginBottom: 24, background: '#201d17', border: '1px solid #6b614b' }}>
      <Title level={5} style={{ marginBottom: 16, color: '#f5efe6' }}>Objetivos de la noche</Title>
      <Space direction="vertical" style={{ width: '100%' }}>
        {GOALS.map(g => {
          const percent = Math.round((g.current / g.target) * 100)
          return (
            <div key={g.label}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                <Text style={{ fontSize: 13, color: '#f5efe6' }}>{g.label}</Text>
                <Text style={{ fontSize: 12, color: '#c8bfae' }}>
                  {g.current.toLocaleString()} / {g.target.toLocaleString()}
                </Text>
              </div>
              <Progress
                percent={percent}
                strokeColor={g.color}
                size="small"
                style={{ margin: 0 }}
              />
            </div>
          )
        })}
      </Space>
    </Card>
  )
}