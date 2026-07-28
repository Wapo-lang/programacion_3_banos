// src/AppHome.tsx

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from 'antd'
import AntNavbar from './components/antd/AntNavbar'
import AntFooter from './components/antd/AntFooter'
import HomeDashboard from './pages/HomeDashboard'
import AboutPage from './pages/AboutPage'

const { Content } = Layout

export default function AppHome() {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0d0d0d 0%, #1b1b1b 100%)', color: '#f5efe6' }}>
        <AntNavbar />
        <Content style={{ background: 'transparent', padding: '8px 0 0' }}>
          <Routes>
            <Route path="/" element={<HomeDashboard />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Content>
        <AntFooter />
      </Layout>
    </BrowserRouter>
  )
}