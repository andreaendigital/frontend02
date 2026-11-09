import { Route, Routes } from 'react-router-dom'
import Footer from './component/footer'
import Navigation from './component/navigation'
import InventoryPage from './pages/InventoryPage'
import StoresPage from './pages/StoresPage'
import FaqPage from './pages/FaqPage'
import AddArticlePage from './pages/AddArticlePage'
import ArticlesPage from './pages/ArticlesPage'
import ArticleDetailPage from './pages/ArticleDetailPage'
import CartPage from './pages/CartPage'

function Layout({ children }) {
  return (
    <div className="mx-auto min-h-screen max-w-[1180px] bg-white shadow-[0_0_40px_rgba(32,54,91,0.06)]">
      <Navigation />
      <Footer />
      <main className="px-5 pb-10 pt-8 sm:px-12 sm:pb-12 sm:pt-11">{children}</main>
    </div>
  )
}

function App() {
  return <Layout><Routes><Route path="/" element={<InventoryPage />} /><Route path="/tiendas" element={<StoresPage />} /><Route path="/preguntas-frecuentes" element={<FaqPage />} /><Route path="/articulos/nuevo" element={<AddArticlePage />} /><Route path="/articulos" element={<ArticlesPage />} /><Route path="/articulos/:id" element={<ArticleDetailPage />} /><Route path="/carrito" element={<CartPage />} /></Routes></Layout>
}

export default App
