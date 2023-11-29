import css from './components/css/NavBarSimple.module.css';
import NavBarSimple from "./components/Navbar";

function App() {
  return (
    <div className={css.NavBar}>
      <NavBarSimple />
    </div>
  );
}

export default App;