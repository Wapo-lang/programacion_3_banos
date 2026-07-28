// src/components/antd/AntNavbar.tsx

import { NavLink } from 'react-router-dom'
import { Layout, Menu } from 'antd'

const { Header } = Layout

export default function AntNavbar() {
  const items = [
    { key: 'home', label: <NavLink to="/" style={{ color: '#f5efe6' }}>Inicio</NavLink> },
    { key: 'about', label: <NavLink to="/about" style={{ color: '#f5efe6' }}>Historia</NavLink> },
  ]

  return (
    <Header style={{ display: 'flex', alignItems: 'center', gap: 16, background: '#171717', borderBottom: '1px solid #4f4b38' }}>
      <span style={{ color: '#f5efe6', fontWeight: 900, fontSize: 16, whiteSpace: 'nowrap' }}>
        Cementerio de Luna
      </span>
      <Menu
        theme="dark"
        mode="horizontal"
        items={items}
        style={{ flex: 1, background: 'transparent', borderBottom: 'none' }}
        defaultSelectedKeys={['home']}
      />
    </Header>
  )
}