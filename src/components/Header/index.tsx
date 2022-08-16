import igniteLogo from '../../assets/logo.svg';

import styles from './styles.module.scss';


// Header renderizando apenas a logo com a formatacao da classname "styles.header"
export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo do Ignite Player" />
    </header>
  );
}