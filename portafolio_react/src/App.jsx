import styles from './App.module.css'
import { Navbar } from './components/Navbar/navbar'
import { Me } from './components/Me/Me'

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Me/>
    </div>
  )
}

export default App
