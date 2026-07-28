// src/pages/HomeDashboard.tsx

import { Typography } from 'antd'
import AntKpis from '../components/antd/AntKpis'
import AntGoals from '../components/antd/AntProgress'
import AntSalesTable from '../components/antd/AntSalesTable'

const { Title, Text } = Typography

export default function HomeDashboard() {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '24px 16px', color: '#f5efe6' }}>
      <Title level={3} style={{ marginBottom: 4, color: '#f5efe6' }}>Panteón del silencio</Title>
      <Text style={{ display: 'block', marginBottom: 24, color: '#c8bfae' }}>
        Lápidas, sombras y recuerdos en una noche tranquila.
      </Text>
      <AntKpis />
      <AntGoals />
      <AntSalesTable />
    </div>
  )
}