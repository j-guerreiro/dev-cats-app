import './App.scss'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react'
import Header from './Header'
import Employees from './Employees'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Employees />
      <Footer />
    </>
  )
}

export default App;
