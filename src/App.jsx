import './App.css';
import useLocalStorage from './useLocalStorage';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme); 
    console.log(theme);
  }

  const esTheme = theme === 'light' ? 'claro' : 'oscuro';
  return (
    <div className='container' data-theme={theme}>
      <p>Haga clic en el botón para cambiar el modo de visualización</p>
      <button onClick={toggleTheme}>Activar modo {esTheme}</button>
    </div>
  );
}

export default App;
