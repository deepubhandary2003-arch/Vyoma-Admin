import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { Toaster } from 'sonner'
import { AuthProvider } from './hooks/useAuth'
import { useEffect } from 'react'

function App() {

  // 🔥 Global theme load (applies to ALL pages)
  useEffect(() => {
    const theme = localStorage.getItem("theme")

    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
        <Toaster position="top-right" />
      </Router>
    </AuthProvider>
  )
}

export default App