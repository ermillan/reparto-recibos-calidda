import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { AuthProvider } from "@/presentation/context/AuthContext"
import Login from "@/presentation/pages/Login"
import PrivateRoute from "@/presentation/routes/PrivateRoute"
import PublicRoute from "@/presentation/routes/PublicRoute"

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rutas Públicas */}
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Login />} />
            <Route path="/services" element={<h2>Services</h2>} />
            <Route path="/more" element={<h2>Mas</h2>} />
            <Route path="/login" element={<h2>Login PAge</h2>} />
          </Route>

          {/* Rutas Privadas*/}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<h2>dashboard</h2>} />
            <Route path="/dashboard/settings" element={<h2>settings</h2>} />
            <Route path="/dashboard/:id" element={<h3>dashboard con id</h3>} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
