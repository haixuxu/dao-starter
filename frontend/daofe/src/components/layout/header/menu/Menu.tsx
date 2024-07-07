import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

function Menu() {
  const calcClass = ({ isActive }: any) => (isActive ? styles.active : '');
  return (
    <ul className={styles.menu}>
      <li>
        <NavLink to="/" className={calcClass}>
          DAO
        </NavLink>
      </li>
      <li>
        <NavLink to="/card_list" className={calcClass}>
          templates
        </NavLink>
      </li>
    </ul>
  );
}

export { Menu };
