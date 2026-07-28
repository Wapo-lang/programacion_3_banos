// src/components/antd/AntFooter.tsx

import { Layout, Typography } from 'antd'

const { Footer } = Layout
const { Text } = Typography

export default function AntFooter() {
  return (
    <Footer style={{ textAlign: 'center', background: '#171717', color: '#d8c8a8', borderTop: '1px solid #4f4b38' }}>
      <Text style={{ color: '#d8c8a8' }}>
        Cementerio de Luna © {new Date().getFullYear()} — Paz eterna
      </Text>
    </Footer>
  )
}