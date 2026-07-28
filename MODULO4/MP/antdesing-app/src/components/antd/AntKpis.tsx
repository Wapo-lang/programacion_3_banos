// src/components/antd/AntKpis.tsx

import { Card, Col, Row, Statistic, Typography } from 'antd'
import {
  ArrowUpOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  PercentageOutlined,
} from '@ant-design/icons'

const { Title } = Typography

interface KpiData {
  title: string
  value: number
  suffix?: string
  prefix?: string
  trend: number
  icon: React.ReactNode
  color: string
}

const KPIS: KpiData[] = [
  { title: 'Lápidas', value: 128, trend: 3.2, icon: <ArrowUpOutlined />, color: '#d4b06a' },
  { title: 'Sombras', value: 42, trend: 1.4, icon: <ShoppingCartOutlined />, color: '#8fa97d' },
  { title: 'Recuerdos', value: 320, trend: 2.1, icon: <TeamOutlined />, color: '#b5b5b5' },
  { title: 'Vigilia', value: 7, suffix: 'n', trend: -0.3, icon: <PercentageOutlined />, color: '#9b8b6e' },
]

export default function AntKpis() {
  return (
    <div style={{ marginBottom: 24 }}>
      <Title level={5} style={{ marginBottom: 12, color: '#f5efe6' }}>Resúmen nocturno</Title>
      <Row gutter={[16, 16]}>
        {KPIS.map(kpi => (
          <Col key={kpi.title} xs={24} sm={12} md={6}>
            <Card style={{ background: '#201d17', border: '1px solid #6b614b', color: '#f5efe6' }}>
              <Statistic
                title={<span style={{ color: '#f5efe6' }}>{kpi.title}</span>}
                value={kpi.value}
                suffix={kpi.suffix}
                prefix={kpi.prefix}
                precision={kpi.suffix === 'n' ? 0 : 0}
                valueStyle={{ color: kpi.color }}
              />
              <div style={{ marginTop: 8, fontSize: 12, color: kpi.trend > 0 ? '#8fa97d' : '#c7a88a' }}>
                {kpi.trend > 0 ? '↑' : '↓'} {Math.abs(kpi.trend)}% vs la noche anterior
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}