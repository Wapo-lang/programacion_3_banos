// src/pages/AboutPage.tsx

import { Card, Typography, List } from 'antd'

const { Title } = Typography

const STACK = [
  'React 19 + TypeScript',
  'Ant Design v6',
  'React Router v7',
  'Vite 8',
]

export default function AboutPage() {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '24px 16px', color: '#f5efe6' }}>
      <Title level={3} style={{ marginBottom: 20, color: '#f5efe6' }}>Sobre este panteón</Title>
      <Card style={{ background: '#201d17', border: '1px solid #6b614b', color: '#f5efe6' }}>
        <List
          dataSource={STACK}
          renderItem={item => <List.Item style={{ color: '#f5efe6', borderBottom: '1px solid #4f4b38' }}>{item}</List.Item>}
        />
      </Card>
    </div>
  )
}