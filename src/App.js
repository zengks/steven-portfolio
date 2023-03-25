import styles from './styles/app.module.css'

import Navbar from './components/navbar';
import About from './components/about';

function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <About />
    </div>
  );
}

export default App;
