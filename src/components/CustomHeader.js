import logo from '../../src/logo.svg';

export default function CustomHeader() {
  const menuItems = [
    { name: 'Home', href: '/', active: true },
    { name: 'About', href: '/about', active: false },
    { name: 'Menu', href: '/menu', active: false },
    { name: 'Reservations', href: '/bookings', active: false },
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
              <li key={index}>
                <a className={item.active ? 'active' : ''} href={item.href} aria-current={item.active ? 'page' : undefined}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
