import styles from './Header.module.css';
import igniteLogo from '../images/Ignite-logo.svg';

// styles.header | header é a mesma classe que eu coloco no modules.css
export function Header() {
  return (
    <header className={styles.header}> 
      <img src={igniteLogo} alt='Logotipo do Ignite'/>
    </header>
  );
}