import styles from './App.module.css'
import { Navbar } from './components/Navbar/navbar'
import { Me } from './components/Me/Me'
import { About } from './components/About/About'

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Me/>
      <About/>
    </div>
  )
}

export default App
