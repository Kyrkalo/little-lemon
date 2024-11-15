import logo from '../../src/logo.svg';
import CustomButton from './CustomButton';

export default function CustomHeader() {
  const menuItems = [
    { name: 'Home', href: '/', active: true },
    { name: 'About', href: '/about', active: false },
    { name: 'Menu', href: '/menu', active: false },
    { name: 'Reservations', href: '/booking', active: false },
    { name: 'Order Online', href: '/orderonline', active: false },
    { name: 'Login', href: '/login', active: false }
  ];

  return (
    <>
      <header>
        <img src={logo} className="logo" alt="logo" />
        <nav>
          <ul className="menu-list">
            {menuItems.map((item, index) => (
              <li key={item.name}>
                <CustomButton
                  className={item.active ? 'active' : ''}
                  to={item.href}
                  text={item.name}>

                </CustomButton>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
