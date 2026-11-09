import { Route, Routes } from 'react-router-dom'
import Footer from './component/footer'
import Navigation from './component/navigation'
import InventoryPage from './pages/InventoryPage'
import StoresPage from './pages/StoresPage'
import FaqPage from './pages/FaqPage'
import './App.css'

function Layout({ children }) {
  return (
    <div className="app-shell">
      <Navigation />
      <main className="page-content">{children}</main>
      <Footer />
    </div>
  )
}

function App() {
  return <Layout><Routes><Route path="/" element={<InventoryPage />} /><Route path="/tiendas" element={<StoresPage />} /><Route path="/preguntas-frecuentes" element={<FaqPage />} /></Routes></Layout>
}

export default App
