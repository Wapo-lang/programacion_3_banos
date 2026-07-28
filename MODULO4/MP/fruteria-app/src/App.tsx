// src/App.tsx
import WelcomeBanner       from './components/WelcomeBanner'
import UserGreeting        from './components/UserGreeting'
import CurrentDateDisplay  from './components/CurrentDateDisplay'
import ColoredBox          from './components/ColoredBox'
import ConditionalGreeting from './components/ConditionalGreeting'
import FruitList           from './components/FruitList'
import PriceTag            from './components/PriceTag'
import StatusBadge         from './components/StatusBadge'
import MiniProfileCard     from './components/MiniProfileCard'
import SimpleInfoTable     from './components/SimpleInfoTable'
import SimpleInfoCars      from './components/SimpleInfoCars'
/*import ProductCard         from './components/ProductCard'
import ProductCatalogList  from './components/ProductCatalogList'
import UserProfileCard     from './components/UserProfileCard'*/


// ┌──────────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.          │
// │   1  WelcomeBanner       — banner estático sin props                    │
// │   2  UserGreeting        — props string + cálculo de iniciales          │
// │   3  CurrentDateDisplay  — fecha calculada al renderizar                │
// │   4  ColoredBox          — estilos dinámicos con props numéricas        │
// │   5  ConditionalGreeting — renderizado condicional + tipo unión         │
// │   6  FruitList           — lista tipada con .map()                      │
// │   7  PriceTag            — cálculos con props numéricas                 │
// │   8  StatusBadge         — Record para mapear tipos a estilos           │
// │   9  MiniProfileCard     — composición de componentes                   │
// │  10  SimpleInfoTable     — tabla con rows tipadas                       │
// │  11  ProductCard         — interfaz de props con opcionales y booleanas │
// │  12  ProductCatalogList  — lista con renderizado condicional de items   │
// │  13  UserProfileCard     — ejercicio: props complejas + rol             │
// └──────────────────────────────────────────────────────────────────────────┘
const PASO = 11

const fruits = [
  { name: 'Lápida antigua', emoji: '🪦', inSeason: true, calories: 42 },
  { name: 'Árbol del recuerdo', emoji: '🌳', calories: 18 },
  { name: 'Noche de luna', emoji: '🌙', calories: 27 },
  { name: 'Cruz de piedra', emoji: '✝️', calories: 33 },
  { name: 'Flor de la paz', emoji: '🌼', calories: 15 },
]

const catalog = [
  { id: 1, name: 'Teclado mecánico',  price: 89.99 },
  { id: 2, name: 'Monitor 27 pulgadas', price: 349.99 },
  { id: 3, name: 'Mouse inalámbrico', price: 29.99, outOfStock: true },
  { id: 4, name: 'Webcam HD',         price: 59.99 },
]

export default function App() {
  const content =
    PASO ===  1 ? <WelcomeBanner subtitle='Panteón de los Recuerdos'/> :
    PASO ===  2 ? <><UserGreeting name="Elena Torres" occupation="Guardiana del cementerio" /></> :
    PASO ===  3 ? <CurrentDateDisplay /> :
    PASO ===  4 ? (
      <div style={{ display: 'flex', gap: 12 }}>
        <ColoredBox color="#4b5563" label="Niebla" borderRadius={50}/>
        <ColoredBox color="#6b7280" label="Sombra" borderRadius={130} />
        <ColoredBox color="#8b5e3c" label="Tierra" borderRadius={40}  />
      </div>
    ) :
    PASO ===  5 ? <ConditionalGreeting isLoggedIn={true} userName="Tomás" timeOfDay="evening" /> :
    PASO ===  6 ? <FruitList fruits={fruits} title="Sendero de lápidas" /> :
    PASO ===  7 ? (
      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
        <PriceTag amount={50} currency="COP" />
        <PriceTag amount={50} currency="COP" discountPercent={10} />
      </div>
    ) :
    PASO ===  8 ? (
      <div style={{ display: 'flex', gap: 8 }}>
        <StatusBadge status="active" />
        <StatusBadge status="pending" label="En descanso" />
        <StatusBadge status="error" />
        <StatusBadge status="inactive" label="Silencio" />
      </div>
    ) :
    PASO ===  9 ? (
      <MiniProfileCard
        fullName="Elena Torres"
        role="Guardián nocturno"
        department="Panteón"
        status="inactive"
        joinedYear={2020}
      />
    ) :
    PASO === 10 ? (
      <SimpleInfoTable
        title="Registro del lugar"
        rows={[
          { label: 'Sector',  value: 'Norte' },
          { label: 'Hora',     value: '22:00' },
          { label: 'Estado',     value: 'Tranquilo', highlight: true },
        ]}
      />
    ):
    /*PASO === 11 ? (
      <SimpleInfoCars
        title="Resumen del pedido"
        rows={[
          { label: 'Marca',  value: 'Subaru' },
          { label: 'Modelo',   value: 'WRX' },
          { label: 'Año',     value: '2026'},
          { label: 'Precio',   value: '$60000.00'},
          { label: 'Envio',   value: '$25.00'},
          { label: 'Total',   value: '$60025.00', highlight: true },
        ]}
        
      />
    ) : */
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>
  return (
    <main style={{ maxWidth: 1260, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}