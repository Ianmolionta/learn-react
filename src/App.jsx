import { Route, Routes } from 'react-router-dom'
import Test from './Pages/test.jsx'
import Home from './Pages/home.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} >
      </Route>
      <Route path="/test" element={<Test></Test>} />
    </Routes>
  )
}

export default App
