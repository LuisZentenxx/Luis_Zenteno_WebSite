import styles from './App.module.css'
import { Navbar } from './components/Navbar/navbar'
import { Me } from './components/Me/Me'
import { About } from './components/About/About'
import { Experiencia } from './components/Experiencia/Experiencia'
import { Proyectos } from './components/Proyectos/Proyectos'
import { Contacto } from './components/Contacto/Contacto'

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Me/>
      <About/>
      <Experiencia/>
      <Proyectos/>
      <Contacto/>
    </div>
  )
}

export default App
