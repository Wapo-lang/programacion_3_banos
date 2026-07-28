// src/components/StyledComponentsDemo.tsx

import styled from 'styled-components'

// Props transient con prefijo $ — no pasan al DOM en v6
interface BtnProps {
  $variant?: 'primary' | 'outline'
}

const Card = styled.div`
  border:        1px solid #374151;
  background:    #131c2e;
  border-radius: 10px;
  padding:       24px;
  max-width:     480px;
  margin:        0 auto;
  color:         #d1d5db;
`

const Title = styled.h3`
  margin:      0 0 8px 0;
  color:       #34d399;
  font-weight: 800;
  font-size:   18px;
`

const Btn = styled.button<BtnProps>`
  padding:       8px 16px;
  border-radius: 8px;
  cursor:        pointer;
  font-weight:   600;
  border:        1px solid #7c3aed;
  background:    ${p => p.$variant === 'outline' ? 'transparent' : '#7c3aed'};
  color:         ${p => p.$variant === 'outline' ? '#a78bfa' : 'white'};
  transition:    filter 0.15s;

  &:hover {
    filter: brightness(1.15);
  }
`

const BigTitle = styled.h1`
  margin:      0 0 8px 0;
  color:       #f59e0b;
  font-weight: 600;
  font-size:   22px;
`

const Parrafo = styled.p`
  margin:      0 0 12px 0;
  color:       #f3f4f6;
  font-weight: 500;
  font-size:   14px;
`

export default function StyledComponentsDemo() {
  return (
    <Card>
      <Title>Styled-components v6 en la Cripta</Title>
      <BigTitle>React con TypeScript</BigTitle>
      <br />
      <Parrafo>En este apartado vamos a explorar React con TypeScript bajo las sombras del panteón.</Parrafo>
      <p style={{ margin: '0 0 16px', color: '#9ca3af', fontSize: 14, lineHeight: 1.6 }}>
        CSS-in-JS con scope automático. Props transient con prefijo <code>$</code>
        en v6 para no contaminar el DOM de la cripta.
      </p>
      <div style={{ display: 'flex', gap: 8 }}>
        <Btn>Primary</Btn>
        <Btn $variant="outline">Outline</Btn>
      </div>
    </Card>
  )
}